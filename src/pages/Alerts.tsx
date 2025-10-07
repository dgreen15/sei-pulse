import { AlertCard } from "@/components/AlertCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    title: "Deployment frequency dropped below threshold",
    description: "Backend team deployment frequency has decreased to 2.8/day, which is 40% below the target threshold of 4.5/day. This may indicate blockers in the deployment pipeline or increased caution due to recent incidents.",
    severity: "critical" as const,
    timestamp: "5 min ago",
    team: "Backend Team",
  },
  {
    title: "PR backlog growing faster than normal",
    description: "Open PR count increased by 45% in the last 48 hours across Platform and Frontend teams. Current backlog: 47 PRs. Average age: 3.2 days.",
    severity: "warning" as const,
    timestamp: "23 min ago",
    team: "Platform Team",
  },
  {
    title: "Code review time spike detected",
    description: "Average code review completion time increased from 6.8h to 14.2h for the Data team. This represents a 108% increase and may delay sprint commitments.",
    severity: "warning" as const,
    timestamp: "1 hour ago",
    team: "Data Team",
  },
  {
    title: "Test coverage decreased significantly",
    description: "Overall test coverage dropped from 84% to 76% across the last 20 commits. Largest decreases observed in backend services and API endpoints.",
    severity: "critical" as const,
    timestamp: "2 hours ago",
  },
  {
    title: "CI/CD pipeline duration increased",
    description: "Average pipeline execution time rose from 8.5 minutes to 12.3 minutes. The Backend team's test suite shows the largest increase (+58%).",
    severity: "warning" as const,
    timestamp: "3 hours ago",
    team: "Backend Team",
  },
  {
    title: "Incident rate above baseline",
    description: "Production incident rate is 0.12%, which is 50% higher than the 30-day baseline of 0.08%. Most incidents relate to API rate limiting and database timeouts.",
    severity: "critical" as const,
    timestamp: "5 hours ago",
  },
  {
    title: "Developer satisfaction scores declining",
    description: "Latest DevEx survey shows a 0.3 point decrease in overall satisfaction (from 8.5 to 8.2). Primary concerns: documentation quality and CI/CD reliability.",
    severity: "info" as const,
    timestamp: "1 day ago",
  },
  {
    title: "AI tool usage plateau detected",
    description: "AI coding assistant adoption has plateaued at 78% for the past 3 weeks. Data team shows lowest adoption at 45%.",
    severity: "info" as const,
    timestamp: "1 day ago",
    team: "Data Team",
  },
];

export default function Alerts() {
  const criticalAlerts = alerts.filter(a => a.severity === "critical");
  const warningAlerts = alerts.filter(a => a.severity === "warning");
  const infoAlerts = alerts.filter(a => a.severity === "info");
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Alerts & Anomalies
              </h1>
              <p className="text-muted-foreground">
                Monitor unusual patterns and performance degradations
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-border">
                Configure Thresholds
              </Button>
              <Button className="bg-primary hover:bg-primary-light">
                Acknowledge All
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-sm font-medium text-destructive">{criticalAlerts.length} Critical</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-warning" />
              <span className="text-sm font-medium text-warning">{warningAlerts.length} Warnings</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">{infoAlerts.length} Info</span>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-card border border-border mb-6">
            <TabsTrigger value="all">All Alerts ({alerts.length})</TabsTrigger>
            <TabsTrigger value="critical">Critical ({criticalAlerts.length})</TabsTrigger>
            <TabsTrigger value="warning">Warnings ({warningAlerts.length})</TabsTrigger>
            <TabsTrigger value="info">Info ({infoAlerts.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {alerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </TabsContent>
          
          <TabsContent value="critical" className="space-y-4">
            {criticalAlerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </TabsContent>
          
          <TabsContent value="warning" className="space-y-4">
            {warningAlerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </TabsContent>
          
          <TabsContent value="info" className="space-y-4">
            {infoAlerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
