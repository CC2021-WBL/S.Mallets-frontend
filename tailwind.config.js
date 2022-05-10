module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        path1dance: 'dance1 1.5s linear alternate 0s infinite',
        path2dance: 'dance2 1.5s linear alternate 0s infinite',
        path3dance: 'dance3 1.5s linear alternate 0s infinite',
        path4dance: 'dance4 1.5s linear alternate 0s infinite',
        path5dance: 'dance3 2s linear alternate 0s infinite',
        path6dance: 'dance3 2s linear alternate 0s infinite',
      },
      keyframes: {
        dance1: {
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
        dance2: {
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
        dance3: {
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
        dance4: {
          '0%': {
            strokeDashoffset: '201.3398895263672px',
            strokeDasharray: '201.3398895263672px',
            stroke: '#000',
          },
          '20%, 100%': {
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
      xl: '1280px',
      '2xl': '1536px',
    },
    plugins: [],
  },
};
