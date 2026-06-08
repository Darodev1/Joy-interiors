import React from 'react';

const Index = () => (
  <main>
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#top" className="font-display text-xl font-bold text-primary">Hearth Interiors</a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li key="features">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          </li>
          <li key="gallery">
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
          </li>
          <li key="contact">
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">View Portfolio</a>
      </nav>
    </header>
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80" alt="Hearth Interiors hero image" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
        <p className="uppercase tracking-wide text-sm font-medium">Warm, Livable Interior Design</p>
        <h1 className="mt-4 text-4xl font-display font-bold leading-tight">Creating Spaces That Feel Like You</h1>
        <p className="mt-6 text-lg">We specialize in crafting interiors that reflect your personality and style.</p>
      </div>
    </section>
  </main>
);

export default Index;
