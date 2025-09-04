# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` or `ng serve` - Start development server (http://localhost:4200)
- `npm run watch` - Build and watch for changes in development mode
- `npm test` or `ng test` - Run unit tests with Karma
- `npm run build` or `ng build` - Build for production

### Code Quality
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Code Generation
- `ng generate component <name>` - Generate new component
- `ng generate --help` - See all available schematics

## Architecture

This is an Angular 20 standalone application with a task management interface featuring:

### Project Structure
- **Standalone Components**: All components use the standalone API (no NgModules)
- **Component Architecture**: Organized by feature with co-located templates and styles
- **Models**: TypeScript interfaces in `src/model/` for User and Task entities
- **Assets**: Dummy data stored in `src/assets/dummy-data/`

### Key Components
- `AppComponent` - Root component managing user selection state
- `LeftSidebarComponent` - User list with selection functionality
- `RightSidebarComponent` - Task management interface
- `TasksComponent` - Task list and operations
- `AddTaskComponent` - Task creation form
- `HeaderComponent` - Application header

### Data Models
- `User` interface: id, name, email, isOnline status
- `Task` interface: id, userId, work, priority (High/Medium/Low), title, description, dueDate, estimatedHours, isCompleted

### State Management
- Parent-child component communication using @Input/@Output
- User selection state managed at AppComponent level
- Task filtering by selected user

### Styling
- **Tailwind CSS 4.x** with custom scrollbar plugin
- **Prettier** configured for 100-character line width and single quotes
- Angular template parser for HTML formatting

### Key Features
- User selection with visual feedback
- Task CRUD operations (add, complete, cancel)
- Task filtering by user
- Priority-based task organization
- Due date and time estimation tracking

## Development Notes
- Uses Angular's new application builder (`@angular/build:application`)
- TypeScript with strict configuration
- Karma + Jasmine for testing
- No routing configured (single-page layout)
- Dummy data provided for development