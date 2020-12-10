import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import { useTheme } from "@material-ui/core";
function Index(props) {
  const ref = createRef();
  const theme = useTheme();
  useEffect(() => {
    const canvasRef = ref.current;
    const data = {
      labels: ["Recovered", "Infected", "Deaths"],
      datasets: [
        {
          barPercentage: 0.4,
          data: props.dataSet,
          backgroundColor: [
            theme.palette.darkBlue,
            theme.palette.lightBlue,
            theme.palette.red,
          ],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: { padding: 10 },
          },
        ],
      },
    };
    const globalSettings = Chart.defaults.global;
    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.scale.ticks.fontColor = theme.palette.black;
    Chart.defaults.scale.gridLines.color = theme.palette.orange;
    Chart.defaults.scale.gridLines.lineWidth = 2;
    globalSettings.legend.display = false;
    globalSettings.defaultFontFamily = theme.typography.fontFamily;
    const chart = new Chart(canvasRef.getContext("2d"), {
      type: "bar",
      data,
      options,
    });
    return () => {
      chart.destroy();
    };
  }, [theme, ref, props.dataSet]);
  return (
    <>
      <canvas ref={ref}></canvas>
    </>
  );
}

export default Index;
