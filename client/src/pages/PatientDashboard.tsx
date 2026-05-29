import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, CreditCard, LogOut, Plus, Clock } from "lucide-react";

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
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_email");
    setLocation("/");
  };

  const handleScheduleAppointment = () => {
    setLocation("/booking");
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
            <div className="grid gap-4">
              {appointments.length > 0 ? (
                appointments.map((apt) => (
                  <Card key={apt.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{apt.service}</CardTitle>
                          <CardDescription>{apt.professional}</CardDescription>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            apt.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {apt.status === "confirmed" ? "Confirmado" : "Agendado"}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{apt.date}</span>
                        <Clock className="w-4 h-4" />
                        <span>{apt.time}</span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          Remarcar
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-gray-600 mb-4">Você não tem agendamentos</p>
                    <Button onClick={handleScheduleAppointment}>Agendar Agora</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="records" className="space-y-4">
            <div className="grid gap-4">
              {medicalRecords.length > 0 ? (
                medicalRecords.map((record) => (
                  <Card key={record.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{record.diagnosis}</CardTitle>
                      <CardDescription>{record.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Profissional</p>
                        <p className="text-gray-600">{record.professional}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Tratamento</p>
                        <p className="text-gray-600">{record.treatment}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Baixar PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-gray-600">Nenhum prontuário disponível</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Pagamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center py-8">Nenhum pagamento registrado</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
