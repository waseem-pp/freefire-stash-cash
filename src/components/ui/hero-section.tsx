import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Palette, Users, Star } from "lucide-react";

export function HeroSection() {
  const handleWhatsAppContact = () => {
    const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
    const message = "Hi! I'm interested in your design services. Can we discuss a project?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Badge */}
          <div className="flex justify-center">
            <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2 text-sm font-medium animate-glow-pulse">
              <Palette className="w-4 h-4 mr-2" />
              Professional Design Studio
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Creative Templates
              </span>
              <br />
              <span className="text-foreground">& Stunning Logos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional templates and custom logos designed to elevate your brand. 
              Contact us on WhatsApp for instant quotes and fast delivery.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleWhatsAppContact} size="lg" className="px-8 py-6 text-lg font-semibold shadow-glow">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact on WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              View Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Palette className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">500+ Templates</div>
                <div className="text-sm text-muted-foreground">Ready to use</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Users className="w-8 h-8 text-accent" />
              <div className="text-left">
                <div className="font-semibold">200+ Clients</div>
                <div className="text-sm text-muted-foreground">Worldwide</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Star className="w-8 h-8 text-primary fill-current" />
              <div className="text-left">
                <div className="font-semibold">24h Delivery</div>
                <div className="text-sm text-muted-foreground">Fast turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
}