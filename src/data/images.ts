export interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  album: string;
  date: string;
  tags: string[];
  featured: boolean;
  altText: string;
}

export interface Album {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  photoCount: number;
  date: string;
  category: string;
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  photoCount: number;
  coverImage: string;
}

// Photo Categories
export const photoCategories: Category[] = [
  {
    id: 1,
    name: "Youth Leadership",
    description: "Youth leadership training, mentorship programs, and young change-makers in action",
    photoCount: 95,
    coverImage: "https://imgcur.com/VyD3mee.jpg"
  },
  {
    id: 2,
    name: "Climate Action",
    description: "Youth-led environmental conservation, tree planting, and climate education initiatives",
    photoCount: 78,
    coverImage: "https://imgucr.com/pSpeXgf.jpg"
  },
  {
    id: 3,
    name: "Agri-business Innovation",
    description: "Youth in modern agriculture, sustainable farming, and agri-entrepreneurship",
    photoCount: 62,
    coverImage: "https://imgucr.com/iq76XbS.jpg"
  },
  {
    id: 4,
    name: "Digital Skills",
    description: "Technology training, digital literacy, and youth innovation in tech",
    photoCount: 88,
    coverImage: "https://imgurc.com/SS9NyXW.jpg"
  },
  {
    id: 5,
    name: "Boychild Empowerment",
    description: "Mentorship, academic support, and leadership development for young boys",
    photoCount: 45,
    coverImage: "https://imgur.cocm/PqY2TVm.jpg"
  },
  {
    id: 6,
    name: "Governance & Civic Education",
    description: "Youth participation in governance, civic education, and community leadership",
    photoCount: 52,
    coverImage: "https://imgur.com/uqcSP2xp.jpg"
  }
];

// Photo Albums
export const photoAlbums: Album[] = [
  {
    id: 1,
    title: "Youth Innovation Summit 2024",
    description: "Annual gathering of young innovators and leaders driving sustainable change across East Africa",
    coverImage: "https://imgur.com/VyD3mcee.jpg",
    photoCount: 68,
    date: "2024-04-15",
    category: "Youth Leadership",
    featured: true
  },
  {
    id: 2,
    title: "Climate Action Champions",
    description: "Youth environmental ambassadors leading conservation efforts in Migori County",
    coverImage: "https://icmgur.com/ho5qcaPr.jpg",
    photoCount: 42,
    date: "2024-03-20",
    category: "Climate Action",
    featured: false
  },
  {
    id: 3,
    title: "Digital Skills Bootcamp",
    description: "Intensive technology training program empowering youth with digital literacy",
    coverImage: "https://imgcur.com/cSS9NyXW.jpg",
    photoCount: 55,
    date: "2024-03-05",
    category: "Digital Skills",
    featured: false
  },
  {
    id: 4,
    title: "Youth Agri-entrepreneurs",
    description: "Young farmers revolutionizing agriculture through innovation and sustainable practices",
    coverImage: "https://imgur.com/iq76XbS.jpcg",
    photoCount: 38,
    date: "2024-02-28",
    category: "Agri-business Innovation",
    featured: false
  },
  {
    id: 5,
    title: "Boychild Mentorship Program",
    description: "Transforming young boys into confident leaders through guidance and support",
    coverImage: "https://imgur.com/PqY2TVm.jpgc",
    photoCount: 47,
    date: "2024-02-15",
    category: "Boychild Empowerment",
    featured: false
  },
  {
    id: 6,
    title: "Youth in Governance",
    description: "Young leaders actively participating in community decision-making processes",
    coverImage: "https://imgur.com/uqSP2xp.jpgc",
    photoCount: 33,
    date: "2024-01-30",
    category: "Governance & Civic Education",
    featured: false
  }
];

