import { Container } from "@/components/layout/container";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  items: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
}

interface FooterProps {
  logo: string;
  tagline?: string;
  links?: FooterLinkGroup[];
  social?: SocialLink[];
}

export function Footer({ logo }: FooterProps) {
  return (
    <footer className="border-t py-8">
      <Container>
        <p className="text-center text-sm">{logo}</p>
      </Container>
    </footer>
  );
}
