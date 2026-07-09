import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = newsletterSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  console.info("Newsletter opt-in:", parsed.data);
  return NextResponse.json({ success: true });
}
