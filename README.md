# Conquest of Truth

A modern full-stack web application built with React, TypeScript, and Express.js.

## 🚀 Features

- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Database**: Drizzle ORM with PostgreSQL support
- **Build Tool**: Vite for fast development and optimized builds
- **Authentication**: Passport.js integration ready
- **Email**: Nodemailer integration for contact forms

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- React Hook Form
- Tanstack Query
- Wouter (routing)

### Backend
- Express.js
- TypeScript
- Drizzle ORM
- Passport.js
- Nodemailer
- WebSocket support

### Development Tools
- Vite
- ESBuild
- Cross-env for environment variables
- TSX for TypeScript execution

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nalin1304/ConquestOfTruth.git
cd ConquestOfTruth
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration.

4. Set up the database:
```bash
npm run db:push
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🌟 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
└── dist/                   # Build output
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=your_database_url_here
SESSION_SECRET=your_session_secret_here
```

## 🚀 Deployment

This project is ready for deployment on platforms like:
- Vercel
- Netlify
- Railway
- Render
- Heroku

Make sure to set up your environment variables on your chosen platform.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
