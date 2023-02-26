//window.onload = function(){
//    window.setInterval(function(){
//         var now = new Date();
//          var clock = document.querySelector('.time');
//        clock.innerHTML = now.toLocaleTimeString();
//    }, 1000);
//   };

window.setInterval(function(){
  var nowTime = new Date();
  var clock = document.querySelector('.time');
clock.innerHTML = nowTime.toLocaleTimeString();
}, 1000);




window.setInterval(function(){
 var options = {
   weekday: 'long',
   day: 'numeric',
   month: 'long',
 }
    var nowDate = new Date();
    var date = document.querySelector('.date');
 date.innerHTML = nowDate.toLocaleDateString('en-EN', options);
}, 1000);


function randomInteger(min, max) {
 let rand = min - 0.5 + Math.random() * (max - min + 1);
 return Math.round(rand);
}
function greeting(){

let randomSlide = randomInteger(10 , 20);


 // prev slide
 const prevSlideBtn = document.querySelector('.slide-prev');

 var slideTime = new Date().getHours();

 function prevSlide() {
   randomSlide--;
 if(randomSlide < 10){
   randomSlide = 20;
 }

 if(slideTime >= 6 && slideTime < 12){
   document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomSlide}.jpg)`;
 } else if(slideTime >= 12 && slideTime < 18){
   document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${randomSlide}.jpg)`;
 } else if(slideTime >= 18 && slideTime < 24){
   document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomSlide}.jpg)`;
 } else if(slideTime >= 0 && slideTime < 6){
   document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${randomSlide}.jpg)`;
 }  }

 prevSlideBtn.addEventListener('click', prevSlide);

// next slide

const nextSlideBtn = document.querySelector('.slide-next');

// var slideTime = new Date().getHours();

function nextSlide() {
 randomSlide++;
if(randomSlide > 20){
 randomSlide = 10;
}

if(slideTime >= 6 && slideTime < 12){
 document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomSlide}.jpg)`;
} else if(slideTime >= 12 && slideTime < 18){
 document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${randomSlide}.jpg)`;
} else if(slideTime >= 18 && slideTime < 24){
 document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomSlide}.jpg)`;
} else if(slideTime >= 0 && slideTime < 6){
 document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${randomSlide}.jpg)`;
}  }

nextSlideBtn.addEventListener('click', nextSlide);

var Greetdate = new Date();
   greetTime = Greetdate.getHours();
   var greet = document.querySelector('.greeting');
   var lang = window.navigator.language || navigator.userLanguage

   if (greetTime >= 6 && greetTime < 12){
     if ( lang  != "en" ) {       
       greet.innerHTML = `Good morning`;
      } else if ( lang  != "ru" ){
       greet.innerHTML = `Доброе утро`;
      } else {
       greet.innerHTML = `Добрай раніцы`
      }
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomSlide}.jpg)`;

   } else if (greetTime >= 12 && greetTime < 18){
     if ( lang  != "en" ) {       
       greet.innerHTML = `Good afternoon`;
      } else if ( lang  != "ru" ){
       greet.innerHTML = `Добрый день`;
      } else {
       greet.innerHTML = `Добры дзень`
      }
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${randomSlide}.jpg)`;

   } else if (greetTime >= 18 && greetTime < 24){
     if ( lang  != "en-En" ) {       
       greet.innerHTML = `Good evening`;
      } else if ( lang  != "ru" ){
       greet.innerHTML = `Добрый вечер`;
      } else {
       greet.innerHTML = `Добры вечар`;
      }
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomSlide}.jpg)`;

   } else if (greetTime >= 0 && greetTime < 6){
     if ( lang  != "en-En" ) {       
       greet.innerHTML = `Good night`;
      } else if ( lang  != "ru" ){
       greet.innerHTML = `Спокойной ночи`;
      } else {
       greet.innerHTML = `Дабранач`;
      }
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${randomSlide}.jpg)`;
   } 
}
greeting();



const userName = document.querySelector('.name')
function setLocal() {
localStorage.setItem(this.type, this.value)
}

