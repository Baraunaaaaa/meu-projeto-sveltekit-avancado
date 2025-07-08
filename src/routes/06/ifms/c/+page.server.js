/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const dataEnviada = data.umadata;

    return {
      dataEnviada
    };
  }
};
