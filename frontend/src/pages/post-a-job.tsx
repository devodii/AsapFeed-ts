import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Stack } from "@/components";

interface PostJob {
  title: string;
  description: string;
  company: string;
}

const JobPost = () => {
  const { handleSubmit, register } = useForm<PostJob>();
  const router = useRouter();

  const onSubmit = async (data: PostJob) => {
    const response = await axios.post("/api/jobs/create", data);
    // TODO: emit a toast saying operation was successful or failed
    router.push("/dashboard");
  };

  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      <div className="text-gray-800 text-lg">Create a job post</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack classNames={`min-w-[500px] gap-10`}>
          <input
            className="p-4 border rounded-xl"
            autoFocus
            placeholder="Title..."
            {...register("title")}
          />
          <input
            className="p-4 border rounded-xl"
            placeholder="Description..."
            {...register("description")}
          />
          <input
            className="p-4 border rounded-xl"
            placeholder="Company..."
            {...register("company")}
          />
          <div className="self-end">
            <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-[32px] text-white">
              Submit
            </button>
          </div>
        </Stack>
      </form>
    </div>
  );
};

export default JobPost;
