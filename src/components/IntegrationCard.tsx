import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  enabled: boolean;
  lastSync?: string;
}

export const IntegrationCard = ({ name, description, icon, enabled, lastSync }: IntegrationCardProps) => {
  return (
    <Card className="p-5 bg-gradient-card border-border hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-2xl shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-foreground">{name}</h4>
              {enabled && (
                <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                  Active
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
            {lastSync && (
              <p className="text-xs text-muted-foreground">
                Last sync: {lastSync}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            <Settings className="h-4 w-4" />
          </Button>
          <Switch checked={enabled} />
        </div>
      </div>
    </Card>
  );
};
