import { useOs } from "@mantine/hooks";
import type { OS } from "@mantine/hooks";

export enum OSType {
  windows = "windows",
  macos = "macos",
  android = "android",
  ios = "ios",
  linux = "linux",
  undetermined = "undetermined",
}

export const useCheckMobile = () => {
  const os: OS = useOs();
  if (os === OSType.android || os === OSType.ios) {
    return true;
  }
  return false;
};
