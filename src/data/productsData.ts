import type { ProductData } from '../types/monitoring';

export const productsData: ProductData[] = [
  {
    id: 'gnss-meter',
    name: 'Loadsensing G7 GNSS Meter',
    tagline: 'Autonomous Ground & Slope Movement Tracker',
    category: ['geotechnical', 'railway', 'structural'],
    shortDescription: 'Wireless satellite sensor that detects 1 mm ground movement on steep hillsides, railway tracks, and dam embankments without manual survey crews or cables.',
    image: '/images/gnss-standard.jpg',
    imageAlt: 'Worldsensing Loadsensing G7 GNSS Meter with high-precision antenna',
    highlights: [
      'Detects ground movement down to 1 millimeter in 3D directions',
      'Completely wireless long-range radio link up to 5 km without cellular fees',
      'Autonomous solar & battery power lasting up to 3.5 years with standard cells',
      'Built-in tilt backup sensor maintains alerts if satellite line-of-sight is blocked',
      'Waterproof & submersible (IP68) cast aluminum casing built for monsoon climates',
      'Continuous operation through heavy fog, monsoon downpours, and pitch darkness'
    ],
    variants: [
      {
        name: 'Standard GNSS Meter',
        code: 'LSG7GNS-SXLH',
        description: 'Engineered for open slope stability, landslide crests, dam abutments, and large civil structural monitoring.',
        image: '/images/gnss-standard.jpg',
        features: [
          'External TW3929 conical geodetic antenna with TNC connector',
          '26 dB LNA gain with high multipath rejection',
          'External sub-GHz LoRa antenna (-0.3 dBi gain)',
          'Multiple pole, wall, and optical prism co-location mounts'
        ]
      },
      {
        name: 'Rail Track GNSS Meter',
        code: 'LSG7GNS-SXLH-RAI',
        description: 'Engineered specifically for railway track monitoring with custom sleeper-mounting and low-profile antenna.',
        image: '/images/gnss-rail.jpg',
        features: [
          'External TW7929 low-profile disk antenna with SMA connector',
          'Heavy-duty double-plate railway sleeper mount (LS-ACC-ANT-RHP)',
          'Withstands violent ballast vibration from active rail traffic',
          'Monitors track heave, subsidence, and lateral alignment'
        ]
      }
    ],
    operatingPrinciple: 'The GNSS Meter leverages multi-band Real-Time Kinematic (RTK) positioning. A stationary Base Station established on geotechnically stable ground continuously collects satellite signals and broadcasts differential corrections over a direct sub-GHz LoRa radio link (up to 5 km). Rover nodes installed on moving ground or railway sleepers receive these corrections and compute geodetic coordinates on-board at the edge. The device aggregates data into hourly samples, 6-hour aggregates, and 24-hour long-term solutions, providing millimeter-level precision while sleeping between cycles to conserve battery life.',
    verifiedSpecs: [
      {
        category: 'GNSS Performance & Precision',
        items: [
          { label: 'Channels', value: '184 multi-band GNSS channels' },
          { label: 'Constellations', value: 'GPS/QZSS (L1C/A, L2), GLONASS (L1OF, L2O), Galileo (E1-B/C, E5b), BeiDou (B1I, B2I)' },
          { label: 'Warmup Time', value: 'Selectable: 10 s, 20 s, or 30 s' },
          { label: 'Short Baseline Precision (40 m, 1σ)', value: '24h aggregate: 1 mm Horiz / 1 mm Vert (6h: 2 mm H / 3 mm V)' },
          { label: 'Long Baseline Precision (4,000 m, 1σ)', value: '24h aggregate: 2 mm Horiz / 3 mm Vert (6h: 4 mm H / 6 mm V)' },
          { label: 'Reporting Period', value: '1 hour (reports last hour, 6h aggregate, and 24h aggregate)' },
          { label: 'Time Synchronization', value: 'Typically better than 50 ms' }
        ]
      },
      {
        category: 'Integrated Secondary Sensors',
        items: [
          { label: 'Secondary Tilt Sensor', value: '3-axis MEMS accelerometer (range ±90°, recommended ±85°)' },
          { label: 'Tilt Resolution & Repeatability', value: 'Resolution: 0.0001° | Repeatability: <0.0003°' },
          { label: 'Tilt Accuracy', value: '±0.003° (at ±2°), ±0.006° (at ±5°), ±0.08° (at ±45°)' },
          { label: 'Temperature Sensor', value: '-40 °C to +80 °C (0.1 °C resolution, ±0.2 °C accuracy)' },
          { label: 'Enclosure Humidity Sensor', value: 'Internal relative humidity sensor to verify IP seal integrity' }
        ]
      },
      {
        category: 'Wireless & Physical',
        items: [
          { label: 'Radio Protocol', value: 'Sub-1 GHz LoRa / LoRaWAN (868, 915, 923 MHz bands)' },
          { label: 'Node-to-Gateway Range', value: 'Up to 15 km open line-of-sight (4 km city / tunnel)' },
          { label: 'Base-to-Rover Link', value: 'Up to 5 km open sight via direct LoRa broadcast' },
          { label: 'Battery Capacity', value: '4x 3.6 V D-size user-replaceable cells (Saft LSH20 / LS33600)' },
          { label: 'Battery Lifespan', value: '2.5 to 3.5 years (Rover) / 2.4 to 3.1 years (Base)' },
          { label: 'Dimensions & Weight', value: '205 x 120 x 61 mm | 960 g (excluding batteries)' },
          { label: 'Ingress & Temp', value: 'IP68 (submersible 2 m for 2 h) | -40 °C to +80 °C' }
        ]
      }
    ],
    installationOverview: [
      'Sky Visibility Mandate: Requires a minimum 120° unobstructed view of the sky for reliable satellite tracking.',
      'Surface & Wall Mounting: Compatible with versatile mount plate (LS-ACC-BIG-HVP) using anchor rods or 35/50 mm U-bolts on masts.',
      'Optical Survey Co-Location: Vertical prism mount plate (LS-ACC-PRS-VP) aligns optical prism directly with GNSS antenna phase center.',
      'Railway Sleeper Mount: Dedicated double-plate mount (LS-ACC-ANT-RHP) anchored or glued directly to concrete or wooden sleepers.'
    ],
    mountImages: [
      { label: 'Low-Profile Antenna on Rail Sleeper', image: '/images/gnss-rail-sleeper-installed.jpg' },
      { label: 'Double-Plate Sleeper Bracket', image: '/images/gnss-sleeper-bracket.jpg' },
      { label: 'Survey Pole Mount Adapter', image: '/images/gnss-mount-pole.png' },
      { label: 'Compact Mast U-Bolt Mount', image: '/images/gnss-mount-compact.png' },
    ],
    industrialApplications: [
      'Slope stability & active landslide monitoring in mountainous transport corridors',
      'Open-pit mining benches, crest displacement, and highwall safety',
      'Tailings storage facilities (TSF) crest and embankment settlement',
      'Railway track 3D horizontal alignment and vertical heave/settlement',
      'Ground truth validation control points for satellite InSAR and ground radar'
    ],
    keyBenefits: [
      'Eliminates dangerous manual surveying in steep ravines or active rail tracks',
      'Functions through fog, monsoon rains, and dust storms where optical prisms fail',
      'Local LoRa RTK link means no recurring SIM card or cellular subscription fees per sensor',
      'Built-in tiltmeter maintains safety data flow even during temporary satellite occlusion'
    ],
    faqs: [
      {
        question: 'Does the GNSS Meter require an internet or cellular connection at every sensor?',
        answer: 'No. Rovers communicate with the Base station and Gateway entirely over long-range, license-free LoRa radio. Only the single central 4G Gateway requires cellular or network access.'
      },
      {
        question: 'How does it maintain 1 mm accuracy with low battery consumption?',
        answer: 'The node utilizes advanced edge computing: it wakes up briefly, captures multi-frequency satellite signals, receives local RTK corrections, computes high-precision geodetic vectors, and sleeps until the next cycle.'
      },
      {
        question: 'Can the GNSS Meter be mounted directly to railway sleepers?',
        answer: 'Yes. The LSG7GNS-SXLH-RAI variant is specifically engineered with a low-profile antenna and heavy-duty double-plate sleeper mounting bracket tested for rail vibration.'
      }
    ]
  },
  {
    id: '4g-gateway',
    name: 'Worldsensing 4G Rugged Gateway',
    tagline: 'Long-Range Wireless Telemetry & Data Hub',
    category: ['telemetry'],
    shortDescription: 'Industrial outdoor station that collects readings from field sensors up to 15 km away and automatically transmits live updates to your office via 4G or local networks.',
    image: '/images/gateway-cloud.png',
    imageAlt: 'Worldsensing 4G Rugged Gateway die-cast enclosure',
    highlights: [
      'Gathers data wirelessly from hundreds of field sensors up to 15 km away',
      'Works in all locations: with 4G cellular or 100% offline in deep remote valleys',
      'Ultra-low power draw (under 5W) engineered for autonomous solar panel power',
      'Weatherproof IP67 aluminum casing withstands tropical downpours and heat',
      'Automatic failover routing ensures zero data loss during network disruptions',
      'Encrypted and secure live alerts delivered directly to your web browser or phone'
    ],
    variants: [
      {
        name: '4G Rugged Gateway Cloud',
        code: 'GW-4G-CLOUD',
        description: 'Designed for enterprise multi-gateway networks with automatic data rerouting and centralized cloud orchestration in CMT Cloud.',
        image: '/images/gateway-cloud.png',
        features: [
          'High traffic capacity: up to 200 messages per minute',
          'Automatic failover: reroutes sensor traffic if an adjacent gateway drops',
          'Remote firmware, clock sync, and over-the-air sensor reconfiguration',
          'Secure TLS / MQTT encrypted data streams'
        ]
      },
      {
        name: '4G Rugged Gateway Edge',
        code: 'GW-4G-EDGE',
        description: 'Features embedded CMT Edge software for completely standalone, offline local data logging and configuration.',
        image: '/images/gateway-edge.png',
        features: [
          'Operates 100% offline without cellular or internet connectivity',
          'Capacity: up to 30 messages per minute on a standalone network',
          'Embedded local web server accessible via Ethernet or direct USB-C',
          'Supports range extension via K20 Edge Repeater'
        ]
      }
    ],
    operatingPrinciple: 'The 4G Rugged Gateway acts as the central telemetry backbone for the monitoring site. Its 8-channel concurrent radio receiver listens continuously across sub-GHz ISM bands to decode incoming LoRa packets from GNSS meters, tiltmeters, and geotechnical loggers down to -137 dBm sensitivity. In Edge mode, the gateway logs, calibrates, and serves readings through an embedded local interface. In Cloud mode, it transmits encrypted packets upstream via 4G LTE or wired Ethernet to CMT Cloud, while maintaining bidirectional downlinks for node management and millisecond clock synchronization.',
    verifiedSpecs: [
      {
        category: 'LoRa Radio & Network Specs',
        items: [
          { label: 'Radio Band', value: 'ISM Sub-1 GHz (863–874.4 MHz EMEA/India; 902–928 MHz NA; 915–928 MHz APAC/LATAM)' },
          { label: 'Receiver Sensitivity', value: 'Down to -137 dBm (SF11) across 8 RX channels (125 kHz)' },
          { label: 'LoRa Range', value: 'Up to 15 km open line-of-sight | 4 km urban / tunnel | 2 km manhole' },
          { label: 'Network Capacity', value: 'Up to 30 msgs/min (Edge Gateway) | Up to 200 msgs/min (Cloud Gateway)' },
          { label: 'Link Budget', value: '151 dB / 157 dB' }
        ]
      },
      {
        category: 'WWAN & Connectivity',
        items: [
          { label: 'Cellular Module', value: 'Worldwide 4G LTE (LTE FDD DL 150 Mbps, UL 50 Mbps; LTE TDD DL 130 Mbps, UL 35 Mbps)' },
          { label: 'Cellular Fallback', value: '3G WCDMA/HSPA+ (DL 42 Mbps, UL 5.7 Mbps) and 2G GSM/GPRS/EDGE' },
          { label: 'Wired Ethernet', value: '10/100 Ethernet WAN with PoE (RJ45)' },
          { label: 'Antennas', value: 'Internal GPS, 4G, and LoRa (peak gain 2.6 dBi); optional 3/6 dBi external LoRa antenna' },
          { label: 'Physical Ports', value: 'External waterproof RJ45 (PoE), external waterproof USB Type-C, Mini-SIM card slot' }
        ]
      },
      {
        category: 'Power & Mechanical',
        items: [
          { label: 'Power Sources', value: 'PoE 802.3af (Mode A and B, ±48 Vdc via RJ45) or 5 Vdc via USB-C' },
          { label: 'Mean Power Draw', value: '4.5 W (Low load: 3.9 W USB-C / 5.5 W PoE; High load: 4.3 W USB-C / 5.5 W PoE)' },
          { label: 'Solar DC Compatibility', value: '5.1 Vdc, 1.2 A max input via solar converter kit LS-ACC-USBCGW (9–36 Vdc in)' },
          { label: 'Enclosure Material', value: 'Aluminum rear heatsink, polycarbonate front, stainless steel mounting kit' },
          { label: 'Dimensions & Weight', value: '265 x 165 x 100 mm | 1.4 kg (including mounting kit)' },
          { label: 'Weather Protection', value: 'IP67 rated | Operating temp: -40 °C to +60 °C' }
        ]
      }
    ],
    installationOverview: [
      'Zero-Casing-Opening Field Deploy: External waterproof RJ45 and USB-C ports eliminate any need to open the enclosure during installation, safeguarding factory IP67 seals.',
      'Mounting Flexibility: Mountable to vertical/horizontal poles (with stainless steel clamps) or flat civil structures with included bracket.',
      'Lightning & Surge Protection: Recommended coaxial surge protector (LS-ACC-LPANT-2) for external antennas and Ethernet PoE surge protector (LS-ACC-LPETH).',
      'Off-Grid Solar Integration: Connects directly to 12V/24V solar-battery packs using the Worldsensing DC/DC kit.'
    ],
    industrialApplications: [
      'Central telemetry gateway for tailings dam safety monitoring',
      'Railway line telemetry along remote electrified or non-electrified corridors',
      'Tunnels and deep underground excavation data backhaul',
      'Hydroelectric reservoir dam crest and spillway monitoring networks',
      'Smart construction sites with multi-point settlement and tilt logging'
    ],
    keyBenefits: [
      'One gateway covers hundreds of heterogeneous sensors across entire valleys or project sites',
      'CMT Edge capability provides complete autonomy for military, high-security, or cellular-dead zones',
      'Minimal power footprint enables compact, economical solar panel and battery sizing',
      'Industrial aluminum construction withstands tropical humidity, monsoon downpours, and UV exposure'
    ],
    faqs: [
      {
        question: 'Can the gateway operate if there is no mobile cellular reception at the site?',
        answer: 'Yes. The 4G Gateway Edge variant runs embedded CMT Edge locally. You can connect directly via local Ethernet or laptop USB-C to inspect data, configure sensors, and export logs without any cellular or internet access.'
      },
      {
        question: 'What happens if a gateway loses power in a multi-gateway network?',
        answer: 'In CMT Cloud multi-gateway deployments, sensor transmissions are received by overlapping adjacent gateways and automatically rerouted without any data loss.'
      },
      {
        question: 'How is the gateway powered on remote hillside locations?',
        answer: 'It draws an average of just 4.5 W. Using the Worldsensing solar converter kit (LS-ACC-USBCGW), it is powered from a small 12V solar panel and backup battery.'
      }
    ]
  },
  {
    id: 'g7-tiltmeter',
    name: 'Loadsensing G7 Wireless Tiltmeter',
    tagline: 'High-Precision Structural Tilt & Instant Early Warning Sensor',
    category: ['structural', 'railway', 'geotechnical'],
    shortDescription: 'Industrial wireless tilt sensor that detects microscopic angle shifts on dam walls, bridge piers, and railway tracks, sending instant alerts in under 2 seconds.',
    image: '/images/tiltmeter-xhp.jpg',
    imageAlt: 'Loadsensing G7 Wireless Tiltmeter with rugged IP68 casing',
    highlights: [
      'Microscopic angle precision sensing even fractional millimeter tilts',
      'Instant life-safety alerts delivered in under 2 seconds if movement occurs',
      'Up to 16.6 years battery life with zero scheduled battery swaps',
      'Certified vibration resistance for direct mounting on high-speed rail sleepers',
      'Smart vibration filtering ignores train movements to prevent false alarms',
      'Waterproof IP68 submersible casing withstands 20,000 g mechanical shock'
    ],
    variants: [
      {
        name: 'Tilt-XHP (High Performance)',
        code: 'LSG7ACL-BXLH-TIL',
        description: 'Equipped with external antenna for maximum wireless radio range (up to 15 km) across open terrain, bridges, and civil structures.',
        image: '/images/tiltmeter-xhp.jpg',
        features: [
          'External sub-GHz antenna with elbow articulating connector',
          'Maximum line-of-sight range up to 15 km (7.5 km in EDM mode)',
          'Accuracy: ±0.003° (at ±2°), ±0.006° (at ±5°), ±0.08° (at ±45°)',
          'Ideal for tall bridge piers, retaining walls, and dam crests'
        ]
      },
      {
        name: 'Tilt-IR (Internal Antenna / Rail)',
        code: 'LSG7ACL-BILR-TIL',
        description: 'Compact internal antenna variant specifically designed for low clearances, railway sleepers, and resin encapsulation.',
        image: '/images/tiltmeter-ir.jpg',
        features: [
          'Integrated internal antenna to prevent snagging or physical damage',
          'EN 50125-3:2003 railway sleeper vibration certified (Condition C 70g)',
          'Resin-encapsulation compatible for direct rail web mounting',
          'Dimensions: 106 x 100 x 61 mm (compact profile)'
        ]
      }
    ],
    operatingPrinciple: 'The G7 Tiltmeter uses a primary high-precision 3-axis MEMS accelerometer to measure inclination angles relative to the Earth’s gravity vector across ±90°. Each reading takes 9.6 seconds to gather a statistical dataset and calculate standard deviation, effectively filtering out transient industrial vibrations. In Triggered Measurements Mode (TMM), an auxiliary low-power motion accelerometer (sampling at 100 Hz) wakes the primary sensor upon detecting sudden angle shifts, angular velocities, or accelerations. In Event Detection Mode (EDM), the sensor monitors continuously at 3.9 Hz and transmits real-time emergency alert packets in <2 seconds when preset axis thresholds are breached.',
    verifiedSpecs: [
      {
        category: 'Tilt Measurement Specifications',
        items: [
          { label: 'Measuring Range', value: '±90° (recommended measuring range: ±85°)' },
          { label: 'Resolution', value: '0.0001° (both variants)' },
          { label: 'Accuracy (Tilt-XHP)', value: '±0.003° (±2°), ±0.006° (±5°), ±0.08° (±45°), ±0.23° (±85°)' },
          { label: 'Accuracy (Tilt-IR)', value: '±0.005° (±2°), ±0.007° (±5°), ±0.08° (±45°), ±0.23° (±85°)' },
          { label: 'Repeatability', value: '<0.0003° (Tilt-XHP) | <0.0015° (Tilt-IR)' },
          { label: 'Measurement Time', value: '9.6 seconds (transmits standard deviation with every reading)' },
          { label: 'Offset Temp Dependency', value: '±0.002°/°C (Tilt-XHP) | ±0.005°/°C (Tilt-IR)' }
        ]
      },
      {
        category: 'Operational Modes & Event Detection',
        items: [
          { label: 'Periodic Mode', value: 'Configurable intervals: 30 s to 24 h (5.8 yr life at 5 min, 12.9 yr at 30 min, 16.6 yr at 6 h)' },
          { label: 'Triggered Mode (TMM)', value: 'Wakes on angle shift (±90°), angular velocity (6°/s), or dynamic acceleration (±2 g, 100 Hz)' },
          { label: 'Event Detection (EDM)', value: 'Continuous 3.9 Hz sampling; switches to fast alert state upon threshold breach' },
          { label: 'Alert Latency (CMT Cloud)', value: '< 2 seconds for 10 simultaneous alerts (via MQTT) | < 5 s for 25 alerts' },
          { label: 'Alert Latency (CMT Edge)', value: '< 5.5 seconds for 10 simultaneous alerts | < 8 s for 20 alerts' },
          { label: 'Internal Memory', value: 'Circular buffer storing 169 days (30 s rate) or 4.6 years (5 min rate)' }
        ]
      },
      {
        category: 'Mechanical, Environmental & Radio',
        items: [
          { label: 'Radio Band & Link', value: 'Sub-1 GHz LoRa/LoRaWAN | Link budget: 151 dB / 157 dB' },
          { label: 'Radio Range (Open sight)', value: '15 km (Tilt-XHP & Tilt-IR) | 7.5 km (Tilt-XHP in EDM mode)' },
          { label: 'Battery Type', value: '1x 3.6 V D-size Saft LSH20 Li-SOCl2 spiral cell' },
          { label: 'Enclosure Material', value: 'Cast aluminum alloy base with high-impact polycarbonate lid' },
          { label: 'Ingress & Shock', value: 'IP68 (submerged 2 m for 2 h) | 1 m drop onto concrete (20,000 g shock rating)' },
          { label: 'Vibration Resistance', value: 'Tilt-XHP: MIL-STD-883 Condition A (20g) | Tilt-IR: Condition C (70g) & EN 50125-3' },
          { label: 'Operating Temp', value: '-40 °C to +80 °C' }
        ]
      }
    ],
    installationOverview: [
      'Versatile Mounting Plates: LS-ACC-IN15-HP plate for horizontal/vertical surfaces via anchor bolts or adhesive, with leveling screw and optical prism mount.',
      'Zero-Opening Double Plate: LS-ACC-IN15DP allows swapping or servicing the tiltmeter without ever unsealing the casing.',
      'Magnetic Fixing: 30 kg high-force magnetic mounts (LS-ACC-MAG) for rapid non-destructive mounting to steel bridge girders and rail webs.',
      'Chained Settlement Beams: Mountable along 1-meter and 2-meter rigid aluminum beams (WS-ACC-1BEAM / 2BEAM) to calculate continuous deflection and heave profiles.',
      'Mandatory Rail Requirement: When attaching directly to active railway rails, internal electronics must be encapsulated in resin for enhanced vibration dampening.'
    ],
    mountImages: [
      { label: 'Railway Track Sleeper Plate (LS-ACC-IN-HPTM)', image: '/images/tilt-mount-rail.jpg' },
      { label: 'Chained Settlement Beam Fixation (WS-ACC-BEAMFIX)', image: '/images/tilt-mount-beam.jpg' },
      { label: '30 kg High-Strength Magnetic Fixation', image: '/images/tilt-mount-magnetic.jpg' },
      { label: 'Zero-Opening Double Plate Mount', image: '/images/tilt-mount-doubleplate.jpg' },
    ],
    industrialApplications: [
      'Railway sleeper track cant and twist monitoring after train passage',
      'Differential settlement profiling along tunnels and building basements',
      'Structural deflection and rotation of bridge piers, abutments, and decks',
      'Retaining wall rotation and lateral earth pressure displacement',
      'Slope stability rapid detection and automated early warning triggering'
    ],
    keyBenefits: [
      'True sub-2-second emergency notification saves lives before structural collapses occur',
      'Vibration filtering separates transient train/traffic vibration from real structural settlement',
      'Unmatched battery life of up to 16+ years eliminates costly routine battery swap campaigns',
      'Chained beam configurations provide high-resolution continuous deflection curves'
    ],
    faqs: [
      {
        question: 'How fast does the G7 Tiltmeter detect a sudden slope failure or structural shift?',
        answer: 'In Event Detection Mode (EDM), the sensor monitors continuously at 3.9 Hz and delivers an emergency alert to the control room in under 2 seconds over CMT Cloud via MQTT.'
      },
      {
        question: 'Can it be installed on active railway tracks without being damaged by vibrations?',
        answer: 'Yes. The Tilt-IR variant is certified under European railway standard EN 50125-3:2003 and withstands 70g shocks. For direct rail attachment, the unit is resin-encapsulated for maximum mechanical durability.'
      },
      {
        question: 'How does it filter out false alarms from passing traffic or wind gusts?',
        answer: 'Every measurement collects samples over 9.6 seconds and computes standard deviation to quantify vibration noise, ensuring that only genuine structural tilts trigger alerts.'
      }
    ]
  }
];
