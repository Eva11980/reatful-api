import { ThemeContextProvider } from "./ThemeContext";
import { AuthContextProvider } from "./AuthContext";

export default function MyContextProviders({ children }) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeContextProvider>
  );
}
