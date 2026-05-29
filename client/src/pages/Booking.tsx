import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export default function Booking() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: "",
    professional: "",
    date: "",
    time: "",
    notes: "",
  });
  const [success, setSuccess] = useState(false);

  const specialties = [
    "Odontologia",
    "Medicina Geral",
    "Nutrição",
    "Fisioterapia",
    "Psicologia",
    "Estética",
  ];

  const professionals: Record<string, string[]> = {
    Odontologia: [
      "Dra. Vitória Nykiel",
      "Dra. Cristiane Andrade",
      "Dra. Denise Figueredo",
      "Dra. Willyane França",
      "Dra. Withanauara Noronha",
      "Dra. Karine Cavalcanti",
      "Dra. Samantha Brandão",
      "Dr. Ramon Silva",
    ],
    "Medicina Geral": ["Dr. João Silva", "Dra. Maria Santos"],
    Nutrição: ["Nutricionista Ana Costa"],
    Fisioterapia: ["Fisioterapeuta Carlos"],
    Psicologia: ["Psicóloga Beatriz"],
    Estética: ["Esteticista Fernanda"],
  };

  const handleNext = () => {
    if (step === 1 && !formData.specialty) {
      alert("Selecione uma especialidade");
      return;
    }
    if (step === 2 && !formData.professional) {
      alert("Selecione um profissional");
      return;
    }
    if (step === 3 && (!formData.date || !formData.time)) {
      alert("Selecione data e hora");
      return;
    }
    setStep(step + 1);
  };

  const handleConfirm = () => {
    setSuccess(true);
    setTimeout(() => {
      setLocation("/dashboard/patient");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLocation("/dashboard/patient")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Agendar Consulta</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-between items-center">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`h-1 w-12 mx-2 ${
                    s < step ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Success Message */}
        {success && (
          <Card className="mb-8 bg-green-50 border-green-200">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-green-900 mb-2">
                Agendamento Confirmado!
              </h2>
              <p className="text-green-700">
                Você receberá uma confirmação por WhatsApp em breve.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 1: Specialty */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione a Especialidade</CardTitle>
              <CardDescription>Qual tipo de atendimento você precisa?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setFormData({ ...formData, specialty: spec })}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.specialty === spec
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-medium">{spec}</p>
                  </button>
                ))}
              </div>
              <Button onClick={handleNext} className="w-full mt-6">
                Próximo
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Professional */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione o Profissional</CardTitle>
              <CardDescription>Escolha o profissional desejado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {professionals[formData.specialty]?.map((prof) => (
                  <button
                    key={prof}
                    onClick={() => setFormData({ ...formData, professional: prof })}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center gap-3 ${
                      formData.professional === prof
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">{prof}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  Próximo
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Date & Time */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione Data e Hora</CardTitle>
              <CardDescription>Escolha o melhor horário para você</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Data</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Horário</label>
                <Select value={formData.time} onValueChange={(v) => setFormData({ ...formData, time: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  Próximo
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Confirme seu Agendamento</CardTitle>
              <CardDescription>Revise os dados antes de confirmar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Especialidade</p>
                  <p className="font-medium">{formData.specialty}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Profissional</p>
                  <p className="font-medium">{formData.professional}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-sm text-gray-600">Data</p>
                    <p className="font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formData.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hora</p>
                    <p className="font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {formData.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Observações (opcional)</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="Descreva qualquer informação relevante..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(3)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button onClick={handleConfirm} className="flex-1">
                  Confirmar Agendamento
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
