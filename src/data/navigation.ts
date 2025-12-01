import { type NavigationData } from '../types/navigation';

export const navigationData: NavigationData = {
  topNav: [
    {
      id: 'organization-name',
      label: 'Funguo Cbo-Youth Empowerment',
      href: '/'
    }
    // Remove the donate button from here since it's already in the TopBar component
  ],
  mainNav: [
    {
      id: 'about',
      label: 'Our Organization',
      children: [
        { id: 'who-we-are', label: 'Who We Are', href: '/about/who-we-are' },
        { id: 'our-journey', label: 'Our Story', href: '/about/our-journey' },
        { id: 'vision-mission', label: 'Vision, Mission & Values', href: '/about/vision-mission' }
      ]
    },
    {
      id: 'governance',
      label: 'Leadership',
      children: [
        { id: 'board-directors', label: 'Governing Board', href: '/governance/board' },
        { id: 'senior-management', label: 'Executive Team', href: '/governance/management' }
      ]
    },
    {
      id: 'media',
      label: 'Media',
      children: [
        { id: 'videos', label: 'Video Library', href: '/media/videos' },
        { id: 'gallery', label: 'Photo Gallery', href: '/media/gallery' }
      ]
    },
    {
      id: 'knowledge-hub',
      label: 'Resource Center',
      children: [
        { id: 'news', label: 'Updates & Stories', href: '/knowledge/news' },
        { id: 'publications', label: 'Research & Publications', href: '/knowledge/publications' },
        { id: 'reports', label: 'Reports', href: '/knowledge/reports' },
        { id: 'newsletters', label: 'Newsletters', href: '/knowledge/newsletters' },
        { id: 'events', label: 'Upcoming Events', href: '/knowledge/events' }
      ]
    },
    {
      id: 'opportunities',
      label: 'Opportunities',
      children: [
        { id: 'volunteer', label: 'Volunteer With Us', href: '/opportunities/jobs' }
       
      ]
    },
    {
      id: 'associates',
      label: 'Associates',
      href: '/associates'
    },
    {
      id: 'partners',
      label: 'Our Partners',
      href: '/partners'
    },
    {
      id: 'contact',
      label: 'Get in Touch',
      href: '/contact'
    }
  ]
};