export default function Company() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get('name') || '');
    const email = encodeURIComponent(form.get('email') || '');
    const message = encodeURIComponent(form.get('message') || '');
    const subject = encodeURIComponent(`Consultation Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@priotechsolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white text-slate-900">
      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-600">
              We are a team of experienced software developers focused on delivering scalable,
              secure, and efficient digital solutions. With over 6 years of experience, we’ve helped
              startups and enterprises achieve digital transformation.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {['Innovation', 'Quality', 'Transparency', 'Collaboration'].map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center text-slate-500">
              Priotech Solutions • Since 2019
            </div>
            <p className="mt-4 text-sm text-slate-600">
              We combine modern stacks with disciplined engineering to deliver business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Pricing</h2>
          <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
            Transparent starting points. Get in touch for a tailored quote.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Basic Website</h3>
              <p className="mt-1 text-sm text-slate-600">Landing page, 5 pages, basic SEO</p>
              <div className="mt-6 text-3xl font-bold">From Rp 7,000,000</div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2">
                Request a Quote
              </a>
            </div>
            <div className="rounded-2xl border-2 border-orange-500 bg-white p-6 shadow-sm relative">
              <span className="absolute -top-3 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">Popular</span>
              <h3 className="text-lg font-semibold">E-Commerce</h3>
              <p className="mt-1 text-sm text-slate-600">Complete online store solution</p>
              <div className="mt-6 text-3xl font-bold">From Rp 15,000,000</div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
                Request a Quote
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Custom System</h3>
              <p className="mt-1 text-sm text-slate-600">Tailored software solutions</p>
              <div className="mt-6 text-3xl font-bold">Contact Us</div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-3 text-slate-600">
              Tell us about your project and we’ll reach out shortly.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
                Send Message
              </button>
            </form>

            <div className="mt-8 space-y-2 text-sm">
              <a className="text-orange-600 hover:underline" href="https://wa.me/6281234567890?text=Hi%20Priotech%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project.">WhatsApp</a>
              <div>
                <a className="text-slate-700 hover:underline" href="mailto:hello@priotechsolutions.com">hello@priotechsolutions.com</a>
              </div>
              <div className="text-slate-600">Jakarta, Indonesia</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
            <iframe
              title="Priotech Solutions Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.792475695349!2d106.816666!3d-6.175110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e6f1c5b8f7%3A0x3015751d1b7f5d!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
