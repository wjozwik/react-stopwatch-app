import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import styles from './components/Button/Button.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, [timer]);
  
  const startTime = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stopTime = () => {
    clearInterval (timer);
  };

  const resetTime = () => {
    setTime(0);
    setTimer(null);
    clearInterval(timer);
  };
 
  return (
    <Container>
      <Timer time={time}/>
      <div className={styles.wrapper}>
        <Button onClick={startTime}>Start</Button>
        <Button onClick={stopTime}>Stop</Button>
        <Button onClick={resetTime}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
