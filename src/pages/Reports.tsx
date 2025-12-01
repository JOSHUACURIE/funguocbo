import React from 'react';
import '../styles/globals.css';

const Reports: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Reports</span>
        </div>
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">
          Comprehensive reports on our youth empowerment programs, impact, and organizational performance.
        </p>
      </div>

      <div className="page-content">
        {/* Annual Report */}
        <section className="content-section">
          <div className="section-header">
            <h2>Annual Report 2024</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="annual-report">
            <div className="report-cover">
              <div className="cover-title">
                <div className="year">2024</div>
                <div className="title">Youth Empowerment Impact Report</div>
                <div className="subtitle">Unlocking Potential, Driving Change</div>
              </div>
            </div>
            <div className="report-highlights">
              <h3>Year in Review</h3>
              <p>
                2024 marked a significant milestone in our journey of youth empowerment 
                and sustainable change. This report captures our achievements in unlocking 
                youth potential, expanding networks, and creating lasting impact across 
                East African communities.
              </p>
              
              <div className="key-metrics">
                <div className="metric">
                  <div className="metric-value">8,500+</div>
                  <div className="metric-label">Youth Empowered</div>
                </div>
                <div className="metric">
                  <div className="metric-value">25</div>
                  <div className="metric-label">Communities Reached</div>
                </div>
                <div className="metric">
                  <div className="metric-value">1.2M</div>
                  <div className="metric-label">Program Investment</div>
                </div>
                <div className="metric">
                  <div className="metric-value">94%</div>
                  <div className="metric-label">Program Success Rate</div>
                </div>
              </div>
              
              <div className="report-downloads">
                <button className="download-btn full-report">
                  📘 Download Full Report
                </button>
                <button className="download-btn summary">
                  📄 Executive Summary
                </button>
                <button className="download-btn infographic">
                  📊 Impact Infographic
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quarterly Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Quarterly Reports</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="quarterly-reports">
            <div className="quarter-card">
              <div className="quarter">Q4 2024</div>
              <h3>October - December 2024</h3>
              <p>Year-end youth empowerment and network expansion report</p>
              <div className="report-stats">
                <span>✅ 15 youth-led projects completed</span>
                <span>📈 35% growth in youth participation</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q3 2024</div>
              <h3>July - September 2024</h3>
              <p>Mid-year youth leadership and innovation review</p>
              <div className="report-stats">
                <span>🎯 96% target achievement</span>
                <span>🤝 8 new youth network partnerships</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q2 2024</div>
              <h3>April - June 2024</h3>
              <p>Strategic youth program expansion and impact assessment</p>
              <div className="report-stats">
                <span>🌱 5 new youth innovation hubs</span>
                <span>📊 18% efficiency gain in programs</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q1 2024</div>
              <h3>January - March 2024</h3>
              <p>Year beginning and youth empowerment program implementation</p>
              <div className="report-stats">
                <span>🚀 100% program kickoff</span>
                <span>🎓 300 youth training sessions</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>

            <div className="quarter-card">
              <div className="quarter">Q4 2023</div>
              <h3>October - December 2023</h3>
              <p>Annual youth impact review and strategic planning</p>
              <div className="report-stats">
                <span>🏆 6,000+ youth reached</span>
                <span>💼 88% budget utilization</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>

            <div className="quarter-card">
              <div className="quarter">Q3 2023</div>
              <h3>July - September 2023</h3>
              <p>Youth program excellence and participant feedback</p>
              <div className="report-stats">
                <span>⭐ 96% youth satisfaction rate</span>
                <span>📈 25% program growth</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
          </div>
        </section>

        {/* Program Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Program Reports</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="program-reports">
            <div className="program-report">
              <div className="program-category">Youth Leadership</div>
              <h3>Youth Leadership Program Impact Report 2024</h3>
              <p>
                Comprehensive analysis of our youth leadership initiatives 
                and their impact on community transformation and sustainable change.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>450</strong> young leaders trained
                </div>
                <div className="program-metric">
                  <strong>95%</strong> leadership skill improvement
                </div>
                <div className="program-metric">
                  <strong>65%</strong> community project implementation
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>
            
            <div className="program-report">
              <div className="program-category">Climate Action</div>
              <h3>Youth Climate Ambassadors Final Report 2024</h3>
              <p>
                Evaluation of youth-led environmental initiatives and their 
                contribution to climate resilience and sustainable practices.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>25,000</strong> trees planted
                </div>
                <div className="program-metric">
                  <strong>500</strong> youth climate activists trained
                </div>
                <div className="program-metric">
                  <strong>82%</strong> community adoption rate
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>
            
            <div className="program-report">
              <div className="program-category">Agri-business</div>
              <h3>Youth Agri-innovation Progress Report 2024</h3>
              <p>
                Assessment of youth agricultural entrepreneurship programs 
                and their impact on food security and economic empowerment.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>180</strong> youth agri-enterprises
                </div>
                <div className="program-metric">
                  <strong>12</strong> sustainable farming models
                </div>
                <div className="program-metric">
                  <strong>75%</strong> business viability rate
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>

            <div className="program-report">
              <div className="program-category">Digital Skills</div>
              <h3>Digital Literacy Program Impact Report 2024</h3>
              <p>
                Analysis of digital skills training programs and their 
                effect on youth employability and technological innovation.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>800</strong> youth digitally skilled
                </div>
                <div className="program-metric">
                  <strong>45%</strong> employment rate increase
                </div>
                <div className="program-metric">
                  <strong>25</strong> tech solutions developed
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>

            <div className="program-report">
              <div className="program-category">Boychild Empowerment</div>
              <h3>Boychild Mentorship Program Report 2024</h3>
              <p>
                Comprehensive evaluation of boychild empowerment initiatives 
                and their impact on academic performance and leadership development.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>300</strong> boys mentored
                </div>
                <div className="program-metric">
                  <strong>40%</strong> academic improvement
                </div>
                <div className="program-metric">
                  <strong>85%</strong> leadership confidence gain
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>

            <div className="program-report">
              <div className="program-category">Civic Education</div>
              <h3>Youth Governance Participation Report 2024</h3>
              <p>
                Assessment of civic education programs and youth participation 
                in governance processes and community decision-making.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>1,200</strong> youth civically educated
                </div>
                <div className="program-metric">
                  <strong>60%</strong> increased community engagement
                </div>
                <div className="program-metric">
                  <strong>35</strong> youth-led advocacy initiatives
                </div>
              </div>
              <div className="program-report-footer">
                <button className="download-program">Download Report</button>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Financial Reports</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Transparent financial reporting and accountability for youth empowerment
            </p>
          </div>
          
          <div className="financial-reports">
            <div className="financial-report">
              <div className="report-year">2024</div>
              <h3>Audited Financial Statements</h3>
              <p>Complete financial audit conducted by independent auditors</p>
              <div className="financial-highlights">
                <div className="highlight">✅ Clean audit opinion</div>
                <div className="highlight">📊 90% program spending on youth</div>
                <div className="highlight">💼 6% administrative costs</div>
                <div className="highlight">🌐 4% network development</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
            
            <div className="financial-report">
              <div className="report-year">2023</div>
              <h3>Financial Performance Report</h3>
              <p>Annual financial review and youth program performance analysis</p>
              <div className="financial-highlights">
                <div className="highlight">📈 32% revenue growth</div>
                <div className="highlight">🎯 98% budget utilization</div>
                <div className="highlight">🔄 18% reserve fund for expansion</div>
                <div className="highlight">🤝 15 new youth network partnerships</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
          </div>
        </section>

        {/* Network Expansion Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Network Expansion Reports</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Reports on our unlimited youth networks and partnership growth
            </p>
          </div>
          
          <div className="network-reports">
            <div className="network-report">
              <div className="network-region">East Africa</div>
              <h3>Regional Youth Network Expansion Report 2024</h3>
              <p>
                Analysis of youth network growth across Kenya, Tanzania, and Uganda, 
                highlighting collaboration opportunities and impact scaling.
              </p>
              <div className="network-metrics">
                <div className="network-metric">
                  <strong>3,000+</strong> youth connected
                </div>
                <div className="network-metric">
                  <strong>12</strong> cross-border projects
                </div>
                <div className="network-metric">
                  <strong>45%</strong> collaboration increase
                </div>
              </div>
              <button className="download-network">Download Report</button>
            </div>
            
            <div className="network-report">
              <div className="network-region">Digital Networks</div>
              <h3>Online Youth Community Growth Report 2024</h3>
              <p>
                Evaluation of digital platform engagement, online learning communities, 
                and virtual youth networking impact.
              </p>
              <div className="network-metrics">
                <div className="network-metric">
                  <strong>5,000+</strong> digital members
                </div>
                <div className="network-metric">
                  <strong>85%</strong> active engagement rate
                </div>
                <div className="network-metric">
                  <strong>200+</strong> virtual events hosted
                </div>
              </div>
              <button className="download-network">Download Report</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reports;