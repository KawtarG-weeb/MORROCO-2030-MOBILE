import { Linking, Platform } from "react-native";

export function openGoogleMaps(destination: string) {
  const encodedDestination = encodeURIComponent(destination);

  const url =
    Platform.OS === "ios" || Platform.OS === "android"
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`
      : `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;

  Linking.openURL(url);
}
