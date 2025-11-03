import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Company from './components/Company';

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-950/70 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold">Priotech Solutions</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#showcase" className="hover:text-white">Portfolio</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 text-sm">
          Get a Quote
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="text-white font-semibold">Priotech Solutions</div>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Copyright © Priotech Solutions 2025. All rights reserved.
          </p>
        </div>
        <div className="md:justify-end flex gap-4 text-sm">
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms of Service</a>
          <a className="hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-16">
        <Hero />
        <Services />
        <Showcase />
        <Company />
      </div>
      <Footer />
    </div>
  );
}
