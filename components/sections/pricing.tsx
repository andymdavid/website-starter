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

export function Pricing({ title, subtitle, plans }: PricingProps) {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-2xl font-bold">{plan.price}<span className="text-sm font-normal">{plan.period}</span></p>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
