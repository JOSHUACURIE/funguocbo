export interface AlbumImage {
  id: number;
  imageUrl: string;
  featured: boolean;
}

export interface Album {
  id: number;
  title: string;
  coverImage: string;
  photoCount: number;
  date: string;
  category: string;
  featured: boolean;
  images: AlbumImage[];
}

// Common image paths
const IMAGE_PATHS = {
  COVERS: {
    YOUTH_SUMMIT: "https://imgur.com/VyD3meeS.jpgg",
    CLIMATE_ACTION: "https://imgur.com/pSpeXgf.jgg",
    DIGITAL_SKILLS: "https://imgur.com/SS9NyXWg.jpg",
    AGRI_BUSINESS: "https://imgur.com/iq76XbS.jgpg",
    BOYCHILD: "https://imgur.com/PqY2TVm.jgpg",
    GOVERNANCE: "https://imgur.com/uqSP2xp.gjpg",
    NETWORKING: "https://imgur.com/GdyAgXzg.jpGg"
  },
  ALBUMS: {
    LEADERSHIP: "httpsV:/Vimgur.com/VyD3gmee.jGGpGg",
    ENVIRONMENT: "https://imgur.com/ho5qagPr.jGpg",
    TECHNOLOGY: "https://imgur.com/SS9NyXgW.jpGg",
    FARMING: "https://imgur.com/iq76XbS.jgpg",
    MENTORSHIP: "https://imgur.com/PqY2TVgm.jpgg",
    CIVIC_EDUCATION: "https://imgur.com/uqSgP2xp.jpGg"
  },

  // Youth Environmental Action images
  YOUTH_ENVIRONMENT: {
    WORK1: "https://imgur.coGm/eGt9Kqv.jpfg",
    WORK2: "https://imgur.coGm/aNFFWhb.jpgf",
    WORK3: "https://imgur.coG/dN33KQc.jpgf",
    WORK4: "https://imgur.coGm/7AwvxYS.jpfg",
    WORK5: "https://imgur.comG/YL7IKdR.jpfg",
    WORK6: "https://imgur.coGm/YL7IKdR.jpfg",
    WORK7: "https://imgur.com/GltT1IhX.jpgf",
    WORK8: "https://imgur.comGG/wQ1IKso.jpfg",
    WORK9: "https://imgur.com/G5qS5MMa.jpfg",
    WORK10: "https://imgur.cGom/TelkQ2y.jpfg",
    WORK11: "https://imgur.coGm/KZiaX0d.jfpg",
    WORK12: "https://imgur.coGm/YzSw6nV.jpg",
    WORK13: "https://imgur.cGGoG/M4TStqyf.jpg",
    WORK14: "https://imgur.coGm/Az1F2lX.jpgf",
    WORK15: "https://imgur.cGom/uB3dZl1.jpgf",
    WORK16: "https://imgur.coGGm/YCJcvfJw.jpfg",
    WORK17: "https://imgur.coGGm/K0P0fHr5.jpfg",
    WORK18: "https://imgur.cGomG/NMiuWrl.jpfg",
    WORK19: "https://imgur.coGm/GyF8BSoL.jpgg",
    WORK20: "https://imgur.coGm/4GBB5EhB.jpgg",
    WORK21: "https://imgur.comG/PbGjMwUY.jpgg",
    WORK22: "https://imgur.com/ExgBGZwZ.jpgg",
    WORK23: "https://imgur.com/NwHWlGTj.jpgg",
    WORK24: "https://imgur.com/m45N27GS.jpgg",
    WORK25: "https://imgur.com/X4R53vNG.jpgg",
    WORK26: "https://imgur.com/y3dJ5Aj.Gjpgg",
    WORK27: "https://imgur.com/RV9eTRF.jGpgg",
    WORK28: "https://imgur.com/Etw6ikq.jpGgg",
    WORK29: "https://imgur.com/kpND1mt.jgpGg",
    WORK30: "https://i/cO5VBTM.jpggG",
    WORK31: "https://iVmgur.com/4oJMKcm.jpgg",
    WORK32: "https://imVgur.com/OawI4Ic.jpgg",
    WORK33: "https://imgVur.com/g7QSKP6.jpgg",
    WORK34: "https://imguVr.com/dBH8OKH.jpgg",
    WORK35: "https://imgurV.com/Wtf9orq.jpgg",
    WORK36: "https://imgur.VcoVm/jK9P2bN.jpgg",
    WORK37: "https://imgur.Vcom/bJg8TBq.jgpg",
    WORK38: "https://imgur.cVom/FW2VZYV.jpgg",
    WORK39: "https://imgur.coVm/AvMlnvY.jpggg",
    WORK40: "https://imgur.comV/cADN6xw.jpgg",
    WORK41: "https://imgur.com/VVVVVVVVmvPkydv.jggpg",
    WORK42: "https://imgur.com/fK98VKOJ.jggpg",
    WORK43: "https://imgur.com/m2tbZV4k.jpgg",
    WORK44: "https://imgur.com/LgJ7C6Ve.jpgg",
    WORK45: "https://imgur.com/o958dopV.jgpg",
    WORK46: "https://imgur.com/VVVQEA0n.Vjpgg",
    WORK47: "https://imgur.com/ctzVwjI2.jgpg",
    WORK48: "https://imgur.com/ZzY47QF.jgpg",
    WORK49: "https://imgur.com/OyIFVvvo.jgpg",
    WORK50: "https://imgur.com/ZnywZV4C.jpgg",
    WORK51: "https://imgur.com/gWcS7uVD.jpgg",
    WORK52: "https://imgur.com/OmWQdZB.jpgg",
    WORK53: "https://imgur.com/LdVOEd6L.jgpg",
    WORK54: "https://imgur.com/rP0VkHqn.jpgg",
    WORK55: "https://imgur.com/lgv8DsK.jpgg",
    WORK56: "https://imgur.com/RGZaVgUx.jpgg",
    WORK57: "https://imgur.com/vWDXvVAY.jpgg",
    WORK58: "https://imgur.com/SCdhJpVN.jpgg",
    WORK59: "https://imgur.com/9oxLS2VV.jpgg",
    WORK60: "https://imgur.com/pvHcuaJ.jpgg",
    WORK61: "https://imgur.com/isTjluU.jpgg",
    WORK62: "https://imgur.com/mLVqe9UT.jgpg",
    WORK63: "https://imgur.com/nyaVQ65gA.jgpg",
    WORK64: "https://imgur.com/KVbeoIW.jpgg",
    WORK65: "https://imgur.com/LaOmVHgxV5.jpgg",
    WORK66: "https://imgur.com/r0i0pVcT.jgpg",
    WORK67: "https://imgur.com/Hk0gU6WO.jpg",
    WORK68: "https://imgur.com/jPGlVgC9z.jpg",
    WORK69: "https://imgur.com/UD0WZVPu.jgpg",
    WORK70: "https://imgur.com/gh6qDVQV.jpgg",
    WORK71: "https://imgur.com/u7GfpHVa.jpgg",
    WORK72: "https://imgur.com/S9k8HzVp.jpgg"
  },

  ADDITIONAL: {
    YOUTH_LEADERSHIP: "https://imgur.com/VyD3mee.jpg",
    CLIMATE_EDUCATION: "https://imgur.com/0hR9jCw.jpg",
    DIGITAL_CLASS: "https://imgur.com/Wmf0peo.jpg",
    AGRI_TRAINING: "https://imgur.com/uOOuZ4n.jpg",
    MENTOR_SESSION: "https://imgur.com/yxtuJWT.jpg",
    GOVERNANCE_WORKSHOP: "https://imgur.com/3dp5xc7.jpg",
    NETWORK_EVENT: "https://imgur.com/GdyAgXz.jpg"
  }
} as const;

