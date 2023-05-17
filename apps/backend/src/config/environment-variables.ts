export type EnvironmentVariables = {
  DATABASE_URL: string;
  PRISMA_FIELD_ENCRYPTION_KEY: string;
  PRISMA_FIELD_ENCRYPTION_HASH_SALT: string;

  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_TTL: number;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_TTL: number;

  PORT: string;
};
