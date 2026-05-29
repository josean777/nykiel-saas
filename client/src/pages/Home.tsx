import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Smile,
  Apple,
  Dumbbell,
  Brain,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const specialties = [
    {
      icon: Smile,
      title: "Odontologia",
      description: "Limpeza, clareamento, implantes, harmonização e muito mais",
    },
    {
      icon: Stethoscope,
      title: "Medicina Geral",
      description: "Consultas e acompanhamento com profissionais experientes",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Planejamento nutricional personalizado",
    },
    {
      icon: Dumbbell,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões",
    },
    {
      icon: Brain,
      title: "Psicologia",
      description: "Atendimento psicológico e bem-estar mental",
    },
    {
      icon: Sparkles,
      title: "Estética",
      description: "Procedimentos estéticos avançados",
    },
  ];

  const benefits = [
    "Agendamento online 24/7",
    "Prontuário eletrônico seguro",
    "Lembretes automáticos",
    "Múltiplos profissionais especializados",
    "Atendimento humanizado",
    "Localização privilegiada",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">Nykiel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#especialidades" className="text-gray-600 hover:text-gray-900">
              Especialidades
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-gray-900">
              Sobre
            </a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900">
              Contato
            </a>
            <Button onClick={() => setLocation("/login")}>Entrar</Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={() => setLocation("/login")} size="sm">
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cuidado Completo em Um Só Lugar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nykiel Policlínica oferece atendimento multiprofissional com prevenção, acolhimento e qualidade.
            Cuidamos de você em todas as fases da vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setLocation("/booking")}>
              Agendar Consulta <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Nossas Especialidades</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Equipe multidisciplinar pronta para atender suas necessidades de saúde
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, idx) => {
              const Icon = specialty.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle>{specialty.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{specialty.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Que Escolher Nykiel?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" onClick={() => setLocation("/booking")}>
                Comece Agora
              </Button>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg h-96 flex items-center justify-center">
              <Users className="w-32 h-32 text-indigo-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">Localização</p>
              <p>Entre Rios, Bahia</p>
            </div>
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">Telefone</p>
              <p>(75) 98238-0086</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <p className="font-semibold mb-2">Horário</p>
              <p>Seg-Sex: 8h às 18h</p>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open("https://wa.me/message/6VQQSZGALX4HP1")}
          >
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 Nykiel Policlínica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
