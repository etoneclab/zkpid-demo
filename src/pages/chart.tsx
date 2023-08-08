import { useEffect } from "react";
import Chart from "chart.js/auto";

function Example() {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170].map(
    (f) => Math.ceil(Math.random() * 100)
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: " ",
        data: datapoints,
        borderColor: "#000000ab",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.2,
      },
    ],
  };

  useEffect(() => {
    //@ts-ignore
    var ctx = document?.getElementById("myChart")?.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      options: {
        legend: {
          display: false, // This will hide the top legend
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            position: "right", // Position the "title" (which acts as X-axis label) to the right
            align: "end", // Align the text to the right
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              drawOnChartArea: false, // removes the grid lines for X-axis
              drawTicks: false, // removes the ticks for X-axis
            },
            title: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              drawOnChartArea: false, // removes the grid lines for X-axis
              drawTicks: false, // removes the ticks for X-axis
            },
            title: {
              display: false,
              text: "Value",
            },
            suggestedMin: -10,
            suggestedMax: 200,
          },
        },
      },
      data,
    });
  }, []);
  const IconReverse = () => (
    <svg
      width="14"
      height="6"
      viewBox="0 0 14 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3L10 0.690599V5.3094L14 3ZM0 3.4H10.4V2.6H0V3.4Z"
        fill="black"
      />
    </svg>
  );
  const DropDown = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4425 6.44238L9 9.87738L5.5575 6.44238L4.5 7.49988L9 11.9999L13.5 7.49988L12.4425 6.44238Z"
        fill="#08141E"
        fillOpacity="0.6"
      />
    </svg>
  );
  const Circle = () => (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="8" r="7.5" fill="#D9D9D9" />
    </svg>
  );
  return (
    <>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div
          className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl"
          style={{ position: "absolute" }}
        >
          <div style={{ position: "absolute", left: "10px" }}>
            <div>
              <span style={{ position: "relative", top: "4px", right: "2px" }}>
                {Circle()}
              </span>
              <b>ETH</b>
              <span> {IconReverse()}</span>
              <b>BTCB</b>{" "}
              <span style={{ position: "relative", top: "4px", right: "2px" }}>
                {Circle()}
              </span>{" "}
              <span style={{ position: "relative", top: "4px", right: "2px" }}>
                {" "}
                {DropDown()}
              </span>
            </div>
            <div></div>
            <div>
              <b>384.038 ETH/BTCB</b>{" "}
            </div>
            <div>
              <b>6th June 2023</b>
            </div>
          </div>
          <canvas
            id="myChart"
            style={{ height: "220px", width: "700px" }}
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
