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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-4">
            <Stethoscope className="w-8 h-8 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl text-center">Nykiel Policlínica</CardTitle>
          <CardDescription className="text-center">Sistema de Gestão e Agendamento</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={role} onValueChange={(v) => setRole(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="patient" className="text-xs sm:text-sm">
                <Users className="w-4 h-4 mr-1" />
                Paciente
              </TabsTrigger>
              <TabsTrigger value="professional" className="text-xs sm:text-sm">
                <Stethoscope className="w-4 h-4 mr-1" />
                Prof.
              </TabsTrigger>
              <TabsTrigger value="admin" className="text-xs sm:text-sm">
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
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/")}
              >
                Voltar para Home
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-600 mb-2">
                <strong>Demo:</strong>
              </p>
              <p className="text-xs text-gray-600">
                Email: demo@nykiel.com<br />
                Senha: 123456
              </p>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
