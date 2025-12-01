import React, { useState, useEffect } from 'react';
import '../../styles/globals.css';
import './hero.css'

interface HeroImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
}

const heroImages: HeroImage[] = [
  {
    id: 1,
    url: '/lab.jg',
    alt: 'Youth leadership training'
  },
  {
    id: 2,
    url: 'https://imgur.com/uOOuZ4n.',
    alt: 'Climate change initiatives'
  },
  {
    id: 3,
    url: 'https://imgur.com/5ytiBT',
    alt: 'Agri-business programs'
  },
  {
    id: 4,
    url: 'https://imgur.com/pSpeXgf.g',
    alt: 'Youth empowerment activities'
  },
  {
    id: 5,
    url: 'https://imgur.com/PqY2TVm.',
    alt: 'Civic education workshops'
  },
  {
    id: 6,
    url: 'https://imgur.com/SS9NyXW',
    alt: 'Gender equity programs'
  },
  {
    id: 7,
    url: 'https://imgur.com/yxtuJ',
    alt: 'Youth networking events'
  },
  {
    id: 8,
    url: 'https://imgur.com/iq76g',
    alt: 'Sustainable change projects'
  },
  {
    id: 9,
    url: 'https://imgur.com/ho5qaPr',
    alt: 'Boychild empowerment'
  },
  {
    id: 10,
    url: 'https://imgur.com/lPtfYfpg',
    alt: 'Youth innovation programs'
  }
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            FUNGUO
            <span className="hero-subtitle">Youth Leading for a Better Future</span>
          </h1>
          
          <p className="hero-tagline">
            Unlocking Youth Potential for Sustainable Change
          </p>
          
          <div className="hero-mission">
            <div className="vision-mission">
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">A society where young people are empowered, resilient, and leading sustainable change.</p>
              
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To unlock the potential of youth by fostering unlimited networks, growth, leadership, 
                innovation and championing sustainable change.
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <a href="/donate" className="ca-button ca-primary">
              Support Our Cause
            </a>
            <a href="/about" className="ca-button ca-secondary">
              Learn More
            </a>
            <a href="/contact" className="ca-button ca-outline">
              Join Our Network
            </a>
          </div>
        </div>

        {/* Ending Triple Threat Sidebar */}
        <div className="hero-value">
          <h3 className="value-title">Ending Triple Threat</h3>
          <ul className="value-list">
            <li className="value-items">
              <span className="value-numbers">1</span>
              <span className="value-texts">Youth Empowerment</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">2</span>
              <span className="value-texts">Climate Change</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">3</span>
              <span className="value-texts">Agri-business</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">4</span>
              <span className="value-texts">Governance & Civic Education</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">5</span>
              <span className="value-texts">Gender Equity</span>
            </li>
          </ul>

          
        </div>
      </div>

      {/* Program Focus Areas */}
      <div className="program-pillars">
        <div className="pillars-container">
          <h3 className="pillars-title">Our Focus Areas</h3>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🌟</div>
              <h4 className="pillar-name">Youth Empowerment</h4>
              <p className="pillar-description">
                Unlocking the potential of young people through mentorship, capacity building, 
                and personal development programs.
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🌍</div>
              <h4 className="pillar-name">Climate Change</h4>
              <p className="pillar-description">
                Empowering youth to lead environmental conservation efforts and champion 
                sustainable climate solutions.
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🌱</div>
              <h4 className="pillar-name">Agri-business</h4>
              <p className="pillar-description">
                Promoting youth involvement in agriculture through modern farming techniques, 
                entrepreneurship, and value chain development.
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🏛️</div>
              <h4 className="pillar-name">Governance & Civic Education</h4>
              <p className="pillar-description">
                Educating youth on civic rights, responsibilities, and active participation 
                in governance processes.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">⚖️</div>
              <h4 className="pillar-name">Gender Equity</h4>
              <p className="pillar-description">
                Promoting equal opportunities and rights for all genders, with special focus 
                on boychild empowerment.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🔗</div>
              <h4 className="pillar-name">Networks & Innovation</h4>
              <p className="pillar-description">
                Fostering unlimited networks and innovative thinking among youth to drive 
                sustainable community change.
              </p>
            </div>
          </div>
        </div>

        <div className="image-slider-section">
          <div className="slider-container">
            <h3 className="slider-section-title">Our Youth in Action</h3>
            
            <div className="hero-slider">
              <div 
                className={`hero-slide ${isTransitioning ? 'transitioning' : ''}`}
                style={{
                  backgroundImage: `url('${heroImages[currentImageIndex].url}')`
                }}
              >
                <div className="hero-slide-overlay"></div>
                
                <div className="slide-title">
                  {heroImages[currentImageIndex].title}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                className="slider-arrow slider-arrow-prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button 
                className="slider-arrow slider-arrow-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;