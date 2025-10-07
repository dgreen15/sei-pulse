import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info, XCircle } from "lucide-react";

interface AlertCardProps {
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  timestamp: string;
  team?: string;
}

export const AlertCard = ({ title, description, severity, timestamp, team }: AlertCardProps) => {
  const severityConfig = {
    critical: {
      icon: XCircle,
      color: "bg-destructive/10 text-destructive border-destructive/20",
      badge: "Critical",
    },
    warning: {
      icon: AlertTriangle,
      color: "bg-warning/10 text-warning border-warning/20",
      badge: "Warning",
    },
    info: {
      icon: Info,
      color: "bg-primary/10 text-primary border-primary/20",
      badge: "Info",
    },
  };
  
  const config = severityConfig[severity];
  const Icon = config.icon;
  
  return (
    <Card className="p-5 bg-gradient-card border-border hover:shadow-elevated transition-all duration-300">
      <div className="flex gap-4">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${config.color}`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className={`text-xs ${config.color}`}>
                  {config.badge}
                </Badge>
                {team && (
                  <Badge variant="outline" className="text-xs border-border">
                    {team}
                  </Badge>
                )}
              </div>
              <h4 className="font-semibold text-foreground">{title}</h4>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{timestamp}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
          
          <div className="flex gap-2">
            <Button size="sm" variant="default" className="bg-primary hover:bg-primary-light">
              Investigate
            </Button>
            <Button size="sm" variant="outline" className="border-border">
              Acknowledge
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
