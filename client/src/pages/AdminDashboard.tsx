import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Stethoscope,
  Calendar,
  DollarSign,
  LogOut,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_email");
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total de Pacientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">142</div>
              <p className="text-xs text-green-600 mt-2">+12 este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Profissionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-xs text-gray-600 mt-2">Ativos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Agendamentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">287</div>
              <p className="text-xs text-green-600 mt-2">+45 este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Faturamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R$ 28.5k</div>
              <p className="text-xs text-green-600 mt-2">+8% vs mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">
              <BarChart3 className="w-4 h-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="professionals">
              <Stethoscope className="w-4 h-4 mr-2" />
              Profissionais
            </TabsTrigger>
            <TabsTrigger value="patients">
              <Users className="w-4 h-4 mr-2" />
              Pacientes
            </TabsTrigger>
            <TabsTrigger value="financial">
              <DollarSign className="w-4 h-4 mr-2" />
              Financeiro
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Agendamentos por Especialidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { specialty: "Odontologia", count: 95, percentage: 33 },
                      { specialty: "Medicina Geral", count: 72, percentage: 25 },
                      { specialty: "Fisioterapia", count: 54, percentage: 19 },
                      { specialty: "Psicologia", count: 42, percentage: 15 },
                      { specialty: "Nutrição", count: 24, percentage: 8 },
                    ].map((item) => (
                      <div key={item.specialty}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.specialty}</span>
                          <span className="text-sm text-gray-600">{item.count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Taxa de Comparecimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Comparecimentos</span>
                        <span className="text-sm font-bold">245 (85%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-600 h-3 rounded-full"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Faltas</span>
                        <span className="text-sm font-bold">28 (10%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-600 h-3 rounded-full"
                          style={{ width: "10%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Cancelamentos</span>
                        <span className="text-sm font-bold">14 (5%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-600 h-3 rounded-full"
                          style={{ width: "5%" }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Professionals Tab */}
          <TabsContent value="professionals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Profissionais</CardTitle>
                <CardDescription>Lista de profissionais cadastrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Dra. Vitória Nykiel", specialty: "Odontologia", patients: 42 },
                    { name: "Dr. João Silva", specialty: "Medicina Geral", patients: 38 },
                    { name: "Dra. Cristiane Andrade", specialty: "Odontologia", patients: 35 },
                    { name: "Nutricionista Ana", specialty: "Nutrição", patients: 28 },
                  ].map((prof, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{prof.name}</p>
                        <p className="text-sm text-gray-600">{prof.specialty}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{prof.patients}</p>
                        <p className="text-sm text-gray-600">pacientes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Pacientes</CardTitle>
                <CardDescription>Últimos pacientes cadastrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "João Silva", email: "joao@email.com", registered: "2026-05-20" },
                    { name: "Maria Santos", email: "maria@email.com", registered: "2026-05-18" },
                    { name: "Pedro Costa", email: "pedro@email.com", registered: "2026-05-15" },
                  ].map((patient, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-600">{patient.email}</p>
                      </div>
                      <p className="text-sm text-gray-600">{patient.registered}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Faturamento por Especialidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { specialty: "Odontologia", value: "R$ 12.5k", percentage: 44 },
                      { specialty: "Medicina Geral", value: "R$ 8.2k", percentage: 29 },
                      { specialty: "Fisioterapia", value: "R$ 4.8k", percentage: 17 },
                      { specialty: "Psicologia", value: "R$ 2.0k", percentage: 7 },
                      { specialty: "Nutrição", value: "R$ 1.0k", percentage: 3 },
                    ].map((item) => (
                      <div key={item.specialty}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.specialty}</span>
                          <span className="text-sm font-bold">{item.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comissões Profissionais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Dra. Vitória Nykiel", amount: "R$ 3.75k", status: "Pendente" },
                      { name: "Dr. João Silva", amount: "R$ 2.46k", status: "Pago" },
                      { name: "Dra. Cristiane", amount: "R$ 2.10k", status: "Pago" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.amount}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            item.status === "Pago"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
