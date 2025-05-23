import { useForm } from "react-hook-form";
import ModalWrapper from "../ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "../Textbox";
import Button from "../Button";
import { useCreateSubTaskMutation } from "../../redux/slices/api/taskApiSlice";
import toast from "react-hot-toast";

const AddSubTask = ({ open, setOpen, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addSbTask, { isLoading }] = useCreateSubTaskMutation();

  const handleOnSubmit = async (data) => {
    console.log("Submitted Data:", data);
    console.log("Errors:", errors); // Check for form validation errors

    try {
      const res = await addSbTask({ data, id }).unwrap();
      toast.success(res.message);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    } catch (err) {
      console.error("API Error:", err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="p-4">
        <Dialog.Title as="h2" className="text-base font-bold text-gray-900 mb-4">
          ADD SUB-TASK
        </Dialog.Title>

        <div className="mt-2 flex flex-col gap-6">
          <Textbox
            placeholder="Sub-Task title"
            type="text"
            label="Title"
            className="w-full rounded"
            {...register("title", { required: "Title is required!" })}
            error={errors.title?.message}
          />

          <div className="flex items-center gap-4">
            <Textbox
              placeholder="Date"
              type="date"
              label="Task Date"
              className="w-full rounded"
              {...register("date", { required: "Date is required!" })}
              error={errors.date?.message}
            />
            <Textbox
              placeholder="Tag"
              type="text"
              label="Tag"
              className="w-full rounded"
              {...register("tag", { required: "Tag is required!" })}
              error={errors.tag?.message}
            />
          </div>
        </div>

        <div className="py-3 mt-4 flex sm:flex-row-reverse gap-4">
          <Button
            type="submit"
            className={`bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            label={isLoading ? "Adding..." : "Add Task"}
            disabled={isLoading}
          />

          <Button
            type="button"
            className="bg-white border text-sm font-semibold text-gray-900 sm:w-auto"
            onClick={() => setOpen(false)}
            label="Cancel"
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default AddSubTask;
