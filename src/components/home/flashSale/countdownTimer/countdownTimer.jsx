import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

function CountdownTimer() {
  // const [days, setdays] = useState("00");
  const [hours, sethours] = useState("00");
  const [minutes, setminutes] = useState("00");
  const [seconds, setseconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // setdays(days);
        sethours(hours);
        setminutes(minutes);
        setseconds(seconds);
      }
    }, 1000);
  };

  const TimerCard = ({ label, time }) => (
    <Card className="border me-3 minw_45px">
      <Card.Body className="text-center py-1 px-3">
        <p className="fw-bold text-primary small mb-0">{time}</p>
        <p className="fw-light text-black-50 fs_10px mb-0">{label}</p>
      </Card.Body>
    </Card>
  );

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="d-flex">
      <TimerCard label="Hrs" time={hours} />
      <TimerCard label="Min" time={minutes} />
      <TimerCard label="Sec" time={seconds} />
    </div>
  );
}

export default CountdownTimer;
