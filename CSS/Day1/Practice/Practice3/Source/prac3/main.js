import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <a href="horizontal.html">
  <img src="p1.png" alt="Practice TWO from module ONE" class="logo" alt="Vite logo" />
</a>
<a href="h1h2.html">
  <img src="p2.png" alt="Practice TWO from module ONE" class="logo" alt="Vite logo" />
</a>
<h3>practice 3</h3>
  </div>
`

setupCounter(document.querySelector('#counter'))
