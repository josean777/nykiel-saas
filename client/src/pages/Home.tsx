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
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vamos Conversar?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Estamos prontos para atender você com excelência e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Localização */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-slate-300 text-sm font-semibold mb-2 text-center">LOCALIZAÇÃO</p>
              <p className="text-white font-semibold text-center text-lg">Entre Rios, Bahia</p>
              <p className="text-slate-400 text-sm text-center mt-2">Atendimento presencial</p>
            </div>

            {/* Telefone */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-slate-300 text-sm font-semibold mb-2 text-center">TELEFONE</p>
              <p className="text-white font-semibold text-center text-lg">(75) 98238-0086</p>
              <p className="text-slate-400 text-sm text-center mt-2">Ligações e WhatsApp</p>
            </div>

            {/* Horário */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-7 h-7 text-purple-400" />
              </div>
              <p className="text-slate-300 text-sm font-semibold mb-2 text-center">HORÁRIO</p>
              <p className="text-white font-semibold text-center text-lg">Seg-Sex: 8h às 18h</p>
              <p className="text-slate-400 text-sm text-center mt-2">Atendimento completo</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 rounded-xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/message/6VQQSZGALX4HP1")}
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-white">Nykiel</span>
              </div>
              <p className="text-sm text-slate-500">Cuidado completo em um só lugar</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">SERVIÇOS</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#especialidades" className="text-slate-400 hover:text-emerald-400 transition">Especialidades</a></li>
                <li><a href="#sobre" className="text-slate-400 hover:text-emerald-400 transition">Sobre Nós</a></li>
                <li><a href="#contato" className="text-slate-400 hover:text-emerald-400 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">LEGAL</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Privacidade</a></li>
                <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition">Termos</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4 text-sm">REDES SOCIAIS</p>
              <div className="flex gap-3">
                <a href="https://wa.me/message/6VQQSZGALX4HP1" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.227l-.356.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 001.51 5.394c.93 1.357 2.165 2.386 3.612 3.01 1.487.625 3.078.766 4.666.348 1.588-.419 2.977-1.379 3.99-2.364 1.013-.985 1.68-2.19 1.842-3.516.162-1.326-.023-2.697-.72-3.976-.697-1.279-1.768-2.374-3.06-3.106a9.864 9.864 0 00-3.606-.867z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 Nykiel Policlínica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
