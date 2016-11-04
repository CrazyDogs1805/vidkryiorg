var box = document.getElementById('myText');
var text = box.textContent
var newText = ''
var splitH2 = text.split(">");
var position = 0;
var start = false;

text = ''
for (var i = 1; i < splitH2.length; i++){
  if(i % 2 > 0) {
    if(i == 1) {
      text += '<h2>' + splitH2[i] + '</h2><ul>' 
    } else {
      text += '</ul><h2>' + splitH2[i] + '</h2><ul>' 
    }
  } else {
    text += 's' + splitH2[i] + '</li>'
  }
}

//console.log(text)
//var split = text.split(/\d/);
//
//for(var i = 0; i < split.length; i++){
//  if(split[i] == ''){
//    split.splice(i, 1)
//    i = i-1;
//  }
//}
//
//console.log(split)


for(var i = 0; i < text.length; i++){
  if(text[i] == 's'){
    text[i]
    start = true
  }
  if((text[i] == 1 || text[i] == 2 || text[i] == 3 || text[i] == 4 || text[i] == 5 || text[i] == 6 || text[i] == 7 || text[i] == 8 || text[i] == 9) && text[i-1] != 'h') {
    console.log(text[i-1])
    if(start) {
      newText += '<li><strong>' + text[i]
      start = false;
    } else {
      newText += '</li><li><strong>' + text[i]
    }
    
      if(text[i+1] == 1 || text[i+1] == 2 || text[i+1] == 3 || text[i+1] == 4 || text[i+1] == 5 ||    text[i+1] == 6 || text[i+1] == 7 || text[i+1] == 8 || text[i+1] == 9 || text[i+1] == 0){
      i = i + 1
      newText += text[i] + '</strong>'
    } else {
      newText +='</strong>'
    }
  } else {
    if(text[i - 1] == ">" && text[i] == 's'){
      
    } else {
      newText += text[i] 
    }
  }
    
}
newText += "</ul>"
console.log(newText)