export interface NavLinkItem {
  label: string;
  href: string;
}

export interface BgvNavbarProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  brandName?: string;
  navLinks: NavLinkItem[];
  demoButtonText?: string;
  onDemoClick?: () => void;
  demoHref?: string;
}

export interface BgvHeroProps {
  headline: string;
  subheadline: string;
  primaryButton: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  images: {
    mainMockup: string;
    leftCard: string;
    rightCard: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconSrc?: string;
}

export interface BgvWhyImportantProps {
  title: string;
  subtitle: string;
  centerImage: string;
  features: {
    topLeft: FeatureItem;
    bottomLeft: FeatureItem;
    topRight: FeatureItem;
    bottomRight: FeatureItem;
  };
}

export interface BgvCapabilitiesProps {
  sectionTag: string;
  title: string;
  iconSrc?: string;
  capabilities: string[];
  showcaseImage: string;
}

export interface StepItem {
  stepNumber?: number;
  title: string;
  description: string;
}

export interface BgvHowItWorksProps {
  title: string;
  illustrationImage: string;
  steps: StepItem[];
}

export interface StatItem {
  value: string;
  title: string;
  description: string;
}

export interface BgvStatsProps {
  heading: string;
  subheading: string;
  stats: StatItem[];
}

export interface BgvContactCtaProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  emailPlaceholder?: string;
  companyPlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: { email: string; company: string }) => void;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

export interface SocialLinkItem {
  iconSrc: string;
  href: string;
  ariaLabel: string;
}

export interface BgvFooterProps {
  brandName: string;
  trademark?: string;
  tagline: string;
  logoSrc: string;
  socialLinks: SocialLinkItem[];
  columns: FooterColumn[];
  copyrightText: string;
}

export interface BgvServicePageData {
  hero: BgvHeroProps;
  whyImportant: BgvWhyImportantProps;
  capabilities: BgvCapabilitiesProps;
  howItWorks: BgvHowItWorksProps;
  stats: BgvStatsProps;
  contactCta: BgvContactCtaProps;
}
