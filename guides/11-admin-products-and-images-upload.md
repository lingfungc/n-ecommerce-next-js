### Section Intro

1. Get + Display Products

2. Delete Products

3. Create Products

4. Uploadthing Config

5. Upload Product Images

6. Is Featured Banner

7. Update Products


# 104 Get Products for Admin Page

Create "/app/admin/products/page.tsx"

Create getAllProducts() in "/lib/actions/product.actions.ts"


# 105 Display Products

Update "/app/admin/products/page.tsx"


# 106 Delete Products

Create deleteProduct() in "/lib/actions/product.actions.ts"

Update "/app/admin/products/page.tsx"


# 107 Create + Update Product

Add updateProductSchema in "/lib/validators.ts"

Add productDefaultValues in "/lib/constants/index.ts"

Add a createProduct() and updateProduct() in "/lib/actions/product.actions.ts"


# 108 Create Product Page + Form

Create "/app/admin/products/create/page.tsx"

Create "/components/admin/product-form.tsx"


# 109 Form Fields + Slugify

Run ```npm i slugify```

Update "/components/admin/product-form.tsx"

Run ```npx shadcn@latest add textarea```


# 110 Create Product Form Submission

Update "/components/admin/product-form.tsx" with onSubmit()


# 111 Uploadthing Configuration

Use "Uploadthing" library to handle uploading files

It offers middleware support, file type validation and custom metadata

Link: https://uploadthing.com

Create a new app

Get the secrets and update "/.env" with UPLOADTHING_TOKEN, UPLOADTHING_SECRET and UPLOADTHING_APP_ID

Link: https://docs.uploadthing.com

Create "/app/api/uploadthing/core.ts"

Create "/app/api/uploadthing/route.ts"

Create "/lib/uploadthing.ts"

Add { images } in "/next.config.ts"

Add `"@uploadthing/react": "^7.1.2"` in "/package.json"

Run ```npm install```


# 112 Add Image Uploads

Update "/components/admin/product-form.tsx" with "Uploadthing"

Update "/assets/styles/globals.css" for "Uploadthing"


# 113 Product Cleanup

Removed all orders and products data

Create new products with images uploaded with "Uploadthing" and new orders


# 114 Is Featured + Banner

Run ```npx shadcn@latest add checkbox```

Update "/components/admin/product-form.tsx"


# 115 Product Update Form

Create getProductById() in "/lib/actions/product.actions.ts"

Create "/app/admin/products/[id]/page.tsx"
