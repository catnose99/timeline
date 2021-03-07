import * as z from 'zod';
import { itemSchema } from './schema';

export type Item = z.infer<typeof itemSchema>; // string
