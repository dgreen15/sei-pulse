import { IntegrationCard } from "@/components/IntegrationCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const integrations = [
  {
    name: "GitHub",
    description: "Track commits, PRs, and code reviews",
    icon: "🐙",
    enabled: true,
    lastSync: "2 minutes ago",
  },
  {
    name: "GitLab",
    description: "Alternative Git repository management",
    icon: "🦊",
    enabled: false,
  },
  {
    name: "Jira",
    description: "Issue tracking and project management",
    icon: "📋",
    enabled: true,
    lastSync: "5 minutes ago",
  },
  {
    name: "Linear",
    description: "Modern issue tracking and project planning",
    icon: "📐",
    enabled: true,
    lastSync: "1 minute ago",
  },
  {
    name: "Jenkins",
    description: "CI/CD pipeline automation",
    icon: "🔧",
    enabled: true,
    lastSync: "3 minutes ago",
  },
  {
    name: "CircleCI",
    description: "Continuous integration and delivery",
    icon: "⭕",
    enabled: false,
  },
  {
    name: "Anthropic",
    description: "AI coding assistant analytics",
    icon: "🤖",
    enabled: true,
    lastSync: "Just now",
  },
  {
    name: "OpenAI",
    description: "GPT-powered development tools",
    icon: "🧠",
    enabled: false,
  },
  {
    name: "Confluence",
    description: "Team documentation and knowledge base",
    icon: "📚",
    enabled: true,
    lastSync: "10 minutes ago",
  },
  {
    name: "Slack",
    description: "Team communication and notifications",
    icon: "💬",
    enabled: true,
    lastSync: "1 minute ago",
  },
  {
    name: "PagerDuty",
    description: "Incident response and on-call management",
    icon: "🚨",
    enabled: false,
  },
  {
    name: "Datadog APM",
    description: "Application performance monitoring",
    icon: "📊",
    enabled: true,
    lastSync: "30 seconds ago",
  },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Integrations
            </h1>
            <p className="text-muted-foreground">
              Connect your development tools to power SEI insights
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-light">
            <Plus className="h-4 w-4 mr-2" />
            Add Integration
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, idx) => (
            <IntegrationCard key={idx} {...integration} />
          ))}
        </div>
      </div>
    </div>
  );
}
