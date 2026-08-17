'use strict';
const PAGE_W=842, PAGE_H=596;
const crop=(page,x,y,w,h,alt,cls='')=>{
  const imgW=(PAGE_W/w*100).toFixed(4), left=(-x/w*100).toFixed(4), top=(-y/h*100).toFixed(4);
  const src=`assets/page-${String(page).padStart(2,'0')}.webp`;
  return `<figure class="source-crop ${cls}" style="aspect-ratio:${w}/${h}"><img src="${src}" alt="${alt}" style="width:${imgW}%;left:${left}%;top:${top}%"></figure>`;
};
const linkCard=(href,label,sub,page,x,y,w,h)=>`<a class="source-link" href="${href}" target="_blank" rel="noopener">${crop(page,x,y,w,h,'','link-thumb')}<span><b>${label}</b><small>${sub}</small></span></a>`;

const lessons=[
{
 title:'Внесување и уредување на текст',page:'Страница 3 од оригиналниот PDF',body:()=>`
 <h2>Внесување и уредување на текст</h2>
 <p>Апликацијата Microsoft Word се користи за внесување и уредување на текстови.</p>
 <p>Со активирање на апликацијата се отвара нејзиниот прозорец.</p>
 ${crop(3,97.5,217.5,317.3,153.0,'Прозорец на Microsoft Word од оригиналниот материјал','wide')}
 <p>Елементите на прозорецот се слични како и сите апликации. Најгоре се наоѓа насловната лента каде што стои името на документот. Под насловната лента се наоѓа лентата со менија и потоа лентата со алатки. Во Word има многу ленти со алатки кои можеме да ги вклучуваме или исклучуваме по потреба.</p>
 <p>Текстот се внесува преку тастатура при што мали букви се пишуваат со клик на копчето со буквата, додека големи така што се држи притисната копчето shift и се клика на соодветното копче. Доколку сакаме да пишуваме повеќе од 1 голема буква можеме да го вклучиме копчето Caps Locк, кое по пишувањето на буквите треба да се исклучи за да продолжиме со пишување на мали букви.</p>
 <p>При пишување на текст постојат одредени правила кон кои треба да се придржуваме за да текстот биде правилно напишан и потоа да може да се уредува.</p>
 <p>Едни од правилата се:</p>
 ${crop(3,406.5,304.5,339.7,132.7,'Правила за испишување на текст од оригиналниот материјал','wide')}
 <p>Зборовите се одделуваат само со еден клик на Space. Реченицата започнува со глема буква. После точка, запирка, извичник, прашалник... се остава едно празно место.</p>`
},
{
 title:'Правила, јазик и фонт',page:'Страница 4 од оригиналниот PDF',body:()=>`
 <p>На пример речениците</p>
 <p class="example good"><b>Јас одам на училиште. Училиштето е интересно.</b></p>
 <p>се правилно напишан. После завршување на реченицата веднаш се пишува точка и потоа се клика празно место.</p>
 <p>Додека</p>
 <p class="example bad"><b>Јас одам на училиште .Училиштето е убаво.</b></p>
 <p>Не се правилно напишани бидејќи пред точката има оставено празно место, а после неа нема празно место.</p>
 <p>Текстот може да биде напишан и на кирилица и на латиница. За премин од кирилична на латинична тастатура користиме комбинација од копчињата Alt + Shift.</p>
 <p>Истото можеме да го постигнеме и до клик на копчето за промена на јазик на статусната линија на долниот дел од екранот.</p>
 ${crop(4,150.0,376.5,205.5,156.0,'Промена на јазик на тастатурата од оригиналниот материјал','medium')}
 <p>Текстот се внесува преку зборови, реченици и параграфи (пасуси). Еден пасус се внесува така што не се притиска Ентер на секој ред, туку целиот пасус го пишуваме без притискање на Ентер.</p>
 <p>Дури кога треба да се започне со нов пасус тогаш притискаме Ентер.</p>
 <p>За да бираме различни форми на буквите го менуваме фонтот на текстот.</p>
 <p>Тоа се прави со алатката за фонт која се наоѓа во менито Home.</p>
 ${crop(4,450.8,213.0,255.7,152.2,'Алатка за фонт во Home од оригиналниот материјал','medium')}
 <p>Со клик на стрелката може да се избере кој фонт сакаме</p>
 ${crop(4,593.2,343.5,142.6,157.5,'Листа со фонтови од оригиналниот материјал','narrow')}`
},
{
 title:'Големина и стил на текст',page:'Страница 5 од оригиналниот PDF',body:()=>`
 <p>Веднаш до алатката за избор на фонт, се наоѓа и алатката за големина на буквите.</p>
 <p>Најчесто текстот се пишува со големина 11.</p>
 ${crop(5,122.2,75.8,260.3,207.7,'Алатка за големина на буквите од оригиналниот материјал','medium')}
 <p>Сега можеме да започнеме со пишување на текст. Погледнете го следниот текст.</p>
 <h3>Вежба 1</h3>
 <p class="exercise-text">Се приближуваголем <b>натпревар</b> кој треба да се организира и да се подготви. Треба да се направат <i>постери</i>, покани, да се направи <u>листа</u> на гости и уште многу други работи. Ти, како <b><u>главен организатор</u></b>, мора да преземеш дел од обврските.</p>
 ${crop(5,91.5,306.8,318.0,126.0,'Вежба 1 од оригиналниот материјал','wide')}
 <p>Може да забележите дека одредени зборови се истакнати. Тоа се прави со поставување на стил со алатките кои се наоѓаат на лентата во менито Home.</p>
 ${crop(5,362.2,30.8,399.8,210.0,'B, I, U и боја на текст од оригиналниот материјал','wide')}
 <p>Со клик на копчето B се пишува задебелен текст.</p><p>На пример: коса <b>коса</b></p>
 <p>Со клик на копчето I се пишува закосен текст.</p><p>На пример: коса <i>коса</i></p>
 <p>Со клик на копчето U се пишува подвлечен текст</p><p>На пример: коса <u>коса</u></p>
 <p>Истовремено текстот може да биде и задеблен и подвлечен и закосен, значи може да бидат притиснати повеќе копчиња истовремено. Исто така текстот може да биде напишан и во боја.</p>
 <p class="task-callout">Обиди се да го напишеш текстот од Вежба 1 при што сите зборови ќе ги уредиш онака како што се во вежбата.</p>`
},
{
 title:'Пасуси, бришење и зачувување',page:'Страница 6 од оригиналниот PDF',body:()=>`
 <p>Ајде повторно да го погледнеме текстот од Вежба 1</p>
 ${crop(6,96.0,111.0,325.5,124.5,'Текстот од Вежба 1 од оригиналниот материјал','wide')}
 <p>Ова е текст од еден пасус. Целиот пасус е напишан без да се притисне копчето Ентер. Ентер се притиска дури на крајот на пасусот после зборот - обврските.</p>
 <p>Да погледнеме сега како завршуваат редовите во пасусот. Можеме да видиме дека тие завршуваат израмнети еден под друг и од левата и од десната страна. Се вели дека овој пасус има двострано порамнување.</p>
 <p>Текстот може да се порамни и од лево, од десно и да се постави централно. Најчесто централно порамнување се поставува на насловот на текстот доклку треба да биде на средина.</p>
 <p>Порамнувањето се поставува со алатките за порамнување од менито Home.</p>
 ${crop(6,176.2,477.0,135.8,60.8,'Алатки за порамнување од оригиналниот материјал','small')}
 <p>За да се постави порамнување на пасусот доволно е само да се кликне со глувчето било каде во пасусот и да се избере соодветната алатка за порамнување.</p>
 <p>Корекции на текстот/бришење се прави со копчињата Delete и BackSpace. Копчето Delete го брише знакот десно од курсорот, додека BackSpace го брише знакот лево од курсорот.</p>
 <p>Кога ќе завршиме со пишувањето и уредувањето на текстот следен чекор е зачувување на документот. Тоа се прави со File - Save или File - Save As. Со првата наредба Save во документот се зачувуваат само промените што сме ги направиле додека името и локацијата на документот не се менуваат. При избор на Save As документот може да се зачува и под друго име и на друга локација.</p>
 <p>За да отвориме постоечки документ се користи File - Open.</p>
 <p>За да отвориме нов празен документ се користи file - New - blank document.</p>
 <p>Одговори на прашањата поставени на следниот линк:</p>
 ${linkCard('https://forms.office.com/e/BHKYzG4qKG','Домашна задача','Оригинален линк од PDF материјалот',6,657.0,458.2,37.5,37.6)}`
},
{
 title:'Креирање нумерирани и означени листи',page:'Страница 7 од оригиналниот PDF',body:()=>`
 <h2>Креирање нумерирани и означени листи</h2>
 <p>Во word може да се креираат нумерирани и означени листи. Истите се креираат кога сакаме да напишеме список.</p>
 <p>Ова е означена листа:</p><ul><li>прв</li><li>втор</li><li>трет</li></ul>
 <p>Ова е нумерирана листа:</p><ol><li>прв</li><li>втор</li><li>трет</li></ol>
 <p>Листите се креираат со клик на соодветните алатки од менито Home.</p>
 ${crop(7,95.2,406.5,322.6,84.0,'Алатки за означени и нумерирани листи од оригиналниот материјал','wide')}
 <p>При избор на алатката ќе се појави првиот симбол или првиот број. Се пишува текстот од листата и со клик на Ентер се појавува следниот симбол. Кога ќе се заврши со набројувањето се притистка Ентер два пати за да се прекине.</p>
 <p>Погледнете го видеото за да видите како се поставуваат листите</p>
 <a class="video-source" href="https://www.youtube.com/embed/iWAY5dPb6nE?feature=oembed" target="_blank" rel="noopener">${crop(7,430.1,199.1,300.8,225.8,'Видео за поставување листи од оригиналниот материјал','wide')}<span>▶ Отвори го видеото</span></a>`
},
{
 title:'Цртање во документите и креирање табели',page:'Страница 8 од оригиналниот PDF',body:()=>`
 <h2>Цртање во документите</h2>
 <p>Слика се вметнува со наредбата Insert - Pictures - This device за внесување на слика од компјутерот. По вметнувањето сликата треба да се постави во однос на другите елементи во текстот. За тоа од менито Picture Format ја бираме алатката Wrap text и можеме да избереме повеќе опции - најчесто Square или Tight.</p>
 ${crop(8,118.5,270.0,262.5,186.8,'Picture Format и Wrap text од оригиналниот материјал','wide')}
 <p>Најпрво се подесуваат димензиите на сликата со користење на малите кругови кои се појавуваат на аглите на сликата.</p>
 <p>Со горната алатка во формата:</p>
 ${crop(8,473.2,128.2,111.8,51.0,'Алатка за ротирање од оригиналниот материјал','tiny')}
 <p>се ротира сликата</p>
 <h2>Креирање на табели</h2>
 <p>Табела се вметнува со наредбата: Insert – Table – Insert table.</p>
 <p>Во прозорецот кој ќе се отвори се пишува бојот на редици – Number of rows и бројот на колони – Number of columns</p>
 ${crop(8,523.5,264.0,309.7,273.8,'Insert Table од оригиналниот материјал','medium')}`
},
{
 title:'Уредување на табели',page:'Страница 9 од оригиналниот PDF',body:()=>`
 <p>За да ја уредиме табелата кликаме било каде во неа и ќе се појави менито Design.</p>
 <p>На shading се поставува позадина на ќелиите.</p>
 ${crop(9,102.0,63.0,138.0,195.0,'Shading од оригиналниот материјал','narrow')}
 <p>Бојата и стилот на линиите на табелата може да се подесат со алатката Border Painter. Се подесува стилот, дебелината и бојата на линијата, алатката Border Painter се вклучува и се бојата линиите.</p>
 ${crop(9,111.0,357.0,266.2,184.5,'Border Painter од оригиналниот материјал','wide')}
 <p>Додавање и бришење на редици и колони се прави преку менитo Table Layout.</p>
 ${crop(9,438.0,113.2,304.5,149.3,'Table Layout од оригиналниот материјал','wide')}
 <p>Спојување на ќелии се прави така што се селектираат ќелиите и од мениту Table Layout се клика на Merge Cells.</p>
 ${crop(9,438.0,332.2,300.0,73.6,'Merge Cells од оригиналниот материјал','wide')}`
},
{
 title:'Видео и самопроценка',page:'Страница 10 од оригиналниот PDF',body:()=>`
 <p>Научи преку видеото како се работи со табели.</p>
 <a class="video-source" href="https://www.youtube.com/embed/GzhTWstql1s?feature=oembed" target="_blank" rel="noopener">${crop(10,100.5,86.6,315.0,236.3,'Видео за работа со табели од оригиналниот материјал','wide')}<span>▶ Отвори го видеото</span></a>
 <p>Кликни на формата подолу и оцени се самиот за твоите постигнувања</p>
 ${linkCard('https://docs.google.com/forms/d/e/1FAIpQLScsiAMMXH-21h5fNBxXlEHwmIm9FF9j5qgeR3pX-dNPc5jsJg/viewform?embedded=true','Што научив - самопроценка','Оригинална форма од PDF материјалот',10,228.8,405.8,37.4,37.4)}`
}
];

