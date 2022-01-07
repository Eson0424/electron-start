const { ipcRenderer } = require('electron')

const Timer = require('timer.js')

// 开始工作的fn
function startWork() {
  let workTime = new Timer = ({
    ontick: () => {
      updateTime();
    },
    onend: () => {
      notification()
    }
  })
  workTime.start(10)
}
// updateTime
function updateTime(ms) {
  let timeContainer = document.getElementById('time-container')
  timeContainer.innerHTML = ms
}

// notification
async function notification() {
  let res = await ipcRenderer.invoke('work-notification')
  if (res === 'rest') {
    setTimeout(() => {
      alert('rest')
    }, 5000)
  } else if (res === 'work') {
    startWork()
  }
}