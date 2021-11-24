import type { PrismaClientDbMain } from '@agracheck/db-main-prisma';
import { prismaClient } from '@/backend/config/container.config';

export type GraphqlSdlContext = {
  prisma: PrismaClientDbMain;
};

export const graphqlSdlContext: GraphqlSdlContext = {
  prisma: prismaClient,
};
