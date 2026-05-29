import {
  mysqlTable,
  varchar,
  int,
  text,
  datetime,
  decimal,
  enum as mysqlEnum,
  boolean,
  date,
  time,
  json,
  index,
  timestamp,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

// ==================== USERS ====================
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  cpf: varchar("cpf", { length: 11 }).unique(),
  phone: varchar("phone", { length: 20 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["patient", "professional", "admin", "secretary"]).default("patient").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ==================== PACIENTES ====================
export const patients = mysqlTable(
  "patients",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    dateOfBirth: date("date_of_birth"),
    gender: mysqlEnum("gender", ["M", "F", "O"]),
    address: text("address"),
    city: varchar("city", { length: 100 }),
    state: varchar("state", { length: 2 }),
    zipCode: varchar("zip_code", { length: 10 }),
    emergencyContact: varchar("emergency_contact", { length: 255 }),
    emergencyPhone: varchar("emergency_phone", { length: 20 }),
    insuranceProvider: varchar("insurance_provider", { length: 100 }),
    insuranceNumber: varchar("insurance_number", { length: 50 }),
    medicalHistory: text("medical_history"),
    allergies: text("allergies"),
    medications: text("medications"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("patient_user_id_idx").on(table.userId),
  })
);

export type Patient = typeof patients.$inferSelect;
export type InsertPatient = typeof patients.$inferInsert;

// ==================== PROFISSIONAIS ====================
export const professionals = mysqlTable(
  "professionals",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    specialty: mysqlEnum("specialty", [
      "dentist",
      "doctor",
      "nutritionist",
      "physiotherapist",
      "psychologist",
      "aesthetician",
      "other",
    ]).notNull(),
    specialization: varchar("specialization", { length: 255 }),
    licenseNumber: varchar("license_number", { length: 50 }).notNull(),
    licenseState: varchar("license_state", { length: 2 }),
    bio: text("bio"),
    services: json("services").$type<string[]>(),
    consultationFee: decimal("consultation_fee", { precision: 10, scale: 2 }),
    workingDays: json("working_days").$type<number[]>(),
    workingHours: json("working_hours").$type<{ start: string; end: string }>(),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("professional_user_id_idx").on(table.userId),
    specialtyIdx: index("professional_specialty_idx").on(table.specialty),
  })
);

export type Professional = typeof professionals.$inferSelect;
export type InsertProfessional = typeof professionals.$inferInsert;

// ==================== AGENDAMENTOS ====================
export const appointments = mysqlTable(
  "appointments",
  {
    id: int("id").autoincrement().primaryKey(),
    patientId: int("patient_id").notNull(),
    professionalId: int("professional_id").notNull(),
    serviceType: varchar("service_type", { length: 100 }).notNull(),
    serviceName: varchar("service_name", { length: 255 }).notNull(),
    appointmentDate: date("appointment_date").notNull(),
    appointmentTime: time("appointment_time").notNull(),
    duration: int("duration").default(30),
    status: mysqlEnum("status", [
      "scheduled",
      "confirmed",
      "in_progress",
      "completed",
      "cancelled",
      "no_show",
    ]).default("scheduled"),
    notes: text("notes"),
    reminderSent: boolean("reminder_sent").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    patientIdIdx: index("appointment_patient_id_idx").on(table.patientId),
    professionalIdIdx: index("appointment_professional_id_idx").on(table.professionalId),
    appointmentDateIdx: index("appointment_date_idx").on(table.appointmentDate),
    statusIdx: index("appointment_status_idx").on(table.status),
  })
);

export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = typeof appointments.$inferInsert;

