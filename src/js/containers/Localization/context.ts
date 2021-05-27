import { createContext } from "react";

const localizationContext = createContext((category?: string) => Promise.resolve({ "": "" }));
export default localizationContext;
