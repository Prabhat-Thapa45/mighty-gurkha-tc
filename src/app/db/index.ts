import * as schema from './schema';
import drizzle from 'drizzle-orm/postgres-js';


const db = drizzle({schema});

await db.query.reviewsTable.findMany();
export default Response(db);