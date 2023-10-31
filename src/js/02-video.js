import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const throttledLocalStorageUpdate = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

const onPlay = data => {
  throttledLocalStorageUpdate(data.seconds);
};

player.on('timeupdate', onPlay);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
