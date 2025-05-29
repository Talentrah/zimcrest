declare namespace NodeJS {
  interface ProcessEnv {
    MAILGUN_API_KEY: string;
    MAILGUN_DOMAIN: string;
    MAILGUN_FROM_EMAIL?: string;
    EMAIL_RECIPIENT: string;
    CORS_ORIGIN?: string;
    // NODE_ENV: 'development' | 'production' | 'test';
  }
}