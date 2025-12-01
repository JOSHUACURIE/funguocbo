import React from 'react';
import '../styles/globals.css';

const Newsletters: React.FC = () => {
  return (
    <div className="newsletter-page-container">
      <div className="newsletter-page-header">
        <div className="newsletter-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Newsletters</span>
        </div>
        <h1 className="newsletter-page-title">Newsletters</h1>
        <p className="newsletter-page-subtitle">
          Monthly updates, inspiring youth stories, and impact reports delivered straight to your inbox
        </p>
      </div>

      <div className="newsletter-page-content">
        {/* Latest Newsletter */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Latest Edition</h2>
            <div className="newsletter-section-divider"></div>
          </div>
          
          <div className="newsletter-featured-edition">
            <div className="newsletter-edition-cover">
              <div className="newsletter-edition-info">
                <div className="newsletter-edition-month">March 2024</div>
                <div className="newsletter-edition-title">Youth Leading Change</div>
                <div className="newsletter-edition-theme">Unlocking Potential & Driving Sustainable Innovation</div>
                <div className="newsletter-edition-badge">New</div>
              </div>
            </div>
            <div className="newsletter-edition-content">
              <div className="newsletter-content-highlights">
                <h3>In This Edition</h3>
                <ul>
                  <li>🌟 <strong>Youth Leadership Spotlight:</strong> Young leaders transforming their communities</li>
                  <li>🌱 <strong>Climate Action Update:</strong> Youth ambassadors plant 5,000 trees in Migori</li>
                  <li>💻 <strong>Digital Skills Milestone:</strong> 100 youth graduate from tech training program</li>
                  <li>🤝 <strong>Network Expansion:</strong> New East Africa youth partnerships launched</li>
                  <li>📅 <strong>Upcoming Events:</strong> Youth innovation challenge & leadership summit</li>
                </ul>
              </div>
              
              <div className="newsletter-featured-story">
                <h4>Featured Story: From Student to Agri-Entrepreneur</h4>
                <p>
                  Meet David, a recent graduate who transformed his family's small farm into a thriving 
                  agri-business through our youth empowerment program. His innovative approach to sustainable 
                  farming now employs 8 other young people in Rongo.
                </p>
                <div className="newsletter-story-stats">
                  <span>🚜 8 youth employed</span>
                  <span>📈 200% income growth</span>
                  <span>🌾 Sustainable farming model</span>
                </div>
              </div>
              
              <div className="newsletter-impact-spotlight">
                <h4>Youth Impact Spotlight</h4>
                <div className="newsletter-impact-metrics">
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">1,500+</div>
                    <div className="newsletter-metric-label">Youth Empowered This Month</div>
                  </div>
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">25</div>
                    <div className="newsletter-metric-label">Youth-Led Projects Launched</div>
                  </div>
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">92%</div>
                    <div className="newsletter-metric-label">Program Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="newsletter-edition-actions">
                <button className="newsletter-edition-btn newsletter-btn-primary">
                  <span className="newsletter-btn-icon">📖</span>
                  Read Online Edition
                </button>
                <button className="newsletter-edition-btn newsletter-btn-secondary">
                  <span className="newsletter-btn-icon">📥</span>
                  Download PDF Version
                </button>
                <button className="newsletter-edition-btn newsletter-btn-outline">
                  <span className="newsletter-btn-icon">📤</span>
                  Share with Network
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Archive */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Newsletter Archive</h2>
            <div className="newsletter-section-divider"></div>
            <p className="newsletter-section-description">
              Browse through our previous editions and discover the journey of youth empowerment
            </p>
          </div>
          
          <div className="newsletter-archive-grid">
            {/* 2024 Archive */}
            <div className="newsletter-archive-year">
              <h3 className="newsletter-year-title">2024</h3>
              <div className="newsletter-archive-items">
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">February</div>
                    <div className="newsletter-item-category">Innovation Focus</div>
                  </div>
                  <h4>Youth Innovation: Tech Solutions for Community Challenges</h4>
                  <p className="newsletter-item-excerpt">
                    How young innovators are developing digital solutions to address local challenges, 
                    featuring our innovation hub success stories and upcoming hackathons.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">💡 15 tech solutions created</span>
                    <span className="newsletter-stat">👩‍💻 100 youth trained</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">January</div>
                    <div className="newsletter-item-category">Annual Outlook</div>
                  </div>
                  <h4>New Year, New Potential: Our 2024 Youth Empowerment Vision</h4>
                  <p className="newsletter-item-excerpt">
                    2024 strategic outlook, new youth programs, and ambitious goals for 
                    unlocking youth potential and expanding networks across East Africa.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🎯 5,000 youth target</span>
                    <span className="newsletter-stat">🌐 3 new countries</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 Archive */}
            <div className="newsletter-archive-year">
              <h3 className="newsletter-year-title">2023</h3>
              <div className="newsletter-archive-items">
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">December</div>
                    <div className="newsletter-item-category">Year in Review</div>
                  </div>
                  <h4>2023: A Year of Youth-Led Transformation</h4>
                  <p className="newsletter-item-excerpt">
                    Comprehensive review of youth achievements, leadership development, and the 
                    incredible impact made possible through our unlimited networks approach.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🌟 8,000 youth reached</span>
                    <span className="newsletter-stat">📈 60% growth in youth participation</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">November</div>
                    <div className="newsletter-item-category">Climate Action</div>
                  </div>
                  <h4>Youth Climate Champions: Leading Environmental Change</h4>
                  <p className="newsletter-item-excerpt">
                    Celebrating young environmental activists who are driving climate action 
                    and sustainable practices in their communities across Migori County.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🌳 25,000 trees planted</span>
                    <span className="newsletter-stat">🏆 3 environmental awards</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Series */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Newsletter Series</h2>
            <div className="newsletter-section-divider"></div>
            <p className="newsletter-section-description">
              Choose the youth-focused updates that matter most to you with our specialized newsletter series
            </p>
          </div>
          
          <div className="newsletter-series-grid">
            <div className="newsletter-series-card">
              <div className="newsletter-series-icon">🌟</div>
              <div className="newsletter-series-content">
                <h3>Youth Impact Updates</h3>
                <p>Quarterly youth empowerment metrics, program results, and success stories from our young leaders</p>
                <div className="newsletter-series-details">
                  <span className="newsletter-series-frequency">📅 Quarterly</span>
                  <span className="newsletter-series-subscribers">👥 3,000+ subscribers</span>
                </div>
              </div>
            </div>
            
            <div className="newsletter-series-card">
              <div className="newsletter-series-icon">🎯</div>
              <div className="newsletter-series-content">
                <h3>Youth Leadership Voices</h3>
                <p>Stories, experiences, and perspectives directly from our young leaders and change-makers</p>
                <div className="newsletter-series-details">
                  <span className="newsletter-series-frequency">📅 Monthly</span>
                  <span className="newsletter-series-subscribers">👥 6,000+ subscribers</span>
                </div>
              </div>
            </div>

            <div className="newsletter-series-card">
              <div className="newsletter-series-icon">🌐</div>
              <div className="newsletter-series-content">
                <h3>Network Connections</h3>
                <p>Updates on youth networks, partnership opportunities, and cross-border collaborations</p>
                <div className="newsletter-series-details">
                  <span className="newsletter-series-frequency">📅 Bi-monthly</span>
                  <span className="newsletter-series-subscribers">👥 4,500+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="newsletter-subscription-section">
          <div className="newsletter-subscription-content">
            <div className="newsletter-subscription-header">
              <div className="newsletter-subscription-icon">🔑</div>
              <h2>Join Our Youth Network</h2>
            </div>
            <p className="newsletter-subscription-description">
              Join our growing community of 15,000+ youth and supporters who receive exclusive updates, 
              inspiring success stories, and opportunities to unlock potential and drive change.
            </p>
            
            <div className="newsletter-subscription-form">
              <div className="newsletter-form-group">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="newsletter-form-input"
                />
              </div>
              <div className="newsletter-form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="newsletter-form-input"
                />
              </div>

              <div className="newsletter-form-group">
                <select className="newsletter-form-input">
                  <option value="">Select your interest</option>
                  <option value="youth-empowerment">Youth Empowerment</option>
                  <option value="climate-action">Climate Action</option>
                  <option value="agri-business">Agri-business</option>
                  <option value="governance">Governance & Civic Education</option>
                  <option value="gender-equity">Gender Equity</option>
                  <option value="innovation">Innovation & Technology</option>
                </select>
              </div>
              
              <button className="newsletter-subscribe-btn">
                <span className="newsletter-btn-text">Join Youth Network</span>
                <span className="newsletter-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletters;