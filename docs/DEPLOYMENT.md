# Firebase Hosting Deployment (CI Token)

Use these steps to deploy from a non-interactive environment (like CI or this agent):

1. Generate a CI token locally (you only need to do this once):

   ```bash
   npx firebase-tools login:ci
   ```

   This opens a browser to authenticate. Copy the token printed in the terminal.

2. Export the token and deploy:

   ```bash
   export FIREBASE_TOKEN="YOUR_TOKEN_HERE"
   npx firebase-tools deploy --only hosting
   ```

3. (Optional) If you prefer a one-off command without exporting:

   ```bash
   FIREBASE_TOKEN="YOUR_TOKEN_HERE" npx firebase-tools deploy --only hosting
   ```

## Notes

- Keep the token private (treat it like a password).
- If the token is revoked, just run `login:ci` again to generate a new one.
