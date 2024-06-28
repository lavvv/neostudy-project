declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png";

declare interface SvgProps {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}
