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
  Shield,
  Zap,
  Award,
  Star,
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const specialties = [
    {
      icon: Smile,
      title: "Odontologia",
      description: "Limpeza, clareamento, implantes, harmonização e muito mais",
      image: "🦷",
    },
    {
      icon: Stethoscope,
      title: "Medicina Geral",
      description: "Consultas e acompanhamento com profissionais experientes",
      image: "⚕️",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Planejamento nutricional personalizado",
      image: "🥗",
    },
    {
      icon: Dumbbell,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões",
      image: "💪",
    },
    {
      icon: Brain,
      title: "Psicologia",
      description: "Atendimento psicológico e bem-estar mental",
      image: "🧠",
    },
    {
      icon: Sparkles,
      title: "Estética",
      description: "Procedimentos estéticos avançados",
      image: "✨",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Agendamento online 24/7", highlight: true },
    { icon: Zap, text: "Prontuário eletrônico seguro", highlight: true },
    { icon: CheckCircle, text: "Lembretes automáticos", highlight: false },
    { icon: Users, text: "Múltiplos profissionais especializados", highlight: false },
    { icon: Award, text: "Atendimento humanizado", highlight: true },
    { icon: MapPin, text: "Localização privilegiada", highlight: false },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5DC" }}>
      {/* Header Premium */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm" style={{ borderColor: "#E8E8D0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: "#D4A574" }}>
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900">Nykiel</span>
              <p className="text-xs text-gray-500">Policlínica</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#especialidades" className="text-gray-700 hover:text-gray-900 transition font-medium text-sm">
              Especialidades
            </a>
            <button onClick={() => setLocation("/team")} className="text-gray-700 hover:text-gray-900 transition font-medium text-sm">
              Equipe
            </button>
            <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition font-medium text-sm">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900 transition font-medium text-sm">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => setLocation("/register")} 
              className="hidden sm:flex border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-sm"
            >
              Cadastro
            </Button>
            <Button 
              onClick={() => setLocation("/login")} 
              className="text-white font-semibold text-sm px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: "#D4A574" }}
            >
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#D4A574" }}></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8E8D0" }}>
              <p className="text-sm font-semibold" style={{ color: "#8B7355" }}>✨ Saúde Integrada</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cuidado Completo em Um Só Lugar
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
              Nykiel Policlínica oferece atendimento multiprofissional com prevenção, acolhimento e qualidade. 
              Cuidamos de você em todas as fases da vida com excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setLocation("/booking")}
                className="text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-base"
                style={{ backgroundColor: "#D4A574" }}
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-white font-bold px-8 py-3 rounded-lg text-base"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#D4A574" }}>
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900">Mais de 500+ Pacientes Satisfeitos</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{ backgroundColor: "#D4A574" }}></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border" style={{ borderColor: "#E8E8D0" }}>
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍⚕️</div>
                <p className="text-2xl font-bold text-gray-900 mb-2">Profissionais Qualificados</p>
                <p className="text-gray-600">Atendimento com excelência e dedicação</p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#D4A574" }} />
                    <span className="text-gray-700 font-medium">Experiência de 15+ anos</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#D4A574" }} />
                    <span className="text-gray-700 font-medium">Equipamentos modernos</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#D4A574" }} />
                    <span className="text-gray-700 font-medium">Atendimento humanizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Premium */}
      <section id="especialidades" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8E8D0" }}>
              <p className="text-sm font-semibold" style={{ color: "#8B7355" }}>Nossos Serviços</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Nossas Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipe multidisciplinar pronta para atender suas necessidades de saúde com excelência
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, idx) => (
              <Card 
                key={idx} 
                className="bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{specialty.image}</div>
                  <CardTitle className="text-2xl text-gray-900">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base">{specialty.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Premium */}
      <section id="sobre" className="py-32 px-4" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{ backgroundColor: "#D4A574" }}></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border" style={{ borderColor: "#E8E8D0" }}>
                <div className="text-center">
                  <div className="text-8xl mb-6">💼</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Por Que Escolher Nykiel?</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, idx) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: benefit.highlight ? "#D4A574" : "#E8E8D0" }}>
                            <Icon className="w-5 h-5" style={{ color: benefit.highlight ? "white" : "#D4A574" }} />
                          </div>
                          <span className="text-gray-700 font-medium">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8E8D0" }}>
                <p className="text-sm font-semibold" style={{ color: "#8B7355" }}>Qualidade Garantida</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Excelência em Cada Atendimento
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Na Nykiel, você encontra profissionais qualificados, equipamentos modernos e um atendimento humanizado que prioriza sua saúde e bem-estar.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Agendamento online 24/7 com confirmação automática",
                  "Prontuário eletrônico seguro e acessível",
                  "Lembretes automáticos via WhatsApp e Email"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#D4A574" }} />
                    <span className="text-gray-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="text-white font-bold px-10 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-base"
                onClick={() => setLocation("/booking")}
                style={{ backgroundColor: "#D4A574" }}
              >
                Comece Agora <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Premium */}
      <section id="contato" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#E8E8D0" }}>
              <p className="text-sm font-semibold" style={{ color: "#8B7355" }}>Fale Conosco</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para atender você com excelência e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MapPin, title: "Localização", content: "Entre Rios, Bahia", emoji: "📍" },
              { icon: Phone, title: "Telefone", content: "(75) 98238-0086", emoji: "📞" },
              { icon: Clock, title: "Horário", content: "Seg-Sex: 8h às 18h", emoji: "🕐" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-2 border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200 transition-all">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <CardTitle className="text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-semibold text-lg">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-white border-0 rounded-lg px-12 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/message/6VQQSZGALX4HP1")}
              style={{ backgroundColor: "#D4A574" }}
            >
              💬 Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 border-t" style={{ borderColor: "#3F3F3F" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#D4A574" }}>
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Nykiel</span>
              </div>
              <p className="text-sm text-gray-500">Cuidado completo em um só lugar</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-6 text-sm">SERVIÇOS</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#especialidades" className="text-gray-400 hover:text-gray-300 transition">Especialidades</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-gray-300 transition">Sobre Nós</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-gray-300 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-6 text-sm">LEGAL</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition">Termos</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-6 text-sm">REDES SOCIAIS</p>
              <a href="https://wa.me/message/6VQQSZGALX4HP1" className="inline-flex w-10 h-10 bg-gray-800 rounded-lg items-center justify-center text-gray-400 hover:text-white transition" style={{ backgroundColor: "#D4A574" }}>
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
