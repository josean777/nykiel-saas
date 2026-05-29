import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!email) {
        toast.error("Por favor, insira seu email");
        return;
      }

      // Simular envio de email
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Email de recuperação enviado!");
      setSubmitted(true);
    } catch (error) {
      toast.error("Erro ao enviar email de recuperação");
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
          <Button 
            variant="outline" 
            onClick={() => setLocation("/login")} 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm h-9 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
            <CardHeader className="space-y-2 pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E8E8D0" }}>
                  <Mail className="w-6 h-6" style={{ color: "#D4A574" }} />
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900 text-center">Recuperar Senha</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                {submitted 
                  ? "Verifique seu email para redefinir sua senha"
                  : "Insira seu email para receber um link de recuperação"
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700 font-medium text-sm">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white font-semibold py-2 h-10"
                    style={{ backgroundColor: "#D4A574" }}
                  >
                    {loading ? "Enviando..." : "Enviar Link de Recuperação"}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    Lembrou sua senha?{" "}
                    <button 
                      onClick={() => setLocation("/login")}
                      className="font-semibold hover:underline"
                      style={{ color: "#D4A574" }}
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8E8D0" }}>
                      <CheckCircle2 className="w-8 h-8" style={{ color: "#D4A574" }} />
                    </div>
                  </div>
                  <p className="text-center text-gray-700">
                    Um email foi enviado para <strong>{email}</strong> com instruções para redefinir sua senha.
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    Verifique sua caixa de entrada e siga o link fornecido.
                  </p>
                  <Button
                    onClick={() => setLocation("/login")}
                    className="w-full text-white font-semibold py-2 h-10"
                    style={{ backgroundColor: "#D4A574" }}
                  >
                    Voltar para Login
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
