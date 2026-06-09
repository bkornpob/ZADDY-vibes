// src/content/config.ts
import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "published", "archived"]).default("published"),
    featured: z.boolean().default(false),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      article: z.string().url().optional(),
    }).optional(),
    notifications: z.object({
      email: z.boolean().default(true),
      discord: z.boolean().default(false),
      dm: z.boolean().default(false),
    }).default({}),
  }),
})

export const collections = { projects }