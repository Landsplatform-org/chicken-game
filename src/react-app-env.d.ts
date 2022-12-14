/// <reference types="react-scripts" />
// import { ExternalProvider } from "@ethersproject/providers";

// declare global {
//   interface Window {
//     ethereum?: ExternalProvider;
//   }
// }

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}