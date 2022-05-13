module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        path1dance: 'dance 1.5s linear alternate 0s infinite',
        path2dance: 'dance 1.5s linear alternate 0s infinite',
      },
      keyframes: {
        dance: {
          '0%': {
            strokeDashoffset: '201.4988250732422px',
            strokeDasharray: '201.4988250732422px',
            stroke: '#000',
          },
          '70%, 100%': {
            strokeDashoffset: '402.9976501464844px',
            strokeDasharray: '201.4988250732422px',
          },
          '100%': {
            stroke: '#ccc',
          },
        },
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      lg2: '1124px',
      xl: '1280px',
      '2xl': '1536px',
    },
    plugins: [],
  },
};
