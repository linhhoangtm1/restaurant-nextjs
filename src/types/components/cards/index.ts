import { ReactNode } from "react";
import { IRecipe } from "types";
export interface ITabCardGrid {
  heading: string | ReactNode;
  tabs: Record<string, IRecipe[]>;
}
