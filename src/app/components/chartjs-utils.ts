// npm install chartjs --save
import * as Chart from 'chart.js';
// npm install chart.piecelabel.js --save
import 'chart.piecelabel.js';

/**
 * this is simply used to init our chartjs
 *
 */
export function initChart() {
  const fontFamily = 'Work Sans, sans-serif';
  // set defaults
  Chart.defaults.global.defaultFontFamily = fontFamily;
  Chart.defaults.global.tooltips.titleFontSize = 14;
  Chart.defaults.global.tooltips.titleMarginBottom = 4;
  Chart.defaults.global.tooltips.displayColors = false;
  Chart.defaults.global.tooltips.bodyFontSize = 12;
  Chart.defaults.global.tooltips.xPadding = 10;
  Chart.defaults.global.tooltips.yPadding = 8;
  Chart.defaults.global.tooltips.enabled = true;
}


/**
 * this is used to render our chart on the passed in canvas
 * @param canvas
 * @param options
 */
export function pieChart(canvas: HTMLCanvasElement, options: {
  labels: string[],
  dataset: {data: number[],
    backgroundColor?: string[],
    hoverBackgroundColor?: string[],
    borderColor?: string,
    borderWidth: number
  }
}) {
  canvas.setAttribute('height', '340');
  const data = {
    labels: options.labels,
    datasets: [{
      ...options.dataset,
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };
  return new Chart(canvas, {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        display: true,
        position: 'right',
        fullWidth: true,
        labels: {
          boxWidth: 10
        }
      },
      tooltips: {
        enabled: true,
        mode: 'point'
      },
      animation: {
        animateScale: true
      },
      responsive: true,
    }
  });
}
