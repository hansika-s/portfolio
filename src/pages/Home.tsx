import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '@/components/Badge';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Name with turquoise gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-display font-medium text-foreground relative inline-block">
                Hansika Subbaraj
              </h1>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-px bg-primary mx-auto origin-center"
            ></motion.div>

            {/* Subtitle */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted-foreground font-sans font-medium"
            >
              Software Engineer
            </motion.p> */}

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Hi, I’m a Computer Science graduate student, currently interning at Continental in VR. I enjoy working at the intersection of design and development.             
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;