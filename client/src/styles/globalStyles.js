import {createGlobalStyle} from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    body, html {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Poppins', sans-serif!important;
      background: #E5E5E5;
    }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
  
  p {
      margin: 0;
    }
`