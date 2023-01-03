
let sIndex = 0
// let audioElement = new Audio('songs/1stsong.mp3')
let music = document.querySelector('audio')
let playbutton = document.getElementById('playbutton')
let progressBar = document.getElementById('progressBar')
let gifopacity = document.getElementById('gifopacity')
let img = document.getElementById('img')
let title = document.getElementById('title')
let artistname = document.getElementById('artistname')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let time = document.getElementById('time')

let songs = [
    {
        songName: "Pehla-Pehla-Pyar-Hain",
        title: "Pehla Pehla Pyar Hain",
        artist: "Akshu"
    },
    {
        songName: "Chocolate-Lime-Juice",
        title: "Choclate Lime Juice",
        artist: "Anku"
    },
    {
        songName: "Maye-Ni-Maye",
        title: "Maye Ni Maye",
        artist: "Akshata"
    },
    {
        songName: "Yeh-Mausam-Ka-Jaadu-Hai-Mitwa",
        title: "Yeh Mausam Ka Jado Hain Mitwa",
        artist: "Ankita"
    }
]

// Handling Pause and Play music

let playSongs = () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        playbutton.classList.remove('fa-play-circle-o');
        playbutton.classList.add('fa-pause-circle-o')
        gifopacity.style.opacity = 1
        img.classList.add('anime')
    }
    else {
        music.pause()
        playbutton.classList.remove('fa-pause-circle-o');
        playbutton.classList.add('fa-play-circle-o')
        gifopacity.style.opacity = 0
        img.classList.remove("anime")
    }
}

playbutton.addEventListener('click', () => {
   playSongs()
})


// Add Event Listners
music.addEventListener('timeupdate', () => {
    progress = parseInt((music.currentTime / music.duration) * 100)
    console.log(progress)
    progressBar.value = progress
})

// Handling songs by progressbar
progressBar.addEventListener('change', () => {
    music.currentTime = (progressBar.value * music.duration/100)
    // time=music.currentTime
})



let currentsong = (songs) => {
    title.textContent = songs.title
    artistname.textContent = songs.artist
    music.src = "songs/" + songs.songName + ".mp3"
    img.src = "style/images/" + songs.songName + ".jpg"
    time.src = music.currentTime
}

currentsong(songs[sIndex])


let nextSong = () => {
    sIndex = (sIndex+1) % songs.length;
    currentsong(songs[sIndex])
    playSongs()
}

let prevSong = () => {
    sIndex = (sIndex-1 + songs.length) % songs.length;
    currentsong(songs[sIndex])
    playSongs()
}


next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
