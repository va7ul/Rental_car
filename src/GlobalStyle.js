import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin: 0;
    padding: 10px 128px;
    color: #121417;
    background-color: #FFFFFF;
    font-family: 'Manrope';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    display: block;
}

a
 {
    text-decoration: none;
}

button {
  border-radius: 5px;
  border: 1px solid;
  margin-left: 10px;
}
`;
