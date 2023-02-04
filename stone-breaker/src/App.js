import './App.css';
import { ChakraBaseProvider, extendBaseTheme, Heading } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import LandingPage from './views/landingPage';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
function App() {
  return (
    
    <ChakraBaseProvider theme={theme}>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={""}>
          <Route index element={""} />
          <Route path="blogs" element={""} />
          <Route path="contact" element={""} />
        </Route>
      </Routes>
      <div>
        <LandingPage/>
    </div>
    </BrowserRouter>
   
    
  </ChakraBaseProvider>
  );
}

export default App;
