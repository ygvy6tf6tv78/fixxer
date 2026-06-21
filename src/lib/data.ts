import {
  AirVent,
  BatteryCharging,
  BriefcaseBusiness,
  Camera,
  Droplets,
  HousePlug,
  Laptop,
  Monitor,
  Router,
  ShieldCheck,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  { name: "AC Repair & Service", slug: "ac-repair-jammu", description: "Cooling issues, servicing, gas refill, installation and maintenance.", icon: AirVent, featured: true },
  { name: "Electrician", slug: "electrician-jammu", description: "Switches, wiring, fittings, power faults and electrical installations.", icon: HousePlug, featured: true },
  { name: "Plumber", slug: "plumber-jammu", description: "Leaks, blockages, fittings, tanks and everyday plumbing repairs.", icon: Droplets, featured: true },
  { name: "CCTV Installation", slug: "cctv-installation-jammu", description: "Camera setup, DVR support, repairs and security system maintenance.", icon: Camera, featured: true },
  { name: "Laptop Support", slug: "laptop-repair-jammu", description: "Hardware diagnosis, software support, upgrades and maintenance.", icon: Laptop, featured: true },
  { name: "Mobile Repair", slug: "mobile-repair-jammu", description: "Screen, battery, charging, software and device diagnostics.", icon: Smartphone, featured: true },
  { name: "TV Repair", slug: "tv-repair-jammu", description: "Display, sound, power, mounting and smart TV support.", icon: Monitor },
  { name: "RO Service", slug: "ro-service-jammu", description: "Filter service, installation, leakage and water quality support.", icon: ShieldCheck },
  { name: "Appliance Repair", slug: "appliance-repair-jammu", description: "Diagnosis and repair for essential home appliances.", icon: Wrench },
  { name: "Wi-Fi / Router Setup", slug: "wifi-router-setup-jammu", description: "New setup, coverage issues, configuration and troubleshooting.", icon: Router },
  { name: "Inverter / Battery", slug: "inverter-battery-jammu", description: "Installation, battery checks, backup issues and maintenance.", icon: BatteryCharging },
  { name: "Business Maintenance", slug: "business-maintenance-jammu", description: "Managed repair and preventive maintenance for business spaces.", icon: BriefcaseBusiness },
];

export const areas = [
  "Gandhi Nagar", "Trikuta Nagar", "Channi Himmat", "Sainik Colony",
  "Bahu Plaza", "Talab Tillo", "Janipur", "Roop Nagar", "Bantalab",
  "Jewel", "Gangyal", "Satwari", "Kunjwani", "Greater Kailash",
  "Narwal", "Bari Brahmana",
];

export const steps = [
  { number: "01", title: "Tell us what's wrong", text: "Choose a service and share the issue. Add photos or a video for a faster review." },
  { number: "02", title: "Review your estimate", text: "Fixerr reviews the request and shares the right next step before work starts." },
  { number: "03", title: "Expert gets assigned", text: "A verified expert is assigned for your preferred area and time slot." },
  { number: "04", title: "Track it to done", text: "Follow clear updates through completion, payment and service warranty." },
];
