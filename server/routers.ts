import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import * as db from "./db";
import { appointments, patients, professionals, users } from "../drizzle/schema";

const t = initTRPC.context<typeof import("./_core/context").createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx });
});

export const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return next({ ctx });
});

// ==================== AUTH ====================
export const authRouter = router({
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),

  logout: protectedProcedure.mutation(({ ctx }) => {
    ctx.res.clearCookie("session");
    return { success: true };
  }),
});

// ==================== PATIENTS ====================
export const patientRouter = router({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "patient") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    return db.getPatientByUserId(ctx.user.id);
  }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        dateOfBirth: z.string().optional(),
        gender: z.enum(["M", "F", "O"]).optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zipCode: z.string().optional(),
        emergencyContact: z.string().optional(),
        emergencyPhone: z.string().optional(),
        insuranceProvider: z.string().optional(),
        insuranceNumber: z.string().optional(),
        allergies: z.string().optional(),
        medications: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "patient") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      const patient = await db.getPatientByUserId(ctx.user.id);
      if (!patient) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return db.updatePatient(patient.id, input);
    }),

  getAppointments: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "patient") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    const patient = await db.getPatientByUserId(ctx.user.id);
    if (!patient) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return db.getAppointmentsByPatient(patient.id);
  }),

  getMedicalRecords: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "patient") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    const patient = await db.getPatientByUserId(ctx.user.id);
    if (!patient) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return db.getMedicalRecordsByPatient(patient.id);
  }),

  getExamAppointments: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "patient") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    const patient = await db.getPatientByUserId(ctx.user.id);
    if (!patient) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return db.getExamAppointmentsByPatient(patient.id);
  }),

  getPayments: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "patient") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    return db.getPaymentsByPatient(ctx.user.id);
  }),
});

// ==================== PROFESSIONALS ====================
export const professionalRouter = router({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "professional") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    return db.getProfessionalByUserId(ctx.user.id);
  }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        specialization: z.string().optional(),
        bio: z.string().optional(),
        services: z.array(z.string()).optional(),
        consultationFee: z.string().optional(),
        workingDays: z.array(z.number()).optional(),
        workingHours: z.object({ start: z.string(), end: z.string() }).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "professional") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      const professional = await db.getProfessionalByUserId(ctx.user.id);
      if (!professional) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return db.updateProfessional(professional.id, input);
    }),

  getAppointments: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "professional") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    const professional = await db.getProfessionalByUserId(ctx.user.id);
    if (!professional) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return db.getAppointmentsByProfessional(professional.id);
  }),

  getCommissions: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "professional") {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    const professional = await db.getProfessionalByUserId(ctx.user.id);
    if (!professional) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    return db.getCommissionsByProfessional(professional.id);
  }),
});

// ==================== APPOINTMENTS ====================
export const appointmentRouter = router({
  list: publicProcedure.query(async () => {
    // This would need proper filtering in production
    return [];
  }),

  getByDate: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      return db.getAppointmentsByDate(input.date);
    }),

  create: protectedProcedure
    .input(
      z.object({
        professionalId: z.number(),
        serviceType: z.string(),
        serviceName: z.string(),
        appointmentDate: z.string(),
        appointmentTime: z.string(),
        duration: z.number().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "patient") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      const patient = await db.getPatientByUserId(ctx.user.id);
      if (!patient) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return db.createAppointment({
        patientId: patient.id,
        ...input,
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["scheduled", "confirmed", "in_progress", "completed", "cancelled", "no_show"]).optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin" && ctx.user.role !== "professional") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return db.updateAppointment(input.id, {
        status: input.status,
        notes: input.notes,
      });
    }),

  cancel: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return db.updateAppointment(input.id, { status: "cancelled" });
    }),
});

// ==================== MEDICAL RECORDS ====================
export const medicalRecordRouter = router({
  getByPatient: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role === "patient") {
      const patient = await db.getPatientByUserId(ctx.user.id);
      if (!patient) throw new TRPCError({ code: "NOT_FOUND" });
      return db.getMedicalRecordsByPatient(patient.id);
    } else if (ctx.user.role === "professional") {
      // Professionals see their own records
      return [];
    }
    throw new TRPCError({ code: "FORBIDDEN" });
  }),

  create: protectedProcedure
    .input(
      z.object({
        patientId: z.number(),
        appointmentId: z.number().optional(),
        diagnosis: z.string().optional(),
        treatment: z.string().optional(),
        prescription: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "professional") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      const professional = await db.getProfessionalByUserId(ctx.user.id);
      if (!professional) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return db.createMedicalRecord({
        ...input,
        professionalId: professional.id,
      });
    }),
});

// ==================== EXAMS ====================
export const examRouter = router({
  list: publicProcedure.query(async () => {
    return db.getAllExams();
  }),

  create: adminProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        category: z.enum(["blood", "imaging", "ultrasound", "pathology", "other"]),
        price: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return db.createExam(input);
    }),
});

// ==================== NOTIFICATIONS ====================
export const notificationRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return db.getNotificationsByUser(ctx.user.id);
  }),

  markAsRead: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return db.markNotificationAsRead(input.id);
    }),
});

// ==================== ADMIN ====================
export const adminRouter = router({
  getProfessionals: adminProcedure.query(async () => {
    // This would need proper implementation
    return [];
  }),

  getPatients: adminProcedure.query(async () => {
    // This would need proper implementation
    return [];
  }),

  getAppointments: adminProcedure.query(async () => {
    // This would need proper implementation
    return [];
  }),

  getFinancialReport: adminProcedure.query(async () => {
    // This would need proper implementation
    return {};
  }),
});

// ==================== MAIN ROUTER ====================
export const appRouter = router({
  auth: authRouter,
  patient: patientRouter,
  professional: professionalRouter,
  appointment: appointmentRouter,
  medicalRecord: medicalRecordRouter,
  exam: examRouter,
  notification: notificationRouter,
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
