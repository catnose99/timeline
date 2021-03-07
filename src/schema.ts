import * as z from 'zod';

export const itemSchema = z.object({
  date: z.string(),
  title: z.string(),
  action: z.union([z.string(), z.undefined()]),
  url: z.union([z.string(), z.undefined()]),
  description: z.union([z.string(), z.undefined()]),
  excluded: z.boolean(),
});

export const itemsSchema = z.array(itemSchema);
