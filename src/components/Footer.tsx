import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { NAME, EMAIL, GITHUB, LINKEDIN } from '../constants';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href={`https://github.com/${GITHUB}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:{EMAIL}`}
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2025 {NAME} 
               {/* Brewed with <Heart className="h-4 w-4 text-red-500"/> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;