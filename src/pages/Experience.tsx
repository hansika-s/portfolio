import { motion } from 'framer-motion';
import { Laptop, GraduationCap } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: "3D and Virtual Reality Development - Intern",
      company: "Continental Automotive Technologies",
      period: "04/2025 - Present",
      description: "Contributing to development of Generative AI based Digital Vehicle Personalization."
    },
    {
      title: "Research Assistant",
      company: "DFKI Kaiserslautern",
      period: "10/2023 - 03/2025",
      description: (
        <>Smart Worker Assistance - worked within the projects: InCoRAP, <a href="https://youtu.be/XqUhCVUpXRY?feature=shared&t=252" target="_blank" rel="noopener noreferrer" className="text-primary underline">KI4ETA</a> and Twin4Trucks in the areas of XR and Computer Vision.</>
      ),
    },
    {
      title: "Student Researcher",
      company: "Dept. HCI, RPTU Kaiserslautern",
      period: "06/2023 - 03/2025",
      description: "Research and Development - Factory Layout Planning."
    },
    {
      title: "Software Developer Intern",
      company: "IIIT Hyderabad",
      period: "01/2021 - 05/2021",
      description: "Designed and developed an agro-advisory application using React Native."
    }
  ];

  const education = [
    {
      degree: "M.Sc Computer Science",
      school: "RPTU Kaiserslautern, Germany",
      period: "2021 - Present"
    },
    {
      degree: "B.Tech Computer Science and Engineering",
      school: "Manipal University Jaipur, India",
      period: "2017 - 2021"
    }
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-heading font-light text-foreground mb-4">Experience</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development and design, building meaningful products and growing with amazing teams.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Laptop className="h-6 w-6 text-primary" />
            <h2 className="text-subheading font-light text-foreground">
              Work Experience
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-medium text-foreground flex-1">{job.title}</h3>
                  <span className="text-muted-foreground font-mono text-sm shrink-0 bg-muted px-2 py-1 rounded text-xs">
                    {job.period}
                  </span>
                </div>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-subheading font-light text-foreground">
              Education
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-medium text-foreground flex-1">{edu.degree}</h3>
                  <span className="text-muted-foreground font-mono text-sm shrink-0 bg-muted px-2 py-1 rounded text-xs">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;