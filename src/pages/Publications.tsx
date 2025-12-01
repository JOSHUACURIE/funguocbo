import React from 'react';
import '../styles/globals.css';

const Publications: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Publications</span>
        </div>
        <h1 className="page-title">Publications</h1>
        <p className="page-subtitle">
          Research papers, policy briefs, and academic publications documenting youth empowerment and sustainable change
        </p>
      </div>

      <div className="page-content">
        {/* Featured Publication */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Publication</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-publication">
            <div className="publication-cover">
              <div className="cover-placeholder">🔑</div>
            </div>
            <div className="publication-details">
              <div className="publication-type">Research Report</div>
              <h2>Unlocking Youth Potential: Sustainable Change Through Youth-Led Development</h2>
              <p className="publication-authors">
                By FUNGUO Research Team, Youth Leadership Council, & Academic Partners
              </p>
              <p className="publication-abstract">
                This comprehensive study examines the effectiveness of youth-led development 
                models in achieving sustainable community transformation. Based on three years 
                of data from youth empowerment programs across East Africa, the research 
                demonstrates how youth leadership and innovation lead to more lasting and 
                meaningful impact compared to traditional development approaches.
              </p>
              <div className="publication-meta">
                <div className="meta-item">
                  <strong>Published:</strong> February 2024
                </div>
                <div className="meta-item">
                  <strong>Pages:</strong> 89
                </div>
                <div className="meta-item">
                  <strong>DOI:</strong> 10.1234/funguo.2024.001
                </div>
              </div>
              <div className="publication-actions">
                <button className="download-button primary">
                  📥 Download Full Report (PDF)
                </button>
                <button className="download-button secondary">
                  📄 Executive Summary
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Publication Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="categories-grid">
            <div className="category-item">
              <div className="category-icon">🌟</div>
              <h3>Youth Empowerment Research</h3>
              <p>Studies on youth leadership, potential unlocking, and empowerment models</p>
              <span className="count">12 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">🌍</div>
              <h3>Climate Action Briefs</h3>
              <p>Youth-led environmental initiatives and climate resilience strategies</p>
              <span className="count">6 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">🚜</div>
              <h3>Agri-business Studies</h3>
              <p>Youth innovation in agriculture and sustainable farming practices</p>
              <span className="count">8 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">🏛️</div>
              <h3>Governance & Civic Education</h3>
              <p>Youth participation in governance and civic engagement research</p>
              <span className="count">10 publications</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2>Recent Publications</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="publications-list">
            {/* Publication 1 */}
            <div className="publication-item">
              <div className="pub-type">Policy Brief</div>
              <h3>Youth Networks as Catalysts for Sustainable Development in East Africa</h3>
              <p className="pub-authors">FUNGUO Networks Research Team</p>
              <p className="pub-description">
                Analysis of how unlimited youth networks drive innovation, collaboration, 
                and sustainable change across regional boundaries.
              </p>
              <div className="pub-meta">
                <span>January 2024</span>
                <span>•</span>
                <span>24 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 2 */}
            <div className="publication-item">
              <div className="pub-type">Research Report</div>
              <h3>Digital Skills and Youth Employability: Impact Assessment 2023</h3>
              <p className="pub-authors">FUNGUO Innovation & Technology Unit</p>
              <p className="pub-description">
                Comprehensive study on the economic impact of digital literacy programs 
                on youth employment and entrepreneurship outcomes.
              </p>
              <div className="pub-meta">
                <span>December 2023</span>
                <span>•</span>
                <span>38 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 3 */}
            <div className="publication-item">
              <div className="pub-type">Case Study</div>
              <h3>Boychild Empowerment Program: 3-Year Transformation Analysis</h3>
              <p className="pub-authors">FUNGUO Gender Equity Department</p>
              <p className="pub-description">
                In-depth evaluation of our boychild empowerment initiatives and their 
                impact on academic performance, leadership, and community engagement.
              </p>
              <div className="pub-meta">
                <span>November 2023</span>
                <span>•</span>
                <span>45 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 4 */}
            <div className="publication-item">
              <div className="pub-type">Academic Paper</div>
              <h3>Youth-Led Climate Action: Community Resilience in Migori County</h3>
              <p className="pub-authors">Published in Journal of Youth Development</p>
              <p className="pub-description">
                Peer-reviewed article analyzing the effectiveness of youth-led environmental 
                initiatives in building community climate resilience.
              </p>
              <div className="pub-meta">
                <span>October 2023</span>
                <span>•</span>
                <span>18 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 5 */}
            <div className="publication-item">
              <div className="pub-type">Research Report</div>
              <h3>Agri-business Innovation Among Youth: Success Factors and Challenges</h3>
              <p className="pub-authors">FUNGUO Agri-business Research Team</p>
              <p className="pub-description">
                Study examining the key success factors and systemic challenges facing 
                youth entrepreneurs in the agricultural sector.
              </p>
              <div className="pub-meta">
                <span>September 2023</span>
                <span>•</span>
                <span>52 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 6 */}
            <div className="publication-item">
              <div className="pub-type">Policy Brief</div>
              <h3>Enhancing Youth Participation in Local Governance: Civic Education Models</h3>
              <p className="pub-authors">FUNGUO Governance & Civic Education Unit</p>
              <p className="pub-description">
                Framework for effective youth civic education and participation in 
                local governance structures across East African communities.
              </p>
              <div className="pub-meta">
                <span>August 2023</span>
                <span>•</span>
                <span>20 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>
          </div>
        </section>

        {/* Research Partners */}
        <section className="content-section">
          <div className="section-header">
            <h2>Research Partners</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Collaborating with academic institutions and youth development organizations
            </p>
          </div>
          
          <div className="partners-grid">
            <div className="partner-logo">University of Nairobi</div>
            <div className="partner-logo">Kenyatta University</div>
            <div className="partner-logo">Maseno University</div>
            <div className="partner-logo">African Youth Development Foundation</div>
            <div className="partner-logo">East African Community Youth Network</div>
            <div className="partner-logo">Sustainable Development Solutions Network - Youth</div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="content-section">
          <div className="section-header">
            <h2>Contribute to Our Research</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Join our research network and contribute to youth empowerment knowledge
            </p>
          </div>
          
          <div className="contribution-options">
            <div className="contribution-card">
              <h3>Research Partnerships</h3>
              <p>Collaborate with us on youth empowerment research projects and studies</p>
              <button className="contribution-btn">Partner With Us</button>
            </div>
            
            <div className="contribution-card">
              <h3>Share Your Insights</h3>
              <p>Contribute case studies, success stories, and research findings</p>
              <button className="contribution-btn">Submit Research</button>
            </div>
            
            <div className="contribution-card">
              <h3>Join Research Network</h3>
              <p>Become part of our youth research network and access exclusive resources</p>
              <button className="contribution-btn">Join Network</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;