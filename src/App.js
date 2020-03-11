import React,{useState} from 'react';
import { ThemeProvider} from 'styled-components';

import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme,setTheme] = useState(themes.dark);

  return (
    <>
      <ThemeContext.Provider value={{setTheme}}>
        <ThemeSwitcher/>
        <ThemeProvider theme={theme}>
          <TodoList/>
        </ThemeProvider>
      </ThemeContext.Provider>
   </>
  );
}

export default App;
