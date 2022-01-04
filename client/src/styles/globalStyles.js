import {createGlobalStyle} from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    body, html {
      margin: 0;
      padding: 0;
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
    
    .container{
      max-width: 1560px;
      margin: 0 auto;
    }
    
    button{
      background: none;
      outline: none;
      border: none;
    }
    .userIdMain{
      text-align: center;
      margin-bottom: 60px;

      .userIdInfo{
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 1px;
        color: ${colors.TITLE};
        margin-bottom: 20px;
      }
      .userIdInfo.userStatus{
        font-size: 24px;
        line-height: 36px;
      }
    }
`