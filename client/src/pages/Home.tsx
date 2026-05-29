import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Smile,
  Activity,
  Apple,
  Dumbbell,
  Brain,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const specialties = [
    {
      icon: Smile,
      title: "Odontologia",
      description: "Limpeza, clareamento, implantes e harmonização",
    },
    {
      icon: Activity,
      title: "Medicina Geral",
      description: "Consultas e acompanhamento profissional",
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
      description: "Atendimento psicológico e bem-estar",
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
    "Profissionais especializados",
    "Atendimento humanizado",
    "Localização privilegiada",
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5DC" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b" style={{ borderColor: "#E8E8D0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#D4A574" }}>
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-gray-900">Nykiel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#especialidades" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Especialidades
            </a>
            <button onClick={() => setLocation("/team")} className="text-sm text-gray-700 hover:text-gray-900 transition">
              Equipe
            </button>
            <a href="#contato" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => setLocation("/register")} 
              className="hidden sm:inline-flex border-gray-300 text-gray-700 hover:bg-gray-50 text-sm h-9 px-6"
            >
              Cadastro
            </Button>
            <Button 
              onClick={() => setLocation("/login")} 
              className="text-white text-sm h-9 px-6 font-medium"
              style={{ backgroundColor: "#D4A574" }}
            >
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Saúde Integrada, Cuidado Completo
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Nykiel Policlínica oferece atendimento multiprofissional com excelência, prevenção e acolhimento em todas as fases da vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setLocation("/booking")}
                  className="text-white font-semibold px-8 py-3 rounded-lg h-auto"
                  style={{ backgroundColor: "#D4A574" }}
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg h-auto"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl p-12 shadow-lg border" style={{ borderColor: "#E8E8D0" }}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: "#E8E8D0" }}>
                      <CheckCircle2 className="w-6 h-6" style={{ color: "#D4A574" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Profissionais Qualificados</h3>
                      <p className="text-sm text-gray-600 mt-1">Experiência de 15+ anos em atendimento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: "#E8E8D0" }}>
                      <CheckCircle2 className="w-6 h-6" style={{ color: "#D4A574" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Tecnologia Moderna</h3>
                      <p className="text-sm text-gray-600 mt-1">Equipamentos e sistemas de ponta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: "#E8E8D0" }}>
                      <CheckCircle2 className="w-6 h-6" style={{ color: "#D4A574" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Atendimento Humanizado</h3>
                      <p className="text-sm text-gray-600 mt-1">Cuidado com empatia e dedicação</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossas Especialidades
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Equipe multidisciplinar pronta para atender suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, idx) => {
              const Icon = specialty.icon;
              return (
                <Card 
                  key={idx} 
                  className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all rounded-xl"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#E8E8D0" }}>
                      <Icon className="w-6 h-6" style={{ color: "#D4A574" }} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                    <p className="text-gray-600 text-sm">{specialty.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Por Que Escolher Nykiel?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#D4A574" }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="text-white font-semibold px-8 py-3 rounded-lg h-auto"
                onClick={() => setLocation("/booking")}
                style={{ backgroundColor: "#D4A574" }}
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl p-12 shadow-lg border" style={{ borderColor: "#E8E8D0" }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#E8E8D0" }}>
                    <Stethoscope className="w-10 h-10" style={{ color: "#D4A574" }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Excelência em Saúde</h3>
                  <p className="text-gray-600 mb-6">
                    Profissionais dedicados ao seu bem-estar com atendimento de qualidade
                  </p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D4A574" }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para atender você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MapPin, title: "Localização", content: "Entre Rios, Bahia" },
              { icon: Phone, title: "Telefone", content: "(75) 98238-0086" },
              { icon: Clock, title: "Horário", content: "Seg-Sex: 8h às 18h" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-white border border-gray-200 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E8E8D0" }}>
                      <Icon className="w-6 h-6" style={{ color: "#D4A574" }} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-white font-semibold px-10 py-3 rounded-lg h-auto"
              onClick={() => window.open("https://wa.me/message/6VQQSZGALX4HP1")}
              style={{ backgroundColor: "#D4A574" }}
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t" style={{ borderColor: "#3F3F3F" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#D4A574" }}>
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-white">Nykiel</span>
              </div>
              <p className="text-sm text-gray-500">Saúde integrada, cuidado completo</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">SERVIÇOS</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#especialidades" className="text-gray-400 hover:text-gray-300 transition">Especialidades</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-gray-300 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">LEGAL</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Termos</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">REDES SOCIAIS</p>
              <a href="https://wa.me/message/6VQQSZGALX4HP1" className="inline-flex w-9 h-9 bg-gray-800 rounded-lg items-center justify-center text-gray-400 hover:text-white transition" style={{ backgroundColor: "#D4A574" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.227l-.356.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 001.51 5.394c.93 1.357 2.165 2.386 3.612 3.01 1.487.625 3.078.766 4.666.348 1.588-.419 2.977-1.379 3.99-2.364 1.013-.985 1.68-2.19 1.842-3.516.162-1.326-.023-2.697-.72-3.976-.697-1.279-1.768-2.374-3.06-3.106a9.864 9.864 0 00-3.606-.867z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Nykiel Policlínica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
