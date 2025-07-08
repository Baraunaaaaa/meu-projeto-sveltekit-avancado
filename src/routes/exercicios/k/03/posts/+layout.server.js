import * as db from '$lib/server/database';

export async function load() {
  const posts = db.getAll();
  return { posts };
}