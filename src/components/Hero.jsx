import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[680px] md:min-h-[760px] bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm text-slate-200 ring-1 ring-white/15 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Priotech Solutions
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Business with Scalable & Modern Software Solutions.
          </h1>
          <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-lg">
            We help businesses grow through efficient, reliable, and innovative digital solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-medium shadow-lg shadow-orange-500/20 transition">
              Get a Free Consultation
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium ring-1 ring-white/20 backdrop-blur transition">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
