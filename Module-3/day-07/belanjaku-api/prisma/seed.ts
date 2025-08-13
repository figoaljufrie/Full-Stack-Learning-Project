// Import Prisma Client
import { PrismaClient } from "../src/generated/prisma";

// Import JSON data
import products from "../prisma/products.json";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
  console.log("Seeding complete!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
