import { NextPageWithLayout } from "@/pages/_app";
import { SubmitHandler, useForm } from "react-hook-form";
import { ElementRef, RefObject, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface BoardCredentials {
  name: string;
  url: string;
}

export const BoardForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<BoardCredentials>();

  const onSubmit: SubmitHandler<BoardCredentials> = async (
    credentials,
    e: any
  ) => {
    e.preventDefault();
    try {
      const sendTodb = await axios.post("/api/board/create", credentials);
      const response = sendTodb.data;

      if (response?.id) {
        console.log(response, "working");
        setTimeout(() => router.push("/dashboard"), 2000);
      }
    } catch (error) {
      router.push("/login");
      console.error(error);
    }
  };
  const nameRef = useRef<ElementRef<"input">>(null);
  const descriptionRef = useRef<ElementRef<"textarea">>(null);

  const handleClick = (
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => ref.current?.focus();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <div className="max-w-xl border mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 rounded-lg py-6 shadow-sm">
      <h3 className="font-medium text-xl md:text-2xl">Create a new board</h3>
      <span className="text-gray-600 font-medium max-w-md text-center text-sm">
        A board is a central hub for customer feedback. Upvote, share, and
        prioritize ideas.
      </span>
      <form
        action=""
        className="flex flex-col gap-3 w-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="relative w-full border  border-gray-300 rounded-md cursor-text px-2 py-1"
          onClick={() => handleClick(nameRef)}
        >
          <label
            className={`transition-all pointer-events-none select-none font-medium text-[13px] text-gray-700`}
          >
            NAME
          </label>
          <input
            type="text"
            // ref={nameRef}
            placeholder="Feature requests"
            className={`w-full p-2rounded-md focus:border-none focus:outline-none text-sm pt-1`}
            {...register("name")}
          />
        </div>

        <div
          className="relative w-full border  border-gray-300 rounded-md cursor-text px-2 py-1"
          onClick={() => handleClick(descriptionRef)}
        >
          <label
            className={`transition-all pointer-events-none select-none font-medium text-[13px] text-gray-700 uppercase`}
          >
            description
          </label>
          <textarea
            placeholder="Feature requests"
            rows={4}
            // ref={descriptionRef}
            {...register("url")}
            className={`w-full p-2rounded-md focus:border-none focus:outline-none text-sm min-h-[30px] pt-1`}
          ></textarea>
        </div>
        <input
          type="submit"
          value={"Create"}
          className="bg-primary-blue w-full text-white max-w-[150px] cursor-pointer self-end rounded-lg py-2"
        />
      </form>
    </div>
  );
};
