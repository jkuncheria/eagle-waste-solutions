import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: object;
}

const BASE_URL = 'https://www.eaglewastesolutionsllc.com';
const DEFAULT_IMAGE = '/fulleagle.png';

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalPath = '', 
  ogImage = DEFAULT_IMAGE,
  schema 
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Helper to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', description);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', `${BASE_URL}${canonicalPath}`);
    updateMetaTag('meta[property="og:image"]', 'content', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // Update canonical URL
    updateLinkTag('canonical', `${BASE_URL}${canonicalPath}`);

    // Add page-specific schema if provided
    if (schema) {
      const existingSchema = document.querySelector('script[data-page-schema]');
      if (existingSchema) {
        existingSchema.remove();
      }
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-page-schema', 'true');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup page-specific schema on unmount
    return () => {
      const pageSchema = document.querySelector('script[data-page-schema]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [title, description, canonicalPath, ogImage, schema]);

  return null;
};

export default SEO;
