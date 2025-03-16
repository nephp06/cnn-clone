import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/bnn-logo.svg"
        alt="BNN Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
} 