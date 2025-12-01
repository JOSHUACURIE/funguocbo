export interface BoardMember {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  emoji: string;
  featured: boolean;
  imageUrl: string;
  altText: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "User 1",
    title: "Youth Development Strategist",
    role: "Chairperson",
    bio: "With over 15 years of experience in youth empowerment and strategic leadership, User 1 provides visionary guidance to FUNGUO. Their expertise in youth-led development and sustainable change has been instrumental in our growth across East Africa.",
    expertise: ["Youth Leadership", "Strategic Planning", "Sustainable Development"],
    emoji: "🌟",
    featured: true,
    imageUrl: "https://imgur.com/NFpzNLo.jpg",
    altText: "User 1 - Chairperson"
  },
  {
    id: 2,
    name: "User 2",
    title: "Climate Action & Environmental Expert",
    role: "Board Member",
    bio: "Specializing in youth-led environmental conservation and climate resilience, User 2 provides crucial guidance on our climate action programs with extensive experience in sustainable practices and community-based conservation.",
    expertise: ["Climate Action", "Environmental Conservation", "Sustainability"],
    emoji: "🌍",
    featured: false,
    imageUrl: "https://imgur.com/43vcZnx.jpg",
    altText: "User 2 - Climate Action Expert"
  },
  {
    id: 3,
    name: "User 3",
    title: "Digital Innovation Specialist",
    role: "Board Member",
    bio: "A technology expert passionate about youth digital inclusion. User 3 guides our digital skills programs and innovation initiatives, bringing extensive experience in tech education and digital transformation for young people.",
    expertise: ["Digital Skills", "Technology Innovation", "Youth Empowerment"],
    emoji: "💻",
    featured: false,
    imageUrl: "https://imgur.com/2vr0w6l.jpg",
    altText: "User 3 - Digital Innovation Specialist"
  },
  {
    id: 4,
    name: "User 4",
    title: "Agri-business Development Advisor",
    role: "Board Member",
    bio: "An expert in youth agricultural entrepreneurship and sustainable farming. User 4 provides strategic guidance on our agri-business programs, focusing on innovative farming techniques and youth-led agricultural enterprises.",
    expertise: ["Agri-business", "Sustainable Farming", "Youth Entrepreneurship"],
    emoji: "🚜",
    featured: false,
    imageUrl: "https://imgur.com/ae7MWy5.jpg",
    altText: "User 4 - Agri-business Development Advisor"
  },
  {
    id: 5,
    name: "User 5",
    title: "Financial Strategy & Resource Mobilization",
    role: "Board Member",
    bio: "With extensive experience in youth program financing and resource management, User 5 provides strategic financial guidance and ensures sustainable resource allocation for our youth empowerment initiatives and organizational growth.",
    expertise: ["Financial Strategy", "Resource Mobilization", "Program Funding"],
    emoji: "💰",
    featured: false,
    imageUrl: "https://imgur.com/UxRYumO.jpg",
    altText: "User 5 - Financial Strategy Expert"
  },
  {
    id: 6,
    name: "User 6",
    title: "Governance & Civic Education Expert",
    role: "Board Member",
    bio: "A governance specialist focused on youth participation in civic processes. User 6 brings extensive experience in youth leadership development and ensures our programs promote active citizenship and community engagement.",
    expertise: ["Governance", "Civic Education", "Youth Participation"],
    emoji: "🏛️",
    featured: false,
    imageUrl: "https://imgur.com/pRwxAZu.jpg",
    altText: "User 6 - Governance & Civic Education Expert"
  },
  {
    id: 7,
    name: "User 7",
    title: "Gender Equity & Boychild Empowerment",
    role: "Board Member",
    bio: "Specializing in gender equity and youth development, User 7 provides strategic guidance on our boychild empowerment programs and ensures inclusive approaches across all FUNGUO initiatives for balanced youth development.",
    expertise: ["Gender Equity", "Boychild Empowerment", "Inclusive Development"],
    emoji: "⚖️",
    featured: false,
    imageUrl: "/images/board/michael-odhiambo.jpg",
    altText: "User 7 - Gender Equity Specialist"
  }
];

export interface BoardCommittee {
   id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  emoji: string;
  featured: boolean;
  imageUrl: string;
  altText: string;
}

