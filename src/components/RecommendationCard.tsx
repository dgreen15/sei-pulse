import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: string;
}

export const RecommendationCard = ({ title, description, impact, category }: RecommendationCardProps) => {
  const impactColors = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-success/10 text-success border-success/20",
  };
  
  const ImpactIcon = impact === "high" ? AlertCircle : impact === "medium" ? TrendingUp : CheckCircle;
  
  return (
    <Card className="p-5 bg-gradient-card border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {category}
              </Badge>
              <Badge variant="outline" className={cn("text-xs", impactColors[impact])}>
                <ImpactIcon className="h-3 w-3 mr-1" />
                {impact.toUpperCase()} Impact
              </Badge>
            </div>
            <h4 className="font-semibold text-foreground mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="default" className="bg-primary hover:bg-primary-light">
            Apply Fix
          </Button>
          <Button size="sm" variant="outline" className="border-border">
            Create Task
          </Button>
          <Button size="sm" variant="ghost" className="ml-auto text-muted-foreground">
            Dismiss
          </Button>
        </div>
      </div>
    </Card>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
