export const getEnvValue = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${key} not found`);
  }
  return value;
};
