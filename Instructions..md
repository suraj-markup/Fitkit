FITKIT Website Development Blueprint
Objective: To build a modern, responsive, and high-impact website for FITKIT, a custom sportswear company. The site will focus on showcasing product quality, fabric options, and driving inquiries through WhatsApp.

Technology Stack: Component-based framework (e.g., React, Vue, or Svelte). CSS should be handled with a modern solution like Tailwind CSS or CSS Modules to ensure styles are scoped and maintainable. For animations, use a library like Framer Motion for React.

1. Global Design System & Styling
These are the foundational rules that ensure brand consistency across the entire website.

1.1. Color Palette (Dynamic & Action-Oriented)
Primary (Electric Blue): #0052FF - Use for major headlines, icons, and active link states.

Accent/Action (Volt Green): #C6FF00 - CRITICAL: Use exclusively for all Call-to-Action (CTA) buttons like "Customize Now," "Contact Us," and "Inquire Now." This color should scream "click me."

Neutral (Text - Charcoal): #212121 - For all body copy and standard text.

Neutral (Background - Light Grey): #F8F9FA - Main background color for a clean, premium feel. Avoid pure white.

Neutral (Secondary Background - Dark Slate): #1D2B3A - For contrasting sections like the Footer or special feature sections.

1.2. Typography
Font Family: Use a modern, readable sans-serif font like Inter or Poppins. Import from Google Fonts.

Headings (H1, H2, H3): Font weight 700 (Bold).

Body Text: Font weight 400 (Regular).

