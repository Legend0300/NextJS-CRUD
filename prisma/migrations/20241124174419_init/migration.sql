/*
  Warnings:

  - You are about to drop the column `email` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `accounts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "accounts_email_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "email",
DROP COLUMN "password";
