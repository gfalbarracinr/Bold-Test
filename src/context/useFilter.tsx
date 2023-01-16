import { useContext } from "react";
import { FilterContext } from "./filterContext";

const useFilter = () => {
  const context = useContext(FilterContext);
  if (context == null) {
    throw new Error('useFilter must be used within a Provider');
  }
  return context;
}

export default useFilter;