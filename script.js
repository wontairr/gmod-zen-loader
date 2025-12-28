const video = document.getElementById("bg-video")
const fader = document.getElementById("fader")
const mapName = document.getElementById("mapName")

const videoCache = document.createElement("div")
videoCache.style.display = "none"
document.body.appendChild(videoCache)

const videoLinks = [
    "https://www.pexels.com/download/video/20584448/",
    "https://www.pexels.com/download/video/3011973/",
    "https://cdn.pixabay.com/video/2022/06/16/120541-721287081_large.mp4",
    "https://cdn.pixabay.com/video/2024/03/12/203878-922675732_large.mp4",
    "https://cdn.pixabay.com/video/2023/10/27/186706-878842538_large.mp4"
]
let videoIndex = 0


// Cache videos.
videoLinks.forEach(link => {
    let vid = document.createElement("video")
    vid.src = link
    vid.preload = "auto"
    vid.muted = true

    videoCache.append(vid)
});

let duration = 0

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

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    mapName.textContent = mapname
}