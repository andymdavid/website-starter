import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface FinalCtaProps {
  title: string;
  subtitle?: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

export function FinalCta({ title }: FinalCtaProps) {
  return (
    <Section variant="muted">
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      </Container>
    </Section>
  );
}
