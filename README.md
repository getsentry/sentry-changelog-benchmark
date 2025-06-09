# Sentry Changelog

A Next.js application for managing and displaying Sentry's product changelog.

## Setup

### Prerequisites

- [Volta](https://volta.sh/) for Node.js version management
- pnpm 9.15.0

### Development

1. **Install Node.js via Volta**

   ```bash
   # Volta will automatically install the correct Node.js version
   # when you enter the project directory
   volta install node
   ```

2. **Start the database**

   ```bash
   docker compose up -d
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Set up the database**

   ```bash
   pnpm migrate:dev
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

- The application uses Prisma for database management
- Run `pnpm lint` to check code style with Biome
- Run `pnpm format` to format code
- Pre-commit hooks automatically format and lint staged files
- Database migrations are managed through Prisma
- Sentry integration is configured for error monitoring
