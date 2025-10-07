import { Card } from "@/components/ui/card";
import { FilterBar } from "@/components/FilterBar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const aiAdoptionData = [
  { month: "Jan", withAI: 42, withoutAI: 38 },
  { month: "Feb", withAI: 45, withoutAI: 39 },
  { month: "Mar", withAI: 48, withoutAI: 38 },
  { month: "Apr", withAI: 52, withoutAI: 40 },
  { month: "May", withAI: 55, withoutAI: 39 },
  { month: "Jun", withAI: 58, withoutAI: 41 },
];

const aiUsageData = [
  { week: "W1", usage: 45 },
  { week: "W2", usage: 52 },
  { week: "W3", usage: 58 },
  { week: "W4", usage: 65 },
  { week: "W5", usage: 71 },
  { week: "W6", usage: 78 },
];

export default function AIRoi() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Investment ROI Analysis
          </h1>
          <p className="text-muted-foreground">
            Track the impact of AI coding assistants on engineering productivity
          </p>
        </div>
        
        <div className="mb-6">
          <FilterBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">AI Adoption Rate</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold text-foreground">78%</h3>
                <span className="text-success text-sm font-medium">+23%</span>
              </div>
              <p className="text-xs text-muted-foreground">of developers actively using AI tools</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Velocity Improvement</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold text-foreground">+32%</h3>
                <span className="text-success text-sm font-medium">↑ 8pts</span>
              </div>
              <p className="text-xs text-muted-foreground">faster PR completion with AI assistance</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">AI ROI Index</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">8.7</h3>
                <span className="text-success text-sm font-medium">Excellent</span>
              </div>
              <p className="text-xs text-muted-foreground">composite score of AI investment value</p>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              PR Throughput: AI vs Non-AI
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={aiAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="withAI" fill="hsl(var(--primary))" name="With AI" radius={[4, 4, 0, 0]} />
                <Bar dataKey="withoutAI" fill="hsl(var(--muted))" name="Without AI" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              AI Tool Usage Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={aiUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        
        <Card className="p-6 bg-gradient-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">AI-Assisted Metrics by Team</h3>
          <div className="space-y-4">
            {[
              { team: "Platform Team", aiPRs: 89, avgTime: "4.2h", improvement: "+38%" },
              { team: "Frontend Team", aiPRs: 76, avgTime: "5.1h", improvement: "+28%" },
              { team: "Backend Team", aiPRs: 82, avgTime: "6.3h", improvement: "+31%" },
              { team: "Data Team", aiPRs: 71, avgTime: "7.8h", improvement: "+22%" },
            ].map((team, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{team.team}</p>
                  <p className="text-sm text-muted-foreground">Average PR completion time: {team.avgTime}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{team.aiPRs}%</p>
                    <p className="text-xs text-muted-foreground">AI-assisted PRs</p>
                  </div>
                  <div className="px-3 py-1.5 bg-success/10 border border-success/20 rounded-lg">
                    <p className="text-sm font-semibold text-success">{team.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
