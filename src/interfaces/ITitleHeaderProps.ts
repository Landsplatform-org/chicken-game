import { MutableRefObject } from "react";

export interface ITitleHeaderProps {
  titleName: string;
  refCurrent: MutableRefObject<HTMLDivElement | null>;
}
