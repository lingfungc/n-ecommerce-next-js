### Section Intro

1. Stripe Account Setup

2. Payment Intent

3. Stripe Form Component

4. Payment Success Page

5. Webhook For Payment


# 146 Stripe Setup

Link: https://dashboard.stripe.com/test/dashboard

Link: https://dashboard.stripe.com/test/webhooks/create?endpoint_location=hosted

Setup Stripe account and get the API keys

Run ```npm i stripe @stripe/stripe-js @stripe/react-stripe-js```


# 147 Order Form Payment Intent

Update "/app/(root)/order/[id]/page.tsx" with Stripe payment intent


Payment Intent:

- A specific transaction for collecting payment from a customer

- An attempt to collect money containing the information for a payment, track it's status and hand any authentication


Payment Intent steps:

1. Create a payment intent

2. Confirm payment on client

3. Check payment status

3. Handle success or failure


Intent Status updates:

- Requires Payment Method

- Requires Confirmation

- Requires Action

- Processing

- Succeeded

- Cancelled or Failed


Update "/app/(root)/order/[id]/order-details-table.tsx" with { stripeClientSecret }

Create "/app/(root)/order/[id]/stripe-payment.tsx"


# 148 Stripe Payment Component

Link: https://www.npmjs.com/package/@stripe/react-stripe-js

Update "/app/(root)/order/[id]/stripe-payment.tsx" with Stripe package functions


# 149 Stripe Payment Success Page

Create "/app/(root)/order/[id]/stripe-payment-success/page.tsx"


# 150 Webhook to Mark Order as Paid

Push to production on Vercel

Create "/app/api/webhooks/stripe/route.ts"

Link: https://docs.stripe.com/webhooks/quickstart?locale=en-GB

Set up webhook on Stripe with event "charge.succeeded"

Get and import the STRIPE_WEBHOOK_SECRET (Signing secret)
