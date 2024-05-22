import { genderValidation, langValidation } from '@/constants/hook-form-data';
import { patterns } from '@/constants/patterns';
import { z } from 'zod';

export const schema = z
  .intersection(
    z.object({
      name: z.string().min(2).max(50),
      email: z
        .string()
        .min(1)
        .refine((email) => patterns.email.test(email), { message: 'Invalid email' }),
      states: z.array(z.string()).min(1).max(2),
      languages: z.array(z.enum(langValidation)).min(1),
      genders: z.enum(genderValidation, { message: 'You need to select a gender.' }),
      skills: z
        .array(z.string())
        .min(1, { message: 'Select a skill' })
        .max(2, { message: 'Select up to 2 skills' }),
      registrationDate: z.date(),
      // formerEmploymentPeriod: z
      //   .object(
      //     {
      //       from: z.date().optional(),
      //       to: z.date().optional(),
      //     },
      //     { required_error: 'date needed' },
      //   )
      //   .refine(
      //     (date) => {
      //       return !!date.from;
      //     },
      //     { message: 'you have to select a date' },
      //   ),

      salaryRange: z.array(z.number()).max(2),
      isTeacher: z.boolean().optional(),
    }),

    z.discriminatedUnion('variant', [
      z.object({ variant: z.literal('create') }),
      z.object({ variant: z.literal('update'), id: z.string().min(1) }),
    ]),
  )
  .and(
    z.union([
      z.object({ isTeacher: z.literal(false) }),
      z.object({
        isTeacher: z.literal(true),
        students: z.array(z.object({ name: z.string().min(4) })),
      }),
    ]),
  );

export const defaultValues = {
  variant: '',
  name: '',
  email: '',
  states: [],
  languages: [],
  genders: '',
  skills: [],
  registrationDate: new Date(),
  formerEmploymentPeriod: { from: null, to: null },
  salaryRange: [0, 50],
  isTeacher: false,
  students: [],
};
