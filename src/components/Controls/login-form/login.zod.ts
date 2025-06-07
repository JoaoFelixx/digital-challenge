import { z } from "zod";


export const LoginFormSchema = z.object({
  email: z.string().email(`Email inválido`).nonempty(`Preencha o email`),
  password: z.string().nonempty('Preencha a senha'),
});


export type LoginFormData = z.infer<typeof LoginFormSchema>;