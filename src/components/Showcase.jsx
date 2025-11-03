import { motion } from 'framer-motion';

const logos = [
  { name: 'Tokopedia Partner Integration' },
  { name: 'Local Coffee App' },
  { name: 'FinSync' },
  { name: 'UrbanTech' },
  { name: 'GoSchool' },
];

const testimonials = [
  {
    client: 'Tokopedia Partner Integration',
    quote: 'Seamless and reliable integration that scaled with our traffic spikes.',
    author: 'Partnership Ops Lead'
  },
  {
    client: 'Local Coffee App',
    quote: 'Our sales grew 3x after launching the e-commerce platform. Great team!',
    author: 'Founder'
  },
  {
    client: 'FinSync',
    quote: 'The dashboards gave our team real-time visibility we never had before.',
    author: 'Product Manager'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Partners & Clients</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Trusted by startups and enterprises for mission-critical software.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((l, idx) => (
              <div key={idx} className="shrink-0 rounded-lg bg-slate-100 px-6 py-3 text-slate-700 ring-1 ring-slate-200">
                {l.name}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.client} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-800">{t.client}</span> — {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
