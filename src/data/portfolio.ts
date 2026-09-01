export type Project = {
  index: string;
  title: string;
  label: string;
  detail: string;
  outcome: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    index: '01',
    title: 'UPI interface rebuild',
    label: 'Go · Payments infrastructure',
    detail:
      'Rebuilt a bank’s UPI interface with goroutine-per-connection TCP, length-prefixed framing, an idempotent PostgreSQL journal and a COBOL bridge.',
    outcome: '2–3 lakh transactions a day',
    technologies: ['Go', 'TCP', 'PostgreSQL', 'COBOL'],
  },
  {
    index: '02',
    title: 'IMPS payment switch',
    label: 'Java · Certified payments rail',
    detail:
      'Architected and implemented an NPCI-certified IMPS payment switch through end-to-end UAT and certification.',
    outcome: '8–10k daily transactions',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Oracle'],
  },
  {
    index: '03',
    title: 'Core-banking protocol adapter',
    label: 'Python · Legacy integration',
    detail:
      'Built a FastAPI gateway translating JSON/REST requests into a legacy fixed-width ASCII protocol over TCP, with XML-defined transaction specifications and Redis-backed session state.',
    outcome: '300 transaction types',
    technologies: ['Python', 'FastAPI', 'Redis', 'XML'],
  },
  {
    index: '04',
    title: 'Bank reporting platform',
    label: 'Building · Authorization platform',
    detail:
      'Building a three-service reporting platform where identity and access are deliberately separated and permissions are re-checked for every request.',
    outcome: '21 roles × 15 domains',
    technologies: ['Java 21', 'Next.js', 'FastAPI', 'PostgreSQL'],
  },
];

export const principles = [
  {
    number: '01',
    title: 'Correct at the boundary',
    body: 'Framing, exact reads and controlled lifecycles make legacy integration predictable instead of fragile.',
  },
  {
    number: '02',
    title: 'State that protects money',
    body: 'Idempotency and explicit pending states make indeterminate dependency outcomes recoverable.',
  },
  {
    number: '03',
    title: 'Access is a decision',
    body: 'A session proves identity. Authorization is re-evaluated where the request meets the protected action.',
  },
];

export const capabilityGroups = [
  {
    title: 'Payments & banking',
    items: ['UPI', 'IMPS', 'NPCI', 'Core banking', 'Digital banking'],
  },
  {
    title: 'Backend & integration',
    items: ['Go', 'Java', 'Python', 'Spring Boot', 'FastAPI', 'TCP', 'Kafka', 'gRPC'],
  },
  {
    title: 'Data & state',
    items: ['PostgreSQL', 'Oracle', 'Redis', 'SQL', 'XML'],
  },
  {
    title: 'Platform delivery',
    items: ['AWS', 'Docker/Podman', 'Linux', 'Gitea CI/CD'],
  },
];
