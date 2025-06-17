### Section Intro

1. Category Drawer

2. Featured Product Carousel

3. Search Component

4. Search Page

5. Get Filters + Apply

6. Add Filter Links

7. Sorting


# 126 Category Drawer

Create getAllCategories() in "/lib/actions/product.actions.ts"

Create "/components/shared/header/category-drawer.tsx"

Import and add <CategoryDrawer /> in "/components/shared/header/index.tsx

Run ```npx shadcn@latest add drawer```

Update "/components/shared/header/category-drawer.tsx"


# 127 Featured Products Carousel

Run ```npx shadcn@latest add carousel```

Run ```npm i embla-carousel-autoplay```

Create getFeaturedProducts() in "/lib/actions/product.actions.ts"

Create "/components/shared/product/product-carousel.tsx"

Update "/app/(root)/page.tsx" with product actions and <ProductCarousel />


# 128 Search Component

Create "/components/shared/header/search.tsx"

Update "/components/shared/header/page.tsx" with <Search />


# 129 Seach Page

Create "/app/(root)/search/page.tsx"

Create "/components/view-all-products-button.tsx"

Add and import <ViewAllProductsButton /> in "/app/(root)/page.tsx"


# 130 Search Filters

Update getAllProducts() in "/lib/actions/product.actions.ts" with queryFilter, categoryFilter, priceFilter and ratingFilter


# 131 Get Filter URL Function

Create and implement getFilterUrl() in the "/app/(root)/search/page.tsx"


# 132 Category + Price UI Filters

Update "/app/(root)/search/page.tsx" with getAllCategories() wih Category Links and Price Links


# 133 Rating Filter + Filter Display

Update "/app/(root)/search/page.tsx" wih Rating Links

Update "/app/(root)/search/page.tsx" wih Filter Display and a clear button


# 134 Sorting Products

Update getAllProducts() in "/lib/actions/product.actions.ts" with sorting in prisma.product.findMany({ orderBy })

Update "/app/(root)/search/page.tsx" wih sortOrders and <Link />


# 135 Dynanmic Metadata

Implement and add { generateMeta } in "/app/(root)/serach/page.tsx"
