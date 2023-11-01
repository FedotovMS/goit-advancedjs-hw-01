import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

const playedTime = localStorage.getItem(LS_KEY) ?? 0;

player.setCurrentTime(playedTime);

const throttledLocalStorageUpdate = throttle(seconds => {
  localStorage.setItem(LS_KEY, Math.round(seconds));
}, 1000);

const onPlay = data => {
  throttledLocalStorageUpdate(data.seconds);
};

player.on('timeupdate', onPlay);
