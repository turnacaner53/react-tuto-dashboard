import Chart from 'react-apexcharts';

import PropTypes from 'prop-types';

const options = {
  labels: ['Income', 'Expense'],
  colors: ['#213ebf', '#FD5E53'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: true,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ['#324ab3', '#9e3831'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: 'inherit',
      backgroundColor: '#000000',
    },
  },
};

const WalletChart = ({ expense, income }) => {
  // use maybe for change chart theme
  // const theme = useTheme();

  return (
    <Chart options={options} series={[income, expense]} type='pie' width={'100%'} height={'100%'} />
  );
};

WalletChart.propTypes = {
  expense: PropTypes.number,
  income: PropTypes.number,
};

export default WalletChart;
