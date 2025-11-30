# Vite React Calculator Sample

A modern, feature-rich calculator application built with React and Vite, featuring both basic arithmetic and scientific calculator functions.

## Features

### Basic Calculator
- **Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Decimal Support**: Full decimal number calculations
- **Clear Function**: All Clear (AC) button to reset the calculator

### Scientific Calculator Mode
Toggle scientific mode to access advanced mathematical functions:
- **Trigonometric Functions**: sin, cos, tan (operates in degrees)
- **Logarithmic Functions**: log (base 10), ln (natural logarithm)
- **Power Functions**: Square root (√), Square (x²)
- **Mathematical Constants**: π (pi), e (Euler's number)

### Additional Features
- **Real-time Clock**: Displays current date and time
- **Calculation History**: View and manage your calculation history
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **React 19.2.0**: Modern React with hooks
- **Vite 7.2.4**: Fast build tool and dev server
- **mathjs 14.0.0**: Comprehensive math library for scientific calculations
- **date-fns 4.1.0**: Date formatting utilities
- **lucide-react 0.555.0**: Beautiful icon library

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bikram20/vite-react-sample.git
   cd vite-react-sample
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Usage

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Basic Calculations**:
   - Enter numbers using the number pad
   - Select an operation (+, -, ×, ÷)
   - Press `=` to calculate the result

2. **Scientific Functions**:
   - Click the sliders icon (⚙️) in the header to enable scientific mode
   - Enter a number
   - Click any scientific function button (sin, cos, tan, log, ln, √, x², π, e)
   - The result will be displayed immediately

3. **View History**:
   - Click the history icon (📜) in the header
   - View all your previous calculations with timestamps
   - Click the trash icon to clear history

## Deployment

This application is deployed to **DigitalOcean App Platform**. The deployment is configured to automatically trigger when changes are pushed to the main branch of the GitHub repository.

### Hot Reload Development

The `dev_startup.sh` script enables hot reload functionality in the development environment. It uses `nodemon` to watch for changes in `package.json` and automatically:
- Stops the current server
- Runs `npm install` to install any new dependencies
- Restarts the development server

This ensures that when new dependencies are added (like `mathjs`), the development environment automatically picks them up without manual intervention.

## Project Structure

```
vite-react-sample/
├── src/
│   ├── App.jsx          # Main calculator component
│   ├── App.css          # Styling
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── dev_startup.sh       # Development startup script with hot reload
└── README.md            # This file
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## Author

Built as a sample application for DigitalOcean App Platform deployment.

