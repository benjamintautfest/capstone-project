import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
}

html {
    height: 100%;
    font-family: sans-serif;
}

body {
    margin: 0 auto;
    display: grid;
    max-width: 600px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 112.5%;
    background: papayawhip;
}

h1 {
    color: #fc6f03;
    line-height: 2;
}

h2 {
    color: white;
    font-weight: 300;
}
`
