# Setup

1. Install dependencies: `npm install`
2. Build & export: `npm run export`
3. Start local replica: `dfx start --background` (if no local dfx replica is running already)
4. Deploy ui canister: `dfx deploy`

To work in dev mode:

5. Run dev environment: `npm run dev`
6. Open frontend in browser: `http://localhost:3000`

To use canister in production (locally)

5. Retrieve canister id: `dfx canister id ui`
6. Open frontend in browser: `http://<canister id from step 5>.localhost:8000`
