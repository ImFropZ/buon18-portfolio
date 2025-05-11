import * as z from "zod";

export const contactSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  service: z.string().min(1, { message: "Service is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
