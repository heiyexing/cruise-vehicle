import style from "./index.less";
import {
  IconImageLayer,
  LarkMap,
  LarkMapProps,
  PointLayer,
  PolygonLayer,
} from "@antv/larkmap";
import {
  iconImageLayerOptions,
  pointLayerOptions,
  polygonLayerOptions,
} from "./layerOptions";
import { hexData, iconImageData, pointData } from "./mock";
// import { useEffect, useState } from "react";
// import { latLngToCell, cellToBoundary } from "h3-js";
// import { polygon } from "turf";

const config: LarkMapProps = {
  mapType: "Gaode",
  mapOptions: {
    style: "light",
    center: [120.210792, 30.246026],
    zoom: 10,
    token: "5ae4492ef912cbbc93034fea0e66ff2a",
  },
};

export default function HomePage() {
  //经纬度转h3
  // useEffect(() => {
  //   const hexId = [].map((item: any) => {
  //     const [lon, lat] = item.geometry.coordinates;
  //     return latLngToCell(lon, lat, 7);
  //   });
  //   const polygonSet = [...new Set(hexId)];
  //   const polygonList = polygonSet.map((item) => {
  //     return cellToBoundary(item, true);
  //   });
  //   const newPolygonData = polygonList.map((item) => {
  //     return polygon([item]);
  //   });
  //   console.log(newPolygonData);
  // }, []);
  return (
    <LarkMap {...config} className={style.larkMap}>
      <IconImageLayer
        {...iconImageLayerOptions}
        source={{ data: iconImageData, parser: { type: "geojson" } }}
      />
      <PointLayer
        {...pointLayerOptions}
        source={{ data: pointData, parser: { type: "geojson" } }}
      />
      <PolygonLayer
        {...polygonLayerOptions}
        source={{ data: hexData, parser: { type: "geojson" } }}
      />
      <PolygonLayer
        shape="line"
        color="#fff"
        source={{ data: hexData, parser: { type: "geojson" } }}
      />
    </LarkMap>
  );
}
