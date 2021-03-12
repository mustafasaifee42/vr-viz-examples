import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/SpiralPlot.md";

const Title = {
  title: "Graphs or Charts/Spiral Plot",
};

export default Title;

export const SpiralPlot = () => (
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
        position: "5 5 12",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "SpiralChart",
        data: {
          dataFile: "data/SpiralPlot.csv",
          fileType: "csv",
          fieldDesc: [
            ["Year", "date", "YYYY"],
            ["GDP1", "number"],
            ["GDP2", "number"],
            ["GDP3", "number"],
            ["GDP4", "number"],
            ["GDP5", "number"],
          ],
        },
        style: {
          origin: { x: 0, y: 0, z: 0 },
          width: 5,
          height: 10,
        },
        mark: {
          vertices: [
            {
              title: "GDP1",
              domain: [0, 5],
            },
            {
              title: "GDP2",
              domain: [0, 5],
            },
            {
              title: "GDP3",
              domain: [0, 5],
            },
            {
              title: "GDP4",
              domain: [0, 5],
            },
            {
              title: "GDP5",
              domain: [0, 5],
            },
          ],
          style: {
            stroke: {
              width: 1,
              color: "#fff",
            },
          },
        },
      },
    ]}
  />
);

SpiralPlot.story = {
  parameters: {
    notes: { markdown },
  },
};
