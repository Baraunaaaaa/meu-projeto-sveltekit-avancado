/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const numero = data.umnumero;

    return {
      numero
    };
  }
};
