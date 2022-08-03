import { FC, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Post } from "../typing";

interface PostProps {
    post: Post;
}

const FormSchema = z.object({
    _id: z.string(),
    name: z.string().min(1, "Name must be at least 1 character long."),
    email: z
        .string()
        .min(1, "Email is required")
        .email({ message: "The email is invalid." }),
    comment: z.string().min(5, "Comment must be at least 5 characters long."),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

const CommentForm: FC<PostProps> = ({ post }) => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        fetch("/api/createComments", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log(data);
                setSubmitted(true);
            })
            .catch((err) => {
                console.log(err);
                setSubmitted(false);
            });
    };

    return (
        <>
            <>
                {submitted ? (
                    <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
                        <h3>Thankyou for submitting your comment</h3>
                        <p>Once it has been approved, it will appear below! </p>
                    </div>
                ) : (
                    <form
                        className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className="text-sm text-slate-600">
                            Like this article?
                        </h3>
                        <h4 className="text-3xl font-bold">
                            Leave a comment below!
                        </h4>
                        <hr className="py-3 mt-2" />

                        <input
                            {...register("_id")}
                            type="hidden"
                            name="_id"
                            value={post._id}
                        />

                        <label className="block mb-5">
                            <span className="text-gray-700">Name</span>
                            <input
                                type="text"
                                {...register("name")}
                                disabled={isSubmitting}
                                placeholder="Required"
                                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </label>

                        <label className="block mb-5">
                            <span className="text-gray-700">Email</span>
                            <input
                                type="email"
                                {...register("email")}
                                disabled={isSubmitting}
                                placeholder="Required"
                                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </label>

                        <label className="block mb-5">
                            <span className="text-gray-700">Comment</span>
                            <textarea
                                rows={5}
                                {...register("comment")}
                                disabled={isSubmitting}
                                placeholder="Required"
                                className="shadow border rounded py-3 px-3 form-textarea mt-1 block w-full ring-cyan-500 outline-none focus:ring"
                            />
                            {errors.comment && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.comment.message}
                                </p>
                            )}
                        </label>
                        <button
                            type="submit"
                            className="w-full px-8 py-2 flex items-center justify-center uppercase text-white font-semibold bg-cyan-400 rounded-lg disabled:bg-gray-100 disabled:text-gray-400"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                    </form>
                )}
            </>
        </>
    );
};

export default CommentForm;
