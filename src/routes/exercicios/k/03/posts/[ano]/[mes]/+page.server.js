import * as db from '$lib/server/database';

export async function load({ params }) {
  const posts = db.getByYearMonth(params.ano, params.mes);
  return { posts };
}