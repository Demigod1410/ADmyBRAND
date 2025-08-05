# ADmyBRAND - AI-Powered Advertising Platform

ADmyBRAND is an innovative advertising platform that leverages artificial intelligence to optimize ad campaigns, provide deep audience insights, and automate creative processes.

![ADmyBRAND](C:\Code\admybrand\ADmyBRAND.png)

## Features

- **AI-Powered Insights** - Unlock deep audience and market insights to drive your strategy with precision
- **Hyper-Targeting** - Reach your ideal customers with unparalleled accuracy using advanced AI algorithms
- **Predictive Analytics** - Forecast campaign performance and budget needs to maximize ROI
- **Creative Automation** - Generate and test ad creatives at scale for better performance
- **Modern UI** - Sleek, responsive design with interactive elements and beautiful animations

## Technology Stack

- **Frontend**: Next.js 15.x, React 18.x, TypeScript
- **UI Components**: Tailwind CSS, shadcn/ui
- **Animation**: GSAP, Framer Motion
- **3D Effects**: Three.js, React Three Fiber
- **Special Effects**: Canvas Confetti, Number Flow

## Setup Instructions

### Prerequisites

- Node.js 18.x or newer
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Demigod1410/ADmyBRAND.git
cd ADmyBRAND
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── src/
│   ├── app/               # Next.js app directory
│   ├── blocks/            # Reusable block components
│   │   └── Backgrounds/   # Background effects like Silk
│   ├── components/        # UI components
│   │   ├── ui/            # Base UI components
│   │   └── ...            # Section components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
└── docs/                  # Documentation
```

## Key Components

- **Hero Section**: Features animated introduction with Threads background effect
- **Features Section**: Showcases main platform capabilities with animated cards
- **Pricing Section**: Interactive pricing cards with monthly/yearly toggle
- **Testimonials Section**: Customer testimonials in a carousel layout
- **FAQ Section**: Commonly asked questions with accordion functionality
- **Contact Section**: Contact form with form validation and notifications

## Development Guidelines

### Styling

The project uses Tailwind CSS for styling. Component styles are implemented directly in the component files using Tailwind's utility classes.

### Adding New Features

1. Create new components in the appropriate directory
2. Import and use them in the relevant section
3. Ensure they follow the existing design language

### Background Effects

The project includes custom Three.js background effects in the `src/blocks/Backgrounds/` directory:

- **Silk**: Gradient flow effect
- **Threads**: Animated thread/string visual effect

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=your-api-url
```

## Build for Production

```bash
npm run build
```

This command creates an optimized production build in the `.next` folder.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

MIT © ADmyBRAND Inc.