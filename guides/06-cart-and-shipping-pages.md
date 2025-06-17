### Section Intro

1. Cart Page

2. ShadCN UI Table

3. Format Currency

4. Shipping Address Page

5. Shipping Address Form

6. Form Submission + Action

7. Checkout Steps Component


# 55 Cart Page

Create "/app/(root)/cart/page.tsx"

Create "/app/(root)/cart/cart-table.tsx"


# 56 ShadCN UI Table

Run ```npx shadcn@latest add table```

Update "/app/(root)/cart/cart-table.tsx"

Create <Table /> related TSX code for cart and products information

Create <AddButton /> with addItemToCart action

Create <RemoveButton /> with removeItemFromCart action


# 57 Subtotal Card

Add a CURRENCY_FORMATTER and formatCurrency() in "/lib/utils.ts"

Import <Card /> and formatCurrency() in "/app/(root)/cart/cart-table.tsx"


# 58 Shipping Address Zod Schema + Page

Add a shippingAddressSchema in "/lib/validators.ts"

Create a ShippingAddress type in "/types/index.ts"

Add a shippingAddressDefaultValues in "/lib/constants/index.ts"

Create "/app/(root)/shipping-address/page.tsx"

Create a getUserById() in "/lib/actions/user.actions.ts"


# Shipping Address + Form

Create "/app/(root)/shipping-address/shipping-address-form.tsx"

Install packages "react-hook-form" and "@hookform/resolvers"

Run ```npm i react-hook-form @hookform/resolvers``` or ```npm i react-hook-form @hookform/resolvers --legacy-peer-deps```

Run ```npx shadcn@latest add form```

Learn to use userForm with zodResolver

Learn to use <FormField /> with control and render (with ControllerRenderProps) props


# 60 Update User Address

Add the updateUserAddress() in "/lib/actions/user.actions.ts"

Learn to use parse() for the submitted data

Update "/app/(root)/shipping-address/shipping-address-form.tsx" with the use of SubmitHandler


# 61 Checkout Steps Component

Create "/components/shared/checkout-steps.tsx"

Import <CheckoutSteps /> in "/app/(root)/shipping-address/page.tsx"


# 62 Persist Session Cart

Update the JWT of callbacks in "/auth.ts"

Learn to use trigger props in JWT


# 63 Protecting Paths

Protect path "/shipping-address" when user is not signed in

Update the authorized of callbacks in "/auth.ts"