// ==================== PRONTUÁRIOS ====================
export const medicalRecords = mysqlTable(
  "medical_records",
  {
    id: int("id").autoincrement().primaryKey(),
    patientId: int("patient_id").notNull(),
    appointmentId: int("appointment_id"),
    professionalId: int("professional_id").notNull(),
    recordDate: timestamp("record_date").defaultNow().notNull(),
    diagnosis: text("diagnosis"),
    treatment: text("treatment"),
    prescription: text("prescription"),
    notes: text("notes"),
    attachments: json("attachments").$type<
      Array<{ name: string; url: string; type: string }>
    >(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    patientIdIdx: index("medical_record_patient_id_idx").on(table.patientId),
    professionalIdIdx: index("medical_record_professional_id_idx").on(table.professionalId),
    appointmentIdIdx: index("medical_record_appointment_id_idx").on(table.appointmentId),
  })
);

export type MedicalRecord = typeof medicalRecords.$inferSelect;
export type InsertMedicalRecord = typeof medicalRecords.$inferInsert;

// ==================== EXAMES ====================
export const exams = mysqlTable(
  "exams",
  {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    category: mysqlEnum("category", [
      "blood",
      "imaging",
      "ultrasound",
      "pathology",
      "other",
    ]).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  }
);

export type Exam = typeof exams.$inferSelect;
export type InsertExam = typeof exams.$inferInsert;

// ==================== AGENDAMENTOS DE EXAMES ====================
export const examAppointments = mysqlTable(
  "exam_appointments",
  {
    id: int("id").autoincrement().primaryKey(),
    patientId: int("patient_id").notNull(),
    examId: int("exam_id").notNull(),
    appointmentDate: date("appointment_date").notNull(),
    appointmentTime: time("appointment_time").notNull(),
    status: mysqlEnum("status", [
      "scheduled",
      "completed",
      "cancelled",
    ]).default("scheduled"),
    result: text("result"),
    resultFile: text("result_file"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    patientIdIdx: index("exam_appointment_patient_id_idx").on(table.patientId),
    examIdIdx: index("exam_appointment_exam_id_idx").on(table.examId),
  })
);

export type ExamAppointment = typeof examAppointments.$inferSelect;
export type InsertExamAppointment = typeof examAppointments.$inferInsert;

// ==================== FINANCEIRO ====================
export const payments = mysqlTable(
  "payments",
  {
    id: int("id").autoincrement().primaryKey(),
    appointmentId: int("appointment_id"),
    examAppointmentId: int("exam_appointment_id"),
    patientId: int("patient_id").notNull(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    paymentMethod: mysqlEnum("payment_method", [
      "cash",
      "credit_card",
      "debit_card",
      "pix",
      "insurance",
    ]).notNull(),
    status: mysqlEnum("status", [
      "pending",
      "paid",
      "cancelled",
      "refunded",
    ]).default("pending"),
    dueDate: date("due_date"),
    paidDate: date("paid_date"),
    notes: text("notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    patientIdIdx: index("payment_patient_id_idx").on(table.patientId),
    appointmentIdIdx: index("payment_appointment_id_idx").on(table.appointmentId),
    statusIdx: index("payment_status_idx").on(table.status),
  })
);

export type Payment = typeof payments.$inferSelect;
export type InsertPayment = typeof payments.$inferInsert;

// ==================== COMISSÕES ====================
export const commissions = mysqlTable(
  "commissions",
  {
    id: int("id").autoincrement().primaryKey(),
    professionalId: int("professional_id").notNull(),
    appointmentId: int("appointment_id").notNull(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    percentage: decimal("percentage", { precision: 5, scale: 2 }),
    status: mysqlEnum("status", ["pending", "paid"]).default("pending"),
    paidDate: date("paid_date"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    professionalIdIdx: index("commission_professional_id_idx").on(table.professionalId),
  })
);

export type Commission = typeof commissions.$inferSelect;
export type InsertCommission = typeof commissions.$inferInsert;

// ==================== NOTIFICAÇÕES ====================
export const notifications = mysqlTable(
  "notifications",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("user_id").notNull(),
    type: mysqlEnum("type", [
      "appointment_reminder",
      "appointment_confirmation",
      "appointment_cancelled",
      "payment_reminder",
      "message",
    ]).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    message: text("message").notNull(),
    relatedId: int("related_id"),
    isRead: boolean("is_read").default(false),
    sentVia: json("sent_via").$type<("email" | "whatsapp" | "push")[]>(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("notification_user_id_idx").on(table.userId),
  })
);

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;

// ==================== DISPONIBILIDADES ====================
export const availabilitySlots = mysqlTable(
  "availability_slots",
  {
    id: int("id").autoincrement().primaryKey(),
    professionalId: int("professional_id").notNull(),
    date: date("date").notNull(),
    startTime: time("start_time").notNull(),
    endTime: time("end_time").notNull(),
    isAvailable: boolean("is_available").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    professionalIdIdx: index("availability_professional_id_idx").on(table.professionalId),
    dateIdx: index("availability_date_idx").on(table.date),
  })
);

