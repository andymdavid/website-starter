import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface BenefitItem {
  title: string;
  description: string;
  icon?: string;
  highlight?: boolean;
  bullets?: string[];
}

interface BenefitsProps {
  title: string;
  subtitle?: string;
  items: BenefitItem[];
}

export function Benefits({ title, subtitle, items }: BenefitsProps) {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
