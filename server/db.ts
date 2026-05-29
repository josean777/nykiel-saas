import { db } from "./_core/db";
import {
  users,
  patients,
  professionals,
  appointments,
  medicalRecords,
  exams,
  examAppointments,
  payments,
  commissions,
  notifications,
  availabilitySlots,
} from "../drizzle/schema";
import { eq, and, gte, lte, desc } from "drizzle-orm";

// ==================== USERS ====================
export async function getUserByOpenId(openId: string) {
  return db.query.users.findFirst({
    where: eq(users.openId, openId),
  });
}

export async function getUserById(id: number) {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
}

export async function createUser(data: typeof users.$inferInsert) {
  const result = await db.insert(users).values(data);
  return result;
}

// ==================== PATIENTS ====================
export async function getPatientByUserId(userId: number) {
  return db.query.patients.findFirst({
    where: eq(patients.userId, userId),
    with: {
      appointments: true,
      medicalRecords: true,
    },
  });
}

export async function createPatient(data: typeof patients.$inferInsert) {
  return db.insert(patients).values(data);
}

export async function updatePatient(id: number, data: Partial<typeof patients.$inferInsert>) {
  return db.update(patients).set(data).where(eq(patients.id, id));
}

// ==================== PROFESSIONALS ====================
export async function getProfessionalByUserId(userId: number) {
  return db.query.professionals.findFirst({
    where: eq(professionals.userId, userId),
  });
}

export async function getProfessionalById(id: number) {
  return db.query.professionals.findFirst({
    where: eq(professionals.id, id),
  });
}

export async function getProfessionalsBySpecialty(specialty: string) {
  return db.query.professionals.findMany({
    where: and(
      eq(professionals.specialty, specialty as any),
      eq(professionals.isActive, true)
    ),
  });
}

export async function createProfessional(data: typeof professionals.$inferInsert) {
  return db.insert(professionals).values(data);
}

export async function updateProfessional(id: number, data: Partial<typeof professionals.$inferInsert>) {
  return db.update(professionals).set(data).where(eq(professionals.id, id));
}

// ==================== APPOINTMENTS ====================
export async function getAppointmentsByPatient(patientId: number) {
  return db.query.appointments.findMany({
    where: eq(appointments.patientId, patientId),
    with: {
      professional: true,
      medicalRecords: true,
    },
    orderBy: desc(appointments.appointmentDate),
  });
}

export async function getAppointmentsByProfessional(professionalId: number) {
  return db.query.appointments.findMany({
    where: eq(appointments.professionalId, professionalId),
    with: {
      patient: true,
    },
    orderBy: desc(appointments.appointmentDate),
  });
}

export async function getAppointmentsByDate(date: string) {
  return db.query.appointments.findMany({
    where: eq(appointments.appointmentDate, date as any),
    with: {
      patient: true,
      professional: true,
    },
  });
}

export async function createAppointment(data: typeof appointments.$inferInsert) {
  return db.insert(appointments).values(data);
}

export async function updateAppointment(id: number, data: Partial<typeof appointments.$inferInsert>) {
  return db.update(appointments).set(data).where(eq(appointments.id, id));
}

export async function getAppointmentById(id: number) {
  return db.query.appointments.findFirst({
    where: eq(appointments.id, id),
    with: {
      patient: true,
      professional: true,
      medicalRecords: true,
      payments: true,
    },
  });
}

// ==================== MEDICAL RECORDS ====================
export async function getMedicalRecordsByPatient(patientId: number) {
  return db.query.medicalRecords.findMany({
    where: eq(medicalRecords.patientId, patientId),
    with: {
      professional: true,
      appointment: true,
    },
    orderBy: desc(medicalRecords.recordDate),
  });
}

export async function createMedicalRecord(data: typeof medicalRecords.$inferInsert) {
  return db.insert(medicalRecords).values(data);
}

export async function updateMedicalRecord(id: number, data: Partial<typeof medicalRecords.$inferInsert>) {
  return db.update(medicalRecords).set(data).where(eq(medicalRecords.id, id));
}

// ==================== EXAMS ====================
export async function getAllExams() {
  return db.query.exams.findMany({
    where: eq(exams.isActive, true),
  });
}

export async function createExam(data: typeof exams.$inferInsert) {
  return db.insert(exams).values(data);
}

// ==================== EXAM APPOINTMENTS ====================
export async function getExamAppointmentsByPatient(patientId: number) {
  return db.query.examAppointments.findMany({
    where: eq(examAppointments.patientId, patientId),
    with: {
      exam: true,
    },
    orderBy: desc(examAppointments.appointmentDate),
  });
}

export async function createExamAppointment(data: typeof examAppointments.$inferInsert) {
  return db.insert(examAppointments).values(data);
}

export async function updateExamAppointment(id: number, data: Partial<typeof examAppointments.$inferInsert>) {
  return db.update(examAppointments).set(data).where(eq(examAppointments.id, id));
}

// ==================== PAYMENTS ====================
export async function getPaymentsByPatient(patientId: number) {
  return db.query.payments.findMany({
    where: eq(payments.patientId, patientId),
    orderBy: desc(payments.createdAt),
  });
}

export async function createPayment(data: typeof payments.$inferInsert) {
  return db.insert(payments).values(data);
}

export async function updatePayment(id: number, data: Partial<typeof payments.$inferInsert>) {
  return db.update(payments).set(data).where(eq(payments.id, id));
}

// ==================== COMMISSIONS ====================
export async function getCommissionsByProfessional(professionalId: number) {
  return db.query.commissions.findMany({
    where: eq(commissions.professionalId, professionalId),
    orderBy: desc(commissions.createdAt),
  });
}

export async function createCommission(data: typeof commissions.$inferInsert) {
  return db.insert(commissions).values(data);
}

// ==================== NOTIFICATIONS ====================
export async function getNotificationsByUser(userId: number) {
  return db.query.notifications.findMany({
    where: eq(notifications.userId, userId),
    orderBy: desc(notifications.createdAt),
  });
}

export async function createNotification(data: typeof notifications.$inferInsert) {
  return db.insert(notifications).values(data);
}

export async function markNotificationAsRead(id: number) {
  return db.update(notifications).set({ isRead: true }).where(eq(notifications.id, id));
}

// ==================== AVAILABILITY SLOTS ====================
export async function getAvailabilitySlots(professionalId: number, date: string) {
  return db.query.availabilitySlots.findMany({
    where: and(
      eq(availabilitySlots.professionalId, professionalId),
      eq(availabilitySlots.date, date as any),
      eq(availabilitySlots.isAvailable, true)
    ),
  });
}

export async function createAvailabilitySlot(data: typeof availabilitySlots.$inferInsert) {
  return db.insert(availabilitySlots).values(data);
}

export async function updateAvailabilitySlot(id: number, data: Partial<typeof availabilitySlots.$inferInsert>) {
  return db.update(availabilitySlots).set(data).where(eq(availabilitySlots.id, id));
}
