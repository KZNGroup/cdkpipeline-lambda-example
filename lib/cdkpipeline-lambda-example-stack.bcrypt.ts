import { hash } from 'bcrypt';

export async function handler(event: { secret: string }): Promise<{ hashed: string }> {
  return hash(event.secret, 10).then(hashed => ({ hashed }));
}
