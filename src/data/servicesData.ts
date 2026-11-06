import type { ServiceData } from '../types/monitoring';

export const servicesData: ServiceData[] = [
  {
    id: 'consulting',
    title: 'Requirement-Driven Consulting & Site Survey',
    step: 'Phase 01',
    description: 'We analyze your site geotechnical conditions, risk profiles, and regulatory compliance standards to architect an optimal sensor layout.',
    scopeItems: [
      'Topographic & sky-visibility analysis (ensuring >120° clear view for GNSS)',
      'Radio propagation and Fresnel zone path testing (verifying LoRa range up to 15 km)',
      'Sensor density optimization to reduce CAPEX while guaranteeing structural coverage',
      'Power availability assessment (grid AC, PoE, or autonomous 12V/24V solar sizing)'
    ],
    icon: 'Compass'
  },
  {
    id: 'supply',
    title: 'Certified Equipment Supply',
    step: 'Phase 02',
    description: 'Direct procurement and supply of genuine Worldsensing hardware configured specifically for Sri Lanka spectrum compliance.',
    scopeItems: [
      'Factory pre-configured nodes with APAC / Sri Lanka frequency compliance',
      'High-grade mounting hardware (railway sleeper brackets, 30 kg magnets, chained beams)',
      'Industrial-grade Saft lithium thionyl chloride spiral batteries (LSH20 / LS33600)',
      'Full manufacturer warranty and official calibration verification'
    ],
    icon: 'PackageCheck'
  },
  {
    id: 'installation',
    title: 'Professional Turnkey Installation & Commissioning',
    step: 'Phase 03',
    description: 'Experienced field engineers execute precision civil anchoring, sensor installation, solar setup, and wireless network commissioning.',
    scopeItems: [
      'Precision civil anchoring, drill-and-epoxy fixings, and railway sleeper bonding',
      'Resin encapsulation for direct-rail applications meeting rail vibration standards',
      'Solar mast erection, lightning surge protection (coaxial & PoE), and grounding cabling',
      'Base-Rover RTK pairing, gateway backhaul commissioning, and end-to-end signal tests'
    ],
    icon: 'Wrench'
  },
  {
    id: 'integration',
    title: 'Software & Third-Party System Integration',
    step: 'Phase 04',
    description: 'We connect your field telemetry directly into your preferred engineering dashboards, corporate SCADA, or custom Early Warning Systems.',
    scopeItems: [
      'CMT Cloud and CMT Edge on-premise dashboard setup and administrative training',
      'Automated data forwarding to industry platforms (Bentley iTwin, Trimble 4D, Vista Data Vision)',
      'Custom industrial SCADA, MQTT broker, and REST API automated webhook integrations',
      'Custom threshold configuration with multi-tier SMS, WhatsApp, and email emergency alerts'
    ],
    icon: 'Cpu'
  }
];
