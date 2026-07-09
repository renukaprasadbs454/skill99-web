import { NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  college: z.string().min(2),
  course: z.string().min(2),
  graduationYear: z.string().min(4),
  state: z.string().min(2),
  message: z.string().max(500).optional(),
  botField: z.string().optional(),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success || parsed.data.botField) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  console.info("Booking session payload:", parsed.data);
  return NextResponse.json({ success: true });
}
