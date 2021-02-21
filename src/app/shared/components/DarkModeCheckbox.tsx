import React from 'react';
import {useTheme} from '../../shared/hooks/useTheme'
import './styles/DarkModeCheckbox.css'


export const DarkModeCheckbox: React.FC = (() => {

    const {isDark, toggleDarkMode} = useTheme();

    return(

        <div className="dark-mode-container">

                <label className="font-size-m padding-g display-flex flex-items-center">
                        <input
                            className="margin-right-s"
                            type="checkbox"
                            checked={isDark}
                            onChange={() => toggleDarkMode()}
                        />
                        Dark mode
                </label>

            </div>

    );

})