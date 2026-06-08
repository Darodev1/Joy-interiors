
import { Link } from "react-router-dom";

const Index = () => (
  <main>
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="font-display text-xl font-bold text-primary">Oceanic Interiors</Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li key="services">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          </li>
          <li key="gallery">
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
          </li>
          <li key="contact">
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </li>
        </ul>
        <Link to="/portfolio" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">View Portfolio</Link>
      </nav>
    </header>
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
      <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/coastal-living-room.png" alt="Oceanic Interiors hero image" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
        <p className="uppercase tracking-wide text-sm font-medium">Warm, Livable Interior Design</p>
        <h1 className="mt-4 text-4xl font-display font-bold leading-tight">Creating Spaces That Feel Like You</h1>
        <p className="mt-6 text-lg">We specialize in crafting interiors that reflect your personality and style.</p>
      </div>
    </section>

    <section id="services" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border">
            <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/residential-design.png" alt="Residential Design" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">Residential Design</h3>
            <p className="text-muted-foreground">From concept to completion, we craft personalized residential spaces that blend comfort with sophisticated style.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border">
            <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/commercial-interiors.png" alt="Commercial Interiors" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">Commercial Interiors</h3>
            <p className="text-muted-foreground">Elevate your business environment with functional and aesthetically pleasing designs that inspire productivity.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border">
            <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/renovation-consultation.png" alt="Renovation Consultation" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">Renovation Consultation</h3>
            <p className="text-muted-foreground">Expert guidance for your renovation projects, ensuring a seamless transformation of your space.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/gallery-kitchen.png" alt="Modern kitchen interior" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/gallery-bedroom.png" alt="Cozy bedroom interior" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/gallery-livingroom.png" alt="Spacious living room interior" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="text-center mt-12">
          <Link to="/portfolio" className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:opacity-90 transition-opacity">View Full Portfolio</Link>
        </div>
      </div>
    </section>

    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-8">Ready to transform your space? Contact us for a consultation.</p>
        <form className="grid gap-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none"></textarea>
          <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:opacity-90 transition-opacity">Send Message</button>
        </form>
      </div>
    </section>

    <footer className="bg-foreground text-primary-foreground py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Oceanic Interiors</h3>
          <p className="text-sm text-muted-foreground">Crafting spaces that feel like home.</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm">Services</a></li>
            <li><a href="#gallery" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm">Gallery</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm">Contact</a></li>
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-muted-foreground">30 Billings Way, Ikeja,</p>
          <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
          <p className="text-sm text-muted-foreground">+2348128447600</p>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-muted-foreground/20 text-sm text-muted-foreground">
        © 2026 Oceanic Interiors. All rights reserved.
      </div>
    </footer>
  </main>
);

export default Index;