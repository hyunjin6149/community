import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // ⚠️ 폰트 로딩 코드를 임시로 제거하고 loaded 상태를 true로 가정합니다.
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  const loaded = true; // 👈 폰트 로드 상태를 true로 고정 (임시)

  useEffect(() => {
    // 폰트 로딩 조건 없이 바로 스플래시 화면을 숨깁니다.
    // if (loaded) {
    SplashScreen.hideAsync();
    // }
  }, []); // 👈 의존성 배열에서 [loaded]를 제거

  // 폰트 로딩을 기다리는 코드를 제거합니다.
  // if (!loaded) {
  //   return null;
  // }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
