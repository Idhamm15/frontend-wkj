export interface Service {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    status: 'available' | 'limited';
    rating: number;
    type: 'Service' | 'Product';
    description?: string;
  }
  
  export interface ServiceGridProps {
    services: Service[];
    showSearch?: boolean;
    maxItems?: number;
    showCategories?: boolean;
    showSort?: boolean;
    className?: string;
  }