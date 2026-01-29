import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function Faq({ title, faqs }: FaqProps) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-sm text-muted-foreground">{faqs.length} questions</p>
      </Container>
    </Section>
  );
}
