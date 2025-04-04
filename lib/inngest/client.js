import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "spendyx", // Unique app ID
  name: "Spendyx",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});