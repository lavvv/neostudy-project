declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png";

declare interface ISVGProps {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}
