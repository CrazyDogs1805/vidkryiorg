var loadMoreBtnEv = document.getElementById('load-more-ev')
var loadBoxEv = document.getElementById('load-more-ev-conteiner')

var counter = 0;

var textEv = [
  '<div class=" col-xs-12 col-md-6 all_width  left_ps orng  video_icon"> <div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/questions/images/543ce4b5ad0cf.jpg" alt="">    </div><div class="col-xs-6 text_title"> <a href="questions/4.html"><span class="view_bl"><span class="view_share"><span class="share_icon">0</span><span class="view_icon">371</span>  </span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Питання</span></span><span class="text_descr">Чи не зарозуміло вважати, що до Бога можна прийти тільки через Ісуса Христа?                      </span></span></span></a></div></div> '
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