Base Font Size: 16px for body text. Use responsive font sizes (e.g., using clamp() or Tailwind's responsive text utilities) to ensure readability on all devices.

1.3. General Layout & Spacing
Component-Based: All sections below should be built as individual, reusable components.

Responsive First: Design for mobile first, then scale up to tablet and desktop.

Grid System: Use CSS Grid and Flexbox for all layouts.

Spacing: Use a consistent spacing scale (e.g., multiples of 8px or Tailwind's spacing scale). Add significant vertical space between sections to let content breathe.

Container: Main content should live within a centered container with a max-width of 1280px and horizontal padding.

1.4. Buttons & Interactive Elements
Primary CTA Button (Accent Color):

Background: Accent/Action (#C6FF00)

Text Color: Neutral (Text - Charcoal) (#212121)

Padding: Generous padding (e.g., 12px 24px).

Border Radius: 8px.

Hover State: Slightly darken the background or scale up the button (transform: scale(1.05)).

Secondary Button (e.g., "View All"):

Style: Outlined.

Border: 1px solid #0052FF.

Text Color: #0052FF.

Background: Transparent.

Hover State: Fill with #0052FF and change text to the light background color.

2. Component Breakdown
Build these reusable components first.

Navbar: The main navigation bar.

Footer: The website footer.

PrimaryButton: The main CTA button component using the styles above.

SecondaryButton: The secondary button component.

ProductCard: A card to display a single kit/product.

TestimonialCard: A card to display a customer quote.

IconFeature: A small component with an icon and a short text description.

LogoStrip: A component to display a row of client logos.

3. Detailed Section Instructions
This is the step-by-step guide to building the pages.

3.1. Navbar (Navbar Component)
Background: Transparent on the hero section, but becomes Neutral (Secondary Background - Dark Slate) with a subtle shadow when the user scrolls down.

Logo: FITKIT logo on the left.

Navigation Links: "Products," "About Us," "Fabrics." Use Primary color on hover.

CTA: PrimaryButton on the far right with the text "Contact Us."

3.2. Hero Section
Layout: Full-width, full-viewport-height section.

Background: A high-quality, professional photo of a sports team in action, wearing a stylish kit. The photo should have a subtle dark overlay to ensure text is readable.

Content (Centered):

H1 Headline: "Your Team. Your Gear. Your Design." in a large, bold font.

Sub-headline: "Specialists in custom jerseys, uniforms, and performance wear for over 15+ sports."

CTA: PrimaryButton with text "Customize Your Kit Now."

3.3. Trusted By Section (LogoStrip Component)
Layout: A simple, clean section directly below the hero.

Background: Neutral (Background - Light Grey).

Content: A row of 5-6 high-profile client logos in grayscale to maintain a uniform look. On hover, the logo can transition to its full color.

3.4. Why People Trust Us Section
Layout: A 3 or 4-column grid.

Content: Each column is an IconFeature component.

Example 1: Icon (e.g., a shield), Headline "Durable Fabrics," Text "Kits that withstand the toughest games."

Example 2: Icon (e.g., a palette), Headline "Unlimited Customization," Text "Your design, your colors, flawlessly executed."

Example 3: Icon (e.g., a running figure), Headline "Performance Focused," Text "Breathable materials designed for peak performance."

3.5. Explore Our Kits Section
Layout: A grid of ProductCard components (2 on mobile, 4 on desktop).

H2 Title: "Explore Our Kits."

Filtering: Simple filter buttons for "Shop by Sports" and "Shop by Category."

ProductCard Component:

Image: High-quality image of the jersey/kit.

Title: e.g., "Maverick Football Kit."

Tags: Small tags like "Football," "Best Seller."

NO PRICE.

CTA: SecondaryButton with text "View Details." This can link to a future product detail page or open a modal.

3.6. Fabric Showcase Section
H2 Title: "The Foundation of Great Performance."

H3 Sub-title: "We believe in quality you can feel. Select the perfect fabric for your team's needs."

Layout: A 2-column grid.

Left Column: A large, high-quality, slightly abstract image of different fabric textures.

Right Column: An accordion or tabbed interface. Each tab represents a fabric type (e.g., "Pro-Mesh Polyester," "Flex-Fit Spandex"). Clicking a tab reveals a short description of its benefits (e.g., "Lightweight & breathable, ideal for summer sports").

3.7. Customization Process Section
H2 Title: "Your Vision, Brought to Life in 3 Simple Steps."

Layout: A 3-column flexbox layout with numbers and arrows connecting them.

Step 1: Icon (fabric swatch), Title "Select Your Fabric," Text "Choose from our range of performance materials."

Step 2: Icon (upload/email), Title "Send Us Your Design," Text "Provide your logos, colors, and design concept."

Step 3: Icon (jersey), Title "We Create & Deliver," Text "Our team handles the production and delivers your custom kits."

CTA: Below this section, a full-width PrimaryButton with text "Start Your Custom Order."

3.8. Testimonials Section
H2 Title: "What People Have to Say About Us."

Layout: A carousel/slider of TestimonialCard components, allowing users to scroll through 3-4 testimonials.

TestimonialCard Component:

Quote: The customer's quote.

Customer Name: e.g., "John S., Manager of FC Eagles."

3.9. Footer (Footer Component)
Background: Neutral (Secondary Background - Dark Slate).

Text Color: Neutral (Background - Light Grey).

Layout: 4-column grid.

Column 1: FITKIT Logo and a brief mission statement.

Column 2: Quick Links (Home, Products, About Us).

Column 3: Sports (List of top 5 sports).

Column 4: Contact Info & Social Media icons (Instagram, Facebook, Twitter).

Copyright: A line at the very bottom with the copyright info.

4. WhatsApp Integration (CRITICAL)
Functionality: All "Contact Us," "Inquire Now," and "Start Your Custom Order" buttons should not link to a page, but should open a new tab to WhatsApp.

URL Structure: Use the WhatsApp Click to Chat API. The link should be formatted as:
https://wa.me/YOUR_PHONE_NUMBER?text=YOUR_PREFILLED_MESSAGE

Example Link:
https://wa.me/911234567890?text=Hello%20FITKIT,%20I'm%20interested%20in%20a%20custom%20kit%20order.

Replace 911234567890 with the actual business WhatsApp number (including country code).

The message is URL-encoded. %20 represents a space.

Implementation: Wrap all relevant PrimaryButton components in an <a> tag with this href structure.

5. Animation & Motion (Framer Motion)
Philosophy: Animations should be minimal, purposeful, and enhance the user experience without being distracting. Every animation should guide the user, provide feedback, or improve the brand's modern feel.

5.1. On Page Load / Entrance Animations
Implementation: Wrap major page sections in a motion container with variants for hidden and visible states. Use staggerChildren to create a smooth, orchestrated entrance.

Target Sections:

Hero Section: The H1, sub-headline, and CTA button should fade in and slide up sequentially.

Navbar: Fade in gently after the hero text.

5.2. On Scroll / View-Triggered Animations
Implementation: Use Framer Motion's whileInView prop on components to trigger animations as they scroll into the viewport. Set once: true so the animation only happens once.

Target Components:

IconFeature Cards: As the "Why People Trust Us" section appears, each card should fade in and slide up. Apply a small delay to each subsequent card for a staggered effect.

ProductCard Grid: Stagger the appearance of each product card as the "Explore Our Kits" section scrolls into view.

Customization Process Steps: Each of the 3 steps should animate in sequentially to reinforce the flow.

5.3. On User Interaction (Hover & Click)
Implementation: Use the whileHover and whileTap props for direct feedback.

Target Elements:

All Buttons: Use whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }} to provide satisfying physical feedback. Use a transition prop with a type: "spring" for a more natural feel.

ProductCard: Apply whileHover={{ y: -5 }} to make the card lift slightly, encouraging clicks.

Fabric Showcase Accordion: When a tab is clicked, wrap the content area in Framer Motion's <AnimatePresence> component to have the description text smoothly fade and expand into view.