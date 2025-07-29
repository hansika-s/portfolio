import { motion } from 'framer-motion';
import { Code, Brain, Laptop, Settings, Languages } from 'lucide-react';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C#", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "OpenCV"]
    },
    {
      title: "XR Development",
      icon: Laptop,
      skills: ["Unity3D", "XR Interaction Toolkit", "ARKit", "Vuforia", "Devices: Meta Quest, HoloLens, Vision Pro, HTC Vive"]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: ["Git", "VSCode", "Figma", "Blender", "Jira"]
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English(Professional)", "German(Intermediate)", "Telugu(Native)"]
    }
  ];

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-heading font-light text-foreground mb-4">Skills</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise spans across XR development, AI/ML, and modern web technologies.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-border via-primary/20 to-transparent"></div>
                      </div>
                      <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: (index * 0.1) + (skillIndex * 0.05) 
                            }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-sm leading-relaxed hover:text-foreground transition-colors relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-primary/50"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;