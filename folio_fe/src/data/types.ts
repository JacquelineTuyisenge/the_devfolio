export interface BlogSection {
    heading: string;
    content: string;
  }
  
  export interface Blog {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    tags: string[];
    coverImage: string;
    author: string;
    sections?: BlogSection[];
  }
  