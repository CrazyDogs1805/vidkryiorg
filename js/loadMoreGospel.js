var loadMoreBtnEv = document.getElementById('load-more-ev')
var loadBoxEv = document.getElementById('load-more-ev-conteiner')

var counter = 0;

var textEv = [
  '<div class=" col-xs-6 col-md-3 all_width no_image  blue  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_17.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 17                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image  orng  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_18.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 18                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image   green  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_19.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 19                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image   purple  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_20.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 20                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image   orng  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_21.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 21                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image  blue  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_22.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 22                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image  orng  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_23.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 23                      </span></span></span></a></div></div><div class=" col-xs-6 col-md-3 all_width no_image   green  " style="display: block; opacity: 1; visibility: visible;"><div class="col-xs-12 text_title"><a href="gospel/evangelie_ot_luki_24.html"><span class="text"><span class="text_fix_bl"><span class="heading"><span>Євангеліє від Луки</span></span><span class="text_descr">Розділ 24                      </span></span></span></a></div></div>'
]
//Clear and update html to inner
var clearFunc = function(text){
  var src = document.createElement('div');
  src.innerHTML = ''
  src.innerHTML = text[counter]
  counter++
  return(src)
}

//Gospel load more press
loadMoreBtnEv.onclick = function(){
  if(counter >= textEv.length){
    loadMoreBtnEv.style.display = 'none'
  } else {
    loadBoxEv.appendChild(clearFunc(textEv))
  }
}
