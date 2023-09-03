import useIDRcount from "./useIDRcount";

export default function HookEx() {
  const { value, increaseValue, decreaseValue, resetValue } = useIDRcount();
  return (
    <div className="container">
      <article>
        <h1>{value}</h1>
        <section style={{ display: "flex", gap: "0.25rem" }}>
          <button onClick={increaseValue}>Increase</button>
          <button onClick={decreaseValue}>Decrease</button>
          <button onClick={resetValue}>Reset</button>
        </section>
      </article>
    </div>
  );
}
