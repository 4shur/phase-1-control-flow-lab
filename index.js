function scuberGreetingForFeet(f){
  if (f <= 400) {
    return `This one is on me!`
  }
  if (f > 2500) {
    return `No can do.`
  }
  if (f > 2000) {
    return `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(c){
  if (c === `NYC`) {
    return `Ok, sounds good.`
  } else if (c !== `NYC`) {
    return `No go.`
  }
}

function switchOnCharmFromTip(t){
  if (t === `generous`) {
    return `Thank you so much.`
  } else if (t === `not as generous`) {
    return `Thank you.`
  } else {
    return `Bye.`
  }
}