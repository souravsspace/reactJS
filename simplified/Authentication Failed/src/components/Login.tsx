import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <main className="w-full h-[90vh] grid place-items-start place-content-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          LogIn
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" crossOrigin={undefined} />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Register here
            </a>
          </Typography>
        </form>
      </Card>
    </main>
  );
}
