import useToogle from "./useToogle";
export default function CustomHook() {
  // const [ state, toggle ] = useToogle();
  // const { state, toggle } = useToogle();
  const { state: isVisible, toggle } = useToogle();
  return (
    <div className="container">
      <article>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && (
          <p style={{ fontFamily: "monospace", color: "gray" }}>Hello world!</p>
        )}
      </article>
    </div>
  );
}
