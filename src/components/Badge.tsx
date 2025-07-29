import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border text-foreground bg-transparent',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export default Badge;