import { RecommendationCard } from "@/components/RecommendationCard";
import { FilterBar } from "@/components/FilterBar";

const recommendations = [
  {
    title: "Team A's code review times are 2x higher than org average",
    description: "The Platform team's average PR review time is 14.2 hours compared to the org average of 6.8 hours. Consider adding 2 more reviewers or implementing time-boxed review sessions.",
    impact: "high" as const,
    category: "Code Review",
  },
  {
    title: "Backend team deployment frequency dropping",
    description: "Backend team deployments decreased from 5.2/day to 3.8/day over the last 2 weeks. This correlates with increased incident response activities. Consider reviewing deployment automation.",
    impact: "high" as const,
    category: "Deployment",
  },
  {
    title: "AI tool adoption opportunity in Data team",
    description: "Data team has only 45% AI tool adoption compared to org average of 78%. Teams with higher AI adoption show 32% faster PR completion. Consider running AI assistant training sessions.",
    impact: "medium" as const,
    category: "AI Tools",
  },
  {
    title: "Frontend team showing excellent velocity improvement",
    description: "Frontend team's PR cycle time improved by 42% this month after adopting pair programming practices. Consider sharing these practices with other teams.",
    impact: "low" as const,
    category: "Best Practices",
  },
  {
    title: "Test coverage dropping below threshold",
    description: "Overall test coverage decreased from 84% to 76% over the last month. Backend and Platform teams show the largest decreases. Consider implementing coverage gates in CI/CD.",
    impact: "high" as const,
    category: "Quality",
  },
  {
    title: "Documentation gaps identified",
    description: "Developer satisfaction surveys highlight documentation as a pain point (7.2/10 satisfaction). The Platform API docs haven't been updated in 3 months despite 23 new endpoints.",
    impact: "medium" as const,
    category: "Documentation",
  },
  {
    title: "Opportunity to reduce incident response time",
    description: "Mean time to resolution (MTTR) is 4.2 hours vs industry benchmark of 2.8 hours. Consider implementing automated runbooks and improving observability coverage.",
    impact: "medium" as const,
    category: "Incidents",
  },
  {
    title: "CI/CD pipeline optimization needed",
    description: "Average pipeline duration increased from 8.5 min to 12.3 min. The Backend team's test suite is growing without parallel execution. Consider implementing test sharding.",
    impact: "medium" as const,
    category: "CI/CD",
  },
];

export default function Recommendations() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI-Driven Recommendations
          </h1>
          <p className="text-muted-foreground">
            Actionable insights to improve engineering performance and efficiency
          </p>
        </div>
        
        <div className="mb-6">
          <FilterBar />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, idx) => (
            <RecommendationCard key={idx} {...rec} />
          ))}
        </div>
      </div>
    </div>
  );
}
