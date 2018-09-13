// Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenTogle = document.documentElement;

//Build our functions

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	// if(video.paused){
	// 	video.play();
	// } else {
	// 	video.pause();
	// }
}

function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}


function handleRangeUpdae(){
	video[this.name] = this.value;
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) *100 ;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrube(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;

}

function toggleFullScreen(){
	if (!player.fullscreenElement) {
      player.mozFullScreenEnabled();
  	} else {
  	if (player.exitFullscreen) {
      player.mozFullScreenEnabled(); 
    }
}
};


//Hook up the event lisener

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
fullScreenTogle.addEventListener('click', function  (event){
 	if (fullScreenTogle.requestFullscreen) {
    fullScreenTogle.requestFullscreen();
    } else if (fullScreenTogle.mozRequestFullScreen) { /* Firefox */
    fullScreenTogle.mozRequestFullScreen();
  }
});

toggle.addEventListener('click', togglePlay);
skipButtons.forEach( button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdae));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdae));

let mousedown = false;
progress.addEventListener('click', scrube);
progress.addEventListener('mousemove', (e) => mousedown && scrube(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', () => mousedown = false);

