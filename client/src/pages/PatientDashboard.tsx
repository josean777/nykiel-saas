import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, CreditCard, LogOut, Plus, Clock, Download, X, Edit, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function PatientDashboard() {
  const [, setLocation] = useLocation();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      professional: "Dra. Vitória Nykiel",
      service: "Limpeza e Clareamento",
      date: "2026-06-15",
      time: "14:00",
      status: "confirmed",
    },
    {
      id: 2,
      professional: "Dr. João Silva",
      service: "Consulta Geral",
      date: "2026-06-20",
      time: "10:00",
      status: "scheduled",
    },
  ]);

  const [medicalRecords] = useState([
    {
      id: 1,
      date: "2026-05-10",
      professional: "Dra. Vitória Nykiel",
      diagnosis: "Placa bacteriana",
      treatment: "Limpeza profissional",
      notes: "Paciente apresentou boa resposta ao tratamento",
    },
    {
      id: 2,
      date: "2026-04-20",
      professional: "Dr. João Silva",
      diagnosis: "Hipertensão leve",
      treatment: "Repouso e medicação",
      notes: "Acompanhamento mensal recomendado",
    },
  ]);

  const [payments] = useState([
    {
      id: 1,
      date: "2026-05-10",
      service: "Limpeza e Clareamento",
      amount: "R$ 350,00",
      status: "paid",
    },
    {
      id: 2,
      date: "2026-06-15",
      service: "Consulta Geral",
      amount: "R$ 150,00",
      status: "pending",
    },
  ]);

  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_email");
    setLocation("/");
  };

  const handleScheduleAppointment = () => {
    setLocation("/booking");
  };

  const handleReschedule = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowRescheduleModal(true);
  };

  const handleCancel = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };

  const confirmReschedule = () => {
    toast.success("Agendamento remarcado com sucesso!");
    setShowRescheduleModal(false);
    setAppointments(appointments.map(a => 
      a.id === selectedAppointment.id ? { ...a, status: "rescheduled" } : a
    ));
  };

  const confirmCancel = () => {
    toast.success("Agendamento cancelado com sucesso!");
    setShowCancelModal(false);
    setAppointments(appointments.filter(a => a.id !== selectedAppointment.id));
  };

  const handleDownloadPDF = (recordId: number) => {
    toast.success("PDF do prontuário baixado com sucesso!");
    // Simular download
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8,Prontuário Eletrônico");
    element.setAttribute("download", `prontuario_${recordId}.pdf`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Meu Painel</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-none">
          <CardHeader>
            <CardTitle className="text-white">Bem-vindo ao Nykiel!</CardTitle>
            <CardDescription className="text-indigo-100">
              Gerencie seus agendamentos e prontuário eletrônico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={handleScheduleAppointment}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agendar Nova Consulta
            </Button>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="appointments">
              <Calendar className="w-4 h-4 mr-2" />
              Agendamentos
            </TabsTrigger>
            <TabsTrigger value="records">
              <FileText className="w-4 h-4 mr-2" />
              Prontuário
            </TabsTrigger>
            <TabsTrigger value="payments">
              <CreditCard className="w-4 h-4 mr-2" />
              Pagamentos
            </TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4">
            {appointments.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Nenhum agendamento no momento</p>
                  <Button className="mt-4" onClick={handleScheduleAppointment}>
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            ) : (
              appointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{appointment.professional}</CardTitle>
                        <CardDescription>{appointment.service}</CardDescription>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        appointment.status === "confirmed" ? "bg-green-100 text-green-800" :
                        appointment.status === "scheduled" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {appointment.status === "confirmed" ? "Confirmado" :
                         appointment.status === "scheduled" ? "Agendado" : "Remarcado"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(appointment.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleReschedule(appointment)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Remarcar
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => handleCancel(appointment)}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="records" className="space-y-4">
            {medicalRecords.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Nenhum registro médico no momento</p>
                </CardContent>
              </Card>
            ) : (
              medicalRecords.map((record) => (
                <Card key={record.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{record.professional}</CardTitle>
                        <CardDescription>{new Date(record.date).toLocaleDateString("pt-BR")}</CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadPDF(record.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Diagnóstico</p>
                      <p className="text-gray-900">{record.diagnosis}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Tratamento</p>
                      <p className="text-gray-900">{record.treatment}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Observações</p>
                      <p className="text-gray-900">{record.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-4">
            {payments.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Nenhum pagamento registrado</p>
                </CardContent>
              </Card>
            ) : (
              payments.map((payment) => (
                <Card key={payment.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{payment.service}</p>
                        <p className="text-sm text-gray-600">{new Date(payment.date).toLocaleDateString("pt-BR")}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{payment.amount}</p>
                        <span className={`text-sm font-semibold ${
                          payment.status === "paid" ? "text-green-600" : "text-yellow-600"
                        }`}>
                          {payment.status === "paid" ? "Pago" : "Pendente"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Reschedule Modal */}
      {showRescheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Remarcar Agendamento</CardTitle>
              <CardDescription>Escolha uma nova data e hora</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nova Data</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Novo Horário</label>
                <input type="time" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowRescheduleModal(false)}>
                  Cancelar
                </Button>
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700" onClick={confirmReschedule}>
                  Confirmar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <CardTitle>Cancelar Agendamento</CardTitle>
              </div>
              <CardDescription>Tem certeza que deseja cancelar?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Esta ação não pode ser desfeita. O agendamento será removido do sistema.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowCancelModal(false)}>
                  Manter Agendamento
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={confirmCancel}>
                  Cancelar Agendamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
