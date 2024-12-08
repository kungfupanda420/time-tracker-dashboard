import "../styles/globals.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import '../styles/globals.css'

const colors = {
  primary: {
    blue: 'hsl(246, 80%, 60%)',
    lightRed: {
      work: 'hsl(15, 100%, 70%)',
      study: 'hsl(348, 100%, 68%)'
    },
    softBlue: {
      play: 'hsl(195, 74%, 62%)'
    },
    limeGreen: {
      exercise: 'hsl(145, 58%, 55%)'
    },
    violet: {
      social: 'hsl(264, 64%, 52%)'
    },
    softOrange: {
      selfCare: 'hsl(43, 84%, 65%)'
    }
  },
  neutral: {
    veryDarkBlue: 'hsl(226, 43%, 10%)',
    darkBlue: 'hsl(235, 46%, 20%)',
    desaturatedBlue: 'hsl(235, 45%, 61%)',
    paleBlue: 'hsl(236, 100%, 87%)'
  }
};

const breakpoints = {
  mobile: '0px',
  desktop: '376px'
}

const theme = extendTheme({ colors, breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;