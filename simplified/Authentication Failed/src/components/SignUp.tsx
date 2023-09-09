import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRef } from "react";
import { useAuth } from "../Context/AuthContect";


export default function SignUp() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const { signUpF } = useAuth();

  const handleSUbmit = (e: { preventDefault: () => void })=> {
      e.preventDefault();
      signUpF(emailRef.current?.value, passwordRef.current?.value)
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              crossOrigin={undefined}
              ref={nameRef}
            />
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              ref={emailRef}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
              ref={passwordRef}
            />
            <Input
              type="password"
              size="lg"
              label="Confirm password"
              crossOrigin={undefined}
              ref={passwordConfirmRef}
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
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
