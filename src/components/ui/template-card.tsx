import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Eye } from "lucide-react";

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  onContact: () => void;
}

export const TemplateCard = ({
  title,
  category,
  description,
  image,
  featured = false,
  onContact
}: TemplateCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" className="mr-2">
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex gap-2">
          <Button 
            onClick={onContact}
            variant="default" 
            size="sm" 
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};