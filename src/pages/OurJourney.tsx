import React from 'react';
import '../styles/globals.css';

const OurJourney: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Our Journey</span>
        </div>
        <h1 className="page-title">Our Journey</h1>
        <p className="page-subtitle">
          Tracing our path from a youth-led vision to becoming a catalyst for sustainable change and youth empowerment
        </p>
      </div>

      <div className="page-content">
        {/* Timeline Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Our Timeline</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              A visual journey through our key milestones in youth empowerment and sustainable development
            </p>
          </div>
          
          <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>The Vision Begins</h3>
                <p>
                  FUNGUO was founded by passionate young leaders in Rongo, Migori County, 
                  who recognized the untapped potential in youth. Our first initiative focused 
                  on leadership training and mentorship programs for young people in the community.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">First youth leadership program</span>
                  <span className="achievement-tag">Community mentorship established</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Expanding Youth Networks</h3>
                <p>
                  Recognizing the power of connections, we expanded our programs to create 
                  unlimited networks for youth. This period marked our transition from local 
                  initiatives to building regional youth partnerships and collaborations.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Regional youth networks formed</span>
                  <span className="achievement-tag">First innovation challenge launched</span>
                  <span className="achievement-tag">500+ youth connected</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Strategic Focus Areas</h3>
                <p>
                  We formalized our approach to "Ending the Triple Threat" by establishing 
                  focused programs in climate action, agri-business, governance, and gender 
                  equity. This strategic framework helped us create more targeted impact.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Climate action programs launched</span>
                  <span className="achievement-tag">Agri-business initiatives started</span>
                  <span className="achievement-tag">Civic education curriculum developed</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Innovation & Technology Integration</h3>
                <p>
                  Embracing digital transformation, we integrated technology into our programs 
                  and launched digital platforms for youth networking, skills development, 
                  and project management. This expanded our reach beyond geographical boundaries.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Digital youth platform launched</span>
                  <span className="achievement-tag">Tech innovation hub established</span>
                  <span className="achievement-tag">1,000+ youth digitally empowered</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Sustainable Change Focus</h3>
                <p>
                  Deepening our commitment to sustainable development, we introduced 
                  programs focused on long-term impact, environmental conservation, 
                  and creating youth-led social enterprises for lasting community change.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Youth-led social enterprises</span>
                  <span className="achievement-tag">Environmental conservation projects</span>
                  <span className="achievement-tag">Sustainable agriculture models</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 6 - Present */}
            <div className="timeline-item current">
              <div className="timeline-marker">
                <div className="timeline-dot current"></div>
              </div>
              <div className="timeline-content">
                <h3>Today & Beyond</h3>
                <p>
                  FUNGUO continues to evolve as a youth-led movement, constantly innovating 
                  to unlock youth potential. We're currently expanding our digital networks, 
                  strengthening boychild empowerment programs, and scaling our sustainable 
                  change initiatives across the region.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Expanded digital networks</span>
                  <span className="achievement-tag">Boychild empowerment focus</span>
                  <span className="achievement-tag">Regional scaling initiatives</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Key Achievements</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-achievements-grid">
            <div className="about-achievement-card">
              <div className="about-achievement-icon">🌟</div>
              <div className="about-achievement-content">
                <h3>Youth Empowerment</h3>
                <ul>
                  <li>1,500+ youth empowered through leadership programs</li>
                  <li>300+ young leaders trained and mentored</li>
                  <li>50+ youth-led community projects implemented</li>
                  <li>Personal development workshops for 800+ youth</li>
                </ul>
              </div>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-icon">🌍</div>
              <div className="about-achievement-content">
                <h3>Climate Action</h3>
                <ul>
                  <li>25,000+ trees planted by youth volunteers</li>
                  <li>Climate education in 30+ schools</li>
                  <li>Youth-led environmental clubs established</li>
                  <li>Sustainable practices adopted in 15 communities</li>
                </ul>
              </div>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-icon">🌱</div>
              <div className="about-achievement-content">
                <h3>Agri-business Development</h3>
                <ul>
                  <li>200+ youth engaged in modern agriculture</li>
                  <li>15 youth-led agri-enterprises supported</li>
                  <li>Training in sustainable farming techniques</li>
                  <li>Market linkages for youth farmers</li>
                </ul>
              </div>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-icon">🏛️</div>
              <div className="about-achievement-content">
                <h3>Governance & Civic Education</h3>
                <ul>
                  <li>Civic education for 1,000+ young people</li>
                  <li>Youth participation in local governance</li>
                  <li>Advocacy training and mentorship</li>
                  <li>Community leadership development</li>
                </ul>
              </div>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-icon">⚖️</div>
              <div className="about-achievement-content">
                <h3>Gender Equity</h3>
                <ul>
                  <li>Boychild empowerment programs launched</li>
                  <li>Gender equality workshops in communities</li>
                  <li>Inclusive participation across all programs</li>
                  <li>Mentorship for balanced leadership</li>
                </ul>
              </div>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-icon">💡</div>
              <div className="about-achievement-content">
                <h3>Innovation & Networks</h3>
                <ul>
                  <li>Unlimited youth networks established</li>
                  <li>Innovation challenges and hackathons</li>
                  <li>Digital skills training for 500+ youth</li>
                  <li>Cross-community collaboration platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="content-section future-section">
          <div className="section-header">
            <h2>Our Future Vision</h2>
            <div className="section-divider"></div>
          </div>
          <div className="future-content">
            <div className="vision-card">
              <h3>2025 Goals</h3>
              <ul>
                <li>Empower 5,000+ additional youth across East Africa</li>
                <li>Establish regional youth innovation hubs</li>
                <li>Launch digital mentorship platform reaching 10,000+ youth</li>
                <li>Scale sustainable agri-business models</li>
                <li>Strengthen cross-border youth networks</li>
              </ul>
            </div>
            <div className="vision-card">
              <h3>2030 Vision</h3>
              <ul>
                <li>Become a continental leader in youth empowerment</li>
                <li>Establish self-sustaining youth-led enterprises</li>
                <li>Create replicable youth development models</li>
                <li>Influence national youth policies across Africa</li>
                <li>Build a million-strong youth network for change</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Youth Movement</h2>
            <p>
              Our journey of unlocking youth potential is just beginning. Join us as we continue 
              to empower young leaders, foster innovation, and drive sustainable change across communities.
            </p>
            <div className="cta-buttons">
              <a href="/get-involved" className="cta-button primary">
                Join Our Network
              </a>
              <a href="/donate" className="cta-button secondary">
                Support Youth Empowerment
              </a>
              <a href="/programs" className="cta-button outline">
                Explore Programs
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurJourney;