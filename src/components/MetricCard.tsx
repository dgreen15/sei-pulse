import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface MetricCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
  data: number[];
  isPositiveTrend?: boolean;
}

export const MetricCard = ({ 
  title, 
  value, 
  trend, 
  trendLabel, 
  data,
  isPositiveTrend = true 
}: MetricCardProps) => {
  const chartData = data.map((val, idx) => ({ value: val, index: idx }));
  const trendColor = (trend > 0 && isPositiveTrend) || (trend < 0 && !isPositiveTrend) 
    ? "text-success" 
    : "text-destructive";
  const TrendIcon = trend > 0 ? TrendingUp : TrendingDown;

  return (
    <Card className="p-6 bg-gradient-card border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">{title}</p>
          <div className="flex items-baseline gap-3 mt-2">
            <h3 className="text-3xl font-bold text-foreground">{value}</h3>
            <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
              <TrendIcon className="h-4 w-4" />
              <span>{Math.abs(trend)}%</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{trendLabel}</p>
        </div>
        
        <div className="h-16 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
