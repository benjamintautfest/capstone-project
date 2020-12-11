import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

html {
   font-family: sans-serif;
   height: 100vh;

} 

body {
    margin: 0 auto;
    max-width: 600px;
    background: white;
    height: 100vh;
}

h1 {
    font-family: 'Sansita Swashed', cursive;
}


`
