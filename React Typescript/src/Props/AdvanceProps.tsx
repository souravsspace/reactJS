type AdvancePropsProps = {
  name: string;
  age: number;
  herLove?: string;
};

export default function AdvanceProps(props: AdvancePropsProps) {
  const { herLove ='ukil' } = props;
  return (
    <div>
      <article>
        <h1>Hello, {props.name}!</h1>
        <p>You are {props.age} years old.</p>
        <p>Her love is {herLove}</p>
      </article>
    </div>
  );
}
