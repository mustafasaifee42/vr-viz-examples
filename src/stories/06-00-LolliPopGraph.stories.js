import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/LollipopChart.md";

const Title = {
  title: "Graphs or Charts/Lollipop Graph",
};

export default Title;

export const LollipopGraph = () => (
  <VRViz
    scene={{
      sky: {
        style: {
          color: "#333",
          texture: false,
        },
      },
      lights: [
        {
          type: "directional",
          color: "#fff",
          position: "0 1 1",
          intensity: 1,
          decay: 1,
        },
        {
          type: "ambient",
          color: "#fff",
          intensity: 1,
          decay: 1,
        },
      ],
      camera: {
        position: "5 5 20",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "LollipopChart",
        data: {
          dataFile: "data/barGraph.csv",
          fileType: "csv",
          fieldDesc: [
            ["Year", "text"],
            ["Month", "text"],
            ["Tornadoes", "number"],
            ["Deaths", "number"],
          ],
        },
        style: {
          dimensions: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        rotationOnDrag: {
          rotateAroundXaxis: false,
        },
        mark: {
          type: "box",
          position: {
            y: {
              startFromZero: true,
              field: "Tornadoes",
            },
            x: {
              field: "Month",
              domain: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            z: {
              field: "Year",
            },
          },
          style: {
            padding: {
              x: 0.1,
              z: 0.1,
            },
            radius: {
              value: 0.1,
            },
            fill: {
              opacity: 0.8,
              scaleType: "linear",
              field: "Deaths",
              color: ["red", "green"],
            },
          },
          droplines: {
            style: {
              radius: 0.01,
              fill: {
                opacity: 0.8,
                scaleType: "linear",
                field: "Deaths",
                color: ["red", "green"],
              },
            },
          },
        },
        axis: {
          "axis-box": {
            color: "white",
          },
          "x-axis": {
            orient: "back-bottom",
            ticks: {
              noOfTicks: 10,
              size: 0.1,
              color: "white",
              opacity: 0.7,
              fontSize: 1,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "y-axis": {
            orient: "back-left",
            ticks: {
              noOfTicks: 10,
              size: 0.1,
              color: "white",
              opacity: 0.7,
              fontSize: 1,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "z-axis": {
            orient: "bottom-left",
            ticks: {
              noOfTicks: 10,
              size: 0.1,
              color: "white",
              opacity: 0.7,
              fontSize: 1,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
        },
      },
    ]}
  />
);

LollipopGraph.story = {
  parameters: {
    notes: { markdown },
  },
};
