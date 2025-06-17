### Section Intro

1. Payment Method Select

2. Order + OrderItem Schema

3. Create Order Action

4. Place Order Page

5. Order Details Page

6. Format Utility Functions


# 65 Payment Method Action + Zod Schema

Add a string PAYMENT_METHODS and DEFAULT_PAYMENT_METHOD in "/.env"

Create and set PAYMENT_METHODS an array and DEFAULT_PAYMENT_METHOD in "/lib/constants/index.ts"

Create paymentMethodSchema in "/lib/validators.ts"

Add and updateUserPaymentMethod action in "/lib/actions/user.actions.ts"


# 66 Payment Method Page

Create "/app/(root)/payment-method/page.tsx"

Create "/app/(root)/payment-method/payment-method-form.tsx"


# 67 Payment Method Form + Update

Update "/app/(root)/payment-method/payment-method-form.tsx"

Run ```npx shadcn@latest add radio-group```


# 68 Order + OrderItem Prisma Schema

Add Order and OrderItem tables in "/prisma/schema.prisma"

Run ```npx prisma generate```

Run ```npx prisma migrate dev --name add-order```

Run ```npx prisma studio```


# 69 Order Zod Schemas + Types

Add insertOrderSchema and inserOrderItemSchema in "/lib/validators.ts"

Add Order and OrderItem types in "/types/index.ts"

Note that we add fields to Zod schema when the fields are used and provided from the form input


# 70 Place Order Page

Create "/app/(root)/place-order/page.tsx"


# 71 Create Order Action

Create createOrder() in "/lib/actions/order.actions.ts"


# 72 Place Order Form

Create "/app/(root)/place-order/place-order-form.tsx"


# 73 Order Page + Action

Create getOrderById() in "/lib/actions/order.actions.ts"

Create "/app/(root)/order/[id]/page.tsx"


# 74 Format Utility Functions

Add compute() for cart, order and orderItem in "/db/prisma.ts"

Add formatId() and formatDateTime() in "/lib/utils.ts"


# 75 Order Details Table

Create "/app/(root)/order/[id]/order-details-table.tsx"
