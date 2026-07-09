"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone"),
  email: z.string().email("Enter a valid email"),
  college: z.string().min(2, "Enter your college"),
  course: z.string().min(2, "Which program are you interested in?"),
  graduationYear: z.string().min(4, "Year required"),
  state: z.string().min(2, "State required"),
  message: z.string().max(500).optional(),
  botField: z.string().max(0),
});

type BookFormValues = z.infer<typeof bookingSchema>;

export function BookSessionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { botField: "" },
  });

  const fields = [
    { label: "Name", name: "name" },
    { label: "Phone", name: "phone" },
    { label: "Email", name: "email" },
    { label: "College", name: "college" },
    { label: "Course", name: "course" },
    { label: "Graduation Year", name: "graduationYear" },
    { label: "State", name: "state" },
  ] as const;

  const onSubmit = async (payload: BookFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/book-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to book session");

      setStatus("success");
      reset({ botField: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <input type="hidden" {...register("botField")} />
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col text-sm text-slate-600">
            <span className="text-xs font-semibold text-slate-500">{field.label}</span>
            <input
              {...register(field.name)}
              className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
            />
            {errors[field.name] && (
              <span className="text-xs text-rose-600">{errors[field.name]?.message}</span>
            )}
          </label>
        ))}
      </div>
      <label className="flex flex-col text-sm text-slate-600">
        <span className="text-xs font-semibold text-slate-500">Message</span>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
          placeholder="Tell us about your goals or any questions"
        />
        {errors.message && <span className="text-xs text-rose-600">{errors.message.message}</span>}
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Book Free Career Session"}
      </button>
      {status === "success" && (
        <p className="text-xs text-emerald-600">Thank you! We will reach out within 24 hours.</p>
      )}
      {status === "error" && (
        <p className="text-xs text-rose-600">Something went wrong. Please try again or contact us directly.</p>
      )}
    </form>
  );
}
