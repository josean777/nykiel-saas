import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

/**
 * Gallery Page - Essência
 * Galeria interativa de fotos do estúdio e ambiente
 * Design: Minimalista europeu sofisticado
 */

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'studio' | 'results';
  title: string;
}

const studioImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/studio-1-UGtBd7pvHTF4BJQ3Ef6qqp.webp',
    alt: 'Sala de Terapia Premium',
    category: 'studio',
    title: 'Sala de Terapia',
  },
  {
    id: 2,
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/studio-2-X2964E7c3HtMZDzY2Tefp7.webp',
    alt: 'Recepção Elegante',
    category: 'studio',
    title: 'Recepção',
  },
  {
    id: 3,
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/studio-3-jBMZD5cpJH6bH8kJ8QPu2F.webp',
    alt: 'Sala de Relaxamento',
    category: 'studio',
    title: 'Sala de Relaxamento',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'studio' | 'results'>('studio');

  const displayedImages = filter === 'all' ? studioImages : studioImages.filter(img => img.category === filter);

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
            <h1 className="text-5xl md:text-6xl font-display mb-6">Galeria</h1>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Conheça nosso ambiente premium e os resultados transformadores de nossas terapias
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-16"
          >
            <button
              onClick={() => setFilter('studio')}
              className={`px-6 py-3 rounded-full font-light transition-premium ${
                filter === 'studio'
                  ? 'bg-accent text-accent-foreground shadow-luxury'
                  : 'border border-border text-foreground hover:border-accent'
              }`}
            >
              Estúdio
            </button>
            <button
              onClick={() => setFilter('results')}
              className={`px-6 py-3 rounded-full font-light transition-premium ${
                filter === 'results'
                  ? 'bg-accent text-accent-foreground shadow-luxury'
                  : 'border border-border text-foreground hover:border-accent'
              }`}
            >
              Resultados
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-lg shadow-luxury cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-display text-xl">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State for Results */}
          {filter === 'results' && displayedImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-foreground/70 font-light mb-6">
                Galeria de resultados em breve!
              </p>
              <p className="text-sm text-foreground/60 font-light">
                Compartilhe seus resultados e transformação conosco
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-premium"
            >
              <X size={24} className="text-white" />
            </button>
            <div className="mt-4 text-center">
              <h3 className="text-white font-display text-2xl">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Pronto para sua transformação?
            </h2>
            <p className="text-lg text-foreground/70 font-light mb-10">
              Agende sua sessão e experimente o luxo do bem-estar premium
            </p>
            <a
              href="https://wa.me/5575998401607?text=Olá%20Essência!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-full font-light shadow-luxury hover:shadow-luxury-lg transition-premium hover:scale-105"
            >
              Agendar Agora
            </a>
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
