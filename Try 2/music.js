//const music = ;
//music.play();
const songs = [
    {
        id: '1',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '2',
        songName: `Falloff <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img2.png"
    },
    {
        id: '3',
        songName: `Nocap <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img3.png"
    },
    {
        id: '4',
        songName: `Blowing up <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img4.png"
    },
    {
        id: '5',
        songName: `Tu aa k dekh le <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img5.png"
    },
    {
        id: '6',
        songName: `Lil Bunty <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img6.png"
    },
    {
        id: '7',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '8',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '9',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '10',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '11',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '12',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '13',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '14',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
    {
        id: '15',
        songName: `untitled <br>
        <div class = "subtitle">Kr$na</div>`,
        poster: "img1.png"
    },
]
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItems')).forEach((el) => {
        el.StyleSheet.background = `rgb(105, 105, 105, 0)`;
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {

        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = song.filter((xyz) => {
            return xyz.id == index;
        });
        songTitles.forEach(xyz => {
            let { songName } = xyz;
            title.innerHTML = songName;
        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = `rgb(105, 105, 105, 1)`

    })
})
