import type { Handle } from "@sveltejs/kit";

export const auth: Handle = async ({ event, resolve }) => {
  return resolve(event);
};
