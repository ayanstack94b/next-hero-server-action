import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
  "use server";
  const name = formData.get("name");
  const description = formData.get("description");
  const priority = formData.get("priority");
  const status = formData.get("status");

  const newTask = {
    name,
    description,
    priority,
    status,
  };

  console.log("adding a task with name", newTask);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};
