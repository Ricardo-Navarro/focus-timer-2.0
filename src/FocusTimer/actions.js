import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPress.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPress.play()

}

export function add() {
 let minutes = Number(el.minutes.textContent)
 let seconds = Number(el.seconds.textContent)
 minutes += 5
 timer.updateDisplay(minutes, seconds)
 sounds.buttonPress.play()
}

export function sub() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  minutes -= 5
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPress.play()
}

export function toggleMusicThree() {
  state.isMute = document.documentElement.classList.toggle('music-on1')

  if(state.isMute) {
    sounds.buttonThree.play()
    sounds.buttonPress.play()
    return
  }

  sounds.buttonThree.pause()
  sounds.buttonPress.play()
}

export function toggleMusicRain() {
  state.isMute = document.documentElement.classList.toggle('music-on2')

  if(state.isMute) {
    sounds.buttonRain.play()
    sounds.buttonPress.play()
    return
  }

  sounds.buttonRain.pause()
  sounds.buttonPress.play()
}

export function toggleMusicMarket() {
  state.isMute = document.documentElement.classList.toggle('music-on3')

  if(state.isMute) {
    sounds.buttonMarket.play()
    sounds.buttonPress.play()
    return
  }

  sounds.buttonMarket.pause()
  sounds.buttonPress.play()
}

export function toggleMusicFire() {
  state.isMute = document.documentElement.classList.toggle('music-on4')

  if(state.isMute) {
    sounds.buttonFire.play()
    sounds.buttonPress.play()
    return
  }

  sounds.buttonFire.pause()
  sounds.buttonPress.play()
}