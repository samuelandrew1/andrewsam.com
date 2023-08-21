import {
  extendTheme,
  type ThemeConfig,

  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { VscColorMode } from 'react-icons/vsc'
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Icon onClick={toggleColorMode} as={VscColorMode} boxSize={25}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Icon>
    </header>
  );
}
