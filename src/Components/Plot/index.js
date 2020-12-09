import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
import { useTheme } from "@material-ui/core";
function Index() {
  const ref = createRef();
  const theme = useTheme();

  useEffect(() => {
    const canvasRef = ref.current;
    const globalSettings = Chart.defaults.global;
    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.scale.ticks.fontColor = theme.palette.black;
    Chart.defaults.scale.gridLines.color = theme.palette.orange;
    Chart.defaults.scale.gridLines.lineWidth = 2;
    globalSettings.legend.display = false;
    globalSettings.defaultFontFamily = theme.typography.fontFamily;

    const chart = new Chart(canvasRef.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Recovered", "Infected", "Deaths"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              theme.palette.darkBlue,
              theme.palette.lightBlue,
              theme.palette.red,
            ],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              barPercentage: 0.4,
            },
          ],
          yAxes: [
            {
              barPercentage: 0.4,
              ticks: { padding: 10 },
            },
          ],
        },
      },
    });
  }, []);
  return (
    <>
      <canvas width={320} height={280} ref={ref}></canvas>
    </>
  );
}

export default Index;
