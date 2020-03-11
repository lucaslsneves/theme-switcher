import React,{useContext} from 'react';

import ThemeContext from '../../styles/themes/context';
import * as themes from '../../styles/themes';

export default function ThemeSwitcher() {
  const {setTheme} = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(prevTheme => prevTheme === themes.dark ? themes.light : themes.dark )}>Trocar tema</button>
  );
}
