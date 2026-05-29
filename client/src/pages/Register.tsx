import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, Mail, Lock, User, Phone, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Register() {
  const [, setLocation] = useLocation();
  const [userType, setUserType] = useState<"patient" | "professional">("patient");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simular registro
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Cadastro realizado com sucesso!");
      setLocation("/login");
    } catch (error) {
      toast.error("Erro ao realizar cadastro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setLocation("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <Stethoscope className="w-8 h-8 text-emerald-400" />
            <span className="font-bold text-xl text-white">Nykiel</span>
          </button>
          <Button variant="ghost" onClick={() => setLocation("/login")} className="text-slate-300">
            Já tem conta? Entrar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="bg-slate-800 border-slate-700 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white">Criar Conta</CardTitle>
              <CardDescription className="text-slate-400">
                Escolha o tipo de cadastro que deseja fazer
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "patient" | "professional")} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                  <TabsTrigger value="patient" className="data-[state=active]:bg-emerald-600">
                    Paciente
                  </TabsTrigger>
                  <TabsTrigger value="professional" className="data-[state=active]:bg-emerald-600">
                    Profissional
                  </TabsTrigger>
                </TabsList>

                {/* Patient Registration */}
                <TabsContent value="patient" className="mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">Nome Completo</Label>
                      <Input
                        id="name"
                        placeholder="João Silva"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="text-slate-300">CPF</Label>
                      <Input
                        id="cpf"
                        placeholder="000.000.000-00"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(75) 98238-0086"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-slate-300">Senha</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-slate-300">Confirmar Senha</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2 rounded-lg"
                    >
                      {loading ? "Cadastrando..." : "Criar Conta"}
                    </Button>
                  </form>
                </TabsContent>

                {/* Professional Registration */}
                <TabsContent value="professional" className="mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="prof-name" className="text-slate-300">Nome Completo</Label>
                      <Input
                        id="prof-name"
                        placeholder="Dra. Maria Silva"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-cpf" className="text-slate-300">CPF</Label>
                      <Input
                        id="prof-cpf"
                        placeholder="000.000.000-00"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-crm" className="text-slate-300">CRO/CRM</Label>
                      <Input
                        id="prof-crm"
                        placeholder="12345/BA"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-specialty" className="text-slate-300">Especialidade</Label>
                      <select
                        id="prof-specialty"
                        className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                        required
                      >
                        <option value="">Selecione uma especialidade</option>
                        <option value="odontologia">Odontologia</option>
                        <option value="medicina">Medicina Geral</option>
                        <option value="nutricao">Nutrição</option>
                        <option value="fisioterapia">Fisioterapia</option>
                        <option value="psicologia">Psicologia</option>
                        <option value="estetica">Estética</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-email" className="text-slate-300">Email</Label>
                      <Input
                        id="prof-email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-phone" className="text-slate-300">Telefone</Label>
                      <Input
                        id="prof-phone"
                        placeholder="(75) 98238-0086"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-password" className="text-slate-300">Senha</Label>
                      <Input
                        id="prof-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2 rounded-lg"
                    >
                      {loading ? "Cadastrando..." : "Criar Conta"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-slate-400">
                <p>
                  Ao se cadastrar, você concorda com nossos{" "}
                  <a href="#" className="text-emerald-400 hover:text-emerald-300">
                    Termos de Serviço
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <button
            onClick={() => setLocation("/")}
            className="mt-6 w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </button>
        </div>
      </div>
    </div>
  );
}
