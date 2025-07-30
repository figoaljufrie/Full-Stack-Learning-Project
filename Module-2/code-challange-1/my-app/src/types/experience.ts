export interface Experience {
  objectId: string;
  companyName: string;
  position: string;
  from: string;
  to: string;
  description: string;
  category: 'fulltime' | 'freelance' | 'project';
}