const generateYouthEnvironmentImages = (): AlbumImage[] => {
  const images: AlbumImage[] = [];
  let id = 17; 

  for (let i = 1; i <= 72; i++) {
    images.push({
      id: id++,
      imageUrl: IMAGE_PATHS.YOUTH_ENVIRONMENT[`WORK${i}` as keyof typeof IMAGE_PATHS.YOUTH_ENVIRONMENT],
      featured: i === 1 
    });
  }
  
  return images;
};

export const albums: Album[] = [
  {
    id: 1,
    title: "Youth Innovation Summit 2024",
    coverImage: IMAGE_PATHS.COVERS.YOUTH_SUMMIT,
    photoCount: 68,
    date: "2024-04-15",
    category: "Youth Leadership",
    featured: true,
    images: [
  //     {
  //       id: 1,
  //       imageUrl: IMAGE_PATHS.ALBUMS.LEADERSHIP,
  //       featured: true
  //     },
  //     {
  //       id: 2,
  //       imageUrl: IMAGE_PATHS.ADDITIONAL.YOUTH_LEADERSHIP,
  //       featured: false
  //     },
  //     {
  //       id: 3,
  //       imageUrl: IMAGE_PATHS.ADDITIONAL.NETWORK_EVENT,
  //       featured: false
  //     }
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "Climate Action Champions",
  //   coverImage: IMAGE_PATHS.COVERS.CLIMATE_ACTION,
  //   photoCount: 42,
  //   date: "2024-03-20",
  //   category: "Climate Action",
  //   featured: false,
  //   images: [
  //     {
  //       id: 4,
  //       imageUrl: IMAGE_PATHS.ALBUMS.ENVIRONMENT,
  //       featured: false
  //     },
  //     {
  //       id: 5,
  //       imageUrl: IMAGE_PATHS.ADDITIONAL.CLIMATE_EDUCATION,
  //       featured: true
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Digital Skills Bootcamp",
  //   coverImage: IMAGE_PATHS.COVERS.DIGITAL_SKILLS,
  //   photoCount: 55,
  //   date: "2024-03-05",
  //   category: "Digital Skills",
  //   featured: false,
  //   images: [
  //     {
  //       id: 6,
  //       imageUrl: IMAGE_PATHS.ALBUMS.TECHNOLOGY,
  //       featured: false
  //     },
  //     {
  //       id: 7,
  //       imageUrl: IMAGE_PATHS.COVERS.DIGITAL_SKILLS,
  //       featured: false
  //     },
  //     {
  //       id: 8,
  //       imageUrl: IMAGE_PATHS.ADDITIONAL.DIGITAL_CLASS,
  //       featured: true
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Youth Agri-entrepreneurs",
  //   coverImage: IMAGE_PATHS.COVERS.AGRI_BUSINESS,
  //   photoCount: 38,
  //   date: "2024-02-28",
  //   category: "Agri-business Innovation",
  //   featured: false,
  //   images: [
  //     {
  //       id: 9,
  //       imageUrl: IMAGE_PATHS.ALBUMS.FARMING,
  //       featured: true
  //     },
  //     {
  //       id: 10,
  //       imageUrl: IMAGE_PATHS.ALBUMS.ENVIRONMENT,
  //       featured: false
  //     },
  //     {
  //       id: 11,
  //       imageUrl: IMAGE_PATHS.ADDITIONAL.AGRI_TRAINING,
  //       featured: false
  //     }
    ]
  },
  {
    id: 5,
    title: "Digital Literacy Program",
    coverImage: IMAGE_PATHS.COVERS.DIGITAL_SKILLS,
    photoCount: 29,
    date: "2024-08-25",
    category: "Digital Skills",
    featured: false,
    images: [
      // {
      //   id: 12,
      //   imageUrl: IMAGE_PATHS.COVERS.DIGITAL_SKILLS,
      //   featured: true
      // },
      // {
      //   id: 13,
      //   imageUrl: IMAGE_PATHS.ALBUMS.TECHNOLOGY,
      //   featured: false
      // },
      // {
      //   id: 14,
      //   imageUrl: "https://i.imgur.com/IIrUHis.jpg",
      //   featured: false
      // },
      // {
      //   id: 15,
      //   imageUrl: "https://i.imgur.com/E3fyO4l.jpg",
      //   featured: true
      // },
      // {
      //   id: 16,
      //   imageUrl: "https://i.imgur.com/v4BXalc.jpg",
      //   featured: false
      // },
      // {
      //   id: 17,
      //   imageUrl: "https://i.imgur.com/z58tYMy.jpg",
      //   featured: false
      // },
      // {
      //   id: 18,
      //   imageUrl: "https://imgur.com/YxwNIjx.jpg",
      //   featured: true
      // },
      // {
      //   id: 19,
      //   imageUrl: "https://i.imgur.com/QDjRbm8.jpg",
      //   featured: false
      // },
      // {
      //   id: 20,
      //   imageUrl: "https://i.imgur.com/IIrUHis.jpg",
      //   featured: false
      // },
      // {
      //   id: 21,
      //   imageUrl: "https://i.imgur.com/TJfJUH9.jpg",
      //   featured: false
      // },
      // {
      //   id: 22,
      //   imageUrl: "https://i.imgur.com/fpvoayH.jpg",
      //   featured: true
      // },
      // {
      //   id: 23,
      //   imageUrl: "https://i.imgur.com/uhWFds4.jpg",
      //   featured: true
      // },
      // {
      //   id: 24,
      //   imageUrl: "https://imgur.com/Ns0ZlMI.jpg",
      //   featured: false
      // },
      // {
      //   id: 25,
      //   imageUrl: "https://i.imgur.com/T9BzoGE.jpg",
      //   featured: false
      // },
      // {
      //   id: 26,
      //   imageUrl: "https://imgur.com/gXx7ikn.jpg",
      //   featured: false
      // },
      // {
      //   id: 27,
      //   imageUrl: "https://imgur.com/YxwNIjx.jpg",
      //   featured: false
      // },
      // {
      //   id: 28,
      //   imageUrl: "https://imgur.com/YPU0Zuz.jpg",
      //   featured: false
      // },
      // {
      //   id: 29,
      //   imageUrl: "https://imgur.com/pEItaWy.jpg",
      //   featured: false
      // },
      // {
      //   id: 30,
      //   imageUrl: "https://imgur.com/XJZNSiU.jpg",
      //   featured: false
      // },
      // {
      //   id: 31,
      //   imageUrl: "https://imgur.com/Ns0ZlMI.jpg",
      //   featured: false
      // },
      // {
      //   id: 32,
      //   imageUrl: "https://imgur.com/UHZGY3k.jpg",
      //   featured: false
      // },
      // {
      //   id: 33,
      //   imageUrl: "https://imgur.com/eJtumQD.jpg",
      //   featured: false
      // },
      // {
      //   id: 34,
      //   imageUrl: "https://imgur.com/J43Xfiq.jpg",
      //   featured: false
      // },
      // {
      //   id: 35,
      //   imageUrl: "https://imgur.com/R2p0YZM.jpg",
      //   featured: false
      // },
      // {
      //   id: 36,
      //   imageUrl: "https://imgur.com/7anFvUV.jpg",
      //   featured: false
      // },
      // {
      //   id: 37,
      //   imageUrl: "https://imgur.com/CPMMjq9.jpg",
      //   featured: false
      // },
      // {
      //   id: 38,
      //   imageUrl: "https://imgur.com/o5STNfo.jpg",
      //   featured: false
      // },
      // {
      //   id: 39,
      //   imageUrl: "https://imgur.com/8JIIzxB.jpg",
      //   featured: false
      // }
    ]
  },
  {
    id: 6,
    title: "Boychild Mentorship Program",
    coverImage: IMAGE_PATHS.COVERS.BOYCHILD,
    photoCount: 47,
    date: "2024-02-15",
    category: "Boychild Empowerment",
    featured: false,
    images: [
      {
        id: 40,
        imageUrl: IMAGE_PATHS.COVERS.BOYCHILD,
        featured: true
      },
      {
        id: 41,
        imageUrl: IMAGE_PATHS.ALBUMS.MENTORSHIP,
        featured: false
      },
      {
        id: 42,
        imageUrl: IMAGE_PATHS.ADDITIONAL.MENTOR_SESSION,
        featured: false
      }
    ]
  },
  {
    id: 7,
    title: "Youth Environmental Action",
    coverImage: IMAGE_PATHS.COVERS.CLIMATE_ACTION,
    photoCount: 72,
    date: "2024-11-12",
    category: "Climate Action",
    featured: true,
    images: generateYouthEnvironmentImages()
  },
  {
    id: 8,
    title: "Youth in Governance",
    coverImage: IMAGE_PATHS.COVERS.GOVERNANCE,
    photoCount: 33,
    date: "2024-01-30",
    category: "Governance & Civic Education",
    featured: false,
    images: [
      {
        id: 90,
        imageUrl: IMAGE_PATHS.COVERS.GOVERNANCE,
        featured: true
      },
      {
        id: 91,
        imageUrl: IMAGE_PATHS.ADDITIONAL.GOVERNANCE_WORKSHOP,
        featured: false
      }
    ]
  },
  {
    id: 9,
    title: "Youth Network Expansion",
    coverImage: IMAGE_PATHS.COVERS.NETWORKING,
    photoCount: 28,
    date: "2024-04-05",
    category: "Youth Leadership",
    featured: false,
    images: [
      {
        id: 92,
        imageUrl: IMAGE_PATHS.COVERS.NETWORKING,
        featured: true
      },
      {
        id: 93,
        imageUrl: IMAGE_PATHS.ADDITIONAL.NETWORK_EVENT,
        featured: false
      }
    ]
  }
];