function setLocalStorage () {
 userName.addEventListener('change', setLocal)
}

setLocalStorage();
document.querySelector('.name').value = `${localStorage.getItem(userName.type)}`;




// let dateQuote = [
//   {
//     text: `"Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете"`,
//     author: "Стив Макконнелл"
//   },
//   {
//     text: `"Сложность программы растет до тех пор, пока не превысит способности программиста"`,
//     author: "Артур Блох. Законы Мэрфи"
//   },
//     {
//     text: `"Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены"`,
//     author: "И. Берард"
//   }, 
//   {
//     text: `"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"`,
//     author: "Наполеон Хилл"
//   }
// ]  

// if ( lang  != "en-En" ) {       
 let dateQuote = [
   {
     text: "Write code as if it were accompanied by a violent psychopath who knows where you live",
     author: "Steve McConnell"
   },
   {
     text: "The complexity of the program grows until it exceeds the ability of the programmer.",
     author: "Arthur Bloch. Murphy's laws"
   },
     {
     text: "It's very easy to walk on water and develop programs following the SOW... if they are frozen",
     author: "I. Berard"
   }, 
   {
     text: "What the human mind can comprehend and believe, it can achieve",
     author: "Napoleon Hill"
   }
 ]  
//  } else if ( lang  != "Ru-ru" ){
//   dateQuote = [
//     {
//       text: "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
//       author: "Стив Макконнелл"
//     },
//     {
//       text: "Сложность программы растет до тех пор, пока не превысит способности программиста",
//       author: "Артур Блох. Законы Мэрфи"
//     },
//       {
//       text: "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
//       author: "И. Берард"
//     }, 
//     {
//       text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
//       author: "Наполеон Хилл"
//     }
//   ]  
//  } else {
//   dateQuote = [
//     {
//       text: "Пішыце код так, як быццам суправаджаць яго будзе схільны да гвалту псіхапат, які ведае, дзе вы жывяце",
//       author: "Стыў Макаконэл"
//     },
//     {
//       text: "Складанасць праграмы расце да таго часу, пакуль не перавысіць здольнасці праграміста",
//       author: "Артур Блох. Законы Мэрфі"
//     },
//       {
//       text: "Хадзіць па вадзе і распрацоўваць праграмы, прытрымліваючыся ТЗ, вельмі проста… калі яны замарожаныя",
//       author: "І. Берард"
//     }, 
//     {
//       text: "Што розум чалавека можа спасцігнуць і ў што ён можа паверыць, таго ён здольны дасягнуць",
//       author: "Напалеон Хіл"
//     }
//   ]
//  }

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeBtn = document.querySelector('.change-quote');

let randomDate = dateQuote[Math.floor(Math.random() * dateQuote.length)];
let randomQuote = randomDate.text;
let randomAuthor = randomDate.author;

quote.innerHTML = `${randomQuote}`;
author.innerHTML = `${randomAuthor}`;

changeBtn.addEventListener('click', function(){
 let randomChange = dateQuote[Math.floor(Math.random() * dateQuote.length)];
 // if (randomChange === randomDate && randomChange !== 4){
 //   randomChange = randomChange + 1;
 // } else if (randomChange === randomChange && randomChange === 4){
 //   randomChange = randomChange - 1;
 // }

 randomQuote = randomChange.text;
 randomAuthor = randomChange.author;

 quote.innerHTML = `${randomQuote}`;
 author.innerHTML = `${randomAuthor}`;
});


const play = document.querySelector('.play'),
     prev = document.querySelector('.play-prev'),
     next = document.querySelector('.play-next'),
     audio = document.querySelector('audio')
     //Aqua = document.querySelector('.Aqua'),
     //Ennio = document.querySelector('.Ennio'),
     //River = document.querySelector('.River'),    
     //Summer = document.querySelector('.Summer'),
     Title1 = document.querySelector('.Aqua_title '),
     Title2 = document.querySelector('.River_title'),
     Title3 = document.querySelector('.Summer_title'),  
     Title4 = document.querySelector('.Ennio_title')

