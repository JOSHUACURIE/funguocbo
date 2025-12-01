import React from 'react';
import '../styles/globals.css';

const Events: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Events</span>
        </div>
        <h1 className="page-title">Events</h1>
        <p className="page-subtitle">
          Upcoming youth events, leadership workshops, and network gatherings
        </p>
      </div>

      <div className="page-content">
        {/* Featured Event */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Event</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-event">
            <div className="event-banner">
              <div className="event-date">
                <div className="date-month">APR</div>
                <div className="date-day">15</div>
                <div className="date-year">2024</div>
              </div>
              <div className="event-details">
                <div className="event-category">Youth Leadership Summit</div>
                <h2>Youth Innovation Summit 2024</h2>
                <p className="event-tagline">
                  "Unlocking Potential, Driving Sustainable Change"
                </p>
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="icon">⏰</span>
                    <span>9:00 AM - 5:00 PM EAT</span>
                  </div>
                  <div className="meta-item">
                    <span className="icon">📍</span>
                    <span>Rongo University, Migori County</span>
                  </div>
                  <div className="meta-item">
                    <span className="icon">👥</span>
                    <span>300+ Young Leaders Expected</span>
                  </div>
                </div>
                <p className="event-description">
                  Join us for our flagship youth summit bringing together young leaders, 
                  innovators, and change-makers from across East Africa to share ideas, 
                  develop skills, and create networks for sustainable community transformation.
                </p>
                <div className="event-actions">
                  <button className="register-btn">Register Now</button>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="content-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="upcoming-events">
            {/* Event 1 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">NOV</div>
                <div className="day">20-21</div>
              </div>
              <div className="event-info">
                <div className="event-type">Digital Skills</div>
                <h3>Digital Marketing & Soft Skills Workshop</h3>
                <div className="event-meta-small">
                  <span>🕒 2:00 PM - 5:00 PM</span>
                  <br></br>
                  <span>📍 Rongo Town, Migori County</span>
                </div>
                <p>
                  Hands-on training session on digital tools, online marketing, 
                  and professional development skills for youth entrepreneurs.
                </p>
                <div className="event-stats">
                  <span>🎯 100+ youth participants</span>
                  <span>💰 Free admission</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">DEC</div>
                <div className="day">12</div>
              </div>
              <div className="event-info">
                <div className="event-type">Agri-business</div>
                <h3>Youth Agri-innovation Workshop</h3>
                <div className="event-meta-small">
                  <span>🕒 8:00 AM - 4:00 PM</span>
                  <span>📍 FUNGUO Agri-demo Farm, Rongo</span>
                </div>
                <p>
                  Practical training on modern farming techniques, agri-entrepreneurship, 
                  and sustainable agriculture practices for young farmers.
                </p>
                <div className="event-stats">
                  <span>🌱 Hands-on farming experience</span>
                  <span>📚 Business planning support</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">JAN</div>
                <div className="day">20</div>
              </div>
              <div className="event-info">
                <div className="event-type">Networking</div>
                <h3>Youth Network Mixer</h3>
                <div className="event-meta-small">
                  <span>🕒 6:00 PM - 8:00 PM</span>
                  <span>📍 FUNGUO Innovation Hub</span>
                </div>
                <p>
                  Networking event for young professionals and entrepreneurs to connect, 
                  share experiences, and explore collaboration opportunities.
                </p>
                <div className="event-stats">
                  <span>💼 Career networking</span>
                  <span>🎉 Interactive sessions</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

            {/* Event 4 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">FEB</div>
                <div className="day">08</div>
              </div>
              <div className="event-info">
                <div className="event-type">Climate Action</div>
                <h3>Youth Climate Ambassadors Training</h3>
                <div className="event-meta-small">
                  <span>🕒 10:00 AM - 2:00 PM</span>
                  <span>📍 Migori Environmental Center</span>
                </div>
                <p>
                  Training workshop for youth interested in environmental conservation, 
                  climate advocacy, and sustainable community practices.
                </p>
                <div className="event-stats">
                  <span>🌍 Environmental certification</span>
                  <span>🤝 Community project planning</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

            {/* Event 5 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">MAR</div>
                <div className="day">15</div>
              </div>
              <div className="event-info">
                <div className="event-type">Leadership</div>
                <h3>Boychild Empowerment Forum</h3>
                <div className="event-meta-small">
                  <span>🕒 9:00 AM - 1:00 PM</span>
                  <span>📍 Rongo Secondary School</span>
                </div>
                <p>
                  Leadership development and mentorship program focusing on academic 
                  excellence, career guidance, and personal development for young boys.
                </p>
                <div className="event-stats">
                  <span>🎯 Mentorship sessions</span>
                  <span>📚 Academic support</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

            {/* Event 6 */}
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">APR</div>
                <div className="day">05</div>
              </div>
              <div className="event-info">
                <div className="event-type">Civic Education</div>
                <h3>Youth Governance & Leadership Workshop</h3>
                <div className="event-meta-small">
                  <span>🕒 8:30 AM - 4:30 PM</span>
                  <span>📍 County Assembly Hall</span>
                </div>
                <p>
                  Workshop on civic rights, governance processes, and youth participation 
                  in community decision-making and leadership roles.
                </p>
                <div className="event-stats">
                  <span>🏛️ Governance training</span>
                  <span>🗳️ Civic engagement tools</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="content-section">
          <div className="section-header">
            <h2>Past Events</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Missed an event? Access materials and recordings from our previous youth gatherings
            </p>
          </div>
          
          <div className="past-events">
            <div className="past-event">
              <div className="event-year">2024</div>
              <h3>Digital Skills Bootcamp</h3>
              <p>February 15, 2024 • 150 youth participants</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Training Materials</button>
                <button className="resource-btn">📷 Event Photos</button>
                <button className="resource-btn">🎥 Session Recordings</button>
              </div>
            </div>
            
            <div className="past-event">
              <div className="event-year">2024</div>
              <h3>Youth Climate Action Day</h3>
              <p>January 28, 2024 • 200+ tree planting volunteers</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Impact Report</button>
                <button className="resource-btn">📷 Photos</button>
                <button className="resource-btn">🌱 Planting Guide</button>
              </div>
            </div>
            
            <div className="past-event">
              <div className="event-year">2023</div>
              <h3>Annual Youth Leadership Conference</h3>
              <p>October 20, 2023 • 250 young leaders</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Presentations</button>
                <button className="resource-btn">📷 Photos</button>
                <button className="resource-btn">🎥 Conference Highlights</button>
              </div>
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section className="content-section">
          <div className="section-header">
            <h2>Event Calendar</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="event-calendar">
            <div className="calendar-header">
              <h3>April 2024</h3>
              <div className="calendar-nav">
                <button>←</button>
                <button>Today</button>
                <button>→</button>
              </div>
            </div>
            <div className="calendar-grid">
              <div className="calendar-week">
                <div className="day-header">Sun</div>
                <div className="day-header">Mon</div>
                <div className="day-header">Tue</div>
                <div className="day-header">Wed</div>
                <div className="day-header">Thu</div>
                <div className="day-header">Fri</div>
                <div className="day-header">Sat</div>
              </div>
              <div className="calendar-days">
                <div className="day empty"></div>
                <div className="day empty"></div>
                <div className="day">
                  <div className="day-number">1</div>
                </div>
                <div className="day">
                  <div className="day-number">2</div>
                </div>
                <div className="day">
                  <div className="day-number">3</div>
                </div>
                <div className="day">
                  <div className="day-number">4</div>
                </div>
                <div className="day has-event">
                  <div className="day-number">5</div>
                  <div className="event-dot">Governance Workshop</div>
                </div>
                <div className="day">
                  <div className="day-number">6</div>
                </div>
                <div className="day">
                  <div className="day-number">7</div>
                </div>
                <div className="day">
                  <div className="day-number">8</div>
                </div>
                <div className="day">
                  <div className="day-number">9</div>
                </div>
                <div className="day">
                  <div className="day-number">10</div>
                </div>
                <div className="day">
                  <div className="day-number">11</div>
                </div>
                <div className="day has-event">
                  <div className="day-number">12</div>
                  <div className="event-dot">Agri-innovation</div>
                </div>
                <div className="day has-event featured">
                  <div className="day-number">15</div>
                  <div className="event-dot">Youth Innovation Summit</div>
                </div>
                <div className="day">
                  <div className="day-number">16</div>
                </div>
                <div className="day">
                  <div className="day-number">17</div>
                </div>
                <div className="day">
                  <div className="day-number">18</div>
                </div>
                <div className="day">
                  <div className="day-number">19</div>
                </div>
                <div className="day has-event">
                  <div className="day-number">20</div>
                  <div className="event-dot">Network Mixer</div>
                </div>
                <div className="day">
                  <div className="day-number">21</div>
                </div>
                <div className="day">
                  <div className="day-number">22</div>
                </div>
                <div className="day">
                  <div className="day-number">23</div>
                </div>
                <div className="day">
                  <div className="day-number">24</div>
                </div>
                <div className="day">
                  <div className="day-number">25</div>
                </div>
                <div className="day">
                  <div className="day-number">26</div>
                </div>
                <div className="day">
                  <div className="day-number">27</div>
                </div>
                <div className="day">
                  <div className="day-number">28</div>
                </div>
                <div className="day">
                  <div className="day-number">29</div>
                </div>
                <div className="day">
                  <div className="day-number">30</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Host a Youth Event With Us</h2>
            <p>
              Interested in collaborating on youth empowerment events? We partner with 
              organizations and communities to host workshops, leadership programs, and 
              networking events that unlock youth potential and drive sustainable change.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Propose Youth Event
              </a>
              <a href="/partners" className="cta-button secondary">
                Join Youth Network
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;