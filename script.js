console.log('welcome to spotify');

//Initialize the variables
let songIndex =0;
let audioElement= new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let GIF = document.getElementById('GIF');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:'sufi',filepath:'songs/0.mp3',coverpath:'covers/cover.jpg'},
    {songName:'arijit',filepath:'songs/1.mp3',coverpath:'covers/cover.jpg'},
    {songName:'zach',filepath:'songs/2.mp3',coverpath:'covers/zach.png'},
    {songName:'passenger',filepath:'songs/3.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif ',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif ',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
    {songName:'atif',filepath:'songs/4.mp3',coverpath:'covers/cover.jpg'},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})
//audioElement.play;

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        GIF.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        GIF.style.opacity =0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        GIF.style.opacity =1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    } 
    else{
    songIndex += 1;
    }
    
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
{
        songIndex=0;
    }
    else{
    songIndex -= 1;
    }
    
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})