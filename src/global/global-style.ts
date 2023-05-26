import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'EB Garamond', serif;
        font-family: 'Nunito Sans', sans-serif;
        ::-webkit-scrollbar {
        width: 10px;
        }
        
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        }
    }
    #root{
        margin: 0 auto;

    }
`;
