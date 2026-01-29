import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface PricingProps {
  title: string;
  subtitle?: string;
  plans: Plan[];
}

export function Pricing({ title, plans }: PricingProps) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-sm text-muted-foreground">{plans.length} plans</p>
      </Container>
    </Section>
  );
}
