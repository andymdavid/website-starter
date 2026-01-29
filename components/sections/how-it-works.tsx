import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface Step {
  title: string;
  description: string;
  icon?: string;
  bullets?: string[];
}

interface HowItWorksProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  note?: string;
}

export function HowItWorks({ title, subtitle, steps }: HowItWorksProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <span className="text-sm text-muted-foreground">Step {index + 1}</span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
