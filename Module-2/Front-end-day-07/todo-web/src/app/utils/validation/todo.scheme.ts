import {z as zod} from 'zod'

export const todoScheme = zod.object({
  Title: zod.string()
  .min(3,{message: 'Title must be at least 3 characters'})
  .max(100, {message: "Title too Long"})
})

export type TodoInput = zod.infer<typeof todoScheme>