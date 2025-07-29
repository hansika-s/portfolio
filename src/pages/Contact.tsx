import { motion } from 'framer-motion';
import { NAME, EMAIL, GITHUB, LINKEDIN } from '../constants';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`
    },
    {
      icon: Github,
      label: "GitHub",
      value: `@${GITHUB}`,
      href: `https://github.com/${GITHUB}`
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: NAME,
      href: `https://linkedin.com/in/${LINKEDIN}`
    }
  ];

  return (
    <motion.div 
      className="pt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-heading font-light text-foreground mb-4">Contact</h1>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
          </p> */}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                Let's connect! I'm open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-border hover:bg-accent/30 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <link.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-accent/20 border border-border/50">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p className="font-medium text-foreground">Currently Available</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                I'm currently seeking full-time opportunities. Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;