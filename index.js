
function takeANumber(line, name) {
  return "Welcome, " + name + ". You are number " + line.length + 1 + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  var first = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return first;
}