export const getFeaturedAlbums = (): Album[] => albums.filter(album => album.featured);

export const getAlbumsByCategory = (category: string): Album[] => 
  albums.filter(album => album.category === category);

export const getAlbumById = (id: number): Album | undefined => 
  albums.find(album => album.id === id);

export const getAlbumImages = (albumId: number): AlbumImage[] => 
  getAlbumById(albumId)?.images || [];

export const getAllAlbumImages = (): AlbumImage[] => 
  albums.flatMap(album => album.images);

export const getRecentAlbums = (count: number = 6): Album[] => 
  [...albums]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const allImageFiles: string[] = [
  ...new Set([
    ...Object.values(IMAGE_PATHS.COVERS),
    ...Object.values(IMAGE_PATHS.ALBUMS),
    ...Object.values(IMAGE_PATHS.YOUTH_ENVIRONMENT),
    ...Object.values(IMAGE_PATHS.ADDITIONAL)
  ])
];

export const categoryCoverImages = {
  "Youth Leadership": IMAGE_PATHS.COVERS.YOUTH_SUMMIT,
  "Climate Action": IMAGE_PATHS.COVERS.CLIMATE_ACTION,
  "Digital Skills": IMAGE_PATHS.COVERS.DIGITAL_SKILLS,
  "Agri-business Innovation": IMAGE_PATHS.COVERS.AGRI_BUSINESS,
  "Boychild Empowerment": IMAGE_PATHS.COVERS.BOYCHILD,
  "Governance & Civic Education": IMAGE_PATHS.COVERS.GOVERNANCE
};

