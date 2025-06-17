### Section Intro

1. Admin Layout + Menu

2. Admin Overview Area

3. Sales Chart ( Recharts )

4. Admin Orders Page

5. Delete Orders

6. Update Orders


# 94 Admin Layout + Main Nav

Create "/app/admin/layout.tsx"

Create "/app/admin/main-nav.tsx"

Create "/app/admin/overview/page.tsx"

Update "/components/shared/header/user-button.tsx" with admin role check

Create "/types/next-auth.d.ts" (the "d" stands for definition)


# 95 Get Order Summary

Add getOrderSummary() and SalesDataType in "/lib/actions/order.actions.ts"


# 96 Admin Overview Display Data

Update "/app/admin/overview/page.tsx"

Create requireAdmin() in "/lib/auth-guard.ts"

Add formatNumber() in "/lib/utils.ts"


# 97 Monthly Sales Chart

Run ```npm install recharts```

Create "/app/admin/overview/charts.tsx"


# 98 Protecting Admin Routes

Create "/app/unauthorized/page.tsx"

Import and implement requireAdmin() to all admin only routes

Note: Putting requireAdmin() in "layout.tsx" won't work


# 99 Admin Orders Page + Action

Create a getAllOrders() action in "/lib/actions/order.actions.ts"

Create "/app/admin/orders/page.tsx"


# 100 Delete Orders

Create a deleteOrder() action "/lib/actions/order.actions.ts"

Run ```npx shadcn@latest add alert-dialog dialog```

Create "/components/shared/delete-dialog.tsx"


# 101 Update Order Actions (Cash on Delivery)

Create updateOrderToPaidCOD() in "/lib/actions/order.actions.ts"

Create deliverOrder() in "/lib/actions/order.actions.ts"


# 102 Update Order Buttons (Cash on Delivery)

Update "/app/(root)/order/[id]/page.tsx" with admin check

Update "/app/(root)/order/[id]/order-details-table.tsx" with isAdmin props
