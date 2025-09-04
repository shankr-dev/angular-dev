# Task Management App

A modern task management application built with Angular 20, featuring user selection and task organization capabilities.

## Features

- **User Management**: Select users from a sidebar to view their tasks
- **Task Operations**: Add, complete, and cancel tasks
- **Priority System**: Organize tasks by High, Medium, and Low priority
- **Task Details**: Track title, description, due date, and estimated hours
- **Responsive Design**: Built with Tailwind CSS for modern UI

## Tech Stack

- **Angular 20** with standalone components
- **TypeScript** for type safety
- **Tailwind CSS 4.x** for styling
- **Prettier** for code formatting
- **Karma + Jasmine** for testing

## Development

### Start Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/` - the app will auto-reload on changes.

### Code Formatting
```bash
npm run format          # Format all code
npm run format:check    # Check formatting
```

### Testing
```bash
npm test               # Run unit tests
ng test               # Alternative test command
```

### Building
```bash
npm run build         # Production build
ng build             # Alternative build command
```

### Code Generation
```bash
ng generate component component-name    # Generate component
ng generate --help                     # See all options
```

## Project Structure

```
src/
├── app/
│   ├── component/
│   │   ├── header/           # App header
│   │   ├── left-sidebar/     # User selection
│   │   ├── right-sidebar/    # Task management
│   │   └── add-task/         # Task creation form
│   └── app.ts               # Root component
├── model/
│   ├── user.model.ts        # User interface
│   └── task.model.ts        # Task interface
└── assets/
    └── dummy-data/          # Development data
```

## Data Models

### User
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isOnline: boolean;
}
```

### Task
```typescript
interface Task {
  id: number;
  userId: number;
  work: string;
  priority: 'High' | 'Medium' | 'Low';
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
  isCompleted: boolean;
}
```
