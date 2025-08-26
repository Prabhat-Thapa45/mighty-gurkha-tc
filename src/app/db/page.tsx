
import { db } from './db';
import * as schema from './schema';

export default function Page() {
  const result = await db.select().from(reviewsTable);
  console.log(result);
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}