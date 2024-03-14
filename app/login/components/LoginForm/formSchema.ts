import { z } from "zod";

export const formSchema = z.object({
  email: z.string({
    required_error: "wajib di isi!",
  }),
  password: z.string({
    required_error: "wajib di isi!",
  }),
});
