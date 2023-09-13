import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useShowData } from "../Context/ShowData";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, success, loading, handleLogin } = useShowData();
  
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
        {success && (
          <Typography color="green" className="mt-2 font-normal">
            {success}
          </Typography>
        )}
        <form
          onSubmit={(e) => handleLogin(e, email, password)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              // ref={emailRef}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
              // ref={passwordRef}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={loading} type="submit" className="mt-6" fullWidth>
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
