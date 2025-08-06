import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BreadcrumbSchema = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing breadcrumb schema
    const existingSchema = document.querySelector('script[data-breadcrumb-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Generate breadcrumb based on current path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fitkitsportswear.com/"
      }
    ];

    // Add path segments
    let currentPath = 'https://www.fitkitsportswear.com';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Custom names for specific routes
      if (segment === 'products') {
        name = 'Products';
      } else if (segment === 'about') {
        name = 'About Us';
      } else if (segment === 'contact') {
        name = 'Contact';
      }

      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });

    // Only add schema if there are multiple items
    if (breadcrumbItems.length > 1) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb-schema', '');
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const schema = document.querySelector('script[data-breadcrumb-schema]');
      if (schema) {
        schema.remove();
      }
    };
  }, [location.pathname]);

  return null;
};

export default BreadcrumbSchema;