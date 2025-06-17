### Section Intro

1. User Layout + Menu

2. Get User Orders

3. Orders Pagination

4. Update Profile Action

5. User Profile Form


# 86 User Layout + Menu

Create "/app/user/layout.tsx"

Create "/app/user/main-nav.tsx"

Create "/app/user/orders/page.tsx"

Create "/app/user/profile/page.tsx"


# 87 Get My Orders Action

Add a PAGE_SIZE in "/.env" and "/lib/constants/index.ts"

Create getMyOrders() in "lib/actions/order.actions.ts"


# 88 Orders Page

Update "/app/user/orders/page.tsx"

Add a User Profile and Order History in the <DropdownMenuItem> "/components/shared/header/user-button.tsx"


# 89 Order Pagination

Create a "/components/shared/pagination.tsx"

Update and add <Pagination /> in "/app/user/orders/page.tsx"

Run ```npm i query-string```

Create fomrUrlQuery() and import { qs } in "/lib/utils.ts"


# 90 Update Profile Action

Create updateProfileSchema in "/lib/validators.ts"

Create updateProfile() in "/lib/actions/user.actions.ts"


# 91 Update Profile Form

Update "/app/user/profile/page.tsx"

Create "/app/user/profile/profile-form.tsx" and implement useForm()


# 92 Profile Form Submission

Update onSubmit() in "/app/user/profile/profile-form.tsx"

Update jwt() in "/auth.ts"
