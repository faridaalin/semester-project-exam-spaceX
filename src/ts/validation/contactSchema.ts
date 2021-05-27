import { object, string } from "yup";

export const contactSchema = object({
  name: string().trim().required("Name required").min(2).max(15),
  email: string()
    .required("Email is required")
    .trim()
    .email("Invalid email address."),
  message: string().required("Message required").min(10).max(200),
});
