import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Badge from '@/components/Badge';

const Projects = () => {
  const projects = [
    {
      title: "Synthetic Data Generation for Ego-centric HOI Detection",
      description: "A data generation tool built using Unity Perception package as a part of my Master Thesis for egocentric HOI detection",
      technologies: ["C#", "Unity"],
      githubUrl: "https://github.com/hansika-s/SynthDataGen.git"
    },
    {
      title: "Factory Layout Planning",
      description: (
        <>Part of my work at HCI Lab, published as <em>Applying Consistent Spatial Interaction Techniques to Factory Layout Planning</em></>
        ),
      technologies: ["C#", "Unity"],
      liveUrl: "https://doi.org/10.1007/978-3-031-93700-2_7",
    },
    {
      title: "Password Manager",
      description: "A CLI-based tool to manage passwords",
      technologies: ["Python"],
      githubUrl: "https://github.com/hansika-s/PasswordManager.git"
    },
    {
      title: "Tibetan Calligraphy VR Application - Nam Yang Bö",
      description: "Open-source contribution for a VR based calligraphy learning application",
      technologies: ["C#", "Unity"],
      liveUrl: "https://devpost.com/software/nam-yang-bod-tibetan-calligraphy",
      githubUrl: "https://github.com/estkm/TibetanCalligraphyVRapp"
    },
    // {
    //   title: "Contextualizer for Visual Analytics",
    //   description: "Collaborated with a team to build a contextualizer for the IEEE Vast Challenge 2023.",
    //   technologies: ["Python", "Dash", "Plotly"],
    //   // liveUrl: "https://demo-weather.com",
    //   // githubUrl: "https://github.com/yourusername/weather"
    // },
    // {
    //   title: "Portfolio Website",
    //   description: "Personal portfolio built with vibe coding.",
    //   technologies: ["Typescript", "React"],
    //   // liveUrl: "https://yourportfolio.com",
    //   // githubUrl: "https://github.com/yourusername/portfolio"
    // }
  ];

  // Function to get the primary link (prioritize liveUrl over githubUrl)
  const getPrimaryLink = (project) => {
    return project.liveUrl || project.githubUrl;
  };

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-heading font-light text-foreground mb-4">Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I've built, from web applications to design systems. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <a 
                href={getPrimaryLink(project)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <Button size="sm" variant="ghost" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" variant="ghost" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
