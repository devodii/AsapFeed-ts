import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

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
    <main className="flex flex-col items-start px-4 md:px-12 lg:px-24 py-8 lg:py-16 justify-center gap-4 lg:gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-header-fallback ">
        Get started with AsapFeed
      </h1>

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
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-600  rounded-md py-2 px-4 focus:outline focus:outline-[#2c51c3] outline-2  border-[rgb(121, 121, 121)]"
              {...register("email", { required: "Email address is required" })}
            />
            {errors.email && (
              <div className="text-md text-red-600" role="alert">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-600 rounded-md py-2 px-4 focus:outline focus:outline-[#2c51c3] outline-2 border-[rgb(121, 121, 121)]"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <div className="text-md text-red-600" role="alert">
                {errors.password.message}
              </div>
            )}
          </div>

          <input
            type="submit"
            role="submit"
            value="Sign Up"
            className="bg-primary-blue hover:bg-[#1a3faf] py-2 md:text-lg rounded-md max-w-xs mt-3 mx-auto w-full md:mx-0 text-white cursor-pointer font-medium font-header-fallback"
          />
        </form>
        <nav className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="md:text-lg">Already have an account?</span>

          <Link
            href="/login"
            className="text-thick-blue md:text-lg underline underline-offset-4"
          >
            Log in
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default SignupForm;
