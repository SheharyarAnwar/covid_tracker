import React, { useState, createRef, useEffect } from "react";
import Chart from "chart.js";
import { useTheme } from "@material-ui/core";
function Index(props) {
  const [canvasDimensions, setcanvasDimensions] = useState(props.dimensions);
  const ref = createRef();
  const theme = useTheme();

  useEffect(() => {
    setcanvasDimensions(props.dimensions);
    console.log(canvasDimensions);
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
            barPercentage: 0.4,
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
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: { padding: 10 },
            },
          ],
        },
      },
    });
    chart.canvas.parentNode.style.height = canvasDimensions.height;
    chart.canvas.parentNode.style.width = canvasDimensions.width;
  });
  return (
    <>
      <canvas
        height={canvasDimensions.height}
        width={canvasDimensions.width}
        ref={ref}
      ></canvas>
    </>
  );
}

export default Index;