export const boardCommittees: BoardCommittee[] = [
    {
    id: 1,
    name: "User 1",
    title: "Youth Development Strategist",
    role: "Chairperson",
    bio: "With over 15 years of experience in youth empowerment and strategic leadership, User 1 provides visionary guidance to FUNGUO. Their expertise in youth-led development and sustainable change has been instrumental in our growth across East Africa.",
    expertise: ["Youth Leadership", "Strategic Planning", "Sustainable Development"],
    emoji: "🌟",
    featured: true,
    imageUrl: "https://imgur.com/NFzNLo.jpg",
    altText: "User 1 - Chairperson"
  },
  {
    id: 2,
    name: "User 2",
    title: "Climate Action & Environmental Expert",
    role: "Board Member",
    bio: "Specializing in youth-led environmental conservation and climate resilience, User 2 provides crucial guidance on our climate action programs with extensive experience in sustainable practices and community-based conservation.",
    expertise: ["Climate Action", "Environmental Conservation", "Sustainability"],
    emoji: "🌍",
    featured: false,
    imageUrl: "https://imgur.com/3vcZnx.jpg",
    altText: "User 2 - Climate Action Expert"
  },
  {
    id: 3,
    name: "User 3",
    title: "Digital Innovation Specialist",
    role: "Board Member",
    bio: "A technology expert passionate about youth digital inclusion. User 3 guides our digital skills programs and innovation initiatives, bringing extensive experience in tech education and digital transformation for young people.",
    expertise: ["Digital Skills", "Technology Innovation", "Youth Empowerment"],
    emoji: "💻",
    featured: false,
    imageUrl: "https://imgur.com/2r0w6.jp",
    altText: "User 3 - Digital Innovation Specialist"
  },
  {
    id: 4,
    name: "User 4",
    title: "Agri-business Development Advisor",
    role: "Board Member",
    bio: "An expert in youth agricultural entrepreneurship and sustainable farming. User 4 provides strategic guidance on our agri-business programs, focusing on innovative farming techniques and youth-led agricultural enterprises.",
    expertise: ["Agri-business", "Sustainable Farming", "Youth Entrepreneurship"],
    emoji: "🚜",
    featured: false,
    imageUrl: "https://imgur.com/aeMWy5.jpg",
    altText: "User 4 - Agri-business Development Advisor"
  },
  {
    id: 5,
    name: "User 5",
    title: "Financial Strategy & Resource Mobilization",
    role: "Board Member",
    bio: "With extensive experience in youth program financing and resource management, User 5 provides strategic financial guidance and ensures sustainable resource allocation for our youth empowerment initiatives and organizational growth.",
    expertise: ["Financial Strategy", "Resource Mobilization", "Program Funding"],
    emoji: "💰",
    featured: false,
    imageUrl: "https://imgur.com/URYumO.jpg",
    altText: "User 5 - Financial Strategy Expert"
  },
  {
    id: 6,
    name: "User 6",
    title: "Governance & Civic Education Expert",
    role: "Board Member",
    bio: "A governance specialist focused on youth participation in civic processes. User 6 brings extensive experience in youth leadership development and ensures our programs promote active citizenship and community engagement.",
    expertise: ["Governance", "Civic Education", "Youth Participation"],
    emoji: "🏛️",
    featured: false,
    imageUrl: "https://imgur.com/pwxAZu.jpg",
    altText: "User 6 - Governance & Civic Education Expert"
  },
  {
    id: 7,
    name: "User 7",
    title: "Gender Equity & Boychild Empowerment",
    role: "Board Member",
    bio: "Specializing in gender equity and youth development, User 7 provides strategic guidance on our boychild empowerment programs and ensures inclusive approaches across all FUNGUO initiatives for balanced youth development.",
    expertise: ["Gender Equity", "Boychild Empowerment", "Inclusive Development"],
    emoji: "⚖️",
    featured: false,
    imageUrl: "/images/board/michael-odhiambo.jpg",
    altText: "User 7 - Gender Equity Specialist"
  }
];

export interface BoardResponsibility {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const boardResponsibilities: BoardResponsibility[] = [
  {
    id: 1,
    title: "Youth Empowerment Strategy",
    description: "Setting strategic direction for youth development programs and sustainable change initiatives",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Program Impact Oversight",
    description: "Monitoring and evaluating the effectiveness of youth empowerment programs and initiatives",
    icon: "📊"
  },
  {
    id: 3,
    title: "Financial Stewardship",
    description: "Ensuring proper management of resources dedicated to youth development and organizational sustainability",
    icon: "💰"
  },
  {
    id: 4,
    title: "Network Development",
    description: "Overseeing the expansion of youth networks and partnership building across East Africa",
    icon: "🌐"
  },
  {
    id: 5,
    title: "Innovation & Growth",
    description: "Guiding the adoption of innovative approaches to youth empowerment and organizational scaling",
    icon: "💡"
  },
  {
    id: 6,
    title: "Governance & Compliance",
    description: "Ensuring adherence to legal requirements and ethical standards in youth programming",
    icon: "⚖️"
  }
];