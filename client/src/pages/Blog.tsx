import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Blog Page - Essência
 * Artigos educativos sobre bem-estar, drenagem linfática e saúde emocional
 * Design: Minimalista europeu sofisticado
 */

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Drenagem Linfática: A Técnica que Transforma seu Corpo',
    excerpt: 'Descubra como a drenagem linfática pode reduzir inchaço, melhorar a circulação e deixar seu corpo mais leve e revigorado.',
    category: 'Terapias',
    readTime: '5 min',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/blog-drenagem-23p22Ky3aAZhVF4iAZD6Ds.webp',
    slug: 'drenagem-linfatica',
  },
  {
    id: 2,
    title: 'Bem-estar Emocional: O Caminho para a Transformação Pessoal',
    excerpt: 'Entenda como o cuidado corporal conecta-se com a saúde emocional e como as terapias podem ser ferramentas de autocuidado profundo.',
    category: 'Bem-estar',
    readTime: '6 min',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/blog-emocional-DrSPqy7cZ6SxqE6CfNDZPN.webp',
    slug: 'bem-estar-emocional',
  },
  {
    id: 3,
    title: 'Massoterapia Relaxante: Muito Mais que um Luxo',
    excerpt: 'A massagem terapêutica vai além do relaxamento. Conheça seus benefícios científicos e como pode transformar sua qualidade de vida.',
    category: 'Terapias',
    readTime: '5 min',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/service-drenagem-YN9i29ZuSot3seT7wyd3LX.webp',
    slug: 'massoterapia-relaxante',
  },
  {
    id: 4,
    title: 'Autocuidado Premium: Investindo em Você Mesma',
    excerpt: 'Por que mulheres de alto padrão escolhem investir em bem-estar? Descubra como o autocuidado é um ato de amor próprio.',
    category: 'Lifestyle',
    readTime: '4 min',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/experience-section-Vbc5z7mC3fAsPMQcHzcXj3.webp',
    slug: 'autocuidado-premium',
  },
];

export default function Blog() {
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
            <h1 className="text-5xl md:text-6xl font-display mb-6">Blog Essência</h1>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Artigos educativos sobre bem-estar, terapias corporais e transformação emocional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-lg shadow-luxury transition-premium"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-white">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-display text-accent uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/60 font-light">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-display mb-4 text-foreground group-hover:text-accent transition-premium">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-foreground/70 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-accent font-light hover:gap-4 transition-all duration-300">
                    <span>Ler artigo</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Receba Dicas de Bem-estar
            </h2>
            <p className="text-lg text-foreground/70 font-light mb-10">
              Inscreva-se para receber artigos exclusivos, dicas de autocuidado e ofertas especiais
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-6 py-3 rounded-full border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-premium"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-light shadow-luxury hover:shadow-luxury-lg transition-premium hover:scale-105"
              >
                Inscrever
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Transforme seu Bem-estar
            </h2>
            <p className="text-lg text-foreground/70 font-light mb-10">
              Além de aprender, experimente nossas terapias premium e sinta a transformação
            </p>
            <a
              href="https://wa.me/5575998401607?text=Olá%20Essência!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-full font-light shadow-luxury hover:shadow-luxury-lg transition-premium hover:scale-105"
            >
              Agendar Sessão
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
