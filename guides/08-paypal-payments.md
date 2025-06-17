### Section Intro

1. PayPal Sandbox Setup

2. PayPal API File

3. Generate Access Token

4. Create Order

5. Capture Payment

6. Jest Testing

7. PayPal Action

8. PayPal Buttons


# 77 PayPal Sandbox Setup

To test application before goin live

Create sandbox account for the buyer (personal) and another one for seller (business)

Go to "Testing Tools" to check sandbox test accounts

Go to "Apps & Credentials" to create app with type "Merchant"

Create PAYPAL_API_URL, PAYPAL_APP_SECRET and PAYPAL_CLIENT_ID in "/.env"


# 78 Generate Access Token

Link: https://developer.paypal.com/reference/get-an-access-token

Make an request to the endpoint with PayPal credientials

Create generateAccessToken() and handleResponse() fns "/lib/paypal.ts"


# 79 Jest Testing for Access Token

Run ```npm i -D jest ts-jest ts-node @types/jest @types/node dotenv``` --legacy-peer-deps (depends)

Run ```npm init jest@latest```

Update the "preset" with "ts-jest" in "/jest.config.ts"

Add ```"test:watch": "jest --watch"``` to scripts in "/package.json"

Create and add require() to "/jest.setup.ts"

Update the "setupFiles" with "["<rootDir>/jest.setup.ts"]" in "/jest.config.ts"

Create test in "/tests/paypal.test.ts"

Run ```npm test```


# 80 Create Paypal Order + Capture Payment Request

Link: https://developer.paypal.com/docs/api/payments/v1/#orders_capture

Update the paypal{} object with createOrder() and capturePayment()

Set up API calls to Paypal


# 81 Jest Testing for Order Payment

Craete the tests for createOrder() and capturePayment() for Paypal API calls

Use jest.spyOn(), .mockResolvedValue() and mockRestore() to mock the function call and response

Run ```npm test```


# 82 Create PayPal Order Action

Create a paymentResultSchema for PayPal in "/lib/validator.ts"

Add a PaymentResult type in "/types/index.ts"

Create a createPayPalOrder action in "/lib/actions/order.actions.ts"


# 83 Approve + Update Order

Create a approvePayPalOrder() and updateOrderToPaid() actions in "/lib/actions/order.actions.ts"

Learn prisma.$transaction()

```
  It's a function that groups multiple database operations together and ensures they either all succeed or all fail as a unit. This is crucial for maintaining data consistency.
```


# 84 Impletment PayPal Button

Link: https://www.npmjs.com/package/@paypal/react-paypal-js

Run ```npm install @paypal/react-paypal-js```

Update the <OrderDetailsTable /> and <OrderDetailsPage /> in "/app/(root)/order/[id]/"
