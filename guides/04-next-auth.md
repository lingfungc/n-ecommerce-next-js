### Authentication Flow

1. User logs in with credentials

2. Check credentials against database using Primsa

3. If correct, create JWT for user (includes ID, role)

4. JWT is sent to server with every request

5. JWT is used to create session with user details

6. Session allows app to identify user without re-login

7. JWT can expire after set time (30 days)


# 30 Primsa User-Related Models

Reference: https://authjs.dev/getting-started/adapters/prisma

Update '/prisma/schema.prisma'

Run ```npx prisma generate```

Run ```npx prisma migrate dev --name add_user_based_tables```

Make sure Neon database in running and active

Run ```npx prisma studio```


# 31 Seed User Data

Run ```npm i bcrypt-ts-edge```

Add new users in '/db/sample-data.ts'

Update '/db/seed.ts'

Run ```npx tsx ./db/seed```


# 32 Next Auth Setup

Reference: https://next-auth.js.org/configuration/options

Run ```npm i next-auth@beta``` or ```npm i next-auth@beta --legacy-peer-deps```

Run ```npm i @auth/prisma-adapter```


Create Next Auth secret

Reference: https://next-auth.js.org/configuration/options#nextauth_secret

Run ```openssl rand -base64 32```

Update '.env' file

```
  NEXTAUTH_SECRET = "12M3hrgxauslQnYLgMhxsGCO/wjWsb5bodv+4njOT6E="

  NEXTAUTH_URL = "http://localhost:3000"

  NEXTAUTH_URL_INTERNAL = "http://localhost:3000"
```

Create config option file '/auth.ts'

Set up the configuration in '/auth.ts'


# 33 Next Auth Catch All API Route

Reference: https://next-auth.js.org/configuration/initialization

Next Auth will handle different types of requests when we define the corresponding API route

  - Route Handlers ('app/')

  - '/app/api/auth/[...nextauth]/route.ts'


# 34 Sign In & Sign Out Action

Add a signInFormSchema in '/lib/validators.ts' with Zod

Create '/lib/actions/user.actions.ts'


# 35 Auth Layout & Sign In Page

Create '/app/(auth)/layout.tsx'

Create '/app/(auth)/sign-in/page.tsx'


# 36 Credentials Sign In Form

Create '/app/(auth)/sign-in/credentials-sign-in.tsx'

Run ```npx shadcn@latest add label input```

Add a signInDefaultValues in "/lib/constants/index.ts"


# 37 Hook Up Sign In Form

Import and implement the { useActionState } and { useFormStatus }

Implement { error } and { pending }

Import { auth } in "/app/(auth)/sign-in/page.tsx" and get the session


# 38 Callback URL Redirect

Update "/app/(auth)/sign-in/page.tsx" with serach params

Update "/app/(auth)/sign-in/credentials-sign-in-form.tsx" with callbackUrl by { useSearchParams } and insert it in a hidden form input


# 39 User Button & Sign Out

Create "/components/ui/shared/header/user-button.tsx"

Update "/components/ui/shared/header/menu.tsx" with <UserButton />


# 40 Sign Up Zod Schema & Action

1. Set up validators in Zod schema

Update "/lib/validators.ts"

2. Create sign-up action

Update '/lib/actions/user.actions.ts'


# 41 Sign Up Page & Form

Create '/app/(auth)/sign-up/page.tsx'

Create '/app/(auth)/sign-up/sign-up-form.tsx'

Create signUpValues in "/lib/constants/index.ts"


# 42 Sign Up Error Handling

To handle same email error when signing up a user

To handle the correct error message from Zod validators

Add a formatError() in "/lib/utils.ts"


# 43 Customise Token with JWT Callback

In a valid sesscion, JTW is sent to the server with every request

We want to customise the data in the JWT in the callbacks

We are now adding the user role and user name (if not exists) to token and then session

Update "/auth.ts"
