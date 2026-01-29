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

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <Section variant="muted">
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-sm text-muted-foreground">{testimonials.length} testimonials</p>
      </Container>
    </Section>
  );
}
