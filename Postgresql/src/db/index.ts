// Sets up the connection to the database to be imported in whatever file it's needed
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
