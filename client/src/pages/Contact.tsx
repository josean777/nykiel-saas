import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Page - Essência
 * Formulário de agendamento e informações de contato
 * Design: Minimalista europeu sofisticado
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'drenagem',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md shadow-luxury"
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <a href="/" className="text-2xl md:text-3xl font-display text-foreground hover:text-accent transition-premium">
            Essência
          </a>
          <div className="flex items-center gap-6">
            <a href="/#services" className="text-sm md:text-base font-light hover:text-accent transition-premium">
              Serviços
            </a>
            <a href="/" className="text-sm md:text-base font-light hover:text-accent transition-premium">
              Início
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display mb-6">Agende sua Experiência</h1>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Preencha o formulário abaixo ou entre em contato conosco via WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-3xl font-display mb-8">Informações de Contato</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-foreground mb-2">Telefone</h3>
                    <a
                      href="tel:+5575998401607"
                      className="text-foreground/70 font-light hover:text-accent transition-premium"
                    >
                      +55 75 99840-1607
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <MessageCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-foreground mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/5575998401607?text=Olá%20Essência!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 font-light hover:text-accent transition-premium"
                    >
                      Enviar mensagem
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-foreground mb-2">Localização</h3>
                    <p className="text-foreground/70 font-light">
                      Entre Rios<br />
                      Bahia, Brasil
                    </p>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-display text-foreground mb-4">Horários de Atendimento</h3>
                <div className="space-y-2 text-sm text-foreground/70 font-light">
                  <p>Segunda a Sexta: 09h - 18h</p>
                  <p>Sábado: 10h - 16h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium"
                    placeholder="+55 75 99840-1607"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-accent transition-premium"
                  >
                    <option value="drenagem">Drenagem Linfática</option>
                    <option value="massagem">Massoterapia Relaxante</option>
                    <option value="ventosa">Ventosaterapia</option>
                    <option value="combo">Wellness Combo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-display text-foreground mb-2">
                      Data Preferida
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-accent transition-premium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display text-foreground mb-2">
                      Horário Preferido
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-accent transition-premium"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium resize-none"
                    placeholder="Conte-nos mais sobre seus objetivos..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-light shadow-luxury hover:shadow-luxury-lg transition-premium"
                >
                  {submitted ? 'Enviado com Sucesso! ✓' : 'Enviar Solicitação'}
                </motion.button>

                <p className="text-sm text-foreground/60 font-light text-center">
                  Entraremos em contato em breve para confirmar seu agendamento
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-foreground/5 border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-foreground/60 font-light">
            © 2026 Essência. Bem-estar premium para mulheres extraordinárias.
          </p>
        </div>
      </footer>
    </div>
  );
}
