import { Project, Experience, SkillCategory, ContactData, Education } from './types';

export const contactData: ContactData = {
  github: {
    label: "GitHub",
    url: "https://github.com/prerojan" // SUBSTITUA COM SEU USUÁRIO SE NECESSÁRIO
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/carlosAnalyst" // SUBSTITUA COM SUA URL SE NECESSÁRIO
  },
  email: {
    label: "E-mail",
    address: "carlosrenan.fullstack@gmail.com", // SUBSTITUA COM SEU EMAIL SE NECESSÁRIO
    mailto: "mailto:carlosrenan.fullstack@gmail.com"
  },
  whatsapp: {
    label: "WhatsApp",
    url: "https://wa.me/5538997455854" // SUBSTITUA COM SEU WHATSAPP SE NECESSÁRIO
  }
};

export const projects: Project[] = [
  {
    name: "AdegaOS",
    type: "Business Management System (ERP)",
    status: "Em desenvolvimento",
    url: "https://adegaos-demo.vercel.app",
    description: "Sistema de gestão operacional desenvolvido após identificar gargalos reais em uma adega. Centraliza pedidos, estoque, financeiro, fornecedores, dashboards e fluxo operacional.",
    problem: "Gargalos operacionais críticos, perda financeira por falha no controle manual de estoque e falta de dados centralizados para tomada de decisão ágil em comércios de bebidas.",
    solution: "Um ERP modular e de alta performance que centraliza o controle de pedidos, fornecedores, contas a pagar/receber e gera dashboards inteligentes de saúde financeira em tempo real.",
    result: "Otimização radical no tempo de processamento de pedidos, eliminação de erros de inventário e visibilidade total das margens operacionais do negócio.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Recharts"]
  },
  {
    name: "FitLoot",
    type: "Gamified Fitness Platform",
    status: "Em desenvolvimento",
    url: "https://fitloot.vercel.app",
    description: "Plataforma fitness gamificada que utiliza progressão, missões, recompensas e interação social para aumentar o engajamento e a consistência dos usuários.",
    problem: "Baixo índice de retenção e consistência em treinos físicos, gerado pela falta de motivação intrínseca nos aplicativos tradicionais de saúde.",
    solution: "Implementação de mecânicas de RPG aplicadas ao treino (gamificação), onde o esforço real do usuário é convertido em conquistas, progresso de avatar, missões dinâmicas e recompensas.",
    result: "Aumento considerável no engajamento por meio do reforço positivo contínuo, gerando recorrência orgânica de treinos na rotina do usuário.",
    tech: ["React", "Vite", "Firebase Auth", "Firestore", "Framer Motion", "Tailwind CSS"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Analista de Controladoria",
    company: "Agrícola Fukugauti",
    period: "2024 - 2025",
    description: "Atuação focada no desenvolvimento e otimização de controles operacionais e financeiros, além de mapeamento estratégico de fluxos.",
    achievements: [
      "Desenvolvimento e melhoria contínua de planilhas complexas e ferramentas de controle para maior precisão financeira.",
      "Análise rigorosa de indicadores-chave de desempenho (KPIs) para subsidiar tomadas de decisão estratégicas.",
      "Mapeamento de processos entre diferentes setores, garantindo maior sinergia e eliminação de gargalos operacionais.",
      "Apoio direto a processos de auditoria interna, controle de custos operacionais e validação/organização de dados estruturados."
    ]
  },
  {
    role: "Atendente de Call Center",
    company: "VGX Contact Center",
    period: "2025",
    description: "Atendimento de alta performance ao cliente, suporte administrativo e operacional, com ênfase na otimização de bases de dados.",
    achievements: [
      "Suporte e atendimento consultivo ao cliente via telefone e e-mail, garantindo excelentes índices de satisfação.",
      "Registro, organização e saneamento de dados de clientes em sistema CRM, otimizando a qualidade da base corporativa.",
      "Suporte administrativo nas rotinas internas do setor, incluindo gestão de documentos digitais e agendamento de tarefas."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bacharelado em Sistemas de Informação",
    institution: "Instituto Federal do Norte de Minas Gerais (IFNMG)",
    period: "Em curso"
  },
  {
    degree: "Técnico em Informática",
    institution: "Instituto Federal do Norte de Minas Gerais (IFNMG)",
    period: "2021 - 2023"
  },
  {
    degree: "Ensino Médio Completo",
    institution: "Escola Estadual de Guaicuí",
    period: "2020 - 2022"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Análise de Processos & Controladoria",
    description: "Mapeamento, organização de informações e otimização de fluxos de trabalho visando eficiência operacional.",
    iconName: "BarChart3",
    skills: [
      "Análise e Melhoria de Processos",
      "Mapeamento de Fluxos de Trabalho",
      "Análise de Indicadores (KPIs)",
      "Apoio a Auditoria & Custos",
      "Organização e Validação de Dados",
      "Pensamento Analítico e Resolução de Problemas"
    ]
  },
  {
    title: "Tecnologia & Sistemas",
    description: "Sólida base acadêmica e técnica em TI combinada ao desenvolvimento moderno de sistemas web.",
    iconName: "Code2",
    skills: [
      "Sistemas de Informação (IFNMG)",
      "Desenvolvimento Full Stack (React, Node, SQL)",
      "Gestão e Registro em Sistemas CRM",
      "Familiaridade com Ferramentas de Banco de Dados",
      "Domínio do Pacote Office (Excel Avançado / Word)",
      "Lógica de Programação e Arquitetura de Software"
    ]
  },
  {
    title: "Competências Comportamentais",
    description: "Diferenciais interpessoais e de atitude que facilitam a entrega ágil e integrada de projetos.",
    iconName: "Settings2",
    skills: [
      "Comunicação Clara e Efetiva",
      "Organização e Extrema Atenção a Detalhes",
      "Proatividade, Adaptabilidade e Aprendizado Rápido",
      "Trabalho em Equipe e Colaboração",
      "Foco em Resultados e Alinhamento com o Negócio",
      "Resolução de Problemas com Abordagem Analítica"
    ]
  }
];
