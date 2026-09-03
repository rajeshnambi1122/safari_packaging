import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Safari Packaging',
  description: 'Get in touch with Safari Packaging for all your custom food packaging needs, wholesale quotes, and sample requests.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
