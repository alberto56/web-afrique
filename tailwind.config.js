module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep professional blue
        primary: {
          DEFAULT: "#1E3A5F", // Deep professional blue
          50: "#EBF4FF", // Very light blue
          100: "#DBEAFE", // Light blue
          200: "#BFDBFE", // Blue-200
          300: "#93C5FD", // Blue-300
          400: "#60A5FA", // Blue-400
          500: "#3B82F6", // Blue-500
          600: "#2563EB", // Blue-600
          700: "#1D4ED8", // Blue-700
          800: "#1E40AF", // Blue-800
          900: "#1E3A8A", // Blue-900
        },
        // Secondary Colors - Lighter blue for interactive elements
        secondary: {
          DEFAULT: "#2C5282", // Lighter blue
          50: "#EDF2F7", // Gray-50
          100: "#E2E8F0", // Gray-100
          200: "#CBD5E0", // Gray-200
          300: "#A0AEC0", // Gray-300
          400: "#718096", // Gray-400
          500: "#4A5568", // Gray-500
          600: "#2D3748", // Gray-600
          700: "#1A202C", // Gray-700
          800: "#171923", // Gray-800
          900: "#0F1419", // Gray-900
        },
        // Accent Colors - Warm terracotta
        accent: {
          DEFAULT: "#D97706", // Warm terracotta
          50: "#FFFBEB", // Orange-50
          100: "#FEF3C7", // Orange-100
          200: "#FDE68A", // Orange-200
          300: "#FCD34D", // Orange-300
          400: "#FBBF24", // Orange-400
          500: "#F59E0B", // Orange-500
          600: "#D97706", // Orange-600
          700: "#B45309", // Orange-700
          800: "#92400E", // Orange-800
          900: "#78350F", // Orange-900
        },
        // Background Colors
        background: "#FAFAFA", // Soft white
        surface: "#F7FAFC", // Subtle gray
        // Text Colors
        text: {
          primary: "#2D3748", // Dark gray
          secondary: "#718096", // Medium gray
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // Natural green
          50: "#F0FFF4", // Green-50
          100: "#C6F6D5", // Green-100
          500: "#48BB78", // Green-500
          600: "#38A169", // Green-600
          700: "#2F855A", // Green-700
        },
        warning: {
          DEFAULT: "#D69E2E", // Amber
          50: "#FFFBEB", // Yellow-50
          100: "#FEF3C7", // Yellow-100
          500: "#ECC94B", // Yellow-500
          600: "#D69E2E", // Yellow-600
          700: "#B7791F", // Yellow-700
        },
        error: {
          DEFAULT: "#E53E3E", // Clear red
          50: "#FED7D7", // Red-50
          100: "#FEB2B2", // Red-100
          500: "#F56565", // Red-500
          600: "#E53E3E", // Red-600
          700: "#C53030", // Red-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}