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
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const specialties = [
    {
      icon: Smile,
      title: "Odontologia",
      description: "Limpeza, clareamento, implantes, harmonização e muito mais",
      color: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Stethoscope,
      title: "Medicina Geral",
      description: "Consultas e acompanhamento com profissionais experientes",
      color: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
      iconColor: "text-purple-500",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Planejamento nutricional personalizado",
      color: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
      iconColor: "text-orange-500",
    },
    {
      icon: Dumbbell,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões",
      color: "from-red-500/10 to-red-600/5 border-red-500/20",
      iconColor: "text-red-500",
    },
    {
      icon: Brain,
      title: "Psicologia",
      description: "Atendimento psicológico e bem-estar mental",
      color: "from-pink-500/10 to-pink-600/5 border-pink-500/20",
      iconColor: "text-pink-500",
    },
    {
      icon: Sparkles,
      title: "Estética",
      description: "Procedimentos estéticos avançados",
      color: "from-amber-500/10 to-amber-600/5 border-amber-500/20",
      iconColor: "text-amber-500",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Agendamento online 24/7" },
    { icon: Zap, text: "Prontuário eletrônico seguro" },
    { icon: CheckCircle, text: "Lembretes automáticos" },
    { icon: Users, text: "Múltiplos profissionais especializados" },
    { icon: Award, text: "Atendimento humanizado" },
    { icon: MapPin, text: "Localização privilegiada" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">Nykiel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#especialidades" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Especialidades
            </a>
            <button onClick={() => setLocation("/team")} className="text-gray-600 hover:text-gray-900 transition font-medium">
              Equipe
            </button>
            <a href="#sobre" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Contato
            </a>
            <Button variant="outline" onClick={() => setLocation("/register")} className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Cadastro
            </Button>
            <Button onClick={() => setLocation("/login")} className="bg-indigo-600 hover:bg-indigo-700">
              Entrar
            </Button>
          </nav>
          <div className="md:hidden flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setLocation("/register")}>Cadastro</Button>
            <Button size="sm" onClick={() => setLocation("/login")}>Entrar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Cuidado Completo em Um Só Lugar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nykiel Policlínica oferece atendimento multiprofissional com prevenção, acolhimento e qualidade. 
            Cuidamos de você em todas as fases da vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setLocation("/booking")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Agendar Consulta <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-6 text-lg rounded-lg"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossas Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipe multidisciplinar pronta para atender suas necessidades de saúde com excelência
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, idx) => {
              const Icon = specialty.icon;
              return (
                <Card 
                  key={idx} 
                  className={`bg-gradient-to-br ${specialty.color} border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white`}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${specialty.iconColor}`} />
                    </div>
                    <CardTitle className="text-gray-900">{specialty.title}</CardTitle>
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
      <section id="sobre" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Por Que Escolher Nykiel?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
              <Button 
                className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg"
                onClick={() => setLocation("/booking")}
              >
                Comece Agora <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl h-96 flex items-center justify-center border border-indigo-200">
                <div className="text-center">
                  <Users className="w-24 h-24 text-indigo-300 mx-auto mb-4" />
                  <p className="text-indigo-700 font-semibold">Equipe de Profissionais Experientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para atender você com excelência e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Localização */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900">Localização</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 font-semibold">Entre Rios, Bahia</p>
                <p className="text-gray-600 text-sm mt-2">Atendimento presencial</p>
              </CardContent>
            </Card>

            {/* Telefone */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900">Telefone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 font-semibold">(75) 98238-0086</p>
                <p className="text-gray-600 text-sm mt-2">Ligações e WhatsApp</p>
              </CardContent>
            </Card>

            {/* Horário */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900">Horário</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 font-semibold">Seg-Sex: 8h às 18h</p>
                <p className="text-gray-600 text-sm mt-2">Atendimento completo</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 rounded-lg px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/message/6VQQSZGALX4HP1")}
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-6 h-6 text-indigo-400" />
                <span className="font-bold text-white">Nykiel</span>
              </div>
              <p className="text-sm text-gray-500">Cuidado completo em um só lugar</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">SERVIÇOS</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#especialidades" className="text-gray-400 hover:text-indigo-400 transition">Especialidades</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-indigo-400 transition">Sobre Nós</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-indigo-400 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">LEGAL</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition">Termos</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">REDES SOCIAIS</p>
              <div className="flex gap-3">
                <a href="https://wa.me/message/6VQQSZGALX4HP1" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.227l-.356.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 001.51 5.394c.93 1.357 2.165 2.386 3.612 3.01 1.487.625 3.078.766 4.666.348 1.588-.419 2.977-1.379 3.99-2.364 1.013-.985 1.68-2.19 1.842-3.516.162-1.326-.023-2.697-.72-3.976-.697-1.279-1.768-2.374-3.06-3.106a9.864 9.864 0 00-3.606-.867z" />
                  </svg>
                </a>
              </div>
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