// Sample Photos Data
export const photos: Photo[] = [
  // Youth Leadership Category
  {
    id: 1,
    title: "Youth Leadership Training",
    description: "Young leaders developing essential skills for community transformation and sustainable change",
    imageUrl: "https://imgur.com/VyD3mee.jpcg",
    category: "Youth Leadership",
    album: "Youth Innovation Summit 2024",
    date: "2024-04-15",
    tags: ["leadership", "youth", "training", "empowerment"],
    featured: true,
    altText: "Youth leadership training session with young participants"
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    description: "Youth gaining confidence in public speaking and communication skills",
    imageUrl: "https://imgur.com/yxtuJWT.jpcg",
    category: "Youth Leadership",
    album: "Youth Innovation Summit 2024",
    date: "2024-04-14",
    tags: ["public speaking", "communication", "confidence", "youth"],
    featured: false,
    altText: "Youth practicing public speaking skills"
  },

  // Climate Action Category
  {
    id: 3,
    title: "Tree Planting Initiative",
    description: "Young environmental activists planting trees for climate resilience in Rongo",
    imageUrl: "https://imgur.com/ho5qaPr.jcpg",
    category: "Climate Action",
    album: "Climate Action Champions",
    date: "2024-03-20",
    tags: ["tree planting", "climate", "environment", "youth"],
    featured: true,
    altText: "Youth planting trees for environmental conservation"
  },
  {
    id: 4,
    title: "Clean Energy Demonstration",
    description: "Youth learning about solar energy solutions for sustainable communities",
    imageUrl: "https://imgur.com/lPtfYfH.jpcg",
    category: "Climate Action",
    album: "Climate Action Champions",
    date: "2024-03-18",
    tags: ["solar", "clean energy", "sustainability", "innovation"],
    featured: false,
    altText: "Youth learning about solar energy technology"
  },

  // Agri-business Innovation Category
  {
    id: 5,
    title: "Modern Farming Techniques",
    description: "Young farmers learning sustainable agriculture practices at FUNGUO demo farm",
    imageUrl: "https://imgur.com/iq76XbS.jpcg",
    category: "Agri-business Innovation",
    album: "Youth Agri-entrepreneurs",
    date: "2024-02-28",
    tags: ["farming", "agriculture", "sustainable", "youth"],
    featured: false,
    altText: "Youth learning modern farming techniques"
  },
  {
    id: 6,
    title: "Agri-business Planning",
    description: "Youth developing business plans for agricultural enterprises",
    imageUrl: "https://imgur.com/uOOuZ4n.cjpg",
    category: "Agri-business Innovation",
    album: "Youth Agri-entrepreneurs",
    date: "2024-02-25",
    tags: ["agri-business", "entrepreneurship", "planning", "innovation"],
    featured: true,
    altText: "Youth working on agricultural business plans"
  },

  // Digital Skills Category
  {
    id: 7,
    title: "Digital Literacy Class",
    description: "Youth gaining essential computer skills for the digital economy",
    imageUrl: "https://imgur.com/SS9NyXW.jcpg",
    category: "Digital Skills",
    album: "Digital Skills Bootcamp",
    date: "2024-03-05",
    tags: ["digital", "technology", "skills", "youth"],
    featured: false,
    altText: "Youth learning computer skills in digital class"
  },
  {
    id: 8,
    title: "Coding Workshop",
    description: "Young innovators learning programming and software development",
    imageUrl: "https://imgur.com/5ytiBT5.jpcg",
    category: "Digital Skills",
    album: "Digital Skills Bootcamp",
    date: "2024-03-03",
    tags: ["coding", "programming", "tech", "innovation"],
    featured: true,
    altText: "Youth participating in coding workshop"

  },

  // Boychild Empowerment Category
  {
    id: 9,
    title: "Mentorship Session",
    description: "Young boys receiving guidance and support from experienced mentors",
    imageUrl: "https://imgur.com/PqY2TVm.jpcg",
    category: "Boychild Empowerment",
    album: "Boychild Mentorship Program",
    date: "2024-02-15",
    tags: ["mentorship", "boys", "guidance", "empowerment"],
    featured: false,
    altText: "Mentorship session for young boys"
  },
  {
    id: 10,
    title: "Academic Support Program",
    description: "Boys receiving tutoring and academic assistance to improve performance",
    imageUrl: "https://imgur.com/yxtuJWT.jpcg",
    category: "Boychild Empowerment",
    album: "Boychild Mentorship Program",
    date: "2024-02-12",
    tags: ["academic", "tutoring", "education", "boys"],
    featured: true,
    altText: "Academic support session for boys"
  },

  // Governance & Civic Education Category
  {
    id: 11,
    title: "Community Dialogue",
    description: "Youth actively participating in community governance discussions",
    imageUrl: "https://imgur.com/uqSP2xp.jpcg",
    category: "Governance & Civic Education",
    album: "Youth in Governance",
    date: "2024-01-30",
    tags: ["governance", "dialogue", "community", "youth"],
    featured: false,
    altText: "Youth participating in community governance meeting"
  },
  {
    id: 12,
    title: "Civic Education Workshop",
    description: "Young citizens learning about their rights and responsibilities",
    imageUrl: "https://imgur.com/3dp5xc7.jpcg",
    category: "Governance & Civic Education",
    album: "Youth in Governance",
    date: "2024-01-28",
    tags: ["civic education", "rights", "responsibilities", "youth"],
    featured: true,
    altText: "Civic education workshop for youth"
  },

  // Additional photos to reach 20+
  {
    id: 13,
    title: "Youth Network Meeting",
    description: "Young leaders connecting and building networks for collaboration",
    imageUrl: "https://imgur.com/GdyAgXz.jcpg",
    category: "Youth Leadership",
    album: "Youth Innovation Summit 2024",
    date: "2024-04-13",
    tags: ["networking", "collaboration", "youth", "connections"],
    featured: false,
    altText: "Youth networking meeting and connections"
  },
  {
    id: 14,
    title: "Environmental Cleanup",
    description: "Youth volunteers cleaning up community spaces and promoting hygiene",
    imageUrl: "https://imgur.com/0hR9jCw.jcpg",
    category: "Climate Action",
    album: "Climate Action Champions",
    date: "2024-03-15",
    tags: ["cleanup", "environment", "hygiene", "volunteers"],
    featured: false,
    altText: "Youth participating in environmental cleanup"
  },
  {
    id: 15,
    title: "Agri-tech Innovation",
    description: "Youth exploring technology applications in agriculture",
    imageUrl: "https://imgur.com/lPtfYfH.jcpg",
    category: "Agri-business Innovation",
    album: "Youth Agri-entrepreneurs",
    date: "2024-02-20",
    tags: ["agri-tech", "innovation", "technology", "farming"],
    featured: false,
    altText: "Youth learning about agricultural technology"
  },
  {
    id: 16,
    title: "Digital Marketing Training",
    description: "Youth learning online marketing skills for business growth",
    imageUrl: "https://imgur.com/SS9NyXW.jpcg",
    category: "Digital Skills",
    album: "Digital Skills Bootcamp",
    date: "2024-03-08",
    tags: ["digital marketing", "business", "online", "skills"],
    featured: false,
    altText: "Digital marketing training for youth"
  },
  {
    id: 17,
    title: "Career Guidance Session",
    description: "Boys receiving career advice and future planning support",
    imageUrl: "https://imgur.com/PqY2TVm.jcpg",
    category: "Boychild Empowerment",
    album: "Boychild Mentorship Program",
    date: "2024-02-18",
    tags: ["career", "guidance", "future", "boys"],
    featured: false,
    altText: "Career guidance session for young boys"
  },
  {
    id: 18,
    title: "Youth Advocacy Training",
    description: "Young leaders learning advocacy skills for community change",
    imageUrl: "https://imgur.com/uqSP2xp.jpgc",
    category: "Governance & Civic Education",
    album: "Youth in Governance",
    date: "2024-01-25",
    tags: ["advocacy", "leadership", "community", "youth"],
    featured: false,
    altText: "Youth advocacy training session"
  },
  {
    id: 19,
    title: "Innovation Pitch Session",
    description: "Youth presenting innovative ideas for community development",
    imageUrl: "https://imgur.cocm/VyD3mee.jcpg",
    category: "Youth Leadership",
    album: "Youth Innovation Summit 2024",
    date: "2024-04-16",
    tags: ["innovation", "pitch", "ideas", "youth"],
    featured: true,
    altText: "Youth pitching innovative ideas"
  },
  {
    id: 20,
    title: "Sustainable Farming Practice",
    description: "Youth implementing climate-smart agriculture techniques",
    imageUrl: "https://imgur.vcom/ho5qaPr.jpcg",
    category: "Climate Action",
    album: "Climate Action Champions",
    date: "2024-03-22",
    tags: ["sustainable", "farming", "climate", "youth"],
    featured: false,
    altText: "Youth practicing sustainable farming methods"
  }
];

// Helper functions
export const getFeaturedPhotos = (): Photo[] => {
  return photos.filter(photo => photo.featured);
};

export const getPhotosByCategory = (category: string): Photo[] => {
  return photos.filter(photo => photo.category === category);
};

export const getPhotosByAlbum = (album: string): Photo[] => {
  return photos.filter(photo => photo.album === album);
};

export const getRecentPhotos = (count: number = 12): Photo[] => {
  return photos
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllCategories = (): string[] => {
  return [...new Set(photos.map(photo => photo.category))];
};