export type AvailabilitySlot = typeof availabilitySlots.$inferSelect;
export type InsertAvailabilitySlot = typeof availabilitySlots.$inferInsert;

// ==================== RELATIONS ====================
export const usersRelations = relations(users, ({ one, many }) => ({
  patient: one(patients, {
    fields: [users.id],
    references: [patients.userId],
  }),
  professional: one(professionals, {
    fields: [users.id],
    references: [professionals.userId],
  }),
  notifications: many(notifications),
}));

export const patientsRelations = relations(patients, ({ one, many }) => ({
  user: one(users, {
    fields: [patients.userId],
    references: [users.id],
  }),
  appointments: many(appointments),
  medicalRecords: many(medicalRecords),
  examAppointments: many(examAppointments),
  payments: many(payments),
}));

export const professionalsRelations = relations(professionals, ({ one, many }) => ({
  user: one(users, {
    fields: [professionals.userId],
    references: [users.id],
  }),
  appointments: many(appointments),
  medicalRecords: many(medicalRecords),
  commissions: many(commissions),
  availabilitySlots: many(availabilitySlots),
}));

export const appointmentsRelations = relations(appointments, ({ one, many }) => ({
  patient: one(patients, {
    fields: [appointments.patientId],
    references: [patients.id],
  }),
  professional: one(professionals, {
    fields: [appointments.professionalId],
    references: [professionals.id],
  }),
  medicalRecords: many(medicalRecords),
  payments: many(payments),
  commissions: many(commissions),
}));

export const medicalRecordsRelations = relations(medicalRecords, ({ one }) => ({
  patient: one(patients, {
    fields: [medicalRecords.patientId],
    references: [patients.id],
  }),
  professional: one(professionals, {
    fields: [medicalRecords.professionalId],
    references: [professionals.id],
  }),
  appointment: one(appointments, {
    fields: [medicalRecords.appointmentId],
    references: [appointments.id],
  }),
}));

export const examsRelations = relations(exams, ({ many }) => ({
  examAppointments: many(examAppointments),
}));

export const examAppointmentsRelations = relations(examAppointments, ({ one, many }) => ({
  patient: one(patients, {
    fields: [examAppointments.patientId],
    references: [patients.id],
  }),
  exam: one(exams, {
    fields: [examAppointments.examId],
    references: [exams.id],
  }),
  payments: many(payments),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  patient: one(patients, {
    fields: [payments.patientId],
    references: [patients.id],
  }),
  appointment: one(appointments, {
    fields: [payments.appointmentId],
    references: [appointments.id],
  }),
  examAppointment: one(examAppointments, {
    fields: [payments.examAppointmentId],
    references: [examAppointments.id],
  }),
}));

export const commissionsRelations = relations(commissions, ({ one }) => ({
  professional: one(professionals, {
    fields: [commissions.professionalId],
    references: [professionals.id],
  }),
  appointment: one(appointments, {
    fields: [commissions.appointmentId],
    references: [appointments.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}));

export const availabilitySlotsRelations = relations(availabilitySlots, ({ one }) => ({
  professional: one(professionals, {
    fields: [availabilitySlots.professionalId],
    references: [professionals.id],
  }),
}));
