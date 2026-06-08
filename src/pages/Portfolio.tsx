import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Coastal Breeze Renovation",
    description: "A serene coastal home with an open-concept living area and panoramic ocean views.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/coastal-breeze.png",
  },
  {
    id: "2",
    name: "Modern City Loft",
    description: "An urban loft design blending industrial elements with contemporary comfort.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/city-loft.png",
  },
  {
    id: "3",
    name: "Rustic Cabin Retreat",
    description: "A cozy mountain cabin featuring natural wood and stone textures.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/rustic-cabin.png",
  },
  {
    id: "4",
    name: "Minimalist Apartment",
    description: "Clean lines and functional spaces define this elegant minimalist apartment.",
    image: "https://gtbwpdlebllwrfzgvwfl.supabase.co/storage/v1/object/public/project-assets/12e6c50f-00ef-4989-b85a-eb7099977e30/assets/minimalist-apartment.png",
  },
];

const Portfolio = () => {
  return (
    <div>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/" className="font-display text-xl font-bold text-primary">Oceanic Interiors</Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li key="services">
              <Link to="/#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            </li>
            <li key="gallery">
              <Link to="/#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            </li>
            <li key="contact">
              <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </li>
          </ul>
          <Link to="/portfolio" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">View Portfolio</Link>
        </nav>
      </header>
      <main className="pt-20 pb-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-center mb-12">Our Portfolio</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-lg shadow-lg overflow-hidden border border-border group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">{project.name}</h2>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
