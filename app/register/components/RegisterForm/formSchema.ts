import { z } from "zod";

export const formSchema = z.object({
  name: z.string({
    required_error: "wajib di isi!",
  }),
  email: z.string({
    required_error: "wajib di isi!",
  }),
  phoneNumber: z.string({
    required_error: "wajib di isi!",
  }),
  birthDate: z.date({
    required_error: "wajib di isi!",
  }),
  gender: z.string({
    required_error: "wajib di isi!",
  }),
  password: z.string({
    required_error: "wajib di isi!",
  }),
  confirmPassword: z.string({
    required_error: "wajib di isi!",
  }),
});
