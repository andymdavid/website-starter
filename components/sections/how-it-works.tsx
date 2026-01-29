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

export function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <Section variant="muted">
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-sm text-muted-foreground">{steps.length} steps</p>
      </Container>
    </Section>
  );
}
