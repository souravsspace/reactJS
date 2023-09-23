import { ThemeContextProvider } from "./ThemeContext";
import { useTheme } from "./ThemeContext";

export default function ContextHook() {
  const { primary, secondary, flex } = useTheme();
  return (
    <ThemeContextProvider>
      <div style={{display: flex.display, gap: flex.gapTwo, alignContent: flex.alignItems, justifyContent: flex.justifyContent}}>
        <div style={{ background: primary.bg }}>
          <h2>Hey guys</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam est
            corporis tenetur mollitia consequuntur provident esse minus rem!
            Quos, saepe.
          </p>
        </div>
        <div style={{ background: secondary.text }}>
          <h2>Hey guys</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ex vel unde aliquid nam commodi dignissimos officia esse saepe
            repellat!
          </p>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
