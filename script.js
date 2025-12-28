const video = document.getElementById("bg-video")
const musicPlayer = document.getElementById("music-player")

musicPlayer.volume = 0.25

const fader = document.getElementById("fader")

const mapName = document.getElementById("mapName")
const serverName = document.getElementById("serverName")
const modeName = document.getElementById("modeName")

const videoCache = document.createElement("div")
videoCache.style.display = "none"
document.body.appendChild(videoCache)

const audioLinks = [
    "assets/music/couchmeditation.mp3",
    "assets/music/desertsand.mp3",
    "assets/music/soshiny.mp3"
]
let audioIndex = 0
const videoLinks = [
    "assets/videos/creek.mp4",
    "assets/videos/flower.mp4",
    "assets/videos/rainleaf.mp4",
    "assets/videos/jellyfish.mp4",
    "assets/videos/lavender.mp4",
    "assets/videos/rainleaf2.mp4"
]
let videoIndex = Math.floor(Math.random() * videoLinks.length)


// Cache videos.
videoLinks.forEach(link => {
    if (link == videoLinks[videoIndex]) {
        return
    }

    let vid = document.createElement("video")
    vid.src = link
    vid.preload = "auto"
    vid.muted = true

    videoCache.append(vid)
});

let duration = 0
document.addEventListener("DOMContentLoaded",function(){
    video.addEventListener("click",function(event){
        video.src = videoLinks[(videoIndex + 1)%videoLinks.length]
    })
    video.src = videoLinks[videoIndex]
    video.addEventListener("durationchange",function(event){
        console.log(video.duration)
        setTimeout(() => {
            // Switch video right as the transition hits black.
            setTimeout(() => {
                videoIndex = (videoIndex + 1)%videoLinks.length
                video.src = videoLinks[videoIndex]
            }, 1000);
            fader.classList.add("transitioner")
            // Remove animation class so that it can repeat.
            setTimeout(() => {
                fader.classList.remove("transitioner")
            }, 2000);
        }, (video.duration-1)*1000);
    });
    // Random song
    audioIndex = Math.floor(Math.random() * audioLinks.length)
    musicPlayer.src = audioLinks[audioIndex]
    musicPlayer.addEventListener("ended",function(){
        audioIndex = (audioIndex + 1)%audioLinks.length
        musicPlayer.src = audioLinks[audioIndex]
    })
    
    function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
        mapName.textContent = mapname
        serverName.textContent = servername
        modeName.textContent = gamemode
    }
})
