import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface FinalCtaProps {
  title: string;
  subtitle?: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

export function FinalCta({ title, subtitle, ctaPrimary, ctaSecondary }: FinalCtaProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          <div className="flex justify-center gap-4">
            <span className="text-sm">[{ctaPrimary}]</span>
            {ctaSecondary && <span className="text-sm text-muted-foreground">[{ctaSecondary}]</span>}
          </div>
        </div>
      </Container>
    </Section>
  );
}
