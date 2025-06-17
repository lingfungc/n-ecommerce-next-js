### Section Intro

1. Cart Schema + Model

2. NextAuth Callback

   - Allows guests to link them to their cart in database before they log-in

3. Add to Cart Component

4. Cart Actions

5. Dynamic Cart Button

6. useTransition Hook


# 45 Cart Zod Schema & Prisma Model

Add cartItemSchema and insertCartSchema "/lib/validators.ts"

Add Cart and CartItem types in "/types/index.ts"

Add Cart model "/prisma/schema.prisma"

Run ```npx prisma generate```

Run ```npx prisma migrate dev --name add-cart```

Run ```npx prisma studio```


# 46 Add to Cart Component

Create "/components/shared/product.add-to-cart.tsx"

Import and use the <AddToCart /> in "/app/(root)/product/[slug]/page.tsx"

Run ```npx shadcn@latest add toast``` or ```npx shadcn@latest add sonner```

Add an output <Toaster /> to the "/app/layout.tsx"

Create a "lib/actions/cart.actions.ts" and add addItemToCart()


# 47 Session Cart ID Cookie

Create a session cart id in cookie to connect guests to their carts

Create "/middleware.ts" which use { auth } from "@/auth" as the middleware

Add authorized in "/auth.ts" as middleware


# 48 Get Item from Cart

Update addItemToCart() in "/lib/actions/cart.actions.ts"

Create getMyCart() in "/lib/actions/cart.actions.ts"


# 49 Price Calculation & Add to Database

Create round2() in "/lib/utils.ts"

Create calcPrice() in "/lib/actions/cart.actions.ts"

Update addItemToCart() in "/lib/actions/cart.actions.ts"


# 50 Handle Quantity & Multiple Products

Work on the addItemToCart() in "/lib/actions/cart.actions.ts"

When there is existing cart, we need to increase the quantity or add the item in the cart

Update addItemToCart() in "/lib/actions/cart.actions.ts"

Update the toast.success() message in "/components/shared/product/add-to-cart.tsx"


# 51 Remove Cart Action

Add removeItemFromCart() in "/lib/actions/cart.actions.ts"


# 52 Dynamic Cart Button

Add removeItemFromCart() to "/components/shared/product/add-to-cart.tsx"

Import and use getMyCart() to "/app/(root)/product/[slug]/page.tsx"

Pass the cart to <AddToCart /> from <ProductDetailsPage />


# 53 Smooth UI with useTransition Hook

Bring in the { useTransition } to "/components/shared/product/add-to-cart.tsx"
