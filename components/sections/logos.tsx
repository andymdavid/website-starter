import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface LogoItem {
  name: string;
  src?: string;
  href?: string;
}

interface LogosProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
}

export function Logos({ title, logos }: LogosProps) {
  return (
    <Section variant="muted">
      <Container>
        <p className="text-center text-sm text-muted-foreground">{title}</p>
        <p className="text-center text-xs text-muted-foreground">{logos.length} logos</p>
      </Container>
    </Section>
  );
}
