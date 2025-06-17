### Section Intro

1. Get + Display Users

2. Delete User

3. Edit User

4. Admin Search Form

5. Orders Search

6. Users Search


# 117 Get + Display Users

Create getAllUsers() in "/lib/actions/user.actions.ts"

Create "/app/admin/users/page.tsx"


# 118 Delete User

Create deleteUser(id) in "/lib/actions/user.actions.ts"

Update "/app/admin/users/page.tsx" with <DeleteDialog id action />


# 119 Edit User

Create "/app/admin/users/[id]/page.tsx"

Add a updateUserSchema in "/lib/validators.ts"

Add a USER_ROLES in "/lib/constants/index.ts" and "/.env" (optional)

Run ```npx shadcn@latest add select```

Update "/app/admin/users/[id]/page.tsx"


# 120 Update User Form

Create "/app/admin/users/[id]/update-user-form.tsx" iwth useForm()


# 121 Update User Action

Create updateUser({...values, id}) in "/lib/actions/user.actions.ts"

Update "/app/admin/users/[id]/update-user-form.tsx" with onSubmit()


# 122 Admin Search Form + Product Search

Create "/components/admin/admin-search.tsx"

Import and implment <AdminSearch /> in "/app/admin/layout.tsx"

Update getAllProducts() in "/lib/actions/order.actions.ts" with queryFilter and Prisma client

Update "/app/admin/products/page.tsx" with { searchText } and remove filter logic


# 123 Admin Order Search

Update "/app/admin/orders/page.tsx" with CUSTOMER name data

Update getAllOrders() in "/lib/actions/order.actions.ts" with queryFilter and Prisma client

Update "/app/admin/orders/page.tsx" with { searchText } and remove filter logic


# 124 Admin User Search

Update getAllUsers() in "/lib/actions/user.actions.ts" with queryFilter and Prisma client

Update "/app/admin/users/page.tsx" with { searchText } and remove filter logic
