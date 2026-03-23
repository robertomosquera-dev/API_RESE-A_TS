-- AlterTable
ALTER TABLE "Actor" ADD COLUMN     "isEnable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "isEnable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "isEnable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "isEnable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isEnable" BOOLEAN NOT NULL DEFAULT true;
