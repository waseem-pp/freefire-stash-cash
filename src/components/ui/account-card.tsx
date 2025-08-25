import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Zap } from "lucide-react";

interface AccountCardProps {
  id: string;
  title: string;
  level: number;
  rank: string;
  price: number;
  diamonds: number;
  skins: number;
  weapons: number;
  rating: number;
  image: string;
  verified: boolean;
  featured?: boolean;
}

export function AccountCard({
  title,
  level,
  rank,
  price,
  diamonds,
  skins,
  weapons,
  rating,
  image,
  verified,
  featured = false
}: AccountCardProps) {
  return (
    <Card className={`group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card ${featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-primary text-primary-foreground font-bold">
            <Zap className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <Badge variant="secondary" className="backdrop-blur-sm">
              Level {level}
            </Badge>
            <Badge variant="outline" className="backdrop-blur-sm">
              {rank}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {verified && (
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="text-center">
            <div className="font-semibold text-primary">{diamonds.toLocaleString()}</div>
            <div className="text-muted-foreground">Diamonds</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-accent">{skins}</div>
            <div className="text-muted-foreground">Skins</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-secondary-foreground">{weapons}</div>
            <div className="text-muted-foreground">Weapons</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">(4.8)</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ${price}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant={featured ? "default" : "secondary"}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}