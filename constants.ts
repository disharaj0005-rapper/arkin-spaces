import { ContactInfo, NavItem, ServiceItem, StatItem } from './types';

export const COMPANY_NAME = "ARKIN SPACES";

export const CONTACT_DETAILS: ContactInfo = {
  email: "office@arkinspaces.com",
  location: "Basaveshwaranager, Bangalore",
  phone: "8050342197"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Interior & Fit Outs",
    description: "Bespoke interior execution blending functionality with premium aesthetics.",
    image: "/images/properties-1.jpg"
  },
  {
    title: "Civil Works",
    description: "Comprehensive civil engineering solutions ensuring structural integrity and precision execution.",
    image: "/images/properties-2.jpg"
  },
  {
    title: "Project Management Consultancy",
    description: "End-to-end execution ensuring timely delivery within budget and scope.",
    image: "/images/properties-3.jpg"
  }
];

export const STATS: StatItem[] = [
  { value: "150+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" }
];