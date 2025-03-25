"use server"

import { prisma } from "@repo/db";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
} 