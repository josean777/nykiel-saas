import { motion } from 'framer-motion';
import { Upload, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

/**
 * Results Upload Page - Essência
 * Página para Maria Clara fazer upload de fotos de resultados dos clientes
 * Design: Minimalista europeu sofisticado
 */

interface UploadedPhoto {
  id: string;
  file: File;
  preview: string;
  service: string;
  description: string;
  clientName: string;
  status: 'uploading' | 'success' | 'error';
}

const services = [
  { value: 'drenagem', label: 'Drenagem Linfática' },
  { value: 'massagem', label: 'Massoterapia Relaxante' },
  { value: 'ventosa', label: 'Ventosaterapia' },
  { value: 'combo', label: 'Wellness Combo' },
];

export default function ResultsUpload() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    service: 'drenagem',
    description: '',
    clientName: '',
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto: UploadedPhoto = {
            id: `${Date.now()}-${i}`,
            file,
            preview: e.target?.result as string,
            service: formData.service,
            description: formData.description,
            clientName: formData.clientName,
            status: 'uploading',
          };

          setPhotos(prev => [...prev, newPhoto]);

          // Simular upload
          setTimeout(() => {
            setPhotos(prev =>
              prev.map(p =>
                p.id === newPhoto.id ? { ...p, status: 'success' } : p
              )
            );
          }, 1500);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removePhoto = (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
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
          <a href="/" className="text-sm md:text-base font-light hover:text-accent transition-premium">
            Voltar
          </a>
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
            <h1 className="text-5xl md:text-6xl font-display mb-6">Compartilhe Resultados</h1>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Faça upload de fotos dos resultados de seus clientes e inspire outras mulheres
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Upload Area */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? 'border-accent bg-accent/5'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  id="file-input"
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <Upload size={48} className="mx-auto mb-4 text-accent opacity-60" />
                  <h3 className="text-2xl font-display mb-2">Arraste fotos aqui</h3>
                  <p className="text-foreground/60 font-light mb-4">
                    ou clique para selecionar arquivos
                  </p>
                  <p className="text-sm text-foreground/50 font-light">
                    Formatos suportados: JPG, PNG, WebP
                  </p>
                </label>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 space-y-6 bg-secondary/20 p-8 rounded-lg"
              >
                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:border-accent transition-premium"
                  >
                    {services.map(s => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Nome do Cliente (opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    placeholder="Ex: Maria S."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-display text-foreground mb-2">
                    Descrição do Resultado
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Descreva o resultado e os benefícios observados..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium resize-none"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Info Panel */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-secondary/20 p-8 rounded-lg sticky top-32">
                <h3 className="text-2xl font-display mb-6">Dicas para Fotos</h3>
                <ul className="space-y-4 text-sm text-foreground/70 font-light">
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Use boa iluminação natural</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Foque no resultado (antes/depois)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Respeite a privacidade do cliente</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Imagens nítidas e bem compostas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>Máximo 5MB por foto</span>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-xs text-foreground/60 font-light">
                    Todas as fotos serão revisadas antes de serem publicadas na galeria.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Uploaded Photos Preview */}
      {photos.length > 0 && (
        <section className="py-12 md:py-20 bg-secondary/10">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display mb-12"
            >
              Fotos Carregadas ({photos.length})
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  variants={itemVariants}
                  className="relative bg-white rounded-lg overflow-hidden shadow-luxury"
                >
                  <img
                    src={photo.preview}
                    alt="Preview"
                    className="w-full h-64 object-cover"
                  />

                  {/* Status Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end p-4">
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-light">
                          {photo.service}
                        </span>
                        {photo.status === 'success' && (
                          <CheckCircle size={20} className="text-green-400" />
                        )}
                      </div>
                      {photo.description && (
                        <p className="text-white text-xs font-light line-clamp-2">
                          {photo.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-premium"
                  >
                    <X size={18} className="text-white" />
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-light shadow-luxury hover:shadow-luxury-lg transition-premium hover:scale-105">
                Enviar Fotos para Aprovação
              </button>
              <p className="text-sm text-foreground/60 font-light mt-4">
                Você receberá um e-mail quando as fotos forem aprovadas
              </p>
            </motion.div>
          </div>
        </section>
      )}

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
