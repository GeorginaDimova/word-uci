'use strict';

const STORAGE_KEY='wordUciOriginalPdfV1';
const defaultState={done:[],theme:'light',fontStep:0,lastLesson:1};
let state=loadState();
let deferredInstallPrompt=null;

const lessons=[
{
 id:1,title:'Внесување и уредување на текст',subtitle:'Внесување на текст • Word прозорец • тастатура • правила',
 body:`
 <div class="source-text">
   <p>Апликацијата Microsoft Word се користи за внесување и уредување на текстови.</p>
   <p>Со активирање на апликацијата се отвара нејзиниот прозорец.</p>
   <div class="media-grid">
     <figure class="source-image"><img src="./assets/keyboard.png" alt="Тастатура од оригиналниот материјал"></figure>
     <figure class="source-image"><img src="./assets/word-window.png" alt="Microsoft Word прозорец од оригиналниот материјал"></figure>
   </div>
   <p>Елементите на прозорецот се слични како и сите апликации. Најгоре се наоѓа насловната лента каде што стои името на документот. Под насловната лента се наоѓа лентата со менија и потоа лентата со алатки. Во Word има многу ленти со алатки кои можеме да ги вклучуваме или исклучуваме по потреба.</p>
   <p>Текстот се внесува преку тастатура при што мали букви се пишуваат со клик на копчето со буквата, додека големи така што се држи притисната копчето shift и се клика на соодветното копче. Доколку сакаме да пишуваме повеќе од 1 голема буква можеме да го вклучиме копчето Caps Locк, кое по пишувањето на буквите треба да се исклучи за да продолжиме со пишување на мали букви.</p>
   <p>При пишување на текст постојат одредени правила кон кои треба да се придржуваме за да текстот биде правилно напишан и потоа да може да се уредува.</p>
   <p>Едни од правилата се:</p>
   <p>Зборовите се одделуваат само со еден клик на Space. Реченицата започнува со глема буква. После точка, запирка, извичник, прашалник... се остава едно празно место.</p>
   <figure class="source-image full"><img src="./assets/typing-rules.png" alt="Правила за испишување на текст од оригиналниот материјал"></figure>
 </div>`
},
{
 id:2,title:'Правилно пишување, јазик, пасуси и фонт',subtitle:'Точка и празно место • кирилица/латиница • Enter • фонт',
 body:`
 <div class="source-text">
   <p>На пример речениците</p>
   <p class="example">Јас одам на училиште. Училиштето е интересно.</p>
   <p>се правилно напишан. После завршување на реченицата веднаш се пишува точка и потоа се клика празно место.</p>
   <p>Додека</p>
   <p class="example">Јас одам на училиште .Училиштето е убаво.</p>
   <p>Не се правилно напишани бидејќи пред точката има оставено празно место, а после неа нема празно место.</p>
   <p>Текстот може да биде напишан и на кирилица и на латиница. За премин од кирилична на латинична тастатура користиме комбинација од копчињата Alt + Shift.</p>
   <p>Истото можеме да го постигнеме и до клик на копчето за промена на јазик на статусната линија на долниот дел од екранот.</p>
   <figure class="source-image full"><img src="./assets/language.png" alt="Промена на јазик од оригиналниот материјал"></figure>
   <p>Текстот се внесува преку зборови, реченици и параграфи (пасуси). Еден пасус се внесува така што не се притиска Ентер на секој ред, туку целиот пасус го пишуваме без притискање на Ентер.</p>
   <p>Дури кога треба да се започне со нов пасус тогаш притискаме Ентер.</p>
   <p>За да бираме различни форми на буквите го менуваме фонтот на текстот.</p>
   <p>Тоа се прави со алатката за фонт која се наоѓа во менито Home.</p>
   <div class="media-grid">
     <figure class="source-image"><img src="./assets/font-tool.png" alt="Алатка за фонт од оригиналниот материјал"></figure>
     <figure class="source-image"><img src="./assets/font-list.png" alt="Листа на фонтови од оригиналниот материјал"></figure>
   </div>
   <p>Со клик на стрелката може да се избере кој фонт сакаме</p>
 </div>`
},
{
 id:3,title:'Големина, Вежба 1 и стилови',subtitle:'Големина 11 • B • I • U • боја',
 body:`
 <div class="source-text">
   <p>Веднаш до алатката за избор на фонт, се наоѓа и алатката за големина на буквите.</p>
   <p>Најчесто текстот се пишува со големина 11.</p>
   <figure class="source-image full"><img src="./assets/font-size.png" alt="Големина на буквите од оригиналниот материјал"></figure>
   <p>Сега можеме да започнеме со пишување на текст. Погледнете го следниот текст.</p>
   <h2>Вежба 1</h2>
   <p>Се приближуваголем натпревар кој треба да се организира и да се подготви. Треба да се направат постери, покани, да се направи листа на гости и уште многу други работи. Ти, како главен организатор, мора да преземеш дел од обврските.</p>
   <figure class="source-image full"><img src="./assets/exercise-1.png" alt="Вежба 1 од оригиналниот материјал"></figure>
   <p>Може да забележите дека одредени зборови се истакнати. Тоа се прави со поставување на стил со алатките кои се наоѓаат на лентата во менито Home.</p>
   <figure class="source-image full"><img src="./assets/formatting.png" alt="B I U и боја од оригиналниот материјал"></figure>
   <p>Со клик на копчето B се пишува задебелен текст.</p>
   <p>На пример: коса коса</p>
   <p>Со клик на копчето I се пишува закосен текст.</p>
   <p>На пример: коса коса</p>
   <p>Со клик на копчето U се пишува подвлечен текст</p>
   <p>На пример: коса коса</p>
   <p>Истовремено текстот може да биде и задеблен и подвлечен и закосен, значи може да бидат притиснати повеќе копчиња истовремено. Исто така текстот може да биде напишан и во боја.</p>
   <p class="example">Обиди се да го напишеш текстот од Вежба 1 при што сите зборови ќе ги уредиш онака како што се во вежбата.</p>
 </div>`
},
{
 id:4,title:'Пасус, порамнување, корекции и зачувување',subtitle:'Порамнување • Delete • BackSpace • Save • Open • New',
 body:`
 <div class="source-text">
   <p>Ајде повторно да го погледнеме текстот од Вежба 1</p>
   <figure class="source-image full"><img src="./assets/exercise-paragraph.png" alt="Вежба 1 пасус од оригиналниот материјал"></figure>
   <p>Ова е текст од еден пасус. Целиот пасус е напишан без да се притисне копчето Ентер. Ентер се притиска дури на крајот на пасусот после зборот - обврските.</p>
   <p>Да погледнеме сега како завршуваат редовите во пасусот. Можеме да видиме дека тие завршуваат израмнети еден под друг и од левата и од десната страна. Се вели дека овој пасус има двострано порамнување.</p>
   <p>Текстот може да се порамни и од лево, од десно и да се постави централно. Најчесто централно порамнување се поставува на насловот на текстот доклку треба да биде на средина.</p>
   <p>Порамнувањето се поставува со алатките за порамнување од менито Home.</p>
   <figure class="source-image full"><img src="./assets/alignment.png" alt="Алатки за порамнување од оригиналниот материјал"></figure>
   <p>За да се постави порамнување на пасусот доволно е само да се кликне со глувчето било каде во пасусот и да се избере соодветната алатка за порамнување.</p>
   <p>Корекции на текстот/бришење се прави со копчињата Delete и BackSpace. Копчето Delete го брише знакот десно од курсорот, додека BackSpace го брише знакот лево од курсорот.</p>
   <p>Кога ќе завршиме со пишувањето и уредувањето на текстот следен чекор е зачувување на документот. Тоа се прави со File - Save или File - Save As. Со првата наредба Save во документот се зачувуваат само промените што сме ги направиле додека името и локацијата на документот не се менуваат. При избор на Save As документот може да се зачува и под друго име и на друга локација.</p>
   <p>За да отвориме постоечки документ се користи File - Open.</p>
   <p>За да отвориме нов празен документ се користи file - New - blank document.</p>
   <p>Одговори на прашањата поставени на следниот линк:</p>
   <a class="source-link" href="https://forms.office.com/e/BHKYzG4qKG" target="_blank" rel="noopener">Домашна задача<span>Оригинален линк од PDF материјалот</span></a>
 </div>`
},
{
 id:5,title:'Креирање нумерирани и означени листи',subtitle:'Означени листи • нумерирани листи • Home • Enter',
 body:`
 <div class="source-text">
   <p>Во word може да се креираат нумерирани и означени листи. Истите се креираат кога сакаме да напишеме список.</p>
   <p>Ова е означена листа:</p>
   <ul><li>прв</li><li>втор</li><li>трет</li></ul>
   <p>Ова е нумерирана листа:</p>
   <ol><li>прв</li><li>втор</li><li>трет</li></ol>
   <p>Листите се креираат со клик на соодветните алатки од менито Home.</p>
   <figure class="source-image full"><img src="./assets/lists-tools.png" alt="Алатки за листи од оригиналниот материјал"></figure>
   <p>При избор на алатката ќе се појави првиот симбол или првиот број. Се пишува текстот од листата и со клик на Ентер се појавува следниот симбол. Кога ќе се заврши со набројувањето се притистка Ентер два пати за да се прекине.</p>
   <p>Погледнете го видеото за да видите како се поставуваат листите</p>
   <figure class="source-image full"><img src="./assets/lists-video.png" alt="Видео за листи од оригиналниот материјал"></figure>
   <a class="source-link" href="https://www.youtube.com/embed/iWAY5dPb6nE?feature=oembed" target="_blank" rel="noopener">▶ Погледнете го видеото<span>Оригинален YouTube линк од PDF материјалот</span></a>
 </div>`
},
{
 id:6,title:'Цртање во документите',subtitle:'Insert • Pictures • This device • Wrap text • Square • Tight',
 body:`
 <div class="source-text">
   <p>Слика се вметнува со наредбата Insert - Pictures - This device за внесување на слика од компјутерот. По вметнувањето сликата треба да се постави во однос на другите елементи во текстот. За тоа од менито Picture Format ја бираме алатката Wrap text и можеме да избереме повеќе опции - најчесто Square или Tight.</p>
   <figure class="source-image full"><img src="./assets/wrap-text.png" alt="Wrap Text од оригиналниот материјал"></figure>
   <p>Најпрво се подесуваат димензиите на сликата со користење на малите кругови кои се појавуваат на аглите на сликата.</p>
   <p>Со горната алатка во формата:</p>
   <figure class="source-image full"><img src="./assets/rotate.png" alt="Ротирање на слика од оригиналниот материјал"></figure>
   <p>се ротира сликата</p>
 </div>`
},
{
 id:7,title:'Креирање на табели',subtitle:'Insert Table • Number of rows • Number of columns',
 body:`
 <div class="source-text">
   <p>Табела се вметнува со наредбата: Insert – Table – Insert table.</p>
   <p>Во прозорецот кој ќе се отвори се пишува бојот на редици – Number of rows и бројот на колони – Number of columns</p>
   <figure class="source-image full"><img src="./assets/insert-table.png" alt="Insert Table од оригиналниот материјал"></figure>
 </div>`
},
{
 id:8,title:'Уредување на табели и самопроценка',subtitle:'Design • Shading • Border Painter • Table Layout • Merge Cells • видео',
 body:`
 <div class="source-text">
   <p>За да ја уредиме табелата кликаме било каде во неа и ќе се појави менито Design.</p>
   <p>На shading се поставува позадина на ќелиите.</p>
   <figure class="source-image full"><img src="./assets/shading.png" alt="Shading од оригиналниот материјал"></figure>
   <p>Бојата и стилот на линиите на табелата може да се подесат со алатката Border Painter. Се подесува стилот, дебелината и бојата на линијата, алатката Border Painter се вклучува и се бојата линиите.</p>
   <figure class="source-image full"><img src="./assets/border-painter.png" alt="Border Painter од оригиналниот материјал"></figure>
   <p>Додавање и бришење на редици и колони се прави преку менитo Table Layout.</p>
   <figure class="source-image full"><img src="./assets/table-layout.png" alt="Table Layout од оригиналниот материјал"></figure>
   <p>Спојување на ќелии се прави така што се селектираат ќелиите и од мениту Table Layout се клика на Merge Cells.</p>
   <figure class="source-image full"><img src="./assets/merge-cells.png" alt="Merge Cells од оригиналниот материјал"></figure>
   <h2>Научи преку видеото како се работи со табели.</h2>
   <figure class="source-image full"><img src="./assets/table-video.png" alt="Видео за табели од оригиналниот материјал"></figure>
   <a class="source-link" href="https://www.youtube.com/embed/GzhTWstql1s?feature=oembed" target="_blank" rel="noopener">▶ Научи преку видеото како се работи со табели.<span>Оригинален YouTube линк од PDF материјалот</span></a>
   <p>Кликни на формата подолу и оцени се самиот за твоите постигнувања</p>
   <figure class="source-image full"><img src="./assets/self-eval.png" alt="Самопроценка од оригиналниот материјал"></figure>
   <a class="source-link" href="https://docs.google.com/forms/d/e/1FAIpQLScsiAMMXH-21h5fNBxXlEHwmIm9FF9j5qgeR3pX-dNPc5jsJg/viewform?embedded=true" target="_blank" rel="noopener">Што научив - самопроценка<span>Оригинален Google Forms линк од PDF материјалот</span></a>
 </div>`
}
];

