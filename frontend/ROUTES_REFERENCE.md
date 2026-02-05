# Complete Routes Reference for Smart Property

All your HTML pages have been converted to JSX components and are accessible via React Router.

## 🏠 Home Pages
- `http://localhost:3000/` - Main home page (Index3/Home)
- `http://localhost:3000/index-2` - Home variant 2
- `http://localhost:3000/index-3` - Home variant 3

## 🔐 Authentication Pages
- `http://localhost:3000/login` - Login page (custom)
- `http://localhost:3000/signin` - Sign in page (template)
- `http://localhost:3000/signup` - Sign up page (custom)
- `http://localhost:3000/forgot-password` - Forgot password
- `http://localhost:3000/reset-password` - Reset password

## 🏢 Buy Properties
- `http://localhost:3000/buy-property-grid` - Buy properties grid view
- `http://localhost:3000/buy-property-grid-sidebar` - Buy grid with sidebar
- `http://localhost:3000/buy-property-list` - Buy properties list view
- `http://localhost:3000/buy-property-list-sidebar` - Buy list with sidebar
- `http://localhost:3000/buy-grid-map` - Buy grid with map
- `http://localhost:3000/buy-list-map` - Buy list with map
- `http://localhost:3000/buy-details` - Property details (buy)
- `http://localhost:3000/add-property-buy` - Add property for sale

## 🏘️ Rent Properties
- `http://localhost:3000/rent-property-grid` - Rent properties grid view
- `http://localhost:3000/rent-property-grid-sidebar` - Rent grid with sidebar
- `http://localhost:3000/rent-property-list` - Rent properties list view
- `http://localhost:3000/rent-property-list-sidebar` - Rent list with sidebar
- `http://localhost:3000/rent-grid-map` - Rent grid with map
- `http://localhost:3000/rent-list-map` - Rent list with map
- `http://localhost:3000/rent-details` - Property details (rent)
- `http://localhost:3000/add-property-rent` - Add property for rent

## 📋 Rental Management
- `http://localhost:3000/rental-booking` - Rental booking page
- `http://localhost:3000/rental-order-confirmation` - Order confirmation
- `http://localhost:3000/rental-order-details` - Order details
- `http://localhost:3000/rental-payment` - Payment page

## 👨‍💼 Agents
- `http://localhost:3000/agent-grid` - Agents grid view
- `http://localhost:3000/agent-grid-sidebar` - Agent grid with sidebar
- `http://localhost:3000/agent-list` - Agents list view
- `http://localhost:3000/agent-list-sidebar` - Agent list with sidebar
- `http://localhost:3000/agent-details` - Agent profile details

## 🏛️ Agencies
- `http://localhost:3000/agency-grid` - Agencies grid view
- `http://localhost:3000/agency-grid-sidebar` - Agency grid with sidebar
- `http://localhost:3000/agency-list` - Agencies list view
- `http://localhost:3000/agency-list-sidebar` - Agency list with sidebar
- `http://localhost:3000/agency-details` - Agency profile details

## 📝 Blog
- `http://localhost:3000/blog-grid` - Blog grid view
- `http://localhost:3000/blog-list` - Blog list view
- `http://localhost:3000/blog-details` - Blog post details

## ℹ️ Information Pages
- `http://localhost:3000/about-us` - About us
- `http://localhost:3000/contact-us` - Contact us
- `http://localhost:3000/pricing` - Pricing plans
- `http://localhost:3000/faq` - Frequently asked questions
- `http://localhost:3000/gallery` - Image gallery
- `http://localhost:3000/our-team` - Team members
- `http://localhost:3000/testimonial` - Customer testimonials
- `http://localhost:3000/privacy-policy` - Privacy policy
- `http://localhost:3000/terms-condition` - Terms & conditions

## 🛒 E-commerce
- `http://localhost:3000/wishlist` - Wishlist
- `http://localhost:3000/cart` - Shopping cart
- `http://localhost:3000/checkout` - Checkout page
- `http://localhost:3000/invoice-details` - Invoice details

## 🔔 User Pages
- `http://localhost:3000/notifications` - Notifications
- `http://localhost:3000/dashboard` - Dashboard (protected)

## 🛠️ Utility Pages
- `http://localhost:3000/maintenance` - Maintenance page
- `http://localhost:3000/coming-soon` - Coming soon page

## ❌ Error Pages
- `http://localhost:3000/error-404` - 404 error page
- `http://localhost:3000/error-500` - 500 error page

## Navigation Features

### ✅ What's Working:
1. **React Router Links** - All internal navigation uses `<Link>` components for instant page transitions
2. **No Page Reloads** - True single-page application experience
3. **Consistent Layout** - All pages maintain the same header, footer, and navigation
4. **Asset Loading** - All CSS, JS, images, and fonts load from `/assets/` directory

### 🎯 How to Test:
1. Start the dev server: `npm start`
2. Navigate to any route listed above
3. Click on navigation links within pages - they'll use React Router
4. Use browser back/forward buttons - navigation works smoothly

### 📝 Notes:
- Hash links (`#`) are preserved for dropdown menus and modals
- External links remain as `<a>` tags
- The original HTML files are still in `src/html/` for reference
- All JSX components are in `src/pages/`
- Assets are in `public/assets/`

### 🔄 Page Structure:
Each converted page includes:
- Header with navigation menu
- Breadcrumb section (where applicable)
- Main content area
- Footer with links
- Modals and popups (where applicable)
- Search modal
- All original functionality preserved
