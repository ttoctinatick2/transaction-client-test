import React, {LegacyRef, useRef} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact, {HighchartsReactRefObject} from 'highcharts-react-official'
import {balanceStore} from "../store/balanceStore";

const BalanceChart = () => {
  const { transactions } = balanceStore;
  const chartRef = useRef<LegacyRef<HighchartsReactRefObject>>()

  const options = {
    chart: {
      width: 700
    },
    title: {
      text: '',
    },
    subtitle: {
      text: null,
      align: 'left'
    },
    yAxis: {
      title: {
        text: 'USDT'
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%H:%M:%S}'
      }
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Balance',
      data: transactions.map(item => [item.date.getTime() - item.date.getTimezoneOffset() * 60000, item.updatedBalance])
    }],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef.current}
      />
  </div>
);
};

export default BalanceChart;