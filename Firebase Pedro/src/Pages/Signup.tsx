import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Config/Firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { DB } from "../Config/Firebase.config";

export default function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  const userData = collection(DB, "users-data");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setDisable(true);
      setSuccess("Account created successfully!");
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(userData, {
        name: name as string,
        age: age as number,
        email: email as string,
        password: password as string,
      });
      navigate("/home");
    } catch {
      setError("Failed to create an account");
    }

    setDisable(false);
  }

  return (
    <main className="w-full h-[90vh] grid place-items-start place-content-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        {error && (
          <Typography color="red" className="mt-2 font-normal">
            {error}
          </Typography>
        )}
        {success && (
          <Typography color="green" className="mt-2 font-normal">
            {success}
          </Typography>
        )}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              crossOrigin={undefined}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              size="lg"
              label="Age"
              crossOrigin={undefined}
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Confirm password"
              crossOrigin={undefined}
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
            required
          />
          <Button type="submit" disabled={disable} className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
