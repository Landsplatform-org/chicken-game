import { JSXElementConstructor, ReactElement } from "react";

export interface IContestsParticipantsTemplateProps {
  title: string;
  children?: ReactElement<any, string | JSXElementConstructor<any>>[];
}