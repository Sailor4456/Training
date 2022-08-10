import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="exeOne.html">
      <img src="https://www.kidsmathgamesonline.com/images/pictures/numbers600/number1.jpg" class="logo" alt="Vite logo" />
    </a>
    <a href="exeTwo.html">
      <img src="https://www.pngall.com/wp-content/uploads/2/2-Number-PNG-Pic.png" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="exeThree.html">
      <img src="https://www.kidsmathgamesonline.com/images/pictures/numbers600/number3.jpg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Practice Exercises...</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))