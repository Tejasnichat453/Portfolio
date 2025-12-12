import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const contactInfo = [
  { 
    icon: Mail, 
    title: 'Email', 
    value: 'devops@example.com', 
    link: 'mailto:devops@example.com' 
  },
  { 
    icon: Phone, 
    title: 'Phone', 
    value: '+1 (234) 567-890', 
    link: 'tel:+1234567890' 
  },
  { 
    icon: Linkedin, 
    title: 'LinkedIn', 
    value: 'linkedin.com/in/devops-engineer', 
    link: 'https://linkedin.com/in/devops-engineer' 
  },
  { 
    icon: Github, 
    title: 'GitHub', 
    value: 'github.com/devopsengineer', 
    link: 'https://github.com/devopsengineer' 
  },
];