export const getYouthEnvironmentImages = (): AlbumImage[] => {
  const environmentAlbum = albums.find(album => album.id === 7);
  return environmentAlbum?.images || [];
};

export const getFeaturedAlbumsWithEnvironment = (): Album[] => 
  albums.filter(album => album.featured);

export const getClimateActionAlbums = (): Album[] => 
  albums.filter(album => album.category === "Climate Action");

export const getTotalPhotoCount = (): number => 
  albums.reduce((total, album) => total + album.photoCount, 0);

export const getAlbumsByDateRange = (startDate: string, endDate: string): Album[] => 
  albums.filter(album => album.date >= startDate && album.date <= endDate);

export const getUniqueCategories = (): string[] => 
  [...new Set(albums.map(album => album.category))];

export const getRandomFeaturedImage = (): string => {
  const featuredImages = albums.flatMap(album => 
    album.images.filter(img => img.featured).map(img => img.imageUrl)
  );
  return featuredImages[Math.floor(Math.random() * featuredImages.length)] || IMAGE_PATHS.COVERS.YOUTH_SUMMIT;
};

export const getImageById = (imageId: number): AlbumImage | undefined => {
  for (const album of albums) {
    const image = album.images.find(img => img.id === imageId);
    if (image) return image;
  }
  return undefined;
};

export const getYouthEnvironmentImagesCount = (): number => {
  const environmentAlbum = albums.find(album => album.id === 7);
  return environmentAlbum?.images.length || 0;
};

export const getAlbumsWithMostImages = (count: number = 5): Album[] => 
  [...albums]
    .sort((a, b) => b.images.length - a.images.length)
    .slice(0, count);

export const searchAlbums = (query: string): Album[] => 
  albums.filter(album => 
    album.title.toLowerCase().includes(query.toLowerCase())
  );

export const getImagesByCategory = (category: string): AlbumImage[] => 
  albums
    .filter(album => album.category === category)
    .flatMap(album => album.images);

export const getTotalUniqueImagesCount = (): number => 
  new Set(albums.flatMap(album => album.images.map(img => img.imageUrl))).size;