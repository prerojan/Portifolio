export interface Project {
  name: string;
  type: string;
  status: string;
  url: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
  description: string;
}

export interface ContactData {
  github: {
    label: string;
    url: string;
  };
  linkedin: {
    label: string;
    url: string;
  };
  email: {
    label: string;
    address: string;
    mailto: string;
  };
  whatsapp: {
    label: string;
    url: string;
  };
}
