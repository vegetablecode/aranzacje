# Decoratly 🤖

## How to deploy

### 1. Setup a new App

1.  Create a new Firebase app
2.  Enter a name of the app

### 2. Generate Firebase config

1.  Click on “Add firebase to your web app”
2.  Copy the config and save as an ENV variables

### 3. Setup Authentication

1.  Go to “Authentication / Sign-in method”
2.  Enable “Email/Password”
3.  Enable “Google Authentication”

### 4. Enable Firestore

1.  Go to “Firestore Database”
2.  Click on “Create database”
3.  Start in “production mode”
4.  Choose “eur3” as a location

### 5. Set Firestore rules

1.  choose firebase project by typing "firebase use 'project-id'"
2.  type “firebase deploy --only firestore:rules”
3.  Go to “Firestore Database/Rules”
4.  Check if deployed

### 6. Deploy missing Firestore indexes

1.  type “firebase deploy --only firestore:indexes”
2.  Go to “Firestore Database / Indexes”
3.  Check if deployed

### 7. Authorise domains for Google Authentication

1.  Go to “Authentication / Settings / Authorised domains”
2.  Add a new authorised domain

## Environment variables

### Firebase variables

These variables come from firebase config.

- **NEXT_PUBLIC_API_KEY**
- **NEXT_PUBLIC_AUTH_DOMAIN**
- **NEXT_PUBLIC_PROJECT_ID**
- **NEXT_PUBLIC_STORAGE_BUCKET**
- **NEXT_PUBLIC_MESSAGING_SENDER_ID**
- **NEXT_PUBLIC_APP_ID**

### Sentry variables

Logging errors with Sentry.

- **NEXT_PUBLIC_SENTRY_DSN**

### Analytics variables

The app uses _Cloudflare Web Analytics_ for analytics purposes. Analytics are active only if a beacon token is provided.

- **NEXT_PUBLIC_ANALYTICS**

### Additional

There's a special variable that determines if given instance works on test or prod environment. If it's prod environment the variable below should have _true_ value, otherwise no value should be provided.

- **NEXT_PUBLIC_IS_PROD**
