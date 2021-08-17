import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { MidiProvider } from 'web-midi-hooks'

import { ChakraProvider, theme } from "@chakra-ui/react"

import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <MidiProvider>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MidiProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
