import { createContext } from "react";

export const filterContext = createContext()

export function filterContextProvider(props) {
    return <filterContext.Provider>
        {props.children}
    </filterContext.Provider>
}