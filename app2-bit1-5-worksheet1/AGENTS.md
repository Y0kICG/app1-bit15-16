This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

## กฎการเขียนโค้ดใบงาน (อิงจาก "หน่วย 1.1 Core Component (ใบงาน 1)")

**หลักใหญ่: ห้ามใช้สิ่งที่ไม่ได้สอนใน PDF** ยกเว้น "กรอบสี่เหลี่ยม" (View ที่เป็นกล่อง/การ์ด/พื้นหลัง/ขอบ/มุมโค้ง) ให้เพิ่มเองได้ แม้ PDF ไม่ได้สอนวิธีนั้นโดยตรง ข้อนี้มีผลกับ "ทุกงาน" ที่ทำในโปรเจกต์นี้ (ต้องเป็นของที่อยู่ในรายการด้านล่างเท่านั้น)

### ข้อห้าม (ไม่ได้สอน)
- ห้ามใช้ไลบรารีนอกเหนือ `react-native` เช่น `expo-image` (ใช้ `Image` ของ react-native เท่านั้น)
- ห้ามใช้ prop/ฟังก์ชันที่ไม่อยู่ในรายการ "สิ่งที่สอน" เช่น `boxShadow`, `contentFit`, `transition`, `contentInsetAdjustmentBehavior`, `accessibilityLabel` บน Image, `.map()`, state/hook
- เงาใช้ได้เฉพาะ `shadowColor/shadowOffset/shadowOpacity/shadowRadius` (iOS) + `elevation` (Android)

### สิ่งที่สอน (ใช้ได้)
- **Component**: `View`, `Text`, `Image`, `ImageBackground`, `TextInput`, `Button`, `ScrollView`, `TouchableOpacity`, `TouchableHighlight`, `Pressable`, `Switch`, `ActivityIndicator`, `KeyboardAvoidingView`, `Modal`, `RefreshControl`, `StatusBar`
- **API**: `Alert`, `Animated`, `Dimensions`, `Linking`, `PixelRatio`
- **Image**: `source={require('...')}` (รูปในเครื่อง, ห้ามต่อสตริงใน require) / `source={{ uri: '...' }}` (รูปลิงก์ ต้องใส่ width + height เสมอ), `style`, `resizeMode` (cover/contain/stretch/repeat/center), `onLoad`, `onError`, `tintColor`
- **StyleSheet**: เขียนด้วย `StyleSheet.create()` เสมอ, ชื่อ style เป็น camelCase, ค่าตัวเลขไม่ต้องใส่หน่วย, ซ้อนหลาย style ด้วยอาร์เรย์ `[a, b]` (ตัวหลังทับ), dynamic style = StyleSheet + inline
- **Layout**: `width`, `height` (dp หรือ %), `flex`, `flexDirection`, `justifyContent`, `alignItems`, `alignSelf`, `flexWrap`, `flexBasis`, `flexGrow`, `flexShrink`, `gap`/`rowGap`/`columnGap`, `aspectRatio`, `position` (relative/absolute) + `top/bottom/left/right`, `zIndex`, `overflow`, `display`, `transform`
- **Box model**: `margin*`, `padding*` (Vertical/Horizontal/Top/Bottom/Start/End), `borderWidth`, `borderColor`, `borderRadius` (+ รายมุม), `borderStyle`
- **สี**: `color`, `backgroundColor`, `opacity` (ชื่อสี, hex, rgb/rgba, hsl/hsla)
- **ตัวอักษร**: `fontSize`, `fontWeight`, `fontStyle`, `fontFamily`, `lineHeight`, `letterSpacing`, `textAlign`, `textDecorationLine`, `textTransform`, `textShadowColor/Offset/Radius`

### กฎของ Component
- ชื่อ Component ขึ้นต้นด้วยตัวพิมพ์ใหญ่, ต้อง import ก่อนใช้, ต้องปิด tag ให้ถูกต้อง, ต้องถูกห่อด้วย Parent
- ข้อความต้องอยู่ใน `<Text>` เสมอ (ห้ามวางข้อความเปล่าใน `<View>`), `<Text>` ซ้อน `<Text>` ได้เพื่อใส่สไตล์ต่างกัน
- หน้าแรกคือ `src/app/index.tsx` ต้องมี `export default function ...`
- `flexDirection` เริ่มต้นคือ `column`; จัด `justifyContent`/`alignItems` ที่ View แม่ ไม่ใช่ที่ลูก
- โค้ดเขียนให้นักเรียนอธิบายได้: บอกได้ว่าแต่ละ Component ทำอะไร และ style ตัวไหนควบคุมอะไร

### กรอบสี่เหลี่ยม (เพิ่มเองได้)
View ที่ใช้เป็นกล่อง/การ์ด/แถบ พร้อม `backgroundColor`, `padding`, `margin`, `borderWidth`, `borderRadius`, เงา (แบบที่สอน) และการจัดวางด้วย flexbox ใส่เพิ่มได้อิสระ
