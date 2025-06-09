# Sentry Changelog

A Next.js application for managing and displaying Sentry's product changelog.

## Setup

### Prerequisites

- Node.js 20.11.0 (managed via Volta)
- pnpm 9.15.0

### Development

1. **Start the database**

   ```bash
   docker-compose up -d
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up the database**

   ```bash
   pnpm migrate:dev
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

- The application uses Prisma for database management
- Run `pnpm lint` to check code style
- Database migrations are managed through Prisma
- Sentry integration is configured for error monitoring
