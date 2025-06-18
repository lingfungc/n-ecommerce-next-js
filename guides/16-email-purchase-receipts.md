### Section Intro

1. Resend Account Setup

2. Receipt Email Template

3. Preview Email in Browser

4. Send Email from App


# 152 Resend API Key + Setup

Create and setup Resend account and get secrets

Store secrets in "/.env"

Create a SENDER_EMAIL constant in "/lib/constants/index.ts"

Run ```npm i resend react-email @react-email/components```


# 153 Resend Main Function

Link: https://www.npmjs.com/package/resend

Create "/email/index.tsx"

Create "/email/purchase-receipt.tsx"


# 154 Preview Email Receipt Template

Create PurchaseReceiptEmail.PreviewProps{} and OrderInformationProps{} in "/email/purchase-receipt.tsx"

Run ```npm run build``` to test code

Add "email" in the scripts in "/package.json"

Run ```npm run email```


# 155 Sending Emails

Add sendPurchaseReceipt() in updateOrderToPaid() in "/lib/actions/order.actions.ts"

In Development mode, we can only send emails to the email which is the same with the Resend account
