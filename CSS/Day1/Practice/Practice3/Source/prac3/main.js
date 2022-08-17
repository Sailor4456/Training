import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <a href="/CSS/horizontal.html">
  <img src="/public/p3.png" alt="Practice TWO from module ONE" class="logo" alt="Vite logo" />
</a>
<a href="/CSS/h1h2.html">
  <img src="/public/p4.png" alt="Practice TWO from module ONE" class="logo" alt="Vite logo" />
</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
