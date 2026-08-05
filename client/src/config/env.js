// Centralized access to Vite env vars. Import from here instead of
// reaching for `import.meta.env` directly all over the codebase.

export const API_BASE_URL = import.meta.env.VITE_API_URL || "";

if (!API_BASE_URL && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    "[config] VITE_API_URL is not set. API requests will fail. Check your .env file."
  );
}
