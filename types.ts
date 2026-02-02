
export interface BusinessInfo {
  id: string;
  ownerName: string;
  businessName: string;
  location: string;
  services: Service[];
  contactNumber: string;
  openingTime: string; // HH:mm format
  closingTime: string; // HH:mm format
  weeklyOff: string;
  mapEmbedUrl: string;
  logoLetter: string;
  logoGradient: string;
  logoImage?: string;
  websiteUrl?: string; // The public URL of the hosted site
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  basePrice?: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  serviceName: string;
  amount: string;
  paymentMethod: string;
  trxId: string;
  status: 'pending' | 'completed';
  timestamp: Date;
}

export type ViewState = 'home' | 'profile' | 'services' | 'pricing' | 'order' | 'contact' | 'admin' | 'login' | 'payment-success';
