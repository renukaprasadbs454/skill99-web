"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().max(500),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Contact submission failed");
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-600">
          <span className="text-xs font-semibold text-slate-500">Name</span>
          <input {...register("name")} className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.name && <span className="text-xs text-rose-600">{errors.name.message}</span>}
        </label>
        <label className="flex flex-col text-sm text-slate-600">
          <span className="text-xs font-semibold text-slate-500">Email</span>
          <input {...register("email")} className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none" />
          {errors.email && <span className="text-xs text-rose-600">{errors.email.message}</span>}
        </label>
      </div>
      <label className="flex flex-col text-sm text-slate-600">
        <span className="text-xs font-semibold text-slate-500">Phone</span>
        <input {...register("phone")} className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none" />
        {errors.phone && <span className="text-xs text-rose-600">{errors.phone.message}</span>}
      </label>
      <label className="flex flex-col text-sm text-slate-600">
        <span className="text-xs font-semibold text-slate-500">Message</span>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-1 rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
          placeholder="Tell us about your project or question"
        />
        {errors.message && <span className="text-xs text-rose-600">{errors.message.message}</span>}
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "success" && <p className="text-xs text-emerald-600">Message received. We will get back soon.</p>}
      {status === "error" && <p className="text-xs text-rose-600">Unable to send the message. Try again shortly.</p>}
    </form>
  );
}
