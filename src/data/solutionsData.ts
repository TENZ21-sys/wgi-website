import type { SolutionData } from '../types/monitoring';

export const solutionsData: SolutionData[] = [
  {
    id: 'landslide-monitoring',
    title: 'Mountain Landslides & Hillside Roads',
    sriLankaContext: 'Central Highlands (Badulla, Nuwara Eliya, Kandy & Kegalle)',
    whyItMatters: 'Heavy monsoon rains soak steep mountain slopes, causing sudden mudslides and rockfalls that bury roads, isolate communities, and put lives at risk.',
    howWgiSecures: 'WGI installs autonomous wireless sensors across the hillside. These detect millimeter-level ground movement days before a collapse, giving authorities early warning to close roads and protect people.',
    problem: 'Steep terrain and torrential rains cause sudden slope collapse without visible warning.',
    solution: 'Autonomous wireless satellite sensors placed across the slope track ground creep 24/7, even through thick fog and heavy rain.',
    illustrationImage: '/images/illustrations/install-landslide.svg',
    realPhotoImage: '/images/sectors/landslide-field.webp',
    realPhotoCaption: 'Actual unstable mountain cut-slope monitored in the Sri Lankan hill country',
    installationSteps: [
      {
        step: '1',
        title: 'Solid Rock Anchoring',
        desc: 'A permanent reference station is bolted firmly into stable bedrock at the top of the mountain.'
      },
      {
        step: '2',
        title: 'Moving Slope Grid',
        desc: 'Compact wireless sensor nodes are placed across the active soil mass to detect surface movement.'
      },
      {
        step: '3',
        title: 'Solar Wireless Link',
        desc: 'A solar-powered gateway sends live data wirelessly over 15 km to national emergency teams.'
      }
    ],
    recommendedHardware: [
      'Autonomous Ground Displacement Sensors (Base + Moving Rovers)',
      'Slope Angle & Sudden Movement Sensors',
      'Solar-Powered Long-Range Wireless Gateway'
    ],
    keyBenefits: [
      'Continuous 24/7 safety alerts through heavy monsoon rain and cloud cover',
      'Early warning sent directly to engineers before visible collapse occurs',
      'Solar-powered and wireless — no cables to be broken by falling rocks'
    ],
    icon: 'Mountain'
  },
  {
    id: 'railway-track-geometry',
    title: 'Railway Tracks, Sleepers & Tunnels',
    sriLankaContext: 'Sri Lanka Railways Network (Main Line Hill Country & Coastal Line)',
    whyItMatters: 'Heavy passenger and freight trains traversing mountain curves put massive pressure on the tracks. When ground weakens during rains, railway sleepers can tilt or sink, creating serious derailment risks.',
    howWgiSecures: 'WGI clamps wireless vibration-proof sensors directly onto railway sleepers. They measure track tilt and settling every time a train passes, helping maintenance crews fix track issues before any accident can happen.',
    problem: 'Train weight and rain wash out track ballast, causing sleepers to tilt and tracks to warp.',
    solution: 'Rugged sensors clamped to railway sleepers track track alignment and tilt continuously under active train traffic.',
    illustrationImage: '/images/illustrations/install-railway.svg',
    realPhotoImage: '/images/sectors/rail-track-alignment.jpg',
    realPhotoCaption: 'Active Sri Lanka Railways track section monitored for sleeper cant and settlement',
    installationSteps: [
      {
        step: '1',
        title: 'Quick Sleeper Clamping',
        desc: 'Brackets are clamped directly onto concrete or wooden sleepers in 15 minutes without train delays.'
      },
      {
        step: '2',
        title: 'Low-Profile Clearance',
        desc: 'Sensors sit flush between and below rails to clear train undercarriages safely.'
      },
      {
        step: '3',
        title: 'Instant Station Alert',
        desc: 'Readings transmit wirelessly to railway maintenance stations after every train passage.'
      }
    ],
    recommendedHardware: [
      'High-Impact Railway Sleeper Tilt Sensors (Certified for train vibration)',
      'Low-Profile Flush Track Alignment Sensors',
      'Station-Mounted Wireless Data Gateway'
    ],
    keyBenefits: [
      'Installed during routine maintenance without interrupting train schedules',
      'Withstands high-speed train vibration and heavy axle loads',
      'Completely wireless — eliminates wire theft and cable breaks'
    ],
    icon: 'Train'
  },
  {
    id: 'dams-and-reservoirs',
    title: 'Hydroelectric & Irrigation Dams',
    sriLankaContext: 'Major National Dams (Victoria, Kotmale, Randenigala & Samanalawewa)',
    whyItMatters: 'Large dams hold back millions of tons of water. If a dam crest tilts or shifts even slightly under monsoon flood pressure, it creates immense risks for downstream towns and power generation.',
    howWgiSecures: 'WGI installs high-precision 3D sensors along the dam crest and concrete walls. They measure micro-movements continuously, giving dam operators real-time confirmation that the structure is completely stable.',
    problem: 'Immense water pressure and seasonal filling can cause unnoticed structural deformation.',
    solution: 'High-precision wireless sensors along dam parapets provide round-the-clock safety tracking directly to dam control rooms.',
    illustrationImage: '/images/illustrations/install-dam.svg',
    realPhotoImage: '/images/sectors/dam.avif',
    realPhotoCaption: 'National hydroelectric concrete dam and reservoir structure monitored 24/7 by WGI',
    installationSteps: [
      {
        step: '1',
        title: 'Crest Pier Mounting',
        desc: 'Permanent sensor pillars are anchored along the concrete crest of the dam.'
      },
      {
        step: '2',
        title: 'Wall Tilt Array',
        desc: 'Bi-axial tilt sensors measure the dam wall’s response to rising and falling water levels.'
      },
      {
        step: '3',
        title: 'Control Room Link',
        desc: 'Live telemetry feeds into dam control panels with automated alarm thresholds.'
      }
    ],
    recommendedHardware: [
      'High-Precision 3D Dam Crest Displacement Sensors',
      'Dam Wall Hydrostatic Tilt Sensors',
      'Standalone Offline Control Room Gateway'
    ],
    keyBenefits: [
      'Verifies millimeter stability under maximum flood reservoir levels',
      'Operates independently on-site even during regional telecom blackouts',
      'Direct integration with national utility safety control panels'
    ],
    icon: 'Waves'
  },
  {
    id: 'urban-excavations',
    title: 'Deep Urban Excavations & Shoring Walls',
    sriLankaContext: 'Colombo City Construction & High-Rise Basements (Fort, Kollupitiya & Port City fringe)',
    whyItMatters: 'Digging deep 4-to-6 floor basements for Colombo towers removes thousands of tons of earth. If the retaining wall moves even slightly, surrounding public roads can cave in and neighboring buildings can crack.',
    howWgiSecures: 'WGI installs connected sensor beams along retaining walls and adjacent buildings. They sound immediate alerts if the shoring wall deflects, allowing contractors to brace the excavation before any damage occurs.',
    problem: 'Deep excavation pits remove soil support, risking road collapse and cracking neighboring towers.',
    solution: 'Interconnected sensor beams on retaining walls measure wall deflection in real time with automated alarm sirens.',
    illustrationImage: '/images/illustrations/install-excavation.svg',
    realPhotoImage: '/images/sectors/deep-excavation.jpg',
    realPhotoCaption: 'Active multi-level urban basement excavation pit protected by WGI monitoring',
    installationSteps: [
      {
        step: '1',
        title: 'Shoring Wall Beams',
        desc: 'Lightweight aluminum sensor beams are attached along the retaining pile wall.'
      },
      {
        step: '2',
        title: 'Neighboring Facade Check',
        desc: 'Compact tilt sensors are placed on adjacent building walls to verify zero settlement.'
      },
      {
        step: '3',
        title: 'Emergency Site Alarm',
        desc: 'If ground shifts beyond safe limits, site strobe lights and SMS alerts trigger instantly.'
      }
    ],
    recommendedHardware: [
      'Chained Retaining Wall Settlement Beams',
      'Adjacent Building Facade Safety Sensors',
      'Cloud Dashboard Gateway for Project Stakeholders'
    ],
    keyBenefits: [
      'Protects adjacent public roads and neighboring structures from settlement',
      'Provides indisputable legal and insurance compliance records',
      'Fast, non-destructive installation with magnetic and clamp options'
    ],
    icon: 'Building2'
  }
];
