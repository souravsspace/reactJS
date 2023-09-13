import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function SignUp() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      const email = emailRef.current?.value as string;
      const password = passwordRef.current?.value as string;

      const user = { email, password };
      await signUp(user);

      console.log("Email:", email);
      console.log("Password:", password);
    } catch (err) {
      setError("Failed to create an account");
      console.log(err);
    }

    setLoading(false);
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              crossOrigin={undefined}
              ref={nameRef}
              required
            />
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              ref={emailRef}
              required
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
              ref={passwordRef}
              required
            />
            <Input
              type="password"
              size="lg"
              label="Confirm password"
              crossOrigin={undefined}
              ref={passwordConfirmRef}
              required
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
          <Button type="submit" disabled={loading} className="mt-6" fullWidth>
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
