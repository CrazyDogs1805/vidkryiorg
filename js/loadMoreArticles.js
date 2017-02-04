var loadMoreBtnEv = document.getElementById('load-more-questions')
var loadBoxEv = document.getElementById('load-more-questions-conteiner')

var counter = 0;

var textEv = [
  '<div class=" col-xs-12 col-md-6 all_width  left_ps blue  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464a8d1977b8.jpg" alt=""></div><div class="col-xs-6 text_title"><a href="articles/hristianskaya-demorfologizatsiya.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Як вплинуло християнство на розвиток науки - А. Кураєв</span></span></span></a></div></div>                                             <div class=" col-xs-12 col-md-6 all_width  left_ps green  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464aac92b4b3.jpg" alt="">    </div><div class="col-xs-6 text_title"><a href="articles/hristianstvo.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Християнство (А. Мень)</span></span></span></a></div></div>                                                 <div class=" col-xs-12 col-md-6 all_width  left_ps orng  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464a80f0bf1e.jpg" alt="">    </div><div class="col-xs-6 text_title"><a href="articles/chelovek-v-novom-zavete.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Людина в Новому Заповіті. Гуманізм і християнство</span></span></span></a></div></div>          <div class=" col-xs-12 col-md-6 all_width  left_ps purple  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464a2b8b49e4.jpg" alt="">    </div><div class="col-xs-6 text_title"><a href="articles/dokumenty_nz.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Документи Нового Завіту: Чи достовірні вони? (Ф.Брюс)</span></span></span></a></div></div>                                   <div class=" col-xs-12 col-md-6 all_width  left_ps green  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464a265ad954.jpg" alt="">    </div><div class="col-xs-6 text_title"><a href="articles/ne_prosto_plotnik.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Не просто тесля (Д.МакДауелл)</span></span></span></a></div></div>                        <div class=" col-xs-12 col-md-6 all_width  left_ps orng  "><div class="col-xs-6 img_title"><img src="http://statics.t233.cvcis.org/web//content/articles/images/5464bb37aece7.jpg" alt="">    </div><div class="col-xs-6 text_title"><a href="articles/neosporimie_svidetelstva.html"><span class="view_bl"><span class="view_share"><span class="share_icon">1</span><span class="view_icon">548</span></span></span><span class="text"><span class="text_fix_bl"><span class="heading"><span>Cтаття</span></span><span class="text_descr">Незаперечні свідчення (Д.МакДауелл)</span></span></span></a></div></div>  '
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
