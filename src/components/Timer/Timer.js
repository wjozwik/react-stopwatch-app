import styles from './Timer.module.scss';

const Timer = ( {time} ) => {
  
  const formatMilliseconds = milliseconds => {
    let hours = Math.floor(milliseconds / (1000 * 60 * 60));
    let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    let ms = milliseconds % 1000;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(ms).padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  // const formatMilliseconds = (duration) => {
  //   var milliseconds = Math.floor((duration % 1000) / 100),
  //     seconds = Math.floor((duration / 1000) % 60),
  //     minutes = Math.floor((duration / (1000 * 60)) % 60),
  //     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
  //   hours = (hours < 10) ? "0" + hours : hours;
  //   minutes = (minutes < 10) ? "0" + minutes : minutes;
  //   seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  //   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  // };

  return (
    <div className={styles.timer}>
      <span>{formatMilliseconds(time)}</span>
    </div>
  );
};

export default Timer;