function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}}catch{return {...defaultState}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function unique(a){return [...new Set(a)]}
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.remove('hidden');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.add('hidden'),2200)}
function go(screen){document.querySelectorAll('.screen').forEach(x=>x.classList.toggle('active',x.id===screen));document.querySelectorAll('.navbtn').forEach(x=>x.classList.toggle('active',screen==='home'&&x.dataset.go==='home'));window.scrollTo({top:0,behavior:'smooth'});if(screen==='home')renderHome()}
function renderHome(){
  const grid=document.getElementById('lessonCards');
  grid.innerHTML=lessons.map(l=>`<button class="lesson-card ${state.done.includes(l.id)?'done':''}" data-lesson="${l.id}"><span class="n">${l.id}</span><h3>${l.title}</h3><p>${l.subtitle}</p></button>`).join('');
  document.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>openLesson(+b.dataset.lesson)));
  const pct=Math.round(state.done.length/lessons.length*100);document.getElementById('doneCount').textContent=state.done.length;document.getElementById('progressBar').style.width=pct+'%';
}
function openLesson(id){
  const l=lessons.find(x=>x.id===id);if(!l)return;state.lastLesson=id;saveState();
  const done=state.done.includes(id);
  document.getElementById('lessonArticle').innerHTML=`<div class="lesson-cover"><p class="kicker">Лекција ${l.id} од ${lessons.length}</p><h1>${l.title}</h1></div><div class="lesson-body">${l.body}<div class="completebox"><button id="completeLesson" class="btn primary full ${done?'donebtn':''}">${done?'✓ Означено како прочитано':'✓ Означи ја лекцијата како прочитана'}</button></div></div>`;
  document.getElementById('completeLesson').onclick=()=>toggleDone(id);go('lesson');
}
function toggleDone(id){if(state.done.includes(id)){state.done=state.done.filter(x=>x!==id);toast('Ознаката е отстранета.')}else{state.done=unique([...state.done,id]);toast('Лекцијата е означена како прочитана. ✓')}saveState();openLesson(id)}
function nextUnread(){const l=lessons.find(x=>!state.done.includes(x.id))||lessons[(state.lastLesson||1)%lessons.length];openLesson(l.id)}
function applySettings(){document.body.classList.toggle('dark',state.theme==='dark');document.documentElement.style.setProperty('--font',(16+state.fontStep*2)+'px');document.getElementById('themeBtn').textContent=state.theme==='dark'?'☀️':'🌙';document.getElementById('fontBtn').textContent=state.fontStep===0?'A+':state.fontStep===1?'A++':'A'}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';saveState();applySettings()}
function toggleFont(){state.fontStep=(state.fontStep+1)%3;saveState();applySettings()}
function openModal(title,html){document.getElementById('modalTitle').textContent=title;document.getElementById('modalContent').innerHTML=html;document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden')}
async function installApp(){
  if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone){toast('Апликацијата веќе е додадена на телефонот. ✓');return}
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return}
  openModal('📲 Инсталирај / додај на почетен екран','<p><b>Android / Chrome:</b> отвори го менито ⋮ и избери <b>Install app</b> или <b>Add to Home screen</b>.</p><p><b>iPhone / Safari:</b> избери Share, потоа <b>Add to Home Screen</b>.</p><p class="mini">Не се инсталира APK и не треба да се дозволуваат „unknown apps“.</p>')
}

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e});
window.addEventListener('appinstalled',()=>toast('Апликацијата е додадена на телефонот. ✓'));
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)go(g.dataset.go)});
document.getElementById('nextUnread').onclick=nextUnread;
document.getElementById('installBtn').onclick=installApp;
document.getElementById('installNav').onclick=installApp;
document.getElementById('themeBtn').onclick=toggleTheme;
document.getElementById('fontBtn').onclick=toggleFont;
document.getElementById('modalClose').onclick=closeModal;
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
applySettings();renderHome();
