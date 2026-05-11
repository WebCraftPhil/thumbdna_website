import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BrainCircuit,
  Clock3,
  Eye,
  FileImage,
  Sparkles,
  SquareKanban,
  Users,
} from 'lucide-react';

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Support', href: '/support' },
  { label: 'Login', href: '/login' },
  { label: 'Get Started', href: '/#pricing', highlight: true },
] as const;

export const featureItems: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Brand Kit Storage',
    description: 'Save logos, colors, fonts, faces, and thumbnail references in one reusable system.',
    icon: SquareKanban,
  },
  {
    title: 'AI Thumbnail Generation',
    description: 'Create high-converting concepts in seconds from a single title prompt.',
    icon: Sparkles,
  },
  {
    title: 'Multiple Variations',
    description: 'Generate three or more directions so you can pick the strongest click magnet.',
    icon: ArrowRight,
  },
  {
    title: 'Face Photo Integration',
    description: 'Blend the creator into every layout without losing the brand signature.',
    icon: Users,
  },
  {
    title: 'One-Click Export',
    description: 'Export ready-to-upload images without leaving the workflow.',
    icon: FileImage,
  },
  {
    title: 'Prompt Preview',
    description: 'See what the AI is using so every generation stays explainable and editable.',
    icon: Eye,
  },
  {
    title: 'Reference Learning',
    description: 'Train from past winners so each new thumbnail gets smarter over time.',
    icon: BrainCircuit,
  },
  {
    title: 'Saved Generations',
    description: 'Keep a searchable record of what worked for each video, series, and brand.',
    icon: Clock3,
  },
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    interval: 'forever',
    description: 'Test the workflow and see what ThumbDNA can do before upgrading.',
    features: ['3 generations total', 'Watermarked previews'],
    cta: 'Start Free',
    href: '/support',
    highlighted: false,
  },
  {
    name: 'Creator',
    price: '$19',
    interval: 'per month',
    description: 'Best for solo creators who need fast, repeatable thumbnail production.',
    features: ['100 generations per month', 'HD exports', 'Save Brand DNA', 'No watermark'],
    cta: 'Choose Creator',
    href: '/support?plan=creator',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$49',
    interval: 'per month',
    description: 'For power users managing multiple series and more advanced workflows.',
    features: ['500 generations per month', 'Multiple brand kits', 'Priority generation', 'Team collaboration'],
    cta: 'Choose Pro',
    href: '/support?plan=pro',
    highlighted: false,
  },
  {
    name: 'Agency',
    price: '$99',
    interval: 'per month',
    description: 'Built for client work, white-label delivery, and high-volume teams.',
    features: ['Unlimited generations', 'Client workspaces', 'White-label exports'],
    cta: 'Choose Agency',
    href: '/support?plan=agency',
    highlighted: false,
  },
] as const;

export const faqItems = [
  {
    question: 'How does ThumbDNA work?',
    answer:
      'You upload your logo, colors, fonts, face photo, and references once. ThumbDNA stores that Brand DNA and uses it every time you generate a new thumbnail.',
  },
  {
    question: 'What image model powers the app?',
    answer:
      'ThumbDNA is designed to be model-flexible. The generation pipeline can swap between supported image models as the product evolves.',
  },
  {
    question: 'Can I upload my own face and logo?',
    answer:
      'Yes. The workflow is built for creator branding, so your face, logo, colors, and reference thumbnails all become part of the system.',
  },
  {
    question: 'Do unused generations roll over?',
    answer:
      'Monthly generation allowances reset each billing cycle unless your account specifically includes rollover terms.',
  },
  {
    question: 'Can agencies manage multiple brands?',
    answer:
      'Yes. The Pro and Agency tiers are built so teams can organize multiple creator brands inside separate workspaces.',
  },
] as const;

export const showcaseThumbs = [
  { src: '/showcase/thumb-1.png', alt: 'Generated thumbnail showing a creator pointing at a bold comparison layout' },
  { src: '/showcase/thumb-2.png', alt: 'Generated thumbnail showing a vibrant lifestyle setup with bold text' },
  { src: '/showcase/thumb-3.png', alt: 'Generated thumbnail showing an AI surprise concept with before and after framing' },
  { src: '/showcase/thumb-4.png', alt: 'Generated thumbnail showing an AI surprise concept with dramatic pointing gesture' },
] as const;

export const supportCategories = [
  'Billing',
  'Technical Support',
  'Feature Requests',
] as const;
