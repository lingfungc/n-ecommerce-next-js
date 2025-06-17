# Udemy Playback Rate
Run `document.querySelector("video").playbackRate = 1.15`


### App Creation and Basic Layout

# 1 Create Next.js App
Run `npx create-next-app@latest`


# 2 Run Next.js App
Run `nvm use 18`
Run `npm run dev`


# 3 Set Up Tailwind CSS 4
https://github.com/bradtraversy/prostore?tab=readme-ov-file#warning-tailwindcss-update--breaking-changes-warning
https://github.com/bradtraversy/prostore/tree/tailwind4


# 4 Install Shadcn UI
Run `npx shadcn@latest init`
Run `npx shadcn@latest add button`
Run `npx shadcn@latest add dropdown-menu`
Run `npx shadcn@latest add sheet`
Run `npx shadcn@latest add card`


# 5 Install Lucide Icons
Run `npm i lucide-react`


# 6 Install Next Themes
Run `npm i next-themes`

import { ThemeProvider } from "next-themes";
`
<ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
`

# Merge ClassNames
import { cn } from "@/lib/utils";
`
<p className={cn("text-2xl", className)}>
`

# Routes
Home("/"): `/app/(root)/page.tsx`
Loading: `/app/loading.tsx`
Not Found: `/app/not-found.tsx`

# Imports Shortcuts
import Link from "next/link";
import Image from "next/image";



### Database, Prisma & Product Display
Vercel
Neon - PostgreSQL
Prisma - ORM


# 1 Install Prisma
Run `npm i -D prisma @prisma/client` (development dependencies)


# 2 Initialise Primsa (Schema)
Run `npx prisma init`

Update DATABASE_URL in ".env" (from Vercel)


# 3 Update VS Code (Open User Settings JSON)
`
"[prisma]": {"editor.defaultFormatter": "Prisma.prisma"}
`


# 4 Add or Update Prisma Schema
Update "package.json.scripts"
Add `"postinstall": "prisma generate"`

Run locally `npx prisma generate`


# 5 Prisma Migration (add table in DB)
Run `npx prisma migrate dev --name init`

Run `npx prisma studio`

Whenever add a new model or change the schema, we need to generate a client to work with updated Prisma schema


# 6 Seeder
Comment out 'output' in 'generator client' in "/prisma/schema.prisma"

Create "seed.ts" in "/db"
Run `npx tsx ./db/seed`


# 7 Update Schema with Migration
Update the "/prisma/schema.prisma"
Run `npx prisma migrate dev --name add_num_reviews` (name of the migration)
Run `npx prisma generate`


# 8 Fetch Data from PostgreSQL through Prisma
Create "/lib/actions/product.actions.ts"

Concept of TypeScript Generics:
`convertToPlainObject<T>(value: T): T`
- "<T>""= declares a generic type parameter that can represent any type
- "value: T" means the function accepts a parameter of type T
- ": T" after the function parameters means the function returns a value of the same type T


# 9 ZOD Validation and Type Interface
ZOD is a TypeScript first validation schema
ZOD offers runtime data validation for TypeScript like APIS or forms
ZOD allows us no need to manually put data validation in components and actions

Create "/types/index.ts" with a type (Product)

Install ZOD
run `npm i zod`

Create a ZOD validation schema file
Create "/lib/validators.ts"

Infer the Zod schema for the types



### Serverless Environment Config

```npm i @neondatabase/serverless```
- To connect to Neon serverless PostgreSQL database using WebSockets

```npm i @prisma/adapter-neon```
- To ensure Prisma can operate smoothly to Neon in serverless Environment

```npm i ws```
 - A WebSocket library used by Neon adapter to establish and manage connections to Neon serverless database

```npm i -D @types/ws bufferutil```

We need to add the adapter in '/prisma.schema.prisma' and need to re-generate the client
- previewFeatures = ["driverAdapters"]

```npx prisma generate```

Download the 'prisma.ts' and put it in '/db' folder

Update the imports for "primsa" in "/lib/actions/prodcut.actions.ts"


# Use version 6.5 for Prisma dependencies
```npm i @prisma/adapter-neon@6.5.0 @prisma/client@6.5.0 prisma@6.5.0```



### Building Product Details Page

Create a getProductBySlug() in product.actions.ts

Create a "page.tsx" in file path "/app/(root)/product/[slug]"

```npx shadcn@latest add badge```
- Choose "Use --legacy-peer-deps"



### Deployment

Run ```npm run build``` to build production locally


# Vercel

Add project

Install command ```npm install --legacy-peer-deps``` if needed
