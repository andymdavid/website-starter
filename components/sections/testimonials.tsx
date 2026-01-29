import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <p className="text-sm">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold mt-2">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
