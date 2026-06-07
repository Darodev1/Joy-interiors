const Index = () => (
  <main>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#top" className="font-display text-xl font-bold text-primary">Hearth Interiors</a>
          <ul className="hidden md:flex items-center gap-8 text-sm"><li key="features"><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li><li key="gallery"><a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a></li><li key="contact"><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li></ul>
          <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">View Portfolio</a>
        </nav>
      </header>
      <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80" alt="Hearth Interiors hero image" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">Interior design</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Hearth Interiors</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">Thoughtful spaces that balance beauty and everyday life.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90 transition-opacity">View Portfolio</a>
            <a href="#contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">Learn More</a>
          </div>
        </div>
      </section>
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div key="0" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Full design</h3>
              <p className="text-sm text-muted-foreground">From concept to finishing touches.</p>
            </div><div key="1" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Consultations</h3>
              <p className="text-sm text-muted-foreground">Expert advice, room by room.</p>
            </div><div key="2" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Styling</h3>
              <p className="text-sm text-muted-foreground">The details that make a house home.</p>
            </div></div>
        </div>
      </section>
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4"><img key="0" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Portfolio 1" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /><img key="1" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" alt="Portfolio 2" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /><img key="2" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80" alt="Portfolio 3" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /><img key="3" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Portfolio 4" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /><img key="4" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" alt="Portfolio 5" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /><img key="5" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" alt="Portfolio 6" loading="lazy" className="aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition-transform" /></div>
        </div>
      </section>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="text-muted-foreground mb-8">Free discovery call.</p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <a href="tel:+15550100" className="text-lg font-medium text-primary">+1 (555) 0100</a>
            <a href="mailto:studio@hearthinteriors.com" className="text-muted-foreground">studio@hearthinteriors.com</a>
          </div>
          <form className="space-y-4 text-left" action="mailto:studio@hearthinteriors.com" method="post" encType="text/plain">
            <input required name="name" placeholder="Name" className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <textarea required name="message" placeholder="Tell us how we can help" rows={4} className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl">Hearth Interiors</p>
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Hearth Interiors. All rights reserved.</p>
        </div>
      </footer>
  </main>
);

export default Index;
