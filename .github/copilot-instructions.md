## Project snapshot

- Framework: Expo (React Native) using Expo Router (file-based routing).
- Entry: `main` points to `expo-router/entry` (do not override).
- Key directories: `app/` (routes & layouts), `components/ui/` (shared components), `hooks/` (custom hooks), `constants/` (shared constants), `assets/` (images/icons).

## High-level architecture & conventions

- File-based routing: routes are derived from `app/` files. Layouts live alongside routes (e.g. `app/_layout.tsx`, `app/(tabs)/_layout.tsx`). Use the same pattern when adding screens.
- Tabs layout: `app/(tabs)/_layout.tsx` shows how bottom tabs are composed with `expo-router` + `@react-navigation/bottom-tabs` and vector icons.
- App-wide constants: import from `@/constants` (path alias `@/*` configured in `tsconfig.json`). Example: `import { colors } from '@/constants'`.
- Splash & startup: `app/_layout.tsx` uses `expo-splash-screen` to prevent flash; follow that pattern when adding async startup logic.
- SafeArea & primitives: screens use `SafeAreaView` and React Native primitives; keep platform-agnostic code when possible for web support.

## Developer workflows / important commands

- Install: `npm install`
- Start dev server: `npm run start` (alias: `npm run android`, `npm run ios`, `npm run web` — these call `expo start` with flags).
- Lint: `npm run lint` (runs `expo lint`).
- Reset starter: `npm run reset-project` — moves starter scaffold into `app-example` and creates a blank `app` directory. Don't run unless intentional.

## Project-specific patterns and examples

- Add a new route: create `app/new-screen.tsx` or `app/(tabs)/new.tsx`. To hide headers or customize tabs follow `app/(tabs)/_layout.tsx` pattern.
- Not-found route: `+not-found.tsx` is already used; name non-route helper files with a leading underscore or place them outside `app/` to avoid becoming routes.
- Icons & theme: use `@expo/vector-icons` and `constants/index.ts` for color tokens (example token: `ORANGE_600`).
- Path alias: import root-level modules with `@/` (configured in `tsconfig.json`). Example: `import { colors } from '@/constants'`.

## Integration points & dependencies to be aware of

- Expo SDK (see `package.json`): many Expo modules (splash screen, fonts, system UI, web browser) are used. Keep SDK versions compatible when upgrading.
- Navigation: `expo-router` plus React Navigation tabs — avoid mixing different navigation paradigms without careful testing.
- Reanimated: `react-native-reanimated` is imported in `app/_layout.tsx` (important to keep at top-level for proper initialization).

## Where to look for more context

- App routes & layout: `app/` (especially `app/_layout.tsx` and `app/(tabs)/_layout.tsx`).
- Scripts & deps: `package.json` and `scripts/reset-project.js`.
- Shared values: `constants/index.ts`.
- Assets: `assets/images/` for icons and splash assets.

If any part is unclear or you want the agent to include more examples (e.g., how to add a shared component, or how to wire up a native module), tell me which area to expand and I'll iterate.
