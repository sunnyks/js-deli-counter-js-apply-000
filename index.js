
function takeANumber(line, name) {
<<<<<<< HEAD
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
=======
  return "Welcome, " + name + ". You are number " + line.length + 1 + " in line."
>>>>>>> 67c9655640ee427ea36a5f588d1907a552efa617
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
<<<<<<< HEAD
    return "There is nobody waiting to be served!";
=======
    return "There is nobody waiting to be served!"
>>>>>>> 67c9655640ee427ea36a5f588d1907a552efa617
  }
  
  var first = katzDeliLine[0];
  katzDeliLine.splice(0,1);
<<<<<<< HEAD
  return "Currently serving " + first + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  var waiting = "The line is currently: "
  for (var i = 0; i < line.length; i++) {
    var person = `${i+1}. ${line[i]}, `;
    waiting = waiting + person;
  }
  waiting = waiting.substring(0, waiting.length - 2);
  
  return waiting;
=======
  return first;
>>>>>>> 67c9655640ee427ea36a5f588d1907a552efa617
}