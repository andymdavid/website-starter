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

export function Benefits({ title, items }: BenefitsProps) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-sm text-muted-foreground">{items.length} benefits</p>
      </Container>
    </Section>
  );
}
