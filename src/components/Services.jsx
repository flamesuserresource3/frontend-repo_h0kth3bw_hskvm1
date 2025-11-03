import { Code2, ShoppingCart, Layers, FileText, Smartphone, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Responsive, high-performance websites using React, Next.js, and Golang APIs.'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'Online stores with payment gateways, inventory, and analytics dashboards.'
  },
  {
    icon: Layers,
    title: 'System Integration',
    desc: 'Seamless ERP, CRM, and Payment Gateway integrations for unified workflows.'
  },
  {
    icon: FileText,
    title: 'CMS Setup',
    desc: 'Implementations with WordPress, Strapi, or Headless CMS for easy content management.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Solutions',
    desc: 'Optimized UI/UX and performance across all mobile devices.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Interactive dashboards for real-time monitoring and business insights.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            End-to-end software solutions designed for scalability, security, and performance.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
