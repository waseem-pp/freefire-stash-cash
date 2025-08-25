import { HeroSection } from "@/components/ui/hero-section";
import { TemplateCard } from "@/components/ui/template-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, Palette, Users } from "lucide-react";

// Import template images
import template1 from "@/assets/account-1.jpg";
import template2 from "@/assets/account-2.jpg";
import template3 from "@/assets/account-3.jpg";

// Sample template data
const featuredTemplates = [
  {
    id: "1",
    title: "Modern Business Logo",
    category: "Logo Design",
    description: "Professional corporate identity with clean typography",
    image: template1,
    featured: true
  },
  {
    id: "2",
    title: "E-commerce Website Template",
    category: "Web Template",
    description: "Responsive online store design with modern UI",
    image: template2,
    featured: true
  },
  {
    id: "3",
    title: "Brand Identity Package",
    category: "Branding",
    description: "Complete brand kit with logo, colors, and guidelines",
    image: template3,
    featured: true
  }
];

const allTemplates = [
  ...featuredTemplates,
  {
    id: "4",
    title: "Restaurant Menu Design",
    category: "Print Design",
    description: "Elegant menu layout with food photography",
    image: template1
  },
  {
    id: "5",
    title: "Mobile App UI Kit",
    category: "UI/UX",
    description: "Complete mobile interface components",
    image: template2
  },
  {
    id: "6",
    title: "Social Media Templates",
    category: "Marketing",
    description: "Instagram and Facebook post designs",
    image: template3
  }
];

const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
const whatsappMessage = "Hi! I'm interested in your design services. Can we discuss a project?";

const handleWhatsAppContact = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Templates Created</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Fast Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="bg-gradient-accent bg-clip-text text-transparent">Templates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our newest designs and creative solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} {...template} onContact={handleWhatsAppContact} />
            ))}
          </div>
          
          <div className="text-center">
            <Button onClick={handleWhatsAppContact} variant="default" size="lg" className="px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact for Custom Work
            </Button>
          </div>
        </div>
      </section>

      {/* All Templates Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              More Templates & Logos
            </h2>
            <p className="text-muted-foreground text-lg">
              Browse our complete collection of designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {allTemplates.map((template) => (
              <TemplateCard key={template.id} {...template} onContact={handleWhatsAppContact} />
            ))}
          </div>
          
          <div className="text-center">
            <Button onClick={handleWhatsAppContact} variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get a Quote on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional design solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logo Design</h3>
              <p className="text-muted-foreground">Professional logos that represent your brand identity</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Templates</h3>
              <p className="text-muted-foreground">Responsive website designs for modern businesses</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-muted-foreground">Complete branding packages with guidelines</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button onClick={handleWhatsAppContact} variant="gaming" size="lg" className="px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Design Studio
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Creating stunning templates and logos for businesses worldwide. Contact us on WhatsApp for custom projects.
            </p>
            <div className="flex justify-center gap-6">
              <button onClick={handleWhatsAppContact} className="text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </button>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;