const songsNames = ['Aqua Caelestis', 'River Flows In You', 'Summer Wind', 'Ennio Morricone'];

let songIndex = 0;
let isPlay = false;

play.addEventListener('click', function() {
 play.classList.toggle('play');
 play.classList.toggle('pause');

 if(isPlay === true){
   pauseSong();
 } else{
   playSong();
 }
 if(songIndex === 0){
   Title1.classList.add('playing')
   Title2.classList.remove('playing')
   Title3.classList.remove('playing')
   Title4.classList.remove('playing')
 }
})

function loadSong (song) {
 audio.src = `assets/sounds/${song}.mp3`;
 console.log(audio.src = `assets/sounds/${song}.mp3`);
}
loadSong(songsNames[songIndex]);

function playSong() {
 isPlay = true;
 audio.play()
} 
function pauseSong() {
 isPlay = false;
 audio.pause()
}


//next song

function nextSong() {
 songIndex = songIndex + 1;

 if(songIndex > songsNames.length - 1){
   songIndex = 0;
 } 

 loadSong(songsNames[songIndex]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');

 if(songIndex === 0){
   Title1.classList.add('playing')
   Title2.classList.remove('playing')
   Title3.classList.remove('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 1){
   Title1.classList.remove('playing')
   Title2.classList.add('playing')
   Title3.classList.remove('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 2){
   Title1.classList.remove('playing')
   Title2.classList.remove('playing')
   Title3.classList.add('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 3){
   Title1.classList.remove('playing')
   Title2.classList.remove('playing')
   Title3.classList.remove('playing')
   Title4.classList.add('playing')
 }
}

next.addEventListener('click', nextSong);

// prev song

function prevSong() {
 songIndex = songIndex - 1;

 if(songIndex < 0){
   songIndex = songsNames.length - 1;
 } 

 loadSong(songsNames[songIndex]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');

 if(songIndex === 0){
   Title1.classList.add('playing')
   Title2.classList.remove('playing')
   Title3.classList.remove('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 1){
   Title1.classList.remove('playing')
   Title2.classList.add('playing')
   Title3.classList.remove('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 2){
   Title1.classList.remove('playing')
   Title2.classList.remove('playing')
   Title3.classList.add('playing')
   Title4.classList.remove('playing')
 } else if(songIndex === 3){
   Title1.classList.remove('playing')
   Title2.classList.remove('playing')
   Title3.classList.remove('playing')
   Title4.classList.add('playing')
 }
}

// song by name

Title1.addEventListener('click', function () {
 loadSong(songsNames[0]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');

 Title1.classList.add('playing')
 Title2.classList.remove('playing')
 Title3.classList.remove('playing')
 Title4.classList.remove('playing')
})

Title2.addEventListener('click', function () {
 loadSong(songsNames[1]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');

 Title1.classList.remove('playing')
 Title2.classList.add('playing')
 Title3.classList.remove('playing')
 Title4.classList.remove('playing')
})

Title3.addEventListener('click', function () {
 loadSong(songsNames[2]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');

 Title1.classList.remove('playing')
 Title2.classList.remove('playing')
 Title3.classList.add('playing')
 Title4.classList.remove('playing')
})

Title4.addEventListener('click', function () {
 loadSong(songsNames[3]);
 playSong();

 play.classList.remove('play');
 play.classList.add('pause');  

 Title1.classList.remove('playing')
 Title2.classList.remove('playing')
 Title3.classList.remove('playing')
 Title4.classList.add('playing')
})

prev.addEventListener('click', prevSong);

// progress bar
const progress = document.querySelector('.progress-bar');

function updateProgressBar(event){
 const {duration, currentTime} = event.srcElement;
 const progressPercent = (currentTime / duration) * 100;
 progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgressBar)

// set progress

const progressContainer = document.querySelector('.progress-bar-container')

function setProgress(event) {
 const containerWidth = this.clientWidth;
 const clickPositionX = event.offsetX;
 const audioDuration = audio.duration;

 audio.currentTime = (clickPositionX / containerWidth) * audioDuration;
}

progressContainer.addEventListener('click', setProgress)

// sound

const soundContainer = document.querySelector('.audio-bar-container')
const sound = document.querySelector('.audio-bar')

 audio.volume = 0.5;

function setAudio(event) {
 const containerWidth = this.clientWidth;
 const clickPositionX = event.offsetX;

 const soundPercent = (clickPositionX / containerWidth) * 100;
 sound.style.width = `${soundPercent}%`

 audio.volume = (clickPositionX / containerWidth);

 volumeIcon()
}

soundContainer.addEventListener('click', setAudio)

const NoSound = document.querySelector('.NoSound');
const LowSound = document.querySelector('.LowSound');
const MidSound = document.querySelector('.MidSound');
const FullSound = document.querySelector('.FullSound');

function volumeIcon() {
 if(audio.volume >= 0 && audio.volume < 0.01){
   NoSound.classList.add('flex')
   MidSound.classList.remove('flex')
   MidSound.classList.remove('flex')
   FullSound.classList.remove('flex')
 } else if(audio.volume >= 0.01 && audio.volume < 0.33){
   NoSound.classList.remove('flex')
   LowSound.classList.add('flex')
   MidSound.classList.remove('flex')
   FullSound.classList.remove('flex')
 } else if (audio.volume >= 0.33 && audio.volume < 0.67){
   NoSound.classList.remove('flex')
   LowSound.classList.remove('flex')
   MidSound.classList.add('flex')
   FullSound.classList.remove('flex')
 } else if (audio.volume >= 0.67 && audio.volume <= 1){
   NoSound.classList.remove('flex')
   LowSound.classList.remove('flex')
   MidSound.classList.remove('flex')
   FullSound.classList.add('flex')
 }
}

MidSound.addEventListener('click', function() {
 audio.volume = 0;
 var soundWidth = audio.volume * 100;
 sound.style.width = `${soundWidth}%`

 NoSound.classList.add('flex')
 LowSound.classList.remove('flex')
 MidSound.classList.remove('flex')
 FullSound.classList.remove('flex')

 volumeIcon()
})

NoSound.addEventListener('click', function() {
 audio.volume = 0.5;
 var soundWidth = audio.volume * 100;
 sound.style.width = `${soundWidth}%`

 NoSound.classList.remove('flex')
 MidSound.classList.add('flex')
 FullSound.classList.remove('flex')

 volumeIcon()
})

FullSound.addEventListener('click', function() {
 audio.volume = 0; 
 var soundWidth = audio.volume * 100;
 sound.style.width = `${soundWidth}%`

 NoSound.classList.add('flex')
 LowSound.classList.remove('flex')
 MidSound.classList.remove('flex')
 FullSound.classList.remove('flex')

 volumeIcon()
})

LowSound.addEventListener('click', function() {
 audio.volume = 0;
 var soundWidth = audio.volume * 100;
 sound.style.width = `${soundWidth}%`

 NoSound.classList.add('flex')
 LowSound.classList.remove('flex')
 MidSound.classList.remove('flex')
 FullSound.classList.remove('flex')

 volumeIcon()
})

// auto change song

audio.addEventListener('ended', nextSong)

//weather

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=2e0bb83cd237f9b19d5fd2462a9d03c8&units=metric`)
 .then(function(resp) { return resp.json() })
 .then(function( data) {
   console.log(data);
   
   document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}°C`;
   document.querySelector('.weather-description').innerHTML = data.weather[0].description;

   document.querySelector('.wind').innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
   document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
 })



 document.querySelector('.city').addEventListener('change', changeCity);
 

 function  changeCity() {
   let inputValue = document.querySelector('.city').value;
   console.log(inputValue);

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&lang=en&appid=2e0bb83cd237f9b19d5fd2462a9d03c8&units=metric`)
     .then(function(resp) { return resp.json() })
     .then(function( data) {
       console.log(data);
   
       document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}°C`;
       document.querySelector('.weather-description').innerHTML = data.weather[0].description;

       document.querySelector('.wind').innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
       document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
     })
 }