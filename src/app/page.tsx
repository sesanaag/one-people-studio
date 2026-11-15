'use client';
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ShoppingBag,
  Users,
  Heart,
  ArrowRight,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Send,
  MessageCircle,
  Download,
  Edit3,
  Eye,
  Filter,
  ChevronDown,
  ChevronUp,
  Star,
  Palette,
  Brush,
  Compass,
  CreditCard,
  ShieldCheck,
  ExternalLink,
  Award,
  BookOpen,
  Layers,
  Menu
} from 'lucide-react';
const Facebook = ({ className, size = 24 }: { className?: string, size?: number | string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.65l.35-4H14V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Instagram = ({ className, size = 24 }: { className?: string, size?: number | string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);
// ==========================================
// CUSTOM SVG BRAND ASSETS (FROM REFERENCES)
// ==========================================

// 1. Signature Sketchy Charcoal Circle Logo ("One People Studio")
const OnePeopleLogo = ({ size = 76, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`select-none transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <defs>
      <filter id="charcoal-rough" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <path id="topTextArc" d="M 34,102 A 66,66 0 1,1 166,102" />
      <path id="bottomTextArc" d="M 168,104 A 68,68 0 1,1 32,104" />
    </defs>

    {/* Organic Charcoal Donut Ring */}
    <g filter="url(#charcoal-rough)">
      <path
        d="M100,12 C152,10 190,46 188,100 C186,152 150,190 98,188 C45,186 12,150 14,98 C16,44 48,14 100,12 Z"
        fill="#181818"
      />
      <path
        d="M98,16 C146,16 182,52 182,100 C182,148 144,182 98,184 C52,184 18,146 18,98 C18,52 50,16 98,16 Z"
        fill="none"
        stroke="#2e2e2e"
        strokeWidth="6"
        strokeDasharray="14 6 8 4"
      />
      {/* Inner Cutout */}
      <path
        d="M100,63 C122,62 138,78 137,100 C136,122 120,138 99,137 C77,136 62,121 63,99 C64,77 78,64 100,63 Z"
        fill="#FAF8F5"
      />
      {/* Charcoal Sketch Highlights */}
      <circle
        cx="100"
        cy="100"
        r="39"
        fill="none"
        stroke="#404040"
        strokeWidth="2.5"
        strokeDasharray="9 5 3 4"
      />
    </g>

    {/* Hand-lettered Curved Text Inside Ring */}
    <text
      fill="#FAF8F5"
      fontSize="24"
      fontWeight="700"
      letterSpacing="1.5"
      style={{ fontFamily: "'Special Elite', cursive" }}
    >
      <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
        one People
      </textPath>
    </text>
    <text
      fill="#FAF8F5"
      fontSize="27"
      fontWeight="700"
      letterSpacing="2"
      style={{ fontFamily: "'Special Elite', cursive" }}
    >
      <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
        Studio
      </textPath>
    </text>
  </svg>
);

// 2. Secondary Stamp Logo ("Where creativity is a life skill")
const LifeSkillBadge = ({ size = 84, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" className={`select-none ${className}`}>
    <defs>
      <path id="skillArcTop" d="M 24,80 A 56,56 0 1,1 136,80" />
      <path id="skillArcBottom" d="M 136,84 A 56,56 0 1,1 24,84" />
    </defs>
    <circle cx="80" cy="80" r="72" fill="#181818" />
    <circle cx="80" cy="80" r="67" fill="none" stroke="#FAF8F5" strokeWidth="1.5" strokeDasharray="4 3" />
    <circle cx="80" cy="80" r="30" fill="#FAF8F5" />
    <path d="M73,80 L78,85 L88,75" stroke="#181818" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text
      fill="#FAF8F5"
      fontSize="12.5"
      fontWeight="bold"
      letterSpacing="1"
      style={{ fontFamily: "'Special Elite', monospace" }}
    >
      <textPath href="#skillArcTop" startOffset="50%" textAnchor="middle">
        • where creativity •
      </textPath>
    </text>
    <text
      fill="#FAF8F5"
      fontSize="13"
      fontWeight="bold"
      letterSpacing="1"
      style={{ fontFamily: "'Special Elite', monospace" }}
    >
      <textPath href="#skillArcBottom" startOffset="50%" textAnchor="middle">
        is a life skill
      </textPath>
    </text>
  </svg>
);

// 3. Block-Printed "m a g p i e" Kraft Luggage Tag with Polka-Dot Washi Tape (From Reference Photo)
const MagpieKraftTag = ({ className = "" }) => (
  <div
    className={`relative w-44 bg-[#B88B61] rounded-b-md pt-7 pb-3 px-3 shadow-xl border border-[#8E6540] select-none ${className}`}
    style={{
      clipPath: 'polygon(22% 0%, 78% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)',
      backgroundImage: 'radial-gradient(rgba(60, 35, 15, 0.14) 1px, transparent 0)',
      backgroundSize: '6px 6px'
    }}
  >
    {/* Dark Reinforced Eyelet Hole */}
    <div className="w-6 h-6 rounded-full bg-[#FAF8F5] border-[5px] border-[#1E1915] mx-auto -mt-3 mb-2 shadow-inner" />

    {/* Block-Printed Bird Stamp SVG */}
    <svg viewBox="0 0 120 90" className="w-28 h-20 mx-auto text-[#14110F] fill-current">
      {/* Rough Linocut Bird Outline */}
      <path
        d="M32,42 C38,26 56,22 72,26 C80,18 94,20 100,28 C105,29 112,33 114,36 C108,37 104,37 100,36 C105,39 109,42 111,44 C103,44 97,41 93,39 C88,54 74,60 58,59 L64,74 L70,75 M58,59 L55,75 L60,77 M46,56 L40,73 L46,75"
        stroke="#14110F"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wing & Tail Feathers */}
      <path
        d="M42,36 C30,27 22,26 18,30 C20,35 28,39 38,42 C24,40 12,43 12,48 C14,54 26,55 42,51 C60,52 72,46 74,38 C64,34 50,34 42,36 Z"
        fill="none"
        stroke="#14110F"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Eye */}
      <circle cx="91" cy="30" r="3.5" fill="#14110F" />
      {/* Stamp Feet */}
      <path d="M53,60 L48,76 M45,74 L54,77 M65,59 L62,76 M59,75 L68,77" stroke="#14110F" strokeWidth="3.2" strokeLinecap="round" />
    </svg>

    {/* Rubber-Stamped Typewriter "m a g p i e" */}
    <div
      className="text-center text-[#14110F] font-bold tracking-[0.25em] text-base mt-0.5 mb-8"
      style={{ fontFamily: "'Special Elite', monospace" }}
    >
      m a g<span className="inline-block -translate-y-0.5 border-l-2 border-[#14110F] pl-0.5">p</span>i e
    </div>

    {/* Polka-Dot Washi Tape Strip Across Bottom */}
    <div
      className="absolute bottom-2.5 -left-1 -right-1 h-7 bg-[#E8DFD5] shadow-sm border-y border-black/10"
      style={{
        backgroundImage: 'radial-gradient(#181818 22%, transparent 23%), radial-gradient(#181818 22%, transparent 23%)',
        backgroundPosition: '0 0, 8px 8px',
        backgroundSize: '16px 16px'
      }}
    />
  </div>
);

// 4. Studio Fabric Bunting Divider (Inspired by the real classroom banner photo)
const BuntingDivider = () => {
  const colors = [
    '#E07A5F', '#81B29A', '#F2CC8F', '#5E8C9A', '#E5989B',
    '#81B29A', '#E07A5F', '#F2CC8F', '#6D597A', '#81B29A',
    '#E07A5F', '#5E8C9A', '#F2CC8F', '#E5989B', '#81B29A', '#E07A5F'
  ];
  return (
    <div className="w-full overflow-hidden py-2 select-none pointer-events-none">
      <div className="relative flex items-start justify-between w-full max-w-7xl mx-auto px-2">
        {/* Twine String */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#7D7162]/50" />
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="w-6 sm:w-8 h-7 sm:h-9 mx-0.5 shadow-sm transition-transform"
            style={{
              backgroundColor: color,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// INITIAL MOCK DATA (BASED ON REAL STUDIO)
// ==========================================

const INITIAL_WORKSHOPS = [
  {
    id: 'ws-1',
    title: 'Big Blue Art Bus: Summer Camp & Forest School',
    category: 'Kids Holiday Clubs',
    badge: 'KIDS HOLIDAY CLUB',
    badgeColor: 'bg-[#E07A5F] text-white',
    date: 'Mon 27 Jul – Fri 31 Jul',
    time: '09:30 AM – 03:30 PM',
    location: 'Hope Gardens & Mobile Art Bus, London',
    price: 35,
    priceLabel: '£35 / day',
    spotsLeft: 6,
    ageGroup: 'Ages 5–12',
    tapeType: 'masking',
    rotation: '-rotate-1',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
    description: 'Join us for a jam-packed day of creative autonomy! Includes outdoor Forest School activities, Kids Yoga, Storytelling, Lego building, and messy clay sculpting around our converted double-decker community bus.',
    highlights: ['All messy art materials & clay included', 'DBS-checked socially-engaged facilitators', 'Sibling discount & bursary spots available']
  },
  {
    id: 'ws-2',
    title: 'Tactile Clay: Hand-Building & Pinch Pots',
    category: 'Adult Specialist',
    badge: 'ADULT WORKSHOP',
    badgeColor: 'bg-[#3D5A80] text-white',
    date: 'Saturday, 18 May',
    time: '02:00 PM – 05:00 PM',
    location: 'One People Community Studio, London',
    price: 45,
    priceLabel: '£45 / person',
    spotsLeft: 4,
    ageGroup: 'Adults 18+ (All Levels)',
    tapeType: 'polka',
    rotation: 'rotate-1',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80',
    description: 'Get your hands deep into organic stoneware and terracotta clay. Learn sgraffito carving, pinch-pot vessels, and expressive slab-building in a warm, zero-judgement studio setting.',
    highlights: ['Kiln firing & glazing included', 'Herbal teas & homemade biscuits provided', 'Take home 2–3 finished ceramic pieces']
  },
  {
    id: 'ws-3',
    title: 'Street Art & Collaborative Mural Jam',
    category: 'Community Pop-Ups',
    badge: 'YOUTH & POP-UP',
    badgeColor: 'bg-[#2A9D8F] text-white',
    date: 'Sunday, 25 May',
    time: '11:00 AM – 04:00 PM',
    location: 'King George Skatepark & Community Wall',
    price: 25,
    priceLabel: '£25 / session',
    spotsLeft: 9,
    ageGroup: 'Teens & Adults (11+)',
    tapeType: 'masking',
    rotation: '-rotate-1',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=900&q=80',
    description: 'Learn low-pressure aerosol can control, stencil cutting, and large-scale character design. Work together to transform a community hoarding wall with positive neighborhood imagery.',
    highlights: ['Protective masks, gloves & water-based spray paints supplied', 'Guided by experienced street muralists', 'Music, skate jam vibes & sketching warmups']
  },
  {
    id: 'ws-4',
    title: 'Seed-Bombs, Bird-Feeders & Zine Making Stall',
    category: 'Community Pop-Ups',
    badge: 'DROP-IN ECO ART',
    badgeColor: 'bg-[#6B8E23] text-white',
    date: 'Saturday, 21 June',
    time: '12:00 PM – 06:00 PM',
    location: 'Norton Common Skatepark (Rolling Roots Jam)',
    price: 10,
    priceLabel: 'Pay What You Can (£10 rec)',
    spotsLeft: 18,
    ageGroup: 'All Ages & Families',
    tapeType: 'polka',
    rotation: 'rotate-1',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80',
    description: 'Ecological creative activities celebrating local biodiversity! Roll wildflower clay seed-bombs, craft pine-cone bird-feeders, and print DIY activist zines with block stamps.',
    highlights: ['Drop-in anytime between 12pm and 6pm', 'Live DJs, food stalls & skate competition alongside', 'Free morning yoga class geared towards skaters']
  },
  {
    id: 'ws-5',
    title: 'Mixed-Media Sketchbook & Collage Club (Zoom)',
    category: 'Online Classes',
    badge: 'LIVE ONLINE STUDIO',
    badgeColor: 'bg-[#6D597A] text-white',
    date: 'Every Wednesday Evening',
    time: '07:00 PM – 08:30 PM (BST)',
    location: 'Live Interactive Zoom Studio',
    price: 15,
    priceLabel: '£15 / class',
    spotsLeft: 12,
    ageGroup: 'All Ages Welcome',
    tapeType: 'masking',
    rotation: '-rotate-1',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    description: 'Unwind mid-week from your kitchen table. Using old newspapers, masking tape, charcoal, and block stamps, Molly guides prompts that spark conversation and creative autonomy.',
    highlights: ['Uses everyday household papers & pens', 'Replay recording sent for 14 days', 'Warm, chatty community atmosphere']
  },
  {
    id: 'ws-6',
    title: 'Linocut Block-Printing & Kraft Tag Workshop',
    category: 'Adult Specialist',
    badge: 'PRINTMAKING',
    badgeColor: 'bg-[#B56576] text-white',
    date: 'Saturday, 7 June',
    time: '01:00 PM – 04:00 PM',
    location: 'One People Community Studio, London',
    price: 38,
    priceLabel: '£38 / person',
    spotsLeft: 5,
    ageGroup: 'Ages 14+ & Adults',
    tapeType: 'polka',
    rotation: 'rotate-1',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    description: 'Carve your own custom rubber and lino stamps (like our signature Magpie tag!) and print onto recycled kraft luggage tags, tote bags, and handmade zine covers.',
    highlights: ['Keep your carved lino blocks & stamp set', 'Includes 10 kraft tags & organic cotton tote', 'Typewriter stamping station available']
  }
];

const PORTFOLIO_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Keep Rolling CIC & Skater Uktis Meet-Up Skate Jam',
    category: 'Community & Eco',
    year: 'Summer 2025',
    location: 'East London Skatepark',
    stamp: 'ECO & SKATE JAM',
    image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=80',
    summary: 'Keep Rolling CIC had us back to run ecological-based activities as part of their summer Meet Up Skate Jam alongside Skater Uktis.',
    fullStory: 'We provided free seed-bomb rolling, bird-feeder crafting, and zine-making activities at our stall, right next to the amazing young women from Skater Uktis—a worldwide community of Muslim Female Skateboarders. They provided books and information on political issues regarding race and injustice. The morning also saw a free yoga class specially geared towards skaters!',
    impactStats: ['120+ Seed-Bombs Rolled', '45 Handmade Zines', 'Free Skater Yoga Session'],
    gallery: [
      'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=700&q=80'
    ]
  },
  {
    id: 'proj-2',
    title: 'Hope Gardens Summer Programme',
    category: 'Grassroots Residency',
    year: 'Central London',
    location: 'Hope Gardens Community Space',
    stamp: 'HOPE GARDENS',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80',
    summary: 'Multi-week outdoor family arts programme uniting soil, botanical printing, clay pinch-pots, and communal textile banners.',
    fullStory: 'Set inside the lush community sanctuary of Hope Gardens, we hosted open-access family tables where toddlers, parents, and elders worked side-by-side. Participants explored natural pigments, carved clay animal totems, and contributed to a giant sun-dyed cyanotype mandala.',
    impactStats: ['6 Weeks of Free Access', '250+ Local Families', 'Intergenerational Making'],
    gallery: [
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=80'
    ]
  },
  {
    id: 'proj-3',
    title: 'Newspaper Wall Doodle & Giant Floor Canvas',
    category: 'Pop-Up Installation',
    year: '2025 Residency',
    location: 'Indoor Community Hall',
    stamp: 'OPEN AUTONOMY',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
    summary: 'Floor-to-ceiling recycled newspaper wall murals and giant floor drawing sheets where babies, kids, and adults draw without boundaries.',
    fullStory: 'Under our signature canvas banner reading "Come and get creative with us" and handmade fabric bunting, we lined the entire studio wall with recycled newspapers and laid out massive floor sheets. From babies crawling with chunky pastels to adults painting expressive green botanical murals, the space celebrated pure creative autonomy.',
    impactStats: ['30ft Newspaper Mural Wall', '0% Judgement Culture', 'All Ages (Babies to Seniors)'],
    gallery: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80'
    ]
  },
  {
    id: 'proj-4',
    title: 'King George Skatepark Mural ’25',
    category: 'Street Art & Murals',
    year: 'Spring 2025',
    location: 'King George Recreation Ground',
    stamp: 'PUBLIC MURAL',
    image: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?auto=format&fit=crop&w=900&q=80',
    summary: 'Youth-led spray paint workshop transforming park hoardings into vibrant, comic-inspired community street art.',
    fullStory: 'Wearing hi-vis vests and respirators, local young people learned how to scale up their sketchbook drawings onto a massive outdoor wall. Guided step-by-step in aerosol techniques, they created bold floral motifs, expressive characters, and joyful colour gradients that local skaters now ride past every day.',
    impactStats: ['40m² Public Mural Painted', '28 Youth Artists Trained', 'Permanent Park Landmark'],
    gallery: [
      'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=700&q=80'
    ]
  },
  {
    id: 'proj-5',
    title: 'Rolling Roots Skate Jam @ Norton Common',
    category: 'Festival Pop-Up',
    year: '21st June 2025',
    location: 'Letchworth Garden City',
    stamp: 'FESTIVAL POP-UP',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
    summary: 'Partnered with Culturewood, North Herts Council & Love Letchworth for a full day of live DJs, skate competitions, and creative stalls.',
    fullStory: 'Set at Norton Common Skatepark from 12pm to 6pm, One People Studio hosted the hands-on creative zone amidst live DJs, food stalls, and skate giveaways. Families dropped in all afternoon to make wearable badge art, stencil prints, and collaborative banners.',
    impactStats: ['6 Hours of Live Making', '5 Community Partners', '300+ Festival Visitors'],
    gallery: [
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80'
    ]
  },
  {
    id: 'proj-6',
    title: 'Queen Elizabeth Olympic Park Summer School',
    category: 'Educational Settings',
    year: 'East London',
    location: 'Queen Elizabeth Olympic Park',
    stamp: 'SUMMER SCHOOL',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    summary: 'Connecting 12–17 year olds from Hackney, Newham, Tower Hamlets, and Waltham Forest with biodiversity and outdoor creative workshops.',
    fullStory: 'Working alongside East Summer School and City Mill Skate, our workshops explored how urban skateable spaces and parklands foster biodiversity, youth wellbeing, and creative expression.',
    impactStats: ['4 London Boroughs', 'Ages 12–17 Youth Cohort', 'Biodiversity & Urban Art'],
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80'
    ]
  }
];

const STORE_ITEMS = [
  {
    id: 'item-1',
    name: 'Hand-Stamped "Magpie" Kraft Gift Tags (Pack of 8)',
    type: 'Block Print Craft',
    price: 12,
    badge: 'STUDIO SIGNATURE',
    isFree: false,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
    description: 'Exact replicas of our studio kraft tags! Hand-printed linocut Magpie bird motif, typewriter-stamped text, and polka-dot washi tape border.'
  },
  {
    id: 'item-2',
    name: 'DIY At-Home Clay Pinch-Pot & Carving Kit',
    type: 'Creative Mail-Order Kit',
    price: 28,
    badge: 'BESTSELLER',
    isFree: false,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=80',
    description: 'Includes 1kg air-dry organic terracotta clay, wooden rib tools, slip pot, botanical stamps, and Molly’s illustrated step-by-step zine guide.'
  },
  {
    id: 'item-3',
    name: '"Creative Autonomy" Printable Family Activity Zine',
    type: 'Free Resource Library (PDF)',
    price: 0,
    badge: 'FREE DOWNLOAD',
    isFree: true,
    image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=700&q=80',
    description: 'A 16-page foldable DIY zine packed with zero-judgement drawing games, seed-bomb recipes, and newspaper collage prompts for rainy afternoons.'
  },
  {
    id: 'item-4',
    name: 'One People Studio Heavyweight Screen-Printed Tote',
    type: 'Organic Merch',
    price: 18,
    badge: 'ORGANIC COTTON',
    isFree: false,
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=700&q=80',
    description: '10oz unbleached organic canvas bag screen-printed by hand with our sketchy charcoal ring logo and "Where creativity is a life skill" stamp.'
  }
];

const ACCORDION_ITEMS = [
  {
    id: 'acc-1',
    title: 'Adult Specialist Workshops',
    subtitle: 'Pottery, Linocut Printmaking, Botanical Cyanotypes & Collage',
    content: 'Our adult sessions are designed as an antidote to perfectionism. Whether you are hand-building clay vessels, carving rubber block stamps, or experimenting with large-scale mixed media, we provide all specialist materials and a warm, social table where conversation flows naturally.'
  },
  {
    id: 'acc-2',
    title: 'Kids Holiday Clubs & The Big Blue Art Bus',
    subtitle: 'School Holidays • Ages 5–12 • Indoor & Outdoor Forest Art',
    content: 'During Easter, Summer, and Half-Term breaks, our Holiday Clubs combine messy studio art with outdoor exploration. Expect a joyful mix of Yoga, Forest School crafts, Storytelling, Lego, and giant floor murals—often hosted alongside our converted blue double-decker bus!'
  },
  {
    id: 'acc-3',
    title: 'Drop-In Community Pop-Ups & Skate Jams',
    subtitle: 'Festivals, Skateparks, Grassroots Hubs & Free Family Stalls',
    content: 'We love collaborating with CICs, skate collectives (like Keep Rolling CIC & Skater Uktis), and local councils. Our pop-up stalls feature accessible ecological art like wildflower seed-bombs, zine libraries, badge-making, and collaborative street murals.'
  },
  {
    id: 'acc-4',
    title: 'Schools, SEN Settings & Educational Bookings',
    subtitle: 'Bespoke Creative Days for Primary, Secondary & Alternative Provision',
    content: 'Founded by Molly after her own experiences in mainstream education and teaching in primary schools, we bring bespoke workshops directly to your school or youth centre. Full DBS checks, risk assessments, and curriculum-linked creative autonomy sessions provided.'
  }
];

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================

export default function App() {
  // Navigation & Active Section
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Workshops State & Filtering
  const [workshops, setWorkshops] = useState(INITIAL_WORKSHOPS);
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [openAccordion, setOpenAccordion] = useState('acc-1');

  // Cal.com Booking Modal State
  const [bookingWorkshop, setBookingWorkshop] = useState(null);
  const [selectedCalDate, setSelectedCalDate] = useState(18);
  const [selectedCalTime, setSelectedCalTime] = useState('10:00 AM');
  const [ticketCount, setTicketCount] = useState(1);
  const [bookingStep, setBookingStep] = useState('calendar'); // 'calendar' | 'details' | 'confirmed'
  const [attendeeInfo, setAttendeeInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Portfolio Case Study Modal State
  const [activeProject, setActiveProject] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  // Cart & Zine Download State
  const [cart, setCart] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [downloadedZine, setDownloadedZine] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Workshop Booking Inquiry',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Client Pitch Mode: Visual Editor Toggle (TinaCMS Demo for Molly)
  const [cmsEditMode, setCmsEditMode] = useState(false);
  const [heroHeadline, setHeroHeadline] = useState('Come And Get Creative With Us');
  const [heroSubtext, setHeroSubtext] = useState(
    "One People Studio is a creative workshop service that runs Kid's Holiday Clubs, Specialist Arts Workshops and Pop-Up events for community and educational settings."
  );
  const [pitchToast, setPitchToast] = useState(null);

  // Load Google Fonts dynamically for authentic Typewriter/Stamp + Clean Sans look
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Special+Elite&family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Show temporary toast helper
  const triggerToast = (msg) => {
    setPitchToast(msg);
    setTimeout(() => setPitchToast(null), 4000);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Workshops
  const categories = ['All Events', 'Kids Holiday Clubs', 'Adult Specialist', 'Community Pop-Ups', 'Online Classes'];
  const filteredWorkshops =
    selectedCategory === 'All Events'
      ? workshops
      : workshops.filter((w) => w.category === selectedCategory);

  // Filtered Portfolio
  const portfolioCategories = ['All', 'Community & Eco', 'Grassroots Residency', 'Street Art & Murals', 'Pop-Up Installation', 'Festival Pop-Up'];
  const filteredProjects =
    portfolioFilter === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === portfolioFilter);

  // Open Cal.com Modal
  const handleOpenBooking = (workshop) => {
    setBookingWorkshop(workshop);
    setBookingStep('calendar');
    setTicketCount(1);
  };

  // Add Quick Demo Workshop in CMS Mode
  const handleAddSampleWorkshop = () => {
    const newWs = {
      id: `ws-${Date.now()}`,
      title: 'NEW: Autumn Botanical Cyanotype Printing',
      category: 'Adult Specialist',
      badge: 'JUST ADDED IN EDITOR',
      badgeColor: 'bg-[#D65A31] text-white',
      date: 'Saturday, 14 Sept',
      time: '01:30 PM – 04:00 PM',
      location: 'Hope Gardens Community Studio',
      price: 32,
      priceLabel: '£32 / person',
      spotsLeft: 10,
      ageGroup: 'All Ages Welcome',
      tapeType: 'polka',
      rotation: '-rotate-1',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
      description: 'Added live via Molly’s Visual Editor! Harness sunlight and iron salts to print stunning Prussian-blue botanical prints onto watercolor paper and fabric.',
      highlights: ['All UV chemicals & pressed flowers provided', 'Take home 5 framed prints', 'Synced automatically with Cal.com']
    };
    setWorkshops([newWs, ...workshops]);
    triggerToast('✨ Boom! New workshop added to the grid & synced with Cal.com!');
  };

  // Cart Helpers
  const addToCart = (item) => {
    if (item.isFree) {
      setDownloadedZine(true);
      triggerToast('📄 Free "Creative Autonomy" PDF Zine downloaded!');
      return;
    }
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setCartDrawerOpen(true);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    triggerToast('✉️ Message sent straight to onepeoplestudioinfo@gmail.com!');
  };

  return (
    <div
      className="min-h-screen bg-[#FAF8F5] text-[#1A1917] relative overflow-x-hidden selection:bg-[#E07A5F]/20 selection:text-[#1A1917]"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        backgroundImage: 'radial-gradient(rgba(26, 25, 23, 0.06) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* ==========================================
          TOP ANNOUNCEMENT / PITCH BANNER
      ========================================== */}
      <div className="bg-[#181818] text-[#FAF8F5] text-xs sm:text-sm py-2.5 px-4 border-b-2 border-dashed border-[#444]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="bg-[#E07A5F] text-white px-2 py-0.5 rounded-sm font-bold tracking-wider uppercase text-[11px]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              NEW BOOKING ENGINE LIVE
            </span>
            <span className="text-[#E8DFCA] hidden md:inline">
              Summer Holiday Clubs, Skate Jam Pop-Ups & Pottery Workshops now open for booking!
            </span>
            <span className="text-[#E8DFCA] md:hidden">Summer Clubs & Workshops Open!</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={() => scrollToSection('workshops')}
              className="underline decoration-[#E07A5F] underline-offset-4 font-semibold hover:text-[#F2CC8F] transition-colors flex items-center gap-1"
            >
              Book a Spot <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          STICKY TACTILE NAVIGATION BAR
      ========================================== */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b-2 border-[#181818]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Left: Brand Logo Lockup */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group"
          >
            <div className="hidden sm:block">
              <LifeSkillBadge size={62} />
            </div>
            <OnePeopleLogo size={68} />
            <div>
              <span
                className="block text-xl sm:text-2xl font-bold tracking-tight text-[#181818] group-hover:text-[#E07A5F] transition-colors"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                One People Studio
              </span>
              <span
                className="block text-[11px] uppercase tracking-widest text-[#6B665E]"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Community Arts • London & UK
              </span>
            </div>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'workshops', label: 'Workshops & Events', badge: '6 Live' },
              { id: 'portfolio', label: "What We've Been Up To" },
              { id: 'about', label: 'About Molly' },
              { id: 'store', label: 'Store & Zines' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-all relative ${
                  activeNav === item.id
                    ? 'text-[#181818] bg-[#EFECE6] shadow-inner'
                    : 'text-[#4A4640] hover:text-[#181818] hover:bg-[#EFECE6]/60'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span
                    className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-[#2A9D8F] text-white rounded-sm font-bold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right: Socials, Cart & Masking Tape CTA */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-[#EFECE6] hover:bg-[#E2DDD3] text-[#181818] transition-colors border border-[#181818]/15"
              aria-label="Open Studio Shop Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E07A5F] text-white text-xs font-bold flex items-center justify-center">
                  {cart.reduce((s, i) => s + i.qty, 0)}
                </span>
              )}
            </button>

            {/* Masking Tape Styled CTA Button */}
            <button
              onClick={() => scrollToSection('workshops')}
              className="hidden sm:flex items-center gap-2 bg-[#E8DFCA] hover:bg-[#dfd3b6] text-[#181818] font-bold px-4 py-2.5 shadow-md border-2 border-[#181818] -rotate-1 hover:rotate-0 transition-all relative"
              style={{
                fontFamily: "'Special Elite', monospace",
                clipPath: 'polygon(2% 0%, 98% 2%, 100% 96%, 97% 100%, 1% 98%, 0% 4%)'
              }}
            >
              <Calendar className="w-4 h-4 text-[#E07A5F]" />
              <span>Book Workshop</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-md bg-[#EFECE6] border border-[#181818]/20 text-[#181818]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b-2 border-[#181818] px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {[
              { id: 'home', label: 'Home' },
              { id: 'workshops', label: 'Workshops & Events (Book Online)' },
              { id: 'portfolio', label: "What We've Been Up To (Portfolio)" },
              { id: 'about', label: 'Meet Molly & Collaborators' },
              { id: 'store', label: 'Creative Store & Free Zines' },
              { id: 'contact', label: 'Contact & WhatsApp Group' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-md font-bold text-[#181818] hover:bg-[#EFECE6] flex items-center justify-between border border-transparent hover:border-[#181818]/15"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#E07A5F]" />
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Studio Bunting Banner Accent */}
      <BuntingDivider />

      {/* ==========================================
          1. HERO SECTION ("COME AND GET CREATIVE WITH US")
      ========================================== */}
      <section id="home" className="relative pt-4 pb-16 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy, Canvas Banner Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            {/* Rubber Stamp Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFECE6] border-2 border-dashed border-[#181818] -rotate-1 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E07A5F]" />
              <span
                className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#181818]"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                COMMUNITY & EDUCATIONAL SETTINGS • LONDON
              </span>
            </div>

            {/* Canvas Banner Inspired Headline */}
            <div className="relative">
              {cmsEditMode ? (
                <div className="bg-amber-50 border-2 border-dashed border-amber-600 p-3 rounded-md">
                  <label className="block text-xs font-mono uppercase text-amber-900 mb-1 font-bold">
                    ✏️ Live Visual Editor Mode (Click to Edit Headline):
                  </label>
                  <input
                    type="text"
                    value={heroHeadline}
                    onChange={(e) => setHeroHeadline(e.target.value)}
                    className="w-full text-3xl sm:text-5xl font-extrabold bg-white px-3 py-2 border border-amber-400 rounded"
                  />
                </div>
              ) : (
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#181818] leading-[1.08]">
                  {heroHeadline.split('Creative').map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <React.Fragment key={i}>
                        {part}
                        <span className="relative inline-block px-3 py-0.5 mx-1 bg-[#F2CC8F] border-2 border-[#181818] -rotate-1 shadow-[4px_4px_0px_#181818]">
                          Creative
                        </span>
                      </React.Fragment>
                    ) : (
                      part
                    )
                  )}
                </h1>
              )}
            </div>

            {/* Subtext Card with Masking Tape */}
            <div className="relative bg-white p-5 sm:p-6 border-2 border-[#181818] shadow-[6px_6px_0px_#181818] max-w-2xl rotate-[0.5deg]">
              {/* Top Masking Tape Strip */}
              <div
                className="w-28 h-6 bg-[#E8DFCA]/90 border border-[#C8B998] absolute -top-3.5 left-8 -rotate-2 shadow-sm"
                style={{ clipPath: 'polygon(4% 0%, 96% 2%, 100% 95%, 95% 100%, 2% 98%, 0% 6%)' }}
              />
              {cmsEditMode ? (
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 mb-1 font-bold">
                    ✏️ Edit Intro Paragraph:
                  </label>
                  <textarea
                    rows={3}
                    value={heroSubtext}
                    onChange={(e) => setHeroSubtext(e.target.value)}
                    className="w-full text-base bg-amber-50 p-2 border border-amber-400 rounded"
                  />
                </div>
              ) : (
                <p className="text-base sm:text-xl text-[#2D2A26] leading-relaxed font-medium">
                  {heroSubtext}
                </p>
              )}
              <div
                className="mt-3 pt-3 border-t border-dashed border-[#181818]/20 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5A544C]"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" /> Zero-Judgement Space
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E07A5F]" /> All Materials Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3D5A80]" /> DBS Checked
                </span>
              </div>
            </div>

            {/* Dual Tactile CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('workshops')}
                className="group relative inline-flex items-center gap-3 bg-[#E07A5F] hover:bg-[#d0674c] text-white font-bold text-base sm:text-lg px-7 py-4 border-2 border-[#181818] shadow-[5px_5px_0px_#181818] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#181818] transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Explore & Book Workshops</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center gap-2 bg-[#EFECE6] hover:bg-[#E4DEC9] text-[#181818] font-bold text-base sm:text-lg px-6 py-4 border-2 border-[#181818] shadow-[5px_5px_0px_#181818] hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#181818] transition-all -rotate-1 hover:rotate-0"
                style={{ fontFamily: "'Special Elite', monospace" }}
              >
                <Compass className="w-5 h-5 text-[#2A9D8F]" />
                <span>Check Out What We've Been Up To</span>
              </button>
            </div>

            {/* Trust / Quick Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
              <div className="bg-[#EFECE6]/80 p-3 border border-[#181818]/20 rounded-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-[#181818]" style={{ fontFamily: "'Special Elite', monospace" }}>
                  50+
                </div>
                <div className="text-xs text-[#5A544C] font-medium">Community Pop-Ups & Murals</div>
              </div>
              <div className="bg-[#EFECE6]/80 p-3 border border-[#181818]/20 rounded-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-[#181818]" style={{ fontFamily: "'Special Elite', monospace" }}>
                  100%
                </div>
                <div className="text-xs text-[#5A544C] font-medium">Creative Autonomy Ethos</div>
              </div>
              <div className="bg-[#EFECE6]/80 p-3 border border-[#181818]/20 rounded-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-[#181818]" style={{ fontFamily: "'Special Elite', monospace" }}>
                  All Ages
                </div>
                <div className="text-xs text-[#5A544C] font-medium">Toddlers, Teens & Adults</div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrapbook Polaroid Collage + Real Magpie Kraft Tag */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Polaroid Frame: Messy Clay & Painting Hands */}
              <div className="relative bg-white p-4 pb-12 border-2 border-[#181818] shadow-[10px_10px_0px_#181818] rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                {/* Masking tape top left & right */}
                <div className="w-24 h-7 bg-[#E8DFCA]/95 border border-[#C8B998] absolute -top-4 -left-4 -rotate-12 shadow-sm" />
                <div className="w-24 h-7 bg-[#E8DFCA]/95 border border-[#C8B998] absolute -top-4 -right-4 rotate-12 shadow-sm" />

                <div className="relative h-72 sm:h-80 overflow-hidden border border-[#181818]">
                  <img
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80"
                    alt="Clay covered hands sculpting in workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#181818]/90 text-[#FAF8F5] px-3 py-1 text-xs font-mono">
                    📍 Hope Gardens & Studio Sessions
                  </div>
                </div>
                <p
                  className="mt-4 text-center text-lg font-bold text-[#181818]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  "Curious? Get your hands messy with clay, paint & print!"
                </p>
              </div>

              {/* Secondary Overlapping Polaroid: Blue Art Bus & Chalkboard Sign */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-56 bg-[#FAF8F5] p-2.5 pb-6 border-2 border-[#181818] shadow-[6px_6px_0px_#181818] -rotate-6 z-20">
                {/* Polka Dot Washi Tape */}
                <div
                  className="w-20 h-5 absolute -top-3 left-16 rotate-3 border border-black/20"
                  style={{
                    backgroundColor: '#E8DFD5',
                    backgroundImage: 'radial-gradient(#181818 20%, transparent 21%)',
                    backgroundSize: '10px 10px'
                  }}
                />
                <div className="bg-[#2B303A] text-white p-3 border border-[#181818] text-center">
                  <div className="text-xs uppercase tracking-widest text-[#81B29A] font-mono">Big Blue Art Bus</div>
                  <div
                    className="text-lg font-bold text-[#F2CC8F] leading-tight my-1"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    SUMMER CAMP THIS WAY ➔
                  </div>
                  <div className="text-[11px] text-gray-300 font-mono">Yoga • Forest School • Clay</div>
                </div>
              </div>

              {/* Floating Block-Printed "m a g p i e" Kraft Tag (From Client Photo!) */}
              <div className="hidden sm:block absolute -top-10 -right-6 rotate-12 hover:rotate-3 transition-transform duration-300 z-30">
                <MagpieKraftTag />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. WORKSHOPS & EVENTS — THE BOOKING ENGINE
          (Replaces the broken Squarespace "No results found" page)
      ========================================== */}
      <section
        id="workshops"
        className="py-16 sm:py-20 bg-[#EFECE6] border-y-2 border-[#181818] relative"
        style={{
          backgroundImage: 'radial-gradient(rgba(24, 24, 24, 0.08) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A9D8F] text-white text-xs font-mono uppercase tracking-widest mb-3 border border-[#181818] shadow-[3px_3px_0px_#181818]">
                <Sparkles className="w-3.5 h-3.5" /> Powered by Cal.com + Instant Stripe Checkout
              </div>
              <h2
                className="text-3xl sm:text-5xl font-extrabold text-[#181818] tracking-tight"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                Upcoming Workshops & Events
              </h2>
              <p className="text-[#4A4640] text-base sm:text-lg mt-2 max-w-2xl">
                Pick a session below to reserve your spot immediately. All materials, aprons, and refreshments are included—just bring yourself!
              </p>
            </div>

            {/* CMS Mode Quick Add Button */}
            {cmsEditMode && (
              <button
                onClick={handleAddSampleWorkshop}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-[#181818] font-bold px-5 py-3 border-2 border-[#181818] shadow-[4px_4px_0px_#181818]"
              >
                <Plus className="w-5 h-5" />
                <span>+ Test Adding a New Workshop (CMS Demo)</span>
              </button>
            )}
          </div>

          {/* Category Filter Tabs (Masking Tape Style) */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-sm font-bold whitespace-nowrap border-2 border-[#181818] transition-all ${
                    active
                      ? 'bg-[#181818] text-[#FAF8F5] shadow-[4px_4px_0px_#E07A5F] -translate-y-0.5'
                      : 'bg-[#FAF8F5] text-[#181818] hover:bg-[#E8DFCA] shadow-[3px_3px_0px_#181818]'
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Workshop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((ws) => (
              <div
                key={ws.id}
                className={`group relative bg-[#FAF8F5] border-2 border-[#181818] shadow-[7px_7px_0px_#181818] hover:shadow-[10px_10px_0px_#181818] transition-all duration-300 flex flex-col justify-between p-4 pt-6 ${ws.rotation} hover:rotate-0`}
              >
                {/* Top Washi / Masking Tape Strip */}
                {ws.tapeType === 'polka' ? (
                  <div
                    className="w-28 h-6 absolute -top-3.5 left-1/2 -translate-x-1/2 rotate-2 border border-black/20 shadow-sm z-20"
                    style={{
                      backgroundColor: '#E8DFD5',
                      backgroundImage: 'radial-gradient(#181818 22%, transparent 23%)',
                      backgroundSize: '12px 12px'
                    }}
                  />
                ) : (
                  <div
                    className="w-28 h-6 bg-[#E8DFCA]/95 border border-[#C8B998] absolute -top-3.5 left-1/2 -translate-x-1/2 -rotate-2 shadow-sm z-20"
                    style={{ clipPath: 'polygon(3% 0%, 97% 2%, 100% 96%, 96% 100%, 2% 98%, 0% 5%)' }}
                  />
                )}

                <div>
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden border-2 border-[#181818] mb-4 bg-[#181818]">
                    <img
                      src={ws.image}
                      alt={ws.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Rubber Stamp Category Badge */}
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider border border-[#181818] shadow-[2px_2px_0px_#181818] ${ws.badgeColor}`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {ws.badge}
                    </div>
                    {/* Price Tag Stamp */}
                    <div
                      className="absolute bottom-3 right-3 bg-[#FAF8F5] text-[#181818] px-3 py-1 font-extrabold text-sm border-2 border-[#181818] shadow-[3px_3px_0px_#181818]"
                      style={{ fontFamily: "'Special Elite', monospace" }}
                    >
                      {ws.priceLabel}
                    </div>
                  </div>

                  {/* Age & Spots Indicator */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#5A544C] mb-2">
                    <span className="bg-[#EFECE6] px-2 py-0.5 border border-[#181818]/20 font-bold text-[#181818]">
                      {ws.ageGroup}
                    </span>
                    <span className="text-[#E07A5F] font-bold flex items-center gap-1">
                      • {ws.spotsLeft} spots left
                    </span>
                  </div>

                  {/* Workshop Title */}
                  <h3 className="text-xl font-extrabold text-[#181818] leading-snug mb-2 group-hover:text-[#E07A5F] transition-colors">
                    {ws.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A4640] leading-relaxed mb-4">
                    {ws.description}
                  </p>

                  {/* Date, Time & Venue Meta Box */}
                  <div className="bg-[#EFECE6] p-3 border border-dashed border-[#181818]/40 space-y-1.5 text-xs mb-5">
                    <div className="flex items-center gap-2 font-semibold text-[#181818]">
                      <Calendar className="w-4 h-4 text-[#E07A5F] shrink-0" />
                      <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4A4640]">
                      <Clock className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                      <span>{ws.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4A4640]">
                      <MapPin className="w-4 h-4 text-[#3D5A80] shrink-0" />
                      <span className="truncate">{ws.location}</span>
                    </div>
                  </div>
                </div>

                {/* Book Now Button (Triggers Cal.com Modal) */}
                <button
                  onClick={() => handleOpenBooking(ws)}
                  className="w-full py-3.5 px-4 bg-[#181818] hover:bg-[#E07A5F] text-[#FAF8F5] font-bold text-sm uppercase tracking-wider border-2 border-[#181818] transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_#E07A5F] hover:shadow-[3px_3px_0px_#181818]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now & Pick Date</span>
                </button>
              </div>
            ))}
          </div>

          {/* "Keep an eye out for..." Expandable Drawers (Upgraded from current site) */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] p-6 sm:p-10 border-2 border-[#181818] shadow-[8px_8px_0px_#181818]">
            <div className="lg:col-span-5 space-y-4">
              <div
                className="inline-block px-3 py-1 bg-[#F2CC8F] border border-[#181818] text-xs font-bold uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                BESPOKE & REGULAR PROGRAMMES
              </div>
              <h3
                className="text-3xl sm:text-4xl font-extrabold text-[#181818]"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                Keep an eye out for...
              </h3>
              <p className="text-[#4A4640] text-sm sm:text-base leading-relaxed">
                Alongside our scheduled ticketed dates, we run tailored creative programmes for schools, community gardens, and festivals across London and Hertfordshire.
              </p>
              <div className="relative overflow-hidden border-2 border-[#181818] h-52">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                  alt="Child holding carved terracotta pottery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-[#181818] text-white text-xs font-mono px-2.5 py-1">
                  Sgraffito Clay & Printmaking
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y-2 divide-[#181818] border-y-2 border-[#181818]">
              {ACCORDION_ITEMS.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div key={item.id} className="py-4">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                      <div>
                        <h4 className="text-lg sm:text-xl font-extrabold text-[#181818] group-hover:text-[#E07A5F] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs font-mono text-[#6B665E]">{item.subtitle}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full border-2 border-[#181818] flex items-center justify-center bg-[#EFECE6] group-hover:bg-[#F2CC8F] transition-colors shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-3 pt-3 border-t border-dashed border-[#181818]/20 text-sm sm:text-base text-[#3D3934] leading-relaxed">
                        <p>{item.content}</p>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#E07A5F] underline underline-offset-4"
                        >
                          Enquire about {item.title} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. "WHAT WE'VE BEEN UP TO" — SCRAPBOOK PORTFOLIO
      ========================================== */}
      <section id="portfolio" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 bg-[#E8DFCA] border-2 border-[#181818] text-xs font-mono font-bold uppercase -rotate-1 mb-3 shadow-[3px_3px_0px_#181818]">
            PAST RESIDENCIES, MURALS & SKATE JAMS
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-[#181818]"
            style={{ fontFamily: "'Special Elite', cursive" }}
          >
            We Get Up To Some Serious Fun...
          </h2>
          <p className="text-[#4A4640] text-base sm:text-lg mt-3">
            Click on any scrapbook card below to read the full story and see photos from our grassroots community projects across London and beyond.
          </p>

          {/* Portfolio Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase border border-[#181818] transition-all ${
                  portfolioFilter === cat
                    ? 'bg-[#E07A5F] text-white shadow-[3px_3px_0px_#181818]'
                    : 'bg-white text-[#181818] hover:bg-[#EFECE6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, index) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`group cursor-pointer bg-white p-4 pb-6 border-2 border-[#181818] shadow-[6px_6px_0px_#181818] hover:shadow-[10px_10px_0px_#E07A5F] transition-all relative ${
                index % 2 === 0 ? '-rotate-1' : 'rotate-1'
              } hover:rotate-0`}
            >
              {/* Masking Tape Corner */}
              <div className="w-24 h-6 bg-[#E8DFCA]/90 border border-[#C8B998] absolute -top-3 right-6 rotate-6 shadow-sm z-10" />

              {/* Thumbnail Image */}
              <div className="relative h-60 overflow-hidden border border-[#181818] mb-4">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Stamp Badge */}
                <span
                  className="absolute top-3 left-3 bg-[#FAF8F5] text-[#181818] px-2.5 py-1 text-[11px] font-bold border border-[#181818] shadow-[2px_2px_0px_#181818]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {proj.stamp}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-mono">
                  <span>📍 {proj.location}</span>
                  <span>{proj.year}</span>
                </div>
              </div>

              {/* Project Title & Excerpt */}
              <h3
                className="text-xl font-bold text-[#181818] group-hover:text-[#E07A5F] transition-colors mb-2"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                {proj.title}
              </h3>
              <p className="text-sm text-[#4A4640] line-clamp-3 mb-4">
                {proj.summary}
              </p>

              {/* Impact Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.impactStats.map((stat, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono bg-[#EFECE6] px-2 py-0.5 border border-[#181818]/20 text-[#181818]"
                  >
                    ✓ {stat}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-dashed border-[#181818]/20 flex items-center justify-between text-xs font-mono font-bold text-[#181818] group-hover:text-[#E07A5F]">
                <span>Read Scrapbook Story & Photos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          4. ABOUT MOLLY & COMMUNITY COLLABORATORS
      ========================================== */}
      <section
        id="about"
        className="py-16 sm:py-24 bg-[#EFECE6] border-y-2 border-[#181818] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Scrapbook Photo of Molly Drawing in the Sand / Studio */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-4 pb-10 border-2 border-[#181818] shadow-[8px_8px_0px_#181818] -rotate-2 relative">
                {/* Washi Tape */}
                <div
                  className="w-28 h-6 absolute -top-3.5 left-12 -rotate-3 border border-black/20"
                  style={{
                    backgroundColor: '#E8DFD5',
                    backgroundImage: 'radial-gradient(#181818 22%, transparent 23%)',
                    backgroundSize: '12px 12px'
                  }}
                />
                <div className="h-80 sm:h-96 overflow-hidden border border-[#181818]">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                    alt="Molly - Socially-engaged artist behind One People Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="mt-4 text-center text-lg font-bold text-[#181818]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  Molly — Socially-Engaged Artist & Founder
                </div>
              </div>

              {/* Overlapping Secondary Badge */}
              <div className="hidden sm:flex items-center gap-3 bg-[#FAF8F5] p-3 border-2 border-[#181818] shadow-[4px_4px_0px_#181818] absolute -bottom-6 -right-4 rotate-3">
                <LifeSkillBadge size={54} />
                <div className="text-xs font-mono pr-2">
                  <div className="font-bold text-[#181818]">NO-JUDGEMENT CULTURE</div>
                  <div className="text-[#5A544C]">Autonomy & Exploration</div>
                </div>
              </div>
            </div>

            {/* Right: Meet Molly Story & Ethos Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#E07A5F] text-white text-xs font-mono font-bold uppercase border border-[#181818]">
                ABOUT ONE PEOPLE STUDIO
              </div>

              <h2
                className="text-3xl sm:text-5xl font-extrabold text-[#181818]"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                Meet Molly.
              </h2>

              <p className="text-lg sm:text-xl font-bold text-[#2D2A26]">
                Molly is our socially-engaged artist behind One People Studio.
              </p>

              <div className="space-y-4 text-[#3D3934] text-base leading-relaxed">
                <p>
                  Inspired by experiencing difficulty within mainstream education, Molly had the realisation that she could create an engaging space, for like-minded individuals, to develop their creative practice. A place with a <strong>no-judgement culture</strong> and where <strong>autonomy is encouraged</strong>.
                </p>
                <p>
                  Through simply providing access to creative activities, she’s found that conversations are sparked and deep personal growth is touched upon for participants. The creative process, by nature, is one of innovation, critical thinking and exploration.
                </p>
                <p>
                  This soon led Molly to teaching in a primary school, where the child’s early developmental years became a huge source of inspiration and education for her. The staff and students alike opened a world of possibilities for sparking change in future generations. She now works to bring creative workshops to events, schools and various community spaces—specialising in large-scale painting, drawing and mixed media processes.
                </p>
              </div>

              {/* Signature Ethos Quote Box (From her real About page) */}
              <div className="relative bg-[#FAF8F5] p-6 border-2 border-[#181818] shadow-[6px_6px_0px_#181818] mt-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block shrink-0">
                    <OnePeopleLogo size={64} />
                  </div>
                  <div>
                    <blockquote
                      className="text-lg sm:text-xl font-bold text-[#181818] leading-snug"
                      style={{ fontFamily: "'Special Elite', cursive" }}
                    >
                      “Our ethos is that creativity is a broad life-skill and that creative thinkers have the potential to make the world a better place. We’re here to service that vision.”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Community Collaborators & Partners Wall */}
              <div className="pt-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#5A544C] mb-3 font-bold">
                  PROUD TO HAVE COLLABORATED WITH:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Keep Rolling CIC',
                    'Skater Uktis',
                    'Hope Gardens London',
                    'Culturewood',
                    'East Summer School (QE Olympic Park)',
                    'North Herts Council',
                    'Local Primary Schools'
                  ].map((partner) => (
                    <span
                      key={partner}
                      className="px-3 py-1.5 bg-white border border-[#181818] text-xs font-mono font-bold text-[#181818] shadow-[2px_2px_0px_#181818]"
                    >
                      ★ {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. CREATIVE STORE & FREE ZINE LIBRARY
      ========================================== */}
      <section id="store" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#F2CC8F] border border-[#181818] text-xs font-mono font-bold uppercase mb-2">
              TAKE THE STUDIO HOME
            </div>
            <h2
              className="text-3xl sm:text-5xl font-extrabold text-[#181818]"
              style={{ fontFamily: "'Special Elite', cursive" }}
            >
              Studio Shop & Free Zine Library
            </h2>
            <p className="text-[#4A4640] text-base mt-2 max-w-2xl">
              Hand-printed block-stamp tags, mail-order clay kits, and free downloadable creative activity zines for families and teachers.
            </p>
          </div>
          <button
            onClick={() => setCartDrawerOpen(true)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-[#181818] text-white text-xs font-mono font-bold uppercase border-2 border-[#181818] shadow-[4px_4px_0px_#E07A5F]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Bag ({cart.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-[#181818] shadow-[5px_5px_0px_#181818] p-4 flex flex-col justify-between relative group"
            >
              <div>
                <div className="relative h-48 overflow-hidden border border-[#181818] mb-4 bg-[#EFECE6]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase border border-[#181818] ${
                      item.isFree ? 'bg-[#2A9D8F] text-white' : 'bg-[#F2CC8F] text-[#181818]'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#6B665E] mb-1">{item.type}</div>
                <h3 className="text-base font-extrabold text-[#181818] leading-snug mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[#4A4640] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-[#181818]/20 flex items-center justify-between">
                <span
                  className="text-lg font-extrabold text-[#181818]"
                  style={{ fontFamily: "'Special Elite', monospace" }}
                >
                  {item.isFree ? 'FREE PDF' : `£${item.price}`}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className={`px-3 py-2 text-xs font-mono font-bold uppercase border-2 border-[#181818] transition-colors flex items-center gap-1.5 ${
                    item.isFree
                      ? 'bg-[#2A9D8F] hover:bg-[#21867a] text-white'
                      : 'bg-[#E8DFCA] hover:bg-[#E07A5F] hover:text-white text-[#181818]'
                  }`}
                >
                  {item.isFree ? (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{downloadedZine ? 'Downloaded!' : 'Download'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          6. GLOBAL FOOTER, CONTACT FORM & WHATSAPP CTA
      ========================================== */}
      <footer id="contact" className="bg-[#181818] text-[#FAF8F5] pt-16 pb-28 border-t-4 border-[#E07A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
            {/* Left Column: Have Questions? + WhatsApp Broadcast CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <OnePeopleLogo size={76} />
                <div>
                  <h2
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Special Elite', cursive" }}
                  >
                    Have Questions?
                  </h2>
                  <a
                    href="mailto:onepeoplestudioinfo@gmail.com"
                    className="text-sm font-mono text-[#F2CC8F] underline hover:text-[#E07A5F]"
                  >
                    onepeoplestudioinfo@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-[#D5CFC2] text-sm sm:text-base leading-relaxed">
                Want to book our Big Blue Art Bus for your school, collaborate on a skatepark mural, or ask about our next Kids Holiday Club? Drop Molly a message or hop into our WhatsApp Broadcast Group for first dibs on workshop spots!
              </p>

              {/* Prominent WhatsApp Broadcast Card */}
              <div className="bg-[#242424] p-5 border-2 border-[#2A9D8F] shadow-[5px_5px_0px_#2A9D8F]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-[#181818] flex items-center justify-center font-bold">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Community WhatsApp Broadcast</h3>
                    <p className="text-xs text-[#A9A296] font-mono">Zero spam • Only new workshop dates & pop-ups</p>
                  </div>
                </div>
                <a
                  href="#whatsapp-broadcast"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('📱 Opening One People Studio WhatsApp Broadcast invite link!');
                  }}
                  className="mt-3 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#181818] font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-[#181818] transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Our WhatsApp Broadcast Group</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://instagram.com/_onepeoplestudio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-[#E07A5F] text-white text-sm font-mono transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@_onepeoplestudio</span>
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Opening One People Studio Facebook page');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-[#3D5A80] text-white text-sm font-mono transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Right Column: Rebuilt Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] text-[#181818] p-6 sm:p-8 border-2 border-[#181818] shadow-[8px_8px_0px_#E8DFCA] relative">
                {/* Masking Tape Strip */}
                <div className="w-32 h-6 bg-[#E8DFCA] border border-[#C8B998] absolute -top-3.5 right-10 rotate-2 shadow-sm" />

                <h3
                  className="text-2xl font-extrabold mb-1"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  Send Us a Studio Note
                </h3>
                <p className="text-xs font-mono text-[#5A544C] mb-6">
                  Replies within 24–48 hours • School, CIC & private group inquiries welcome
                </p>

                {contactSubmitted ? (
                  <div className="p-6 bg-[#2A9D8F]/15 border-2 border-[#2A9D8F] text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#2A9D8F] mx-auto" />
                    <h4 className="text-xl font-bold">Thank You, {contactForm.firstName || 'Friend'}!</h4>
                    <p className="text-sm text-[#3D3934]">
                      Your message has been sent to <strong>onepeoplestudioinfo@gmail.com</strong>. Molly will get back to you very soon!
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="px-4 py-2 bg-[#181818] text-white text-xs font-mono uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          First Name (required)
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.firstName}
                          onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                          placeholder="e.g. Maya"
                          className="w-full px-3.5 py-2.5 bg-white border-2 border-[#181818] text-sm focus:outline-none focus:border-[#E07A5F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          Last Name (required)
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          placeholder="e.g. Patel"
                          className="w-full px-3.5 py-2.5 bg-white border-2 border-[#181818] text-sm focus:outline-none focus:border-[#E07A5F]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          Email (required)
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 bg-white border-2 border-[#181818] text-sm focus:outline-none focus:border-[#E07A5F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          Subject (required)
                        </label>
                        <select
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border-2 border-[#181818] text-sm focus:outline-none focus:border-[#E07A5F]"
                        >
                          <option>Workshop Booking Inquiry</option>
                          <option>Kids Holiday Club Question</option>
                          <option>School / Educational Setting Booking</option>
                          <option>Community Pop-Up / Skate Jam Collaboration</option>
                          <option>Something Else</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold mb-1">
                        Message (required)
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us what you'd love to create together..."
                        className="w-full px-3.5 py-2.5 bg-white border-2 border-[#181818] text-sm focus:outline-none focus:border-[#E07A5F]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#181818] hover:bg-[#E07A5F] text-white font-bold text-sm uppercase tracking-wider border-2 border-[#181818] shadow-[4px_4px_0px_#E07A5F] hover:shadow-[4px_4px_0px_#181818] transition-all flex items-center gap-2"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Zero Hosting Cost Callout */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8C857B] gap-4">
            <div>
              © 2026 One People Studio (onepeoplestudio.org). Where creativity is a life skill.
            </div>
            <div className="flex items-center gap-2 text-[#2A9D8F]">
              <ShieldCheck className="w-4 h-4" />
              <span>Custom Next.js + Cal.com Architecture (£0/yr Hosting vs $144/yr Squarespace)</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================
          MODAL 1: CAL.COM + STRIPE EMBEDDED BOOKING ENGINE
      ========================================== */}
      {bookingWorkshop && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#FAF8F5] border-4 border-[#181818] shadow-[12px_12px_0px_#E07A5F] max-w-4xl w-full overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Bar */}
            <div className="bg-[#181818] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#2A9D8F] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#E8DFCA]">
                  Cal.com Verified Booking • Instant Stripe Checkout
                </span>
              </div>
              <button
                onClick={() => setBookingWorkshop(null)}
                className="p-1 rounded hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingStep === 'confirmed' ? (
              /* STEP 3: BOOKING CONFIRMED SCREEN */
              <div className="p-8 sm:p-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center mx-auto border-2 border-[#181818] shadow-[4px_4px_0px_#181818]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="inline-block px-3 py-1 bg-[#E8DFCA] border border-[#181818] text-xs font-mono font-bold uppercase">
                  BOOKING REFERENCE: #OPS-{Math.floor(1000 + Math.random() * 9000)}
                </div>
                <h3
                  className="text-3xl font-extrabold text-[#181818]"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  You're Booked In! Get Ready to Get Creative.
                </h3>
                <p className="text-[#4A4640] max-w-md mx-auto text-sm sm:text-base">
                  A calendar invite and Stripe receipt have been sent to{' '}
                  <strong>{attendeeInfo.email || 'your email'}</strong>, and Molly’s phone attendee list has been automatically updated!
                </p>

                <div className="bg-[#EFECE6] p-4 max-w-md mx-auto border-2 border-[#181818] text-left text-xs font-mono space-y-1.5">
                  <div><strong>WORKSHOP:</strong> {bookingWorkshop.title}</div>
                  <div><strong>DATE & TIME:</strong> May {selectedCalDate}, 2026 @ {selectedCalTime}</div>
                  <div><strong>TICKETS:</strong> {ticketCount}x Spot(s) (£{bookingWorkshop.price * ticketCount} Paid via Stripe)</div>
                  <div><strong>LOCATION:</strong> {bookingWorkshop.location}</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setBookingWorkshop(null)}
                    className="px-8 py-3 bg-[#181818] text-white font-mono text-xs font-bold uppercase border-2 border-[#181818] shadow-[4px_4px_0px_#2A9D8F]"
                  >
                    Back to One People Studio
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 1 & 2: INTERACTIVE CAL.COM WIDGET */
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Column: Workshop Summary */}
                <div className="md:col-span-5 bg-[#EFECE6] p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#181818] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <OnePeopleLogo size={46} />
                      <div>
                        <div className="text-xs font-mono text-[#5A544C]">One People Studio</div>
                        <div className="text-xs font-bold text-[#181818]">Hosted by Molly</div>
                      </div>
                    </div>

                    <div className="h-36 overflow-hidden border-2 border-[#181818] mb-4">
                      <img
                        src={bookingWorkshop.image}
                        alt={bookingWorkshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#181818] mb-2">
                      {bookingWorkshop.title}
                    </h3>

                    <div className="space-y-2 text-xs font-mono text-[#3D3934] mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#E07A5F]" />
                        <span>{bookingWorkshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#2A9D8F]" />
                        <span>{bookingWorkshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#3D5A80]" />
                        <span>£{bookingWorkshop.price} per spot (Stripe Checkout)</span>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-[#181818]/30 pt-3">
                      <div className="text-xs font-mono uppercase font-bold mb-1.5">What's Included:</div>
                      <ul className="space-y-1">
                        {bookingWorkshop.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-[#4A4640] flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ticket Quantity Counter */}
                  <div className="mt-6 bg-white p-3 border-2 border-[#181818] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold">Number of Spots</div>
                      <div className="text-[11px] text-[#6B665E]">Total: £{bookingWorkshop.price * ticketCount}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                        className="w-7 h-7 bg-[#EFECE6] border border-[#181818] flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-mono font-bold text-sm">{ticketCount}</span>
                      <button
                        type="button"
                        onClick={() => setTicketCount(Math.min(bookingWorkshop.spotsLeft, ticketCount + 1))}
                        className="w-7 h-7 bg-[#EFECE6] border border-[#181818] flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Calendar or Attendee Checkout */}
                <div className="md:col-span-7 p-6">
                  {bookingStep === 'calendar' ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-base text-[#181818] font-mono uppercase">
                          1. Select a Session Date & Time
                        </h4>
                        <span className="text-xs font-mono bg-[#2A9D8F]/15 text-[#2A9D8F] px-2 py-0.5 font-bold">
                          May / June 2026
                        </span>
                      </div>

                      {/* Mini Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-mono mb-6">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                          <div key={d} className="text-[#6B665E] py-1 font-bold">
                            {d}
                          </div>
                        ))}
                        {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                          const isAvailable = [2, 3, 9, 10, 16, 17, 18, 23, 24, 25, 27, 28].includes(day);
                          const isSelected = selectedCalDate === day;
                          return (
                            <button
                              key={day}
                              disabled={!isAvailable}
                              onClick={() => setSelectedCalDate(day)}
                              className={`py-2.5 border transition-all font-bold ${
                                isSelected
                                  ? 'bg-[#E07A5F] text-white border-[#181818] shadow-[2px_2px_0px_#181818]'
                                  : isAvailable
                                  ? 'bg-white text-[#181818] border-[#181818]/40 hover:border-[#181818] hover:bg-[#F2CC8F]/40'
                                  : 'bg-transparent text-gray-300 border-transparent cursor-not-allowed'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slot Pills */}
                      <div className="mb-6">
                        <div className="text-xs font-mono uppercase font-bold mb-2 text-[#4A4640]">
                          Available Slots for May {selectedCalDate}:
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {['09:30 AM', '10:00 AM', '01:00 PM', '02:00 PM'].map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedCalTime(slot)}
                              className={`py-2.5 px-3 text-xs font-mono font-bold border-2 border-[#181818] transition-all ${
                                selectedCalTime === slot
                                  ? 'bg-[#181818] text-white shadow-[3px_3px_0px_#2A9D8F]'
                                  : 'bg-white text-[#181818] hover:bg-[#EFECE6]'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setBookingStep('details')}
                        className="w-full py-3.5 bg-[#E07A5F] hover:bg-[#d0674c] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#181818] shadow-[4px_4px_0px_#181818] flex items-center justify-center gap-2"
                      >
                        <span>Continue to Attendee & Stripe Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    /* STEP 2: ATTENDEE DETAILS & STRIPE PAYMENT */
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setBookingStep('confirmed');
                      }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-base text-[#181818] font-mono uppercase">
                          2. Attendee & Payment
                        </h4>
                        <button
                          type="button"
                          onClick={() => setBookingStep('calendar')}
                          className="text-xs font-mono underline text-[#E07A5F]"
                        >
                          ← Change Date
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          Parent / Participant Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={attendeeInfo.name}
                          onChange={(e) => setAttendeeInfo({ ...attendeeInfo, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3 py-2 bg-white border-2 border-[#181818] text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-mono uppercase font-bold mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={attendeeInfo.email}
                            onChange={(e) => setAttendeeInfo({ ...attendeeInfo, email: e.target.value })}
                            placeholder="sarah@example.com"
                            className="w-full px-3 py-2 bg-white border-2 border-[#181818] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase font-bold mb-1">
                            Mobile (For WhatsApp Updates)
                          </label>
                          <input
                            type="tel"
                            value={attendeeInfo.phone}
                            onChange={(e) => setAttendeeInfo({ ...attendeeInfo, phone: e.target.value })}
                            placeholder="07700 900000"
                            className="w-full px-3 py-2 bg-white border-2 border-[#181818] text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase font-bold mb-1">
                          Access Needs, Child Age or Allergies (Optional)
                        </label>
                        <input
                          type="text"
                          value={attendeeInfo.notes}
                          onChange={(e) => setAttendeeInfo({ ...attendeeInfo, notes: e.target.value })}
                          placeholder="e.g. Child age 8, nut allergy"
                          className="w-full px-3 py-2 bg-white border-2 border-[#181818] text-sm"
                        />
                      </div>

                      {/* Simulated Stripe Card Input */}
                      <div className="bg-[#EFECE6] p-3.5 border-2 border-[#181818] space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold flex items-center gap-1.5">
                            <CreditCard className="w-4 h-4 text-[#3D5A80]" /> Stripe Secure Checkout
                          </span>
                          <span className="font-bold text-[#181818]">
                            Total: £{bookingWorkshop.price * ticketCount}.00
                          </span>
                        </div>
                        <div className="bg-white px-3 py-2 border border-[#181818]/40 text-xs font-mono text-[#5A544C] flex items-center justify-between">
                          <span>•••• •••• •••• 4242</span>
                          <span>08/28 • CVC 888</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#2A9D8F] hover:bg-[#228579] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#181818] shadow-[4px_4px_0px_#181818] flex items-center justify-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Pay £{bookingWorkshop.price * ticketCount} & Confirm Booking</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: PORTFOLIO CASE STUDY ("WHAT WE'VE BEEN UP TO")
      ========================================== */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FAF8F5] border-4 border-[#181818] shadow-[12px_12px_0px_#F2CC8F] max-w-3xl w-full p-6 sm:p-8 relative my-8">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-[#181818] text-white flex items-center justify-center hover:bg-[#E07A5F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 bg-[#E07A5F] text-white text-xs font-mono font-bold uppercase mb-3 border border-[#181818]">
              {activeProject.stamp} • {activeProject.year}
            </div>

            <h3
              className="text-2xl sm:text-4xl font-extrabold text-[#181818] mb-2"
              style={{ fontFamily: "'Special Elite', cursive" }}
            >
              {activeProject.title}
            </h3>

            <div className="text-xs font-mono text-[#5A544C] mb-5">
              📍 {activeProject.location} • Category: {activeProject.category}
            </div>

            {/* Photo Reel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {activeProject.gallery.map((imgUrl, idx) => (
                <div key={idx} className="h-52 overflow-hidden border-2 border-[#181818] shadow-[4px_4px_0px_#181818]">
                  <img src={imgUrl} alt={activeProject.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-base text-[#2D2A26] leading-relaxed mb-6 bg-[#EFECE6] p-4 border-l-4 border-[#181818]">
              {activeProject.fullStory}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dashed border-[#181818]/30">
              <div className="flex flex-wrap gap-2">
                {activeProject.impactStats.map((st, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white border border-[#181818] text-xs font-mono font-bold">
                    ★ {st}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setActiveProject(null);
                  scrollToSection('contact');
                }}
                className="px-5 py-2.5 bg-[#181818] hover:bg-[#E07A5F] text-white text-xs font-mono font-bold uppercase border-2 border-[#181818]"
              >
                Book a Similar Project for Your Community →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          DRAWER: STUDIO SHOPPING BAG
      ========================================== */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-[#FAF8F5] w-full max-w-md h-full border-l-4 border-[#181818] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#181818]">
                <h3
                  className="text-2xl font-extrabold"
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  Your Studio Bag
                </h3>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1.5 bg-[#EFECE6] border border-[#181818]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <ShoppingBag className="w-12 h-12 text-[#8C857B] mx-auto" />
                  <p className="font-mono text-sm text-[#5A544C]">Your studio bag is currently empty.</p>
                </div>
              ) : (
                <div className="divide-y divide-dashed divide-[#181818]/20 my-4 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="pt-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-sm text-[#181818]">{item.name}</div>
                        <div className="text-xs font-mono text-[#5A544C]">
                          Qty: {item.qty} × £{item.price}
                        </div>
                      </div>
                      <button
                        onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                        className="text-xs font-mono text-[#E07A5F] underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t-2 border-[#181818] space-y-4">
                <div className="flex items-center justify-between font-mono font-bold text-base">
                  <span>Total:</span>
                  <span>£{cartTotal}.00</span>
                </div>
                <button
                  onClick={() => {
                    setCart([]);
                    setCartDrawerOpen(false);
                    triggerToast('🎉 Order placed via Stripe! Thank you for supporting One People Studio.');
                  }}
                  className="w-full py-3.5 bg-[#E07A5F] text-white font-mono text-xs font-bold uppercase border-2 border-[#181818] shadow-[4px_4px_0px_#181818]"
                >
                  Checkout with Stripe (£{cartTotal})
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          FLOATING PITCH BAR FOR MOLLY (OPTION 1 vs OPTION 2 DEMO)
      ========================================== */}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-40 max-w-md bg-[#181818] text-white p-3.5 border-2 border-[#F2CC8F] shadow-[6px_6px_0px_#E07A5F]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#F2CC8F] text-[#181818] flex items-center justify-center font-bold shrink-0">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#F2CC8F] font-bold">
                Ananta’s Pitch Demo for Molly
              </div>
              <div className="text-xs text-gray-200">
                {cmsEditMode
                  ? 'Option 1 Active: Click hero text or add a workshop!'
                  : 'Test Option 1 (Visual Editor) vs Option 2 (Hands-Off)'}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setCmsEditMode(!cmsEditMode);
              if (!cmsEditMode) {
                scrollToSection('home');
                triggerToast('✏️ Visual Editor Mode ON! You can now edit headlines or click "+ Test Adding a New Workshop"');
              }
            }}
            className={`px-3 py-2 text-xs font-mono font-bold uppercase border transition-all shrink-0 ${
              cmsEditMode
                ? 'bg-[#2A9D8F] text-white border-white'
                : 'bg-[#F2CC8F] text-[#181818] border-[#181818] hover:bg-white'
            }`}
          >
            {cmsEditMode ? 'Exit Editor' : 'Try Visual Editor'}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {pitchToast && (
        <div className="fixed top-24 right-4 z-50 bg-[#181818] text-[#FAF8F5] px-4 py-3 border-2 border-[#2A9D8F] shadow-[5px_5px_0px_#2A9D8F] text-xs font-mono max-w-sm animate-bounce">
          {pitchToast}
        </div>
      )}
    </div>
  );
}