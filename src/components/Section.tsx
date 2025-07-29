import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      id={id}
      className={cn('py-20', className)}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;