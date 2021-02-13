import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IThemeContextData {

    toggleDarkMode: (value?: boolean) => void;
    isDark: boolean;

}

export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        if(isDark){



        }
        else{



        }
    }, [isDark]);

    const toggleDarkMode = useCallback((value?: boolean) => {

        if(value === undefined){
            setIsDark(!isDark);
        }
        else{
            setIsDark(value);
        }

    }, [isDark])

    return(
        <ThemeContext.Provider value={{isDark, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );

}