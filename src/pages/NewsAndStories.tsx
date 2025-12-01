import React from 'react';
import './news.css';

// Data structures to remove repetition
const featuredStory = {
  title: "From Student to Community Leader: David's Transformation",
  summary: "How our youth leadership program empowered David to transition from a quiet student to a confident community leader, mobilizing youth for environmental action in Rongo.",
  category: "Youth Leadership",
  date: "March 15, 2024",
  readTime: "4 min read",
  facts: [
    { label: "Impact", value: "50+ youth mobilized for climate action" },
    { label: "Duration", value: "6-month leadership program" },
    { label: "Location", value: "Rongo, Migori County" }
  ],
  link: "/news/davids-transformation"
};

const newsArticles = [
  {
    id: 1,
    title: "100 Youth Graduate from Digital Skills Training Program",
    summary: "FUNGUO celebrates the successful graduation of 100 young people equipped with essential digital skills for the modern workforce and entrepreneurship.",
    category: "Youth Empowerment",
    date: "March 12, 2024",
    icon: "💻",
    link: "/news/digital-graduation"
  },
  {
    id: 2,
    title: "Youth Climate Ambassadors Plant 5,000 Trees in Migori",
    summary: "Young environmental champions lead massive tree planting initiative across Migori County, promoting climate resilience and environmental conservation.",
    category: "Climate Action",
    date: "March 8, 2024",
    icon: "🌱",
    link: "/news/climate-ambassadors"
  },
  {
    id: 3,
    title: "Agri-business Incubator Launches for Young Farmers",
    summary: "New agricultural innovation hub opens to support youth in modern farming techniques and agri-entrepreneurship across the region.",
    category: "Agri-business",
    date: "March 5, 2024",
    icon: "🚜",
    link: "/news/agri-incubator"
  },
  {
    id: 4,
    title: "Strategic Partnership Expands Youth Networks Across East Africa",
    summary: "New collaboration creates unlimited networks connecting youth from Kenya, Tanzania, and Uganda for shared learning and innovation.",
    category: "Partnership",
    date: "February 28, 2024",
    icon: "🌐",
    link: "/news/east-africa-networks"
  },
  {
    id: 5,
    title: "Boychild Empowerment Program Launches with 150 Participants",
    summary: "New initiative focuses on mentoring and empowering young boys with leadership skills, career guidance, and personal development.",
    category: "Gender Equity",
    date: "February 22, 2024",
    icon: "👦",
    link: "/news/boychild-empowerment"
  },
  {
    id: 6,
    title: "Youth Civic Education Reaches 2,000 Young People",
    summary: "Comprehensive civic education program empowers youth with knowledge about governance, rights, and active citizenship participation.",
    category: "Governance",
    date: "February 18, 2024",
    icon: "🏛️",
    link: "/news/civic-education"
  }
];

const successStories = [
  {
    id: 1,
    title: "Unlocking Potential: Sarah's Agri-business Success",
    summary: "From unemployed graduate to successful agri-entrepreneur, Sarah's journey showcases the power of youth innovation in agriculture.",
    label: "Agri-business",
    details: ["🌾 5-acre farm established", "👩‍🌾 3 youth employed"],
    link: "/stories/sarah-agribusiness"
  },
  {
    id: 2,
    title: "Youth Innovation Hub Creates Tech Solutions",
    summary: "How a group of young innovators developed digital solutions to address local community challenges through our innovation program.",
    label: "Innovation",
    details: ["💡 3 tech solutions created", "👥 15 youth innovators"],
    link: "/stories/youth-innovation"
  },
  {
    id: 3,
    title: "From Shy Student to Public Speaker",
    summary: "A young man's transformation through our leadership program, now confidently leading community meetings and youth forums.",
    label: "Leadership",
    details: ["🎤 Public speaking skills", "🌟 Community leadership"],
    link: "/stories/leadership-transformation"
  },
  {
    id: 4,
    title: "Young Environmental Champion Wins Award",
    summary: "Recognition for a youth climate activist who mobilized her peers for environmental conservation and sustainable practices.",
    label: "Climate Action",
    details: ["🏆 Regional award winner", "🌍 500+ trees planted"],
    link: "/stories/environment-champion"
  },
  {
    id: 5,
    title: "Youth Network Creates Cross-Border Partnerships",
    summary: "How our unlimited networks program connected young leaders across borders for collaborative projects and knowledge sharing.",
    label: "Networking",
    details: ["🤝 3 countries connected", "🌐 200+ youth networked"],
    link: "/stories/cross-border-networks"
  },
  {
    id: 6,
    title: "Boychild Mentorship Transforms School Performance",
    summary: "Academic turnaround story of young boys who improved their school performance through our mentorship and tutoring program.",
    label: "Education",
    details: ["📚 Grades improved by 40%", "👨‍🏫 50 boys mentored"],
    link: "/stories/boychild-academic"
  }
];

const NewsAndStories: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <div className="news-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>News & Stories</span>
        </div>
        <h1 className="news-main-title">News & Stories</h1>
        <p className="news-subtitle">
          Latest updates, inspiring stories, and impactful news from our youth empowerment journey
        </p>
      </div>

      <div className="news-main-content">
        {/* Featured Story */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Featured Story</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="highlight-story">
            <div className="story-visual">
              <div className="visual-placeholder">🌟</div>
            </div>
            <div className="story-info">
              <div className="story-tags">
                <span className="tag-category">{featuredStory.category}</span>
                <span className="tag-date">{featuredStory.date}</span>
                <span className="tag-duration">{featuredStory.readTime}</span>
              </div>
              <h2 className="story-headline">{featuredStory.title}</h2>
              <p className="story-summary">{featuredStory.summary}</p>
              <div className="story-facts">
                {featuredStory.facts.map((fact, index) => (
                  <div key={index} className="fact-item">
                    <strong>{fact.label}:</strong> {fact.value}
                  </div>
                ))}
              </div>
              <a href={featuredStory.link} className="action-button">
                Read Full Story →
              </a>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Latest News</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="articles-grid">
            {newsArticles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <div className="image-box small">{article.icon}</div>
                </div>
                <div className="article-body">
                  <div className="article-meta">
                    <span className="meta-category">{article.category}</span>
                    <span className="meta-date">{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-preview">{article.summary}</p>
                  <a href={article.link} className="link-more">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Success Stories</h2>
            <div className="title-underline"></div>
            <p className="section-description-text">
              Inspiring stories of youth transformation and empowerment from our programs
            </p>
          </div>
          
          <div className="stories-cards-grid">
            {successStories.map((story) => (
              <div key={story.id} className="story-block">
                <div className="story-label">{story.label}</div>
                <h3 className="story-block-title">{story.title}</h3>
                <p className="story-block-text">{story.summary}</p>
                <div className="story-details">
                  {story.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                  ))}
                </div>
                <a href={story.link} className="story-action-link">Read Story →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="subscribe-section">
          <div className="subscribe-content">
            <h2 className="subscribe-title">Stay Updated</h2>
            <p className="subscribe-text">
              Never miss a story or important update from FUNGUO. 
              Subscribe to our newsletter and be the first to know about youth empowerment impact.
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button className="submit-button">Join Our Network</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsAndStories;