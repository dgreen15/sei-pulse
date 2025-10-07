import { Card } from "@/components/ui/card";
import { FilterBar } from "@/components/FilterBar";
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const satisfactionData = [
  { category: "Tools", score: 8.2, fill: "hsl(var(--primary))" },
  { category: "Process", score: 7.8, fill: "hsl(var(--primary-light))" },
  { category: "Docs", score: 7.2, fill: "hsl(var(--muted))" },
];

const sentimentData = [
  { month: "Jan", positive: 72, neutral: 20, negative: 8 },
  { month: "Feb", positive: 75, neutral: 18, negative: 7 },
  { month: "Mar", positive: 78, neutral: 16, negative: 6 },
  { month: "Apr", positive: 80, neutral: 15, negative: 5 },
  { month: "May", positive: 82, neutral: 14, negative: 4 },
  { month: "Jun", positive: 85, neutral: 12, negative: 3 },
];

export default function DevEx() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Developer Experience
          </h1>
          <p className="text-muted-foreground">
            Track team satisfaction and identify areas for improvement
          </p>
        </div>
        
        <div className="mb-6">
          <FilterBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Overall Satisfaction</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold text-foreground">8.2</h3>
                <span className="text-success text-sm font-medium">+0.4</span>
              </div>
              <p className="text-xs text-muted-foreground">out of 10 (last 30 days)</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Response Rate</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold text-foreground">89%</h3>
                <span className="text-success text-sm font-medium">+5%</span>
              </div>
              <p className="text-xs text-muted-foreground">of developers participated</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Sentiment Trend</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">+85%</h3>
                <span className="text-success text-sm font-medium">Positive</span>
              </div>
              <p className="text-xs text-muted-foreground">developers report positive sentiment</p>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Satisfaction by Category
            </h3>
            <div className="space-y-4">
              {satisfactionData.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.category}</span>
                    <span className="text-sm font-semibold text-primary">{item.score}/10</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                      style={{ width: `${(item.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <h4 className="font-medium text-foreground text-sm">Top Requested Improvements</h4>
              {[
                "Better CI/CD pipeline reliability",
                "Improved documentation search",
                "Faster code review turnaround",
                "More testing environment capacity"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Sentiment Over Time
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={sentimentData}>
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
                <Bar dataKey="positive" stackId="a" fill="hsl(var(--success))" name="Positive" radius={[0, 0, 0, 0]} />
                <Bar dataKey="neutral" stackId="a" fill="hsl(var(--muted))" name="Neutral" radius={[0, 0, 0, 0]} />
                <Bar dataKey="negative" stackId="a" fill="hsl(var(--destructive))" name="Negative" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
        
        <Card className="p-6 bg-gradient-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Survey Responses</h3>
          <div className="space-y-4">
            {[
              { author: "Alex M.", team: "Platform", comment: "The new CI/CD improvements have significantly reduced our deployment friction. Great work!", sentiment: "positive" },
              { author: "Sarah K.", team: "Frontend", comment: "Code review times are still a bottleneck for us. Would love to see more focus on this.", sentiment: "neutral" },
              { author: "James L.", team: "Backend", comment: "AI coding tools have been a game changer. My productivity has doubled in the last month.", sentiment: "positive" },
              { author: "Maria P.", team: "Data", comment: "Documentation could use improvement, especially around new API endpoints.", sentiment: "neutral" },
            ].map((response, idx) => (
              <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-semibold">
                      {response.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{response.author}</p>
                      <p className="text-xs text-muted-foreground">{response.team} Team</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    response.sentiment === "positive" 
                      ? "bg-success/10 text-success" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {response.sentiment === "positive" ? "😊 Positive" : "😐 Neutral"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{response.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
