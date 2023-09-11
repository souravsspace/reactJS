import { herDataProps } from "./herDataProps.types";

export default function PropTypesTips(herData: herDataProps) {
  return (
    <div>
      <h1>My name is {herData.name}</h1>
      <h2>I am {herData.age} years old</h2>
      <h3>
        My hobbies are:{" "}
        {herData.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </h3>
      <h3>My job is: {herData.job}</h3>
      <h3>My salary is: {herData.salary}</h3>
      <h3>
        My address is: {herData.address.street}, {herData.address.city},{" "}
        {herData.address.state}, {herData.address.zip}
      </h3>
    </div>
  );
}
