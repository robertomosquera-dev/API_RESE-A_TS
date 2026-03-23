import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

export default class Prisma {
    private static connectionString = process.env.DATABASE_URL!;

    private static adapter () {
        return new PrismaPg({connectionString:Prisma.connectionString});
    }

    public static prisma () {
        return new PrismaClient({
            adapter:Prisma.adapter(),
            log: ["error","query","info"]
        });
    }
}