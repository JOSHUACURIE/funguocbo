import React from 'react';
import '../styles/globals.css'

const WhoWeAre: React.FC = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-header">
        <div className="about-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Who We Are</span>
        </div>
        <h1 className="about-main-heading">Who We Are</h1>
        <p className="about-subheading">
          Discover FUNGUO's mission to empower youth and drive sustainable change through innovation and leadership
        </p>
      </div>

      <div className="about-page-content">
        {/* Organization Story Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Our Story</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-story-content">
            <div className="about-story-text">
              <p>
                FUNGUO was founded with a powerful vision: to unlock the immense potential of young people 
                and empower them to become leaders of sustainable change. The name "FUNGUO" (meaning "keys" 
                in Swahili) represents our commitment to providing youth with the keys to their future.
              </p>
              <p>
                Our journey began with the recognition that young people possess incredible energy, 
                creativity, and passion that, when properly harnessed, can transform communities and 
                drive meaningful progress. We believe that youth are not just leaders of tomorrow, 
                but change-makers of today.
              </p>
              <p>
                From our base in Rongo, Migori County, we have grown into a dynamic youth-led movement 
                focused on addressing the triple threat through empowerment, innovation, and sustainable 
                solutions. Our work is driven by the belief that when young people are given the right 
                tools, networks, and opportunities, they can create a better future for all.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-image-wrapper">
                <img 
                  src='/ourstory.jpg' 
                  alt="FUNGUO Youth Empowerment and Leadership"
                  className="about-story-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Our Approach</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-approach-grid">
            <div className="about-approach-card">
              <div className="about-approach-icon">🌟</div>
              <h3>Youth-Led</h3>
              <p>
                We believe in youth agency and leadership. Our programs are designed and led by young 
                people, ensuring relevance and authentic representation of youth voices and needs.
              </p>
            </div>
            <div className="about-approach-card">
              <div className="about-approach-icon">🔑</div>
              <h3>Potential Unlocking</h3>
              <p>
                We focus on identifying and nurturing the unique talents and capabilities of each 
                young person, providing them with keys to unlock their full potential.
              </p>
            </div>
            <div className="about-approach-card">
              <div className="about-approach-icon">🌐</div>
              <h3>Unlimited Networks</h3>
              <p>
                We create expansive networks that connect youth with mentors, opportunities, and 
                like-minded peers across different sectors and geographical boundaries.
              </p>
            </div>
            <div className="about-approach-card">
              <div className="about-approach-icon">💡</div>
              <h3>Innovation Driven</h3>
              <p>
                We embrace creative thinking and innovative solutions to address complex challenges 
                facing young people and their communities.
              </p>
            </div>
            <div className="about-approach-card">
              <div className="about-approach-icon">🌱</div>
              <h3>Sustainable Change</h3>
              <p>
                Our interventions are designed for long-term impact, creating sustainable systems 
                and solutions that continue to benefit communities for generations.
              </p>
            </div>
            <div className="about-approach-card">
              <div className="about-approach-icon">🤝</div>
              <h3>Collaborative Partnerships</h3>
              <p>
                We work with diverse stakeholders including government, private sector, and 
                community organizations to amplify our impact and reach.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="about-content-block about-stats-section">
          <div className="about-section-header">
            <h2>Our Impact</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="about-stat-number">1,500+</div>
              <div className="about-stat-label">Youth Empowered</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">50+</div>
              <div className="about-stat-label">Communities Reached</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">25+</div>
              <div className="about-stat-label">Innovation Projects</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">15+</div>
              <div className="about-stat-label">Partner Organizations</div>
            </div>
          </div>
        </section>

       <section className="about-content-block">
  <div className="about-section-header">
    <h2>Ending the Triple Threat</h2>
    <div className="about-divider"></div>
    <p className="about-section-description">
      Our comprehensive approach to addressing key challenges facing youth
    </p>
  </div>
  
  <div className="about-focus-areas">
    <div className="focus-area-card">
      <h3>Youth Empowerment</h3>
      <p>Building confident, skilled, and resilient young leaders through mentorship, capacity building, and personal development programs.</p>
    </div>
    
    <div className="focus-area-card">
      <h3>Climate Change Action</h3>
      <p>Mobilizing youth for environmental conservation, climate education, and sustainable practices in their communities.</p>
    </div>
    
    <div className="focus-area-card">
      <h3>Agri-business Development</h3>
      <p>Promoting youth involvement in modern agriculture, agri-entrepreneurship, and sustainable food systems.</p>
    </div>
    
    <div className="focus-area-card">
      <h3>Governance & Civic Education</h3>
      <p>Educating youth on their civic rights, responsibilities, and active participation in governance processes.</p>
    </div>
    
    <div className="focus-area-card">
      <h3>Gender Equity</h3>
      <p>Promoting equal opportunities for all genders with special focus on boychild empowerment and inclusive participation.</p>
    </div>
    
    {/* Sixth Focus Area */}
    <div className="focus-area-card">
      <h3>Innovation & Technology</h3>
      <p>Equipping youth with digital skills, fostering tech innovation, and leveraging technology for social impact and sustainable development.</p>
    </div>
  </div>
</section>

        {/* Team Preview Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Our Leadership</h2>
            <div className="about-divider"></div>
            <p className="about-section-description">
              Meet the dynamic youth leaders and mentors driving our mission forward
            </p>
          </div>
          <div className="about-team-preview">
            <div className="about-team-card">
              <div className="about-team-avatar">👥</div>
              <h3>Youth Leadership Team</h3>
              <p>
                Our passionate young leaders who drive program implementation, innovation, 
                and community engagement across all our initiatives.
              </p>
              <a href="/governance/leadership" className="about-cta-link">
                Meet the Leaders →
              </a>
            </div>
            <div className="about-team-card">
              <div className="about-team-avatar">🌿</div>
              <h3>Mentors & Advisors</h3>
              <p>
                Experienced professionals and community leaders who provide guidance, 
                mentorship, and strategic direction to our youth programs.
              </p>
              <a href="/governance/mentors" className="about-cta-link">
                Meet Our Mentors →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta-section">
          <div className="about-cta-content">
            <h2>Join Our Youth Movement</h2>
            <p>
              Whether you're a young person looking to unlock your potential, a mentor willing to guide the next generation, 
              or a partner wanting to support youth-led change, there's a place for you in the FUNGUO family.
            </p>
            <div className="about-cta-buttons">
              <a href="/get-involved" className="about-cta-button about-cta-primary">
                Join Our Network
              </a>
              <a href="/programs" className="about-cta-button about-cta-secondary">
                Explore Programs
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;