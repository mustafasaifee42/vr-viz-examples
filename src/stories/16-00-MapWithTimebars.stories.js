import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Maps/MapTimeBars.md";

import mapData from "../mapData/mapData.json";

const Title = {
  title: "Maps/Map With Timebars",
};

export default Title;

export const MapWithTimebars = () => (
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
        position: "0 0 0",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "MapTimeBars",
        data: {
          dataFile: "data/mapTimeBars.csv",
          fileType: "csv",
          fieldDesc: [
            ["latitude", "number"],
            ["longitude", "number"],
            ["2000", "number"],
            ["2001", "number"],
            ["2002", "number"],
            ["2003", "number"],
            ["2004", "number"],
            ["2005", "number"],
            ["2006", "number"],
            ["2007", "number"],
            ["2008", "number"],
            ["2009", "number"],
            ["2010", "number"],
          ],
        },
        mark: {
          mapScale: 20,
          mapOrigin: [5, 5],
          rotation: "-45 0 0",
          map: {
            data: mapData,
            projection: "Mercator",
            shapeIdentifier: "id",
            shapeKey: "countries",
            style: {
              extrusion: 0.0000001,
              fill: {
                color: "#fff",
                opacity: 1,
              },
              stroke: {
                width: 1,
                color: "#555",
              },
            },
          },
          timeLayers: {
            type: "cylinder",
            position: {
              x: {
                field: "longitude",
              },
              y: {
                domain: [
                  "2000",
                  "2001",
                  "2002",
                  "2003",
                  "2004",
                  "2005",
                  "2006",
                  "2007",
                  "2008",
                  "2009",
                  "2010",
                ],
              },
              z: {
                field: "latitude",
              },
            },
            style: {
              radius: {
                scaleType: "linear",
                value: [0, 1],
                startFromZero: true,
              },
              height: 0.2,
              padding: 0,
              fill: {
                opacity: 1,
                scaleType: "linear",
                color: ["#ea4335", "#34a853"],
              },
            },
          },
        },
      },
    ]}
  />
);

MapWithTimebars.story = {
  parameters: {
    notes: { markdown },
  },
};
