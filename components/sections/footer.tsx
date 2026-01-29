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

export function Footer({ logo, tagline }: FooterProps) {
  return (
    <footer className="border-t py-8">
      <Container>
        <div className="text-center space-y-2">
          <p className="font-semibold">{logo}</p>
          {tagline && <p className="text-sm text-muted-foreground">{tagline}</p>}
        </div>
      </Container>
    </footer>
  );
}
