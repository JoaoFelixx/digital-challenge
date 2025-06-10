import { z } from "zod";


export const EventFormSchema = z.object({
  name: z.string().nonempty(`Nome é obrigatório`),
  total: z.string().nonempty(`Total é obrigatório`),
  startAt: z.string().nonempty(`Data de inicio é obrigatório`),
  endAt: z.string().nonempty(`Data de fim é obrigatório`),
});


export type EventFormData = z.infer<typeof EventFormSchema>;