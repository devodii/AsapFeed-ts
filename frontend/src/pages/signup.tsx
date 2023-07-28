import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Title } from "@/Typography";
import { Label, Input } from "@/Form";

interface SignUpDTO {
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpDTO>();

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpDTO> = async (data, e: any) => {
    e.preventDefault();
    try {
      const responseToSignUp = await axios.post("/api/auth/signup", data);
      const newUser = responseToSignUp.data;
      console.log("Signed Up! successfully");
      if (newUser) {
        router.push("/onboarding?step=first");
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
    <main className="flex flex-col items-start px-4 md:px-12 lg:px-24 py-8 lg:py-16 justify-center gap-4 lg:gap-8">
      <Title size={"h2"} font={"fallback"}>
        Get started with AsapFeed
      </Title>

      {error && (
        <div className="text-red-500" role="alert">
          {error}
        </div>
      )}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <form
          action="POST"
          className="flex flex-col gap-4 max-w-lg w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              className="focus:outline focus:outline-[#2c51c3] outline-2"
              {...register("email", { required: "Email address is required" })}
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
              className="focus:outline focus:outline-[#2c51c3] outline-2"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <div className="text-md text-red-600" role="alert">
                {errors.password.message}
              </div>
            )}
          </div>

          <input
            className="text-center bg-primary-blue hover:bg-[#1a3faf] py-2 md:text-lg rounded-md max-w-xs mt-3 mx-auto w-full md:mx-0 text-white cursor-pointer font-medium font-header-fallback"
            value={"sign up"}
            role="submit"
            type="submit"
          />
        </form>
        <nav className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="md:text-lg tracking-normal leading-6">
            Already have an account?
          </span>

          <Link
            href="/login"
            className="text-thick-blue md:text-lg underline underline-offset-4 font-header-fallback"
          >
            Log in
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default SignupForm;
