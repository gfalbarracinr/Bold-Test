import { createContext } from "react";
import ContextInterface from "../types";


export const FilterContext = createContext<ContextInterface | null>(null);

