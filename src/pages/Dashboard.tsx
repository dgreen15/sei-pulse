import { MetricCard } from "@/components/MetricCard";
import { FilterBar } from "@/components/FilterBar";

const mockMetrics = [
  {
    title: "Deployment Frequency",
    value: "4.2/day",
    trend: 12.5,
    trendLabel: "vs last month",
    data: [3.2, 3.5, 3.8, 4.0, 3.9, 4.1, 4.2],
    isPositiveTrend: true,
  },
  {
    title: "Lead Time for Changes",
    value: "2.3h",
    trend: -18.2,
    trendLabel: "vs last month",
    data: [3.2, 3.0, 2.8, 2.6, 2.5, 2.4, 2.3],
    isPositiveTrend: false,
  },
  {
    title: "PR Cycle Time",
    value: "6.8h",
    trend: -8.5,
    trendLabel: "vs last month",
    data: [8.2, 7.8, 7.5, 7.2, 7.0, 6.9, 6.8],
    isPositiveTrend: false,
  },
  {
    title: "Ticket Cycle Time",
    value: "3.2 days",
    trend: -15.3,
    trendLabel: "vs last month",
    data: [4.2, 4.0, 3.8, 3.6, 3.4, 3.3, 3.2],
    isPositiveTrend: false,
  },
  {
    title: "Incident Rate",
    value: "0.08%",
    trend: -25.0,
    trendLabel: "vs last month",
    data: [0.12, 0.11, 0.10, 0.09, 0.09, 0.08, 0.08],
    isPositiveTrend: false,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Software Engineering Intelligence
          </h1>
          <p className="text-muted-foreground">
            Monitor and optimize your engineering team's performance metrics
          </p>
        </div>
        
        <div className="mb-6">
          <FilterBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockMetrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Team Performance</h3>
            <div className="space-y-3">
              {["Platform Team", "Frontend Team", "Backend Team", "Data Team"].map((team, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">{team}</span>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-foreground">{(85 + idx * 3).toFixed(0)}%</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${85 + idx * 3}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Insights</h3>
            <div className="space-y-3">
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-sm text-foreground font-medium mb-1">🎯 Deployment velocity up 12%</p>
                <p className="text-xs text-muted-foreground">Teams are shipping faster than last quarter</p>
              </div>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground font-medium mb-1">⚡ AI tools adoption at 78%</p>
                <p className="text-xs text-muted-foreground">Coding assistants are widely used across teams</p>
              </div>
              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-foreground font-medium mb-1">⏱️ Code review bottleneck detected</p>
                <p className="text-xs text-muted-foreground">Backend team PR wait time increased 23%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
