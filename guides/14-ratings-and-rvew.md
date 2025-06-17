### Section Intro

1. Prisma Schema Model

2. Review List Component

3. Review Form Dialog

4. Create + Update Action

5. Display Reviews

6. Pre-fill Review Form


# 137 Review Prisma Schema + Zod + Tpye

Create Review model in "/prisma/prisma.schema"

Run ```npx prisma generate```

Run ```npx prisma migrate dev --name add_review```

Create insertReviewSchema in "/lib/validators.ts"

Create Review type in "/types/index.ts"

Create reviewFormDefaultValues in "/lib/constants/index.ts"


# 138 Review List Component

Create "/app/(root)/product/[slug]/review-list.tsx"

Add and import <ReviewList /> in "/app/(root)/product/[slug]/page.tsx" with { auth }


# 139 Review Form Dialog Component

Create "/app/(root)/product/[slug]/review-form.tsx" with useForm()


# 140 Review Create + Update Actions

Create createUpdateReview() in "/lib/actions/review.actions.ts"


# 141 Connect Review Form to Action

Update "/app/(root)/product/[slug]/review-form.tsx" with onSubmit()

Update <ReviewForm /> props in "/app/(root)/product/[slug]/review-list.tsx"

Update handleOpenForm() in "/app/(root)/product/[slug]/review-form.tsx" with form.setValue()


# 142 Get Reviews Action

Create getReviews() and getReviewByProductId() in "/lib/actions/review.actions.ts"


# 142 Display Reviews

Add numReviews in Product type in "/types/index.ts"

Update "/app/(root)/product/[slug]/review-list.tsx" with getReviews()

Create "/components/shared/product/rating.tsx"

Update "/app/(root)/product/[slug]/page.tsx" with <Rating /> and { product.numReviews }

Update "/components/shared/product/product-card.tsx" with <Rating /> and { product.numReviews }


# 142 Update + Roload Reviews

Update "/app/(root)/product/[slug]/review-form.tsx" with getReviewByProductId() in handleOpenForm

Update "/app/(root)/product/[slug]/review-list.tsx" with reload() and getReviews()
