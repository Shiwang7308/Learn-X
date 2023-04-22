import { ColorModeScript , ChakraProvider} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </StrictMode>
);

 // wrap the app in a ChakraProvider so that components can use the theme and color mode context of Chakra UI 
