import {
  IconImageLayerProps,
  LineLayerProps,
  PointLayerProps,
  PolygonLayerProps,
} from "@antv/larkmap";

export const iconImageLayerOptions: Omit<IconImageLayerProps, "source"> = {
  iconAtlas: {
    icon1:
      "https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg",
  },
  icon: "icon1",
  radius: 20,
  blend: "normal",
  opacity: 1,
};

export const pointLayerOptions: Omit<PointLayerProps, "source"> = {
  shape: "circle",
  size: 3,
  color: "#46F42B",
  zIndex: 10,
  style: {
    stroke: "#fff",
    strokeWidth: 1,
  },
};

export const lineLayerOptions: Omit<LineLayerProps, "source"> = {
  shape: "line" as const,
  size: 3,
  color: "#5D7092",
};

export const polygonLayerOptions: Omit<PolygonLayerProps, "source"> = {
  shape: "fill",
  autoFit: true,
  color: { field: "num", value: ["#e9c8aa", "#d38162", "#c67f4f"] },
  style: { opacity: 0.8 },
};
