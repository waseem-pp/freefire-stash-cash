import { HeroSection } from "@/components/ui/hero-section";
import { AccountCard } from "@/components/ui/account-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp } from "lucide-react";

// Import account images
import account1 from "@/assets/account-1.jpg";
import account2 from "@/assets/account-2.jpg";
import account3 from "@/assets/account-3.jpg";

// Sample account data
const featuredAccounts = [
  {
    id: "1",
    title: "Elite Champion Account",
    level: 85,
    rank: "Heroic",
    price: 299,
    diamonds: 50000,
    skins: 45,
    weapons: 120,
    rating: 4.9,
    image: account1,
    verified: true,
    featured: true
  },
  {
    id: "2",
    title: "Legendary Master",
    level: 78,
    rank: "Master",
    price: 199,
    diamonds: 35000,
    skins: 32,
    weapons: 95,
    rating: 4.8,
    image: account2,
    verified: true,
    featured: true
  },
  {
    id: "3",
    title: "Diamond Pro Account",
    level: 65,
    rank: "Diamond",
    price: 149,
    diamonds: 25000,
    skins: 28,
    weapons: 80,
    rating: 4.7,
    image: account3,
    verified: true
  }
];

const allAccounts = [
  ...featuredAccounts,
  {
    id: "4",
    title: "Gold Rush Account",
    level: 55,
    rank: "Gold",
    price: 89,
    diamonds: 15000,
    skins: 18,
    weapons: 55,
    rating: 4.6,
    image: account1,
    verified: true
  },
  {
    id: "5",
    title: "Platinum Elite",
    level: 62,
    rank: "Platinum",
    price: 119,
    diamonds: 20000,
    skins: 24,
    weapons: 68,
    rating: 4.7,
    image: account2,
    verified: true
  },
  {
    id: "6",
    title: "Silver Starter",
    level: 45,
    rank: "Silver",
    price: 59,
    diamonds: 10000,
    skins: 12,
    weapons: 35,
    rating: 4.5,
    image: account3,
    verified: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Accounts Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Accounts
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="bg-gradient-accent bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked accounts with the rarest skins and highest levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredAccounts.map((account) => (
              <AccountCard key={account.id} {...account} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="gaming" size="lg" className="px-8">
              View All Featured
            </Button>
          </div>
        </div>
      </section>

      {/* Browse Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Browse All Accounts
              </h2>
              <p className="text-muted-foreground text-lg">
                Find the perfect account for your gaming style
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search accounts..."
                  className="pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allAccounts.map((account) => (
              <AccountCard key={account.id} {...account} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Accounts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FreeFire Stash Cash
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your trusted marketplace for premium Free Fire accounts. Safe, secure, and instant delivery.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;