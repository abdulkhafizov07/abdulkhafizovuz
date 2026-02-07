import type { Handle } from "@sveltejs/kit";

export function compose(middlewares: Handle[]): Handle {
  return async ({ event, resolve }) => {
    let index = 0;

    const next = async (): Promise<Response> => {
      const middleware = middlewares[index++];

      if (!middleware) {
        return resolve(event);
      }

      return middleware({
        event,
        resolve: next,
      });
    };

    return next();
  };
}
