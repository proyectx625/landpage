import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

export const client = process.env.POSTGRES_URL ? postgres(process.env.POSTGRES_URL) : null;
export const db = client ? drizzle(client, { schema }) : null;
