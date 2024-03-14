/// <reference types="astro/client" />

// IntelliSense for TypeScript
interface ImportMetaEnv {
  readonly NEWT_SPACE_UID: string;
  readonly NEWT_CDN_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
