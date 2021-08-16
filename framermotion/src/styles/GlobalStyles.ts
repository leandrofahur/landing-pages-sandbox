import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;        
    --dark-gray: #121214;
    --blue: #0000FF;
    --white: #FFFFFF; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  
  html, body, #root {  
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;        
  }
  
  @media(max-width:1080px) {
    html { 
      font-size: 93.75%
    }
  }
  
  @media(max-width:720px) {
    html { 
      font-size: 87.5%
    }
  }
  
  body { 
    background: var(--dark-gray);
    color: var(--white);
    padding: 3rem;
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }  

  .box-container {
    padding-bottom: 5rem;
  }

  .box {    
    width: 10rem;
    height: 10rem;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
`;
