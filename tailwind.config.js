module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        path1dance: 'path1dance 1.5s linear alternate 0s infinite',
        path2dance: 'path2dance 1.5s linear alternate 0s infinite',
      },
      keyframes: {
        path1dance: {
          '0%': {
            strokeDashoffset: '201.4988250732422px',
            strokeDasharray: '201.4988250732422px',
            transform: 'rotateY(0deg)',
            stroke: '#000',
          },
          '70%, 100%': {
            strokeDashoffset: '402.9976501464844px',
            strokeDasharray: '201.4988250732422px',
          },
          '100%': {
            transform: 'rotateY(360deg)',
            stroke: '#ccc',
          },
        },
        path2dance: {
          '0%': {
            strokeDashoffset: '201.3398895263672px',
            strokeDasharray: '201.3398895263672px',
            transform: 'rotateY(0deg)',
            stroke: '#000',
          },
          '20%, 100%': {
            strokeDashoffset: '402.9976501464844px',
            strokeDasharray: '201.4988250732422px',
          },
          '100%': {
            transform: 'rotateY(360deg)',
            stroke: '#ccc',
          },
        },
      },
    },
  },
  plugins: [],
};
