export interface PersonalDetails {
  name: string;
  address: string;
  telephone: string;
  email: string;
  links: Array<{ href: string; text: string }>;
}
export interface Education {
  name: string;
  from: string;
  to: string;
  coursework?: string | Array<string>;
  honors?: string;
}

export interface Experience {
  name: string;
  from: string;
  to: string | "current";
  summary?: string;
  details: Array<string>;
}

export interface Resume {
  id: number;
  personalDetails: PersonalDetails;
  objective: string;
  skills: Array<string>;
  experience: Array<Experience>;
  education: Array<Education>;
}
