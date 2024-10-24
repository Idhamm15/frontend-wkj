export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    href: string;
  }
  
  export interface MenuData {
    menuItems: string[];
    services: Service[];
  }