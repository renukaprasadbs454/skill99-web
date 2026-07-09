"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Provide a valid email"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-4 rounded-[28px] border border-white/20 bg-gradient-to-br from-[#0b1221]/80 to-[#04070f]/70 px-6 py-8 text-white shadow-[0_25px_90px_rgba(0,0,0,0.5)]"
    >
      <div className="mesh-overlay" />
      <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Stay ahead</p>
      <div className="relative z-10 grid gap-3 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-xs text-white/70">
          <span>Name</span>
          <input
            {...register("name")}
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white focus:border-primary focus:bg-white/10 focus:outline-none"
            placeholder="Priya Sharma"
          />
          {errors.name && <span className="text-[11px] text-rose-400">{errors.name.message}</span>}
        </label>
        <label className="flex flex-col gap-1 text-xs text-white/70">
          <span>Email</span>
          <input
            {...register("email")}
            className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white focus:border-primary focus:bg-white/10 focus:outline-none"
            placeholder="you@email.com"
          />
          {errors.email && <span className="text-[11px] text-rose-400">{errors.email.message}</span>}
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="relative z-10 w-full rounded-2xl border border-white/30 bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Join newsletter"}
      </button>
      {status === "success" && (
        <p className="relative z-10 text-[11px] text-emerald-400">Success! Expect curated updates.</p>
      )}
      {status === "error" && (
        <p className="relative z-10 text-[11px] text-rose-400">Error. Please retry later.</p>
      )}
    </form>
  );
}
