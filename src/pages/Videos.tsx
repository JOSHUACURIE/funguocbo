import React from 'react';
import '../styles/globals.css';
import { photos, photoCategories } from '../data/images'; // Adjust import path as needed
import FacebookVideo from '../components/FBVideos';
const Videos: React.FC = () => {
  // Map photos to video cards
const videoCards =[
  {
    id: 1,
    title: "Youth Innovation Summit 2024 Highlights",
    description: "Young leaders showcasing innovative solutions for community challenges across East Africa",
    duration: "8:30",
    views: "2.5K views",
    date: "2 weeks ago",
    image: photos.find(p => p.id === 1)?.imageUrl || "https://imgur.com/VyD3mee" // Youth Leadership Training
  },
  {
    id: 2,
    title: "Digital Skills Bootcamp Graduation",
    description: "100 youth graduates equipped with essential digital literacy and tech skills",
    duration: "6:45",
    views: "1.8K views",
    date: "1 month ago",
    image: photos.find(p => p.id === 7)?.imageUrl || "https://imgur.com/SS9NyXW" // Digital Skills Class
  },
  {
    id: 3,
    title: "Climate Action Champions in Migori",
    description: "Youth environmental ambassadors leading tree planting and conservation efforts",
    duration: "10:20",
    views: "3.2K views",
    date: "2 months ago",
    image: photos.find(p => p.id === 3)?.imageUrl || "https://imgur.com/ho5qaPr" // Tree Planting Initiative
  },
  {
    id: 4,
    title: "Agri-business Innovation Showcase",
    description: "Young entrepreneurs revolutionizing agriculture with modern farming techniques",
    duration: "9:15",
    views: "2.1K views",
    date: "3 months ago",
    image: photos.find(p => p.id === 5)?.imageUrl || "https://imgur.com/iq76XbS" // Modern Farming Training
  },
  {
    id: 5,
    title: "Boychild Empowerment Program Launch",
    description: "Mentorship and leadership development initiative for young boys in Rongo",
    duration: "7:50",
    views: "4.8K views",
    date: "4 months ago",
    image: photos.find(p => p.id === 9)?.imageUrl || "https://imgur.com/PqY2TVm" // Boychild Mentorship
  },
  {
    id: 6,
    title: "Youth Governance & Civic Education",
    description: "Young citizens actively participating in community leadership and decision-making",
    duration: "11:30",
    views: "3.5K views",
    date: "5 months ago",
    image: photos.find(p => p.id === 11)?.imageUrl || "https://imgur.com/uqSP2xp" // Community Dialogue
  },
  {
    id: 7,
    title: "Youth Network Expansion Event",
    description: "Connecting young leaders across borders for collaboration and knowledge sharing",
    duration: "5:40",
    views: "1.9K views",
    date: "6 months ago",
    image: photos.find(p => p.id === 13)?.imageUrl || "https://imgur.com/GdyAgXz" // Networking Event
  },
  {
    id: 8,
    title: "Sustainable Farming Techniques Workshop",
    description: "Youth learning climate-smart agriculture and sustainable food production",
    duration: "12:10",
    views: "2.7K views",
    date: "7 months ago",
    image: photos.find(p => p.id === 5)?.imageUrl || "https://imgur.com/uOOuZ4" // Agri Training
  },
  {
    id: 9,
    title: "Youth Leadership Mentorship Program",
    description: "Seasoned professionals guiding young leaders in personal and career development",
    duration: "14:25",
    views: "3.9K views",
    date: "8 months ago",
    image: photos.find(p => p.id === 1)?.imageUrl || "https://imgur.com/VyD3me" // Leadership Development
  }
];
// Map categories to video categories
const videoCategoryCards= [
  {
    icon: "🌟",
    title: "Youth Leadership",
    description: "Leadership training, innovation showcases, and young change-makers in action",
    count: "15 videos",
    image: photoCategories.find(c => c.id === 1)?.coverImage || "https://imgur.com/VyD3meg"
  },
  {
    icon: "💻",
    title: "Digital Skills",
    description: "Technology training, coding workshops, and digital innovation programs",
    count: "12 videos",
    image: photoCategories.find(c => c.id === 4)?.coverImage || "https://imgur.com/SS9Nypg"
  },
  {
    icon: "🌍",
    title: "Climate Action",
    description: "Youth-led environmental conservation and sustainability initiatives",
    count: "8 videos",
    image: photoCategories.find(c => c.id === 2)?.coverImage || "https://imgur.com/pSpeXgg"
  },
  {
    icon: "🚜",
    title: "Agri-business",
    description: "Youth innovation in agriculture and sustainable farming practices",
    count: "6 videos",
    image: photoCategories.find(c => c.id === 3)?.coverImage || "https://imgur.com/iq76XbSg"
  },
  {
    icon: "👦",
    title: "Boychild Empowerment",
    description: "Mentorship, academic support, and leadership development for boys",
    count: "7 videos",
    image: photoCategories.find(c => c.id === 5)?.coverImage || "https://imgur.com/PqY2TVm"
  },
  {
    icon: "🏛️",
    title: "Governance & Civic Education",
    description: "Youth participation in governance and community decision-making",
    count: "5 videos",
    image: photoCategories.find(c => c.id === 6)?.coverImage || "https://imgur.com/uqSP2xp.j"
  }
];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/media">Media</a> &gt; <span>Videos</span>
        </div>
        <h1 className="page-title">Videos</h1>
        <p className="page-subtitle">
          Watch our journey, impact stories, and community transformations in motion
        </p>
      </div>

      <div className="page-content">
        {/* Featured Video */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Video</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-video">
            <div className="video-container">
              <div 
                className="video-placeholder featured-video-bg"
             
              >
                <div className="play-icon">▶</div>
                <div className="video-overlay">
                  <h3>Millimani United: Our Impact Story</h3>
                  <p>Watch how we're transforming communities across the region</p>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h3>Our Impact Story</h3>
              <p>
                This documentary showcases the incredible journey of Millimani United over the past 
                five years. From humble beginnings to becoming a catalyst for community transformation, 
                witness the stories of hope, resilience, and empowerment.
              </p>
              <div className="video-meta">
                <span className="duration">15:30</span>
                <span className="views">2,500+ views</span>
                <span className="date">Posted: March 15, 2024</span>
              </div>
            </div>
          </div>
        </section>
{/* Facebook Videos */}
<section className="content-section">
  <div className="section-header">
    <h2>Facebook Videos</h2>
    <div className="section-divider"></div>
    <p className="section-description">
      Watch our latest stories and events directly from our official Facebook page
    </p>
  </div>

  <div className="facebook-videos-grid">
    <FacebookVideo videoUrl="https://www.facebook.com/reel/858684209936434/" />
    <FacebookVideo videoUrl="https://www.facebook.com/reel/1844156789793644/" />
     
  </div>
</section>

        {/* Video Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="video-categories">
            {videoCategoryCards.map((category, index) => (
              <div 
                key={index}
                className="category-card"
               
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Gallery</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Explore our collection of videos showcasing programs, events, and success stories
            </p>
          </div>
          
          <div className="video-gallery">
            {videoCards.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${video.image})`
                    }}
                  >
                    <div className="play-button">▶</div>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                </div>
                <div className="video-details">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-meta">
                    <span className="views">{video.views}</span>
                    <span className="date">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Channel CTA */}
        <section className="cta-section youtube-cta">
          <div className="cta-content">
            <div className="youtube-icon">📺</div>
            <h2>Subscribe to Our YouTube Channel</h2>
            <p>
              Stay updated with our latest videos, success stories, and community impact updates. 
              Be the first to watch new content and join our growing community of supporters.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary"
              >
                Visit Our Channel
              </a>
              <a href="/media/gallery" className="cta-button secondary">
                View Photo Gallery
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;