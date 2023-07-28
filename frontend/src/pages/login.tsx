import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { Title } from "@/Typography";
import { Input, Label } from "@/Form";

interface SignInCredentials {
  email: string;
  password: string | number;
}

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInCredentials>();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SignInCredentials> = async (
    credentials,
    e: any
  ) => {
    e.preventDefault();
    /**
     * @returns any user that matches the credentials passed as a arguement
     */
    try {
      const responseToSignIn = await axios.post(
        "/api/auth/signin",
        credentials
      );
      const user = responseToSignIn.data;
      const responseToWhoAmI = await axios.get("/api/auth/whoami");
      const storedUser = responseToWhoAmI.data;

      if (user?.id === storedUser?.id) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      const errMessage = Array.isArray(error?.response.data.message)
        ? error?.response.data.message[0]
        : error?.response.data.message;
      setError(errMessage as string);
      console.error("Error occured:", errMessage);
    }
  };

  return (
    <main className="flex flex-col gap-4 px-4 md:px-12 lg:px-24 py-8 lg:py-16 lg:gap-8 3xl:items-center items-start  justify-center">
      <Title size={"h2"} font={"fallback"}>
        Log in to AsapFeed
      </Title>
      <div>
        {error && (
          <div className="text-red-500" role="alert">
            {error}
          </div>
        )}
      </div>
      <div className="w-full max-w-lg flex flex-col gap-4">
        <form
          action=""
          className="flex flex-col gap-4 max-w-lg w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Label>Email</Label>

            <Input
              type="email"
              className="focus:outline focus:outline-[#2c51c3] outline-2"
              {...register("email", {
                required: "Email address is required",
              })}
            />
            {errors.email && (
              <div className="text-md text-red-600" role="alert">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>

            <Input
              type="password"
              className=" focus:outline focus:outline-[#2c51c3] outline-2"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>
          <input
            className="text-center bg-primary-blue hover:bg-[#1a3faf] py-2 md:text-lg rounded-md max-w-xs mt-3 mx-auto w-full md:mx-0 text-white cursor-pointer font-medium font-header-fallback"
            value={"Log in"}
            role="submit"
            type="submit"
          />{" "}
        </form>

        <nav className="mx-auto md:mx-0">
          <ul className="flex items-center gap-4 flex-wrap">
            <li>
              <Link
                href="/signup"
                className="text-thick-blue md:text-lg underline underline-offset-4 font-header-fallback"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-thick-blue md:text-lg underline underline-offset-4 font-header-fallback"
              >
                Forgot your password?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default LoginForm;
