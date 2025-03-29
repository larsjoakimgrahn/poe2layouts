import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const acts = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/acts" }),

    schema: ({ image }) =>
        z.object({
            title: z.string().optional(),
            act: z.number(),
            zones: z.array(z.object({ title: z.string(), image: image() })),
        }),
});

export const collections = { acts };
