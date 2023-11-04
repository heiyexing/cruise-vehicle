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
  return (
    <LarkMap {...config} className={style.larkMap}>
      <IconImageLayer
        {...iconImageLayerOptions}
        source={{ data: iconImageData, parser: { type: "geojson" } }}
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
      <PointLayer
        {...pointLayerOptions}
        source={{ data: pointData, parser: { type: "geojson" } }}
      />
    </LarkMap>
  );
}
