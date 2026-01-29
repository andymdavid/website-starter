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

export function Faq({ title, subtitle, faqs }: FaqProps) {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
