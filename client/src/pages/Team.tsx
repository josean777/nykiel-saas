import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, ArrowLeft, Mail, Phone } from "lucide-react";

export default function Team() {
  const [, setLocation] = useLocation();

  const professionals = [
    {
      name: "Dra. Vitória Nykiel",
      specialty: "Odontologia",
      crm: "12345/BA",
      email: "vitoria@nykiel.com",
      phone: "(75) 98238-0086",
      bio: "Especialista em implantodontia com 15 anos de experiência",
    },
    {
      name: "Dra. Cristiane Andrade",
      specialty: "Odontologia",
      crm: "12346/BA",
      email: "cristiane@nykiel.com",
      phone: "(75) 98238-0087",
      bio: "Especialista em ortodontia e estética dental",
    },
    {
      name: "Dra. Denise Figueredo",
      specialty: "Odontologia",
      crm: "12347/BA",
      email: "denise@nykiel.com",
      phone: "(75) 98238-0088",
      bio: "Especialista em periodontia e reabilitação oral",
    },
    {
      name: "Dra. Willyane França",
      specialty: "Odontologia",
      crm: "12348/BA",
      email: "willyane@nykiel.com",
      phone: "(75) 98238-0089",
      bio: "Especialista em endodontia e tratamento de canal",
    },
    {
      name: "Dra. Withanauara Noronha",
      specialty: "Odontologia",
      crm: "12349/BA",
      email: "withanauara@nykiel.com",
      phone: "(75) 98238-0090",
      bio: "Especialista em odontopediatria",
    },
    {
      name: "Dra. Karine Cavalcanti",
      specialty: "Odontologia",
      crm: "12350/BA",
      email: "karine@nykiel.com",
      phone: "(75) 98238-0091",
      bio: "Especialista em prótese dentária",
    },
    {
      name: "Dra. Samantha Brandão",
      specialty: "Odontologia",
      crm: "12351/BA",
      email: "samantha@nykiel.com",
      phone: "(75) 98238-0092",
      bio: "Especialista em limpeza e prevenção",
    },
    {
      name: "Dr. Ramon Silva",
      specialty: "Odontologia",
      crm: "12352/BA",
      email: "ramon@nykiel.com",
      phone: "(75) 98238-0093",
      bio: "Especialista em cirurgia oral e implantes",
    },
    {
      name: "Dra. Daniela Galvão",
      specialty: "Odontologia",
      crm: "12353/BA",
      email: "daniela@nykiel.com",
      phone: "(75) 98238-0094",
      bio: "Especialista em clareamento e estética",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setLocation("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Nykiel</span>
          </button>
          <Button variant="ghost" onClick={() => setLocation("/")} className="text-gray-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nossa Equipe</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao seu bem-estar
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((prof, idx) => (
              <Card key={idx} className="bg-white border-gray-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Stethoscope className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{prof.name}</h3>
                  <p className="text-emerald-600 font-semibold text-center mb-2">{prof.specialty}</p>
                  <p className="text-sm text-gray-600 text-center mb-4">{prof.crm}</p>
                  <p className="text-gray-700 text-center mb-4 text-sm">{prof.bio}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <a href={`mailto:${prof.email}`} className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition text-sm">
                      <Mail className="w-4 h-4" />
                      {prof.email}
                    </a>
                    <a href={`tel:${prof.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition text-sm">
                      <Phone className="w-4 h-4" />
                      {prof.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para agendar?</h2>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
            onClick={() => setLocation("/booking")}
          >
            Agendar Consulta
          </Button>
        </div>
      </section>
    </div>
  );
}
