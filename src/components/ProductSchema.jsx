import { useEffect } from 'react';

const ProductSchema = ({ products, category }) => {
  useEffect(() => {
    // Remove existing product schemas
    const existingSchemas = document.querySelectorAll('script[data-product-schema]');
    existingSchemas.forEach(script => script.remove());

    if (!products || products.length === 0) return;

    // Create product schema for each product
    products.forEach((product, index) => {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${product.name} - ${category || 'Sports'} Jersey`,
        "description": `Premium ${product.name.toLowerCase()} fabric for ${category || 'sports'} jerseys. ${product.properties ? product.properties.join(', ') : 'High-quality athletic wear material.'}`,
        "brand": {
          "@type": "Brand",
          "name": "FitKit"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "FitKit",
          "url": "https://www.fitkitsportswear.com/"
        },
        "category": "Athletic Wear",
        "material": product.name,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "FitKit"
          }
        },
        "additionalProperty": product.properties ? product.properties.map(prop => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": prop
        })) : [],
        "isRelatedTo": {
          "@type": "Product",
          "name": `${category || 'Sports'} Jersey`,
          "category": "Sporting Goods"
        }
      };

      // Add images if available
      if (product.images && product.images.length > 0) {
        productSchema.image = product.images.map(img => ({
          "@type": "ImageObject",
          "url": img,
          "caption": `${product.name} fabric sample`
        }));
      }

      // Create and append script tag
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-product-schema', index);
      script.textContent = JSON.stringify(productSchema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      const schemas = document.querySelectorAll('script[data-product-schema]');
      schemas.forEach(script => script.remove());
    };
  }, [products, category]);

  return null;
};

export default ProductSchema;