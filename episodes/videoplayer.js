// BY SLAVLEND

const video = document.querySelector('.video'),
	  playBtn = document.querySelector('.action_play')
	  playBtnImg = document.querySelector('.play_btn')
	  progressBar = document.querySelector('.progress')
	  timeBar = document.querySelector('.action_time')
	  soundsBtn = document.querySelector('.action_soundstoggle')
	  soundsBtnImg = document.querySelector('.sounds_btn')
	  volumeBar = document.querySelector('.volumeprogress')
	  centreImg = document.querySelector('.centre_play')
	  centreBtn = document.querySelector('.action_centreplay')
	  player = document.querySelector('.player')
	  controls = document.querySelector('.controls')
	  wrapper = document.querySelector('.wrapper')
	  fullscreenBtn = document.querySelector('.action_fullscreen')
	  fullscreenUndoBtn = document.querySelector('.action_undoFullscreen')

let isFullscreen = false;

console.log(video)

// set value to zero on start
volumeBar.value = 100;
progressBar.value = 0;

// play & pause video function
function toggleVideo() {
	if (video.paused) {
		video.play()
		playBtnImg.src = "./images/pause_button.png"
		// blur video
		unBlurVideoScreen()
	}
	else {
		video.pause();
		playBtnImg.src = "./images/play_button.png"
		// unblur video
		blurVideoScreen()
	}
}

// play & pause video sounds function
function toggleSounds() {
	if (!video.muted) {
		video.muted = true
		soundsBtnImg.style.opacity = 0.8
	}
	else {
		video.muted = false
		soundsBtnImg.style.opacity = 1
	}
}

// progress bar & timer
function updateProgress() {
	progressBar.value = (video.currentTime / video.duration) * 100

	// current timer
	// getting minutes
	let minutes = Math.floor(video.currentTime / 60)
	let secs = Math.floor(video.currentTime % 60)

	// current time
	let currentTime = `${minutes}:${secs}`

	// duration timer
	// getting minutes
	minutes = Math.floor(video.duration / 60)
	secs = Math.floor(video.duration % 60)

	// current time
	let durationTime = `${minutes}:${secs}`

	// set text
	timeBar.innerHTML = `${currentTime}/${durationTime}`

}

// setprogress by progressbar value
function setProgress() {
	video.currentTime = (video.duration * progressBar.value) / 100
}

// setvolume by volumebar value
function setVolume() {
	video.volume = volumeBar.value / 100;
}

// blur image in pause
function blurVideoScreen() {
	// little blur and change opacity for video
	video.style.filter = 'blur(2px)'
	video.style.opacity = 85
	// show play logo in center
	centreImg.style.opacity = 100;
}

// unblur image in pause
function unBlurVideoScreen() {
	// little blur and change opacity for video	
	video.style.filter = 'blur(0px)'
	video.style.opacity = 100
	// hige play logo in center
	centreImg.style.opacity = 0;	
}

function toggleFullscreen() {
	console.log('toggle + ' + isFullscreen)
  	if (!isFullscreen) {
	  if (player.requestFullscreen) {
	    player.requestFullscreen();
	  } else if (player.webkitRequestFullscreen) { /* Safari */
	    player.webkitRequestFullscreen();
	  } else if (player.msRequestFullscreen) { /* IE11 */
	    player.msRequestFullscreen();
	  }
	  fullscreenUndoBtn.style.opacity = "100"
	  video.style.height = "100%"
	  centreImg.width = 64;
	  centreBtn.style.top = "51%";
	  isFullscreen = true
	}
	else {
	  fullscreenUndoBtn.style.opacity = "0"		
	  document.webkitExitFullscreen();
	  centreImg.width = 104;
	  centreBtn.style.top = "46%";
	  isFullscreen = false
	}
}

//function setStyleFullScreen() {
//	playBtn.style.paddingTop = "3px";
//	playBtn.style.marginLeft = "-30px";
//	progressBar.style.marginLeft = "15px";
//	progressBar.style.paddingRight = "105px"
//}

// connect if exists
if (playBtn) {
	playBtn.addEventListener('click', toggleVideo)
}
if (video) {
	video.addEventListener('click', toggleVideo)
	video.addEventListener('timeupdate', updateProgress)
}
if (progressBar) {
	progressBar.addEventListener('input', setProgress)
}
if (soundsBtn) {
	soundsBtn.addEventListener('click', toggleSounds)
}
if (volumeBar) {
	volumeBar.addEventListener('input', setVolume)
}
if (centreBtn) {
	centreBtn.addEventListener('click', toggleVideo)
}
if (fullscreenBtn) {
	fullscreenBtn.addEventListener('click', toggleFullscreen)
}
if (fullscreenUndoBtn) {
	fullscreenUndoBtn.addEventListener('click', toggleFullscreen)
}