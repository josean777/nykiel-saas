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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    crm: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (!formData.name || !formData.email || !formData.password) {
        toast.error("Por favor, preencha todos os campos obrigatórios");
        return;
      }

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
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5DC" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b" style={{ borderColor: "#E8E8D0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setLocation("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#D4A574" }}>
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">Nykiel</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Já tem conta?</span>
            <Button 
              variant="outline" 
              onClick={() => setLocation("/login")} 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm h-9"
            >
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
            <CardHeader className="space-y-2 pb-4">
              <CardTitle className="text-2xl text-gray-900">Criar Conta</CardTitle>
              <CardDescription className="text-gray-600">
                Escolha seu tipo de cadastro
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={userType} onValueChange={(value) => setUserType(value as "patient" | "professional")} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
                  <TabsTrigger 
                    value="patient" 
                    className="text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    style={{ 
                      backgroundColor: userType === "patient" ? "white" : "transparent",
                      color: userType === "patient" ? "#D4A574" : "#666"
                    }}
                  >
                    Paciente
                  </TabsTrigger>
                  <TabsTrigger 
                    value="professional"
                    className="text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    style={{ 
                      backgroundColor: userType === "professional" ? "white" : "transparent",
                      color: userType === "professional" ? "#D4A574" : "#666"
                    }}
                  >
                    Profissional
                  </TabsTrigger>
                </TabsList>

                {/* Paciente Form */}
                <TabsContent value="patient" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(75) 98238-0086"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 font-medium">
                        Senha
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full text-white font-semibold py-2 h-10"
                      style={{ backgroundColor: "#D4A574" }}
                    >
                      {loading ? "Criando conta..." : "Criar Conta"}
                    </Button>
                  </form>
                </TabsContent>

                {/* Profissional Form */}
                <TabsContent value="professional" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="prof-name" className="text-gray-700 font-medium">
                        Nome Completo
                      </Label>
                      <Input
                        id="prof-name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="crm" className="text-gray-700 font-medium">
                        CRM/CRO
                      </Label>
                      <Input
                        id="crm"
                        name="crm"
                        placeholder="Seu CRM ou CRO"
                        value={formData.crm}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-email" className="text-gray-700 font-medium">
                        Email
                      </Label>
                      <Input
                        id="prof-email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-phone" className="text-gray-700 font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="prof-phone"
                        name="phone"
                        placeholder="(75) 98238-0086"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prof-password" className="text-gray-700 font-medium">
                        Senha
                      </Label>
                      <Input
                        id="prof-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full text-white font-semibold py-2 h-10"
                      style={{ backgroundColor: "#D4A574" }}
                    >
                      {loading ? "Criando conta..." : "Criar Conta"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-600">
                Ao se cadastrar, você concorda com nossos{" "}
                <a href="#" className="text-amber-600 hover:underline">
                  Termos de Serviço
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