const quiz=[
['За што се користи Microsoft Word?',['За внесување и уредување на текстови.','Само за цртање.','Само за табели.'],0],['Со кое копче се остава празно место меѓу зборовите?',['Enter','Space','Shift'],1],['Која комбинација е наведена за премин од кирилична на латинична тастатура?',['Alt + Shift','Ctrl + S','Shift + Enter'],0],['Каде се наоѓа алатката за фонт?',['Во менито Home.','Во File.','Во Picture Format.'],0],['Кое копче се користи за задебелен текст?',['B','I','U'],0],['Кое копче го брише знакот десно од курсорот?',['BackSpace','Delete','Enter'],1],['Со која наредба се отвора постоечки документ?',['File - Open','File - New','File - Save As'],0],['Како се прекинува набројувањето во листа?',['Со Ентер два пати.','Со Shift.','Со Space два пати.'],0],['Кои Wrap text опции се наведени како најчести?',['Square или Tight.','Save или Open.','Bold или Italic.'],0],['Со која наредба се вметнува табела?',['Insert – Table – Insert table.','File – Open.','Home – Font.'],0],['Со која алатка се поставува позадина на ќелиите?',['Shading','Border Painter','Merge Cells'],0],['Каде се прави додавање и бришење на редици и колони?',['Table Layout','Picture Format','File'],0],['Со која наредба се спојуваат ќелии?',['Merge Cells','Wrap text','Save As'],0]
];
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){localStorage.setItem(k,JSON.stringify(v))}};
let state={done:store.get('wordUciDone',[]),best:store.get('wordUciBest',0),theme:store.get('wordUciTheme','light')};let route='home',lessonIndex=0,qOrder=[],qi=0,score=0,locked=false,deferredPrompt=null;
const app=document.getElementById('app'),toast=document.getElementById('toast'),installBtn=document.getElementById('installBtn');
function persist(){store.set('wordUciDone',state.done);store.set('wordUciBest',state.best);store.set('wordUciTheme',state.theme)}function showToast(t){toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}function setTheme(){document.documentElement.classList.toggle('dark',state.theme==='dark');document.getElementById('themeBtn').textContent=state.theme==='dark'?'☀️':'🌙'}function setRoute(r){route=r;render();window.scrollTo({top:0,behavior:'smooth'})}function navActive(){document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===route||(route==='lesson'&&b.dataset.go==='lessons')))}function pct(){return Math.round(state.done.length/lessons.length*100)}
function render(){navActive();if(route==='home')home();else if(route==='lessons')lessonsPage();else if(route==='lesson')lessonPage();else if(route==='quiz')quizStart();else progressPage();app.focus({preventScroll:true})}
function home(){app.innerHTML=`<div class="page"><section class="hero"><div><h1>Microsoft Word</h1><p>Материјали за ученици по предметот Техничко образование и информатика</p><div class="pillrow"><span class="pill">📚 8 делови</span><span class="pill">🖼️ оригинални screenshots</span><span class="pill">📶 работи offline</span></div><div style="margin-top:16px"><button class="primary" onclick="setRoute('lessons')">Започни со учење</button></div></div><img src="icons/icon-192.png" alt="Word"></section><div class="section-title"><h2>Твој напредок</h2><small>${state.done.length}/${lessons.length} делови</small></div><div class="card"><div class="progressbar"><span style="width:${pct()}%"></span></div><div class="statgrid" style="margin-top:12px"><div class="stat"><b>${pct()}%</b><small>завршено</small></div><div class="stat"><b>${state.best}%</b><small>најдобар квиз</small></div><div class="stat"><b>${state.done.length}</b><small>прочитани</small></div></div></div><div class="section-title"><h2>За материјалот</h2></div><div class="card about-source"><div><b>Microsoft Word - Материјали за ученици</b><p>Текстот го следи оригиналниот PDF. Во лекциите веќе нема screenshots од целите страници; се прикажуваат само оригиналните фотографии и screenshots што се наоѓаат во материјалот, поставени кај соодветниот текст.</p><p>Изработи: Ѓорѓина Димова наст. по информатика<br>ООУ „Страшо Пинџур“ - Неготино</p></div></div><div class="section-title"><h2>Инсталација на телефон</h2></div><div class="card install-help"><b>Android / Chrome:</b> отвори го менито ⋮ и избери <b>Install app</b> или <b>Add to Home screen</b>. По првото отворање, материјалите се достапни и offline.</div></div>`}
function lessonsPage(){app.innerHTML=`<div class="page"><div class="section-title"><h2>Лекции</h2><small>${state.done.length}/${lessons.length} завршени</small></div><div class="grid">${lessons.map((l,i)=>`<button class="lesson-card ${state.done.includes(i)?'done':''}" onclick="openLesson(${i})"><span class="lesson-num">${i+1}</span><span><h3>${l.title}</h3><p>${l.page}${state.done.includes(i)?' · ✅ прочитано':''}</p></span></button>`).join('')}</div></div>`}function openLesson(i){lessonIndex=i;route='lesson';render();window.scrollTo(0,0)}function lessonPage(){const l=lessons[lessonIndex];app.innerHTML=`<div class="page"><div class="card lesson-card-full"><div class="lesson-head"><span class="lesson-num">${lessonIndex+1}</span><div><h1>${l.title}</h1><p>${l.page}</p></div></div><div class="source-note">📄 Текстот и визуелните примери се од оригиналниот PDF. Сликите се извадени од страницата визуелно и се поставени кај соодветниот дел од текстот.</div><div class="source-flow">${l.body()}</div><div class="lesson-actions"><button class="secondary" onclick="${lessonIndex?`openLesson(${lessonIndex-1})`:"setRoute('lessons')"}">← Назад</button><button class="primary" onclick="completeLesson()">${state.done.includes(lessonIndex)?'✅ Прочитано':'Означи како прочитано'}</button>${lessonIndex<lessons.length-1?`<button class="secondary" onclick="openLesson(${lessonIndex+1})">Следно →</button>`:''}</div></div></div>`}function completeLesson(){if(!state.done.includes(lessonIndex)){state.done.push(lessonIndex);persist();showToast('Зачувано како прочитано ✅')}else showToast('Овој дел е веќе прочитан');lessonPage()}
function quizStart(){app.innerHTML=`<div class="page"><div class="card quizbox"><span class="badge">❓ Проверка на знаење</span><h1>Квиз од материјалот</h1><p class="install-help">Прашањата користат само информации што се појавуваат во оригиналниот PDF.</p><div class="statgrid"><div class="stat"><b>${quiz.length}</b><small>прашања</small></div><div class="stat"><b>${state.best}%</b><small>најдобар резултат</small></div><div class="stat"><b>${state.done.length}/8</b><small>прочитани делови</small></div></div><div style="margin-top:16px"><button class="primary" onclick="startQuiz()">Започни квиз</button></div></div></div>`}function startQuiz(){qOrder=[...Array(quiz.length).keys()].sort(()=>Math.random()-.5);qi=0;score=0;locked=false;question()}function question(){const q=quiz[qOrder[qi]];app.innerHTML=`<div class="page"><div class="card quizbox"><div class="qtop"><span>Прашање ${qi+1}/${quiz.length}</span><span>${score} точни</span></div><div class="progressbar" style="margin-top:10px"><span style="width:${qi/quiz.length*100}%"></span></div><h2 class="qtitle">${q[0]}</h2><div class="answers">${q[1].map((a,i)=>`<button class="answer" onclick="answer(${i})">${a}</button>`).join('')}</div><div id="next"></div></div></div>`}function answer(i){if(locked)return;locked=true;const q=quiz[qOrder[qi]],buttons=[...document.querySelectorAll('.answer')];buttons[q[2]].classList.add('correct');if(i===q[2])score++;else buttons[i].classList.add('wrong');document.getElementById('next').innerHTML=`<button class="primary" style="margin-top:16px" onclick="nextQ()">${qi===quiz.length-1?'Резултат':'Следно прашање →'}</button>`}function nextQ(){qi++;locked=false;if(qi<quiz.length)question();else quizResult()}function quizResult(){const p=Math.round(score/quiz.length*100);if(p>state.best){state.best=p;persist()}app.innerHTML=`<div class="page"><div class="card quizbox" style="text-align:center"><div style="font-size:62px">${p>=80?'🏆':p>=60?'👏':'📚'}</div><h1>${p}%</h1><p>Точни одговори: <b>${score}/${quiz.length}</b></p><p class="install-help">${p>=80?'Одлично!':'Прегледај ги лекциите и обиди се повторно.'}</p><button class="primary" onclick="startQuiz()">Повтори го квизот</button> <button class="secondary" onclick="setRoute('lessons')">Лекции</button></div></div>`}
function progressPage(){app.innerHTML=`<div class="page"><div class="section-title"><h2>Напредок</h2></div><div class="card"><div class="statgrid"><div class="stat"><b>${state.done.length}/8</b><small>прочитани</small></div><div class="stat"><b>${pct()}%</b><small>материјал</small></div><div class="stat"><b>${state.best}%</b><small>квиз</small></div></div><div class="progressbar" style="margin-top:16px"><span style="width:${pct()}%"></span></div></div><div class="section-title"><h2>Делови</h2></div><div class="grid">${lessons.map((l,i)=>`<button class="lesson-card ${state.done.includes(i)?'done':''}" onclick="openLesson(${i})"><span class="lesson-num">${state.done.includes(i)?'✓':i+1}</span><span><h3>${l.title}</h3><p>${state.done.includes(i)?'Прочитано':'Не е означено како прочитано'}</p></span></button>`).join('')}</div><div style="margin-top:18px"><button class="secondary" onclick="resetProgress()">Избриши напредок</button></div></div>`}function resetProgress(){if(confirm('Да се избрише зачуваниот напредок и резултатот од квизот?')){state.done=[];state.best=0;persist();progressPage();showToast('Напредокот е избришан')}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)setRoute(b.dataset.go)});document.getElementById('themeBtn').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';persist();setTheme()});window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false});installBtn.addEventListener('click',async()=>{if(!deferredPrompt){showToast('Chrome ⋮ → Install app / Add to Home screen');return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true});window.addEventListener('appinstalled',()=>{installBtn.hidden=true;showToast('Апликацијата е инсталирана ✅')});if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));setTheme();render();
