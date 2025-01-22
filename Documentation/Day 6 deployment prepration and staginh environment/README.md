# Marketplace Project Timeline

## Day 1: Writing the Marketplace Idea

### Activities:
- Brainstormed and documented the core idea of the marketplace.
- Defined the purpose: an e-commerce platform for selling household items.
- Focused on creating a user-friendly, modern platform with essential features:
  - Product search and filter functionality.
  - Cart and wishlist features.
  - Secure payment integration.
  - Dynamic pages for products and blogs.

### Outcome:
- Established a clear vision and roadmap for the marketplace project.

---

## Day 2: Planning the Technical Foundations

### Activities:
- Planned the technical structure of the project:
  - **APIs:** Decided to fetch data via APIs for seamless integration.
  - **Sanity CMS:** Selected Sanity as the content management system for managing products and blog content.
  - **Next.js:** Chosen as the front-end framework for server-side rendering and dynamic routing.
  - **Core Features:**
    - Cart and wishlist.
    - Product filtering.
    - Secure payment processing.
    - Dynamic pages for products and blogs.
  - **Deployment:** Identified Vercel as the hosting platform for staging and production.
- Designed how these components would interact.

### Outcome:
- Finalized a solid technical plan and architecture to start development.

---

## Day 3: API Integration and Data Migration

### Activities:
- Received the API for product data.
- Migrated the product data to Sanity CMS.
- Configured Sanity schemas to match the marketplace’s data structure, including categories, products, prices, and descriptions.
- Fetched data from Sanity and listed products on the UI.

### Outcome:
- Successfully integrated the API with Sanity and displayed product data on the UI.

---

## Day 4: Developing Dynamic Components

### Activities:
- Built essential components for the marketplace:
  - **Header:** Included navigation for categories (e.g., products, blogs).
  - **Footer:** Added footer content with links to About, Contact, etc.
  - **Blogs:** Set up a blog section with dynamic pages for individual blogs.
  - **Cart:** Implemented a shopping cart for adding and managing items.
  - **Search & Filter:** Enabled functionality to search for products and filter them by category, price, or other criteria.
  - **Wishlist:** Added a wishlist feature for saving items.
  - **Suggestions:** Developed product suggestions for related or popular items.
  - **Dynamic Pages:**
    - Product details.
    - Blog details.
    - About, Contact, and 404 error pages.
- Connected all components to the Sanity CMS.

### Outcome:
- Delivered a functional UI with dynamic components and pages, ready for testing.

---

## Day 5: Resolving Errors

### Activities:
- Debugged and resolved errors across:
  - The user interface (e.g., styling or rendering issues).
  - Sanity data configurations (e.g., schema mismatches or API calls).
  - Component interactions (e.g., cart or wishlist functionality).
- Ensured all features (cart, search, filter, dynamic routing) were bug-free.

### Outcome:
- Achieved a clean and error-free version of the marketplace, ready for deployment.

---

## Day 6: Staging Environments, Repos, and Deployment

### Activities:
- Set up a **staging environment** in Vercel to test features before production.
- Organized repositories and branches:
  - **Main Branch:** For production.
  - **Staging Branch:** For testing new changes.
- Deployed the marketplace on Vercel:
  - Production URL: `https://hekto-furniture-store.vercel.app/`.
  - Staging URL: `https://hekto-furniture-staging.vercel.app/`.
- Tested deployments for both environments:
  - Verified that production was linked to the `main` branch.
  - Verified that staging was linked to the `staging` branch.
- Pushed changes to the appropriate branches to trigger deployments.

### Outcome:
- Successfully deployed staging and production environments on Vercel, enabling a streamlined development workflow.

---

