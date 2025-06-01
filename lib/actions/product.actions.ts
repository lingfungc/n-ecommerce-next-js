"use server";

// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get Latest Products
export async function getLatestProducts() {
  // const prisma = new PrismaClient();

  const prismaObjectData = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(prismaObjectData);
}

// Get Prodcut by Slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug: slug } });
}
