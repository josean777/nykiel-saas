import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Stethoscope, Users, Lock } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [role, setRole] = useState<"patient" | "professional" | "admin">("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Por favor, preencha todos os campos");
        return;
      }

      setTimeout(() => {
        localStorage.setItem("user_role", role);
        localStorage.setItem("user_email", email);
        
        if (role === "patient") {
          setLocation("/dashboard/patient");
        } else if (role === "professional") {
          setLocation("/dashboard/professional");
        } else {
          setLocation("/dashboard/admin");
        }
      }, 500);
    } catch (err) {
      setError("Erro ao fazer login. Tente novamente.");
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
            <span className="text-sm text-gray-600">Não tem conta?</span>
            <Button 
              variant="outline" 
              onClick={() => setLocation("/register")} 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm h-9"
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
            <CardHeader className="space-y-2 pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#D4A574" }}>
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-gray-900">Entrar</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Acesse sua conta Nykiel
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs value={role} onValueChange={(v) => setRole(v as any)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100">
                  <TabsTrigger 
                    value="patient" 
                    className="text-xs sm:text-sm data-[state=active]:bg-white"
                    style={{ 
                      color: role === "patient" ? "#D4A574" : "#666"
                    }}
                  >
                    <Users className="w-4 h-4 mr-1" />
                    Paciente
                  </TabsTrigger>
                  <TabsTrigger 
                    value="professional"
                    className="text-xs sm:text-sm data-[state=active]:bg-white"
                    style={{ 
                      color: role === "professional" ? "#D4A574" : "#666"
                    }}
                  >
                    <Stethoscope className="w-4 h-4 mr-1" />
                    Prof.
                  </TabsTrigger>
                  <TabsTrigger 
                    value="admin"
                    className="text-xs sm:text-sm data-[state=active]:bg-white"
                    style={{ 
                      color: role === "admin" ? "#D4A574" : "#666"
                    }}
                  >
                    <Lock className="w-4 h-4 mr-1" />
                    Admin
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">Senha</label>
                      <button
                        type="button"
                        onClick={() => setLocation("/forgot-password")}
                        className="text-xs hover:underline"
                        style={{ color: "#D4A574" }}
                      >
                        Esqueceu?
                      </button>
                    </div>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white font-semibold py-2 h-10"
                    style={{ backgroundColor: "#D4A574" }}
                  >
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-600">
                Não tem conta?{" "}
                <button 
                  onClick={() => setLocation("/register")}
                  className="font-semibold hover:underline"
                  style={{ color: "#D4A574" }}
                >
                  Cadastre-se aqui
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
