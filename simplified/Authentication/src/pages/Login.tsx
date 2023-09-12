import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setError("");
      const email = emailRef.current?.value as string;
      const password = passwordRef.current?.value as string;

      login({ email, password });
      setLoading(true);

    } catch (err) {
      setError("Failed to login");
      console.log(err);
    }
    setLoading(false);
  }
  return (
    <main className="w-full h-[90vh] grid place-items-start place-content-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          LogIn
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
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
          </div>
          <Button type="submit" disabled={loading} className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Register here
            </Link>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
