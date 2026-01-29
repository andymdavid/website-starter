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
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, index) => (
              <span key={index} className="text-muted-foreground">
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
