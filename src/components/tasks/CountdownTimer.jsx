import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CountdownTimer = () => {
  const [isStart, setIsstart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    setIsstart(true);
  };

  const handleReset = () => {
    setIsstart(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const handlePause = () => {
    setIsstart(false);
  };

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((s) => s - 1);
        } else {
          if (minutes > 0) {
            setMinutes((m) => m - 1);
            setSeconds(59);
          } else if (hours > 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStart, hours, seconds, minutes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const num = parseInt(value) || 0;

    if (name === "hours") setHours(num);
    if (name === "minutes") setMinutes(num);
    if (name === "seconds") setSeconds(num);
  };

  return (
    <>
      <h1 className="text-4xl text-center mt-2 border-b-2 border-dotted">
        Count Down Timer
      </h1>

      {!isStart && (
        <>
          <div className="flex justify-center space-x-12 mt-12">
            <input
              onChange={handleInputChange}
              value={hours}
              name="hours"
              type="number"
              placeholder="HH"
              className="border-2 w-16 h-16 text-center"
              min="0"
            />
            <input
              onChange={handleInputChange}
              value={minutes}
              name="minutes"
              type="number"
              placeholder="MM"
              className="border-2 w-16 h-16 text-center"
              min="0"
            />
            <input
              onChange={handleInputChange}
              value={seconds}
              name="seconds"
              type="number"
              placeholder="SS"
              className="border-2 w-16 h-16 text-center"
              min="0"
            />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleStart}
              className="bg-amber-100 w-16 rounded-xl cursor-pointer"
            >
              Start
            </button>
          </div>
        </>
      )}

      {isStart && (
        <>
          <div className="mt-8 flex justify-center space-x-11">
            <div className="text-4xl">{hours}</div>
            <div className="text-4xl">:</div>
            <div className="text-4xl">{minutes}</div>
            <div className="text-4xl">:</div>
            <div className="text-4xl">{seconds}</div>
          </div>

          <div className="text-center space-x-4 mt-6">
            <button
              onClick={handleReset}
              className="bg-amber-100 w-16 rounded-xl cursor-pointer"
            >
              Reset
            </button>
            <button
              onClick={handlePause}
              className="bg-amber-100 w-16 rounded-xl cursor-pointer"
            >
              Pause
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CountdownTimer;
