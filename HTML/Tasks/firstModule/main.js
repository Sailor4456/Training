import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Module ONE - HTML</h1>
    <a href="exeOne.html">
      <img src="p1.png" alt="Practice ONE from module ONE" class="logo" alt="Vite logo" />
    </a>
    <a href="exeTwo.html">
      <img src="p2.png" alt="Practice TWO from module ONE" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="assign1Form.html">
      <img src="a1.png" alt="Assignment ONE from module ONE" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="resume.html">
    <img src="a2.png" alt="Assignment ONE from module TWO" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Practice Exercises and Assignments...</h1>
  </div>
`

// setupCounter(document.querySelector('#counter'))