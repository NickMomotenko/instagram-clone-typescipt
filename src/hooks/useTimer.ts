import { useEffect, useState } from "react";

type TimerProps = { direction?: "down" | "up" };

export const useTimer = ({ direction = "down" }: TimerProps) => {
	const [seconds, setSeconds] = useState<number>(0);
	const [started, setStarted] = useState(false);

	let intervalId: any;

	useEffect(() => {
		if (started) {
			if (seconds !== 0 && direction === "down") {
				doTimer();

				return () => clearInterval(intervalId);
			} else if (direction === "up") {
				doTimer();

				return () => clearInterval(intervalId);
			} else {
				setStarted(false);
			}
		}
	}, [seconds, started]);

	// @ts-ignore
	function startTimer(seconds: number = 0): Promise<void | boolean> {
		setSeconds(seconds);
		setStarted(true);

		if (direction === "down") {
			return new Promise<void | boolean>((resolve) => {
				setTimeout(() => {
					resolve();
				}, seconds * 1000);
			});
		}
	}

	function doTimer() {
		intervalId = setInterval(() => {
			if (direction === "down") {
				setSeconds((prev) => prev - 1);
			}

			if (direction === "up") {
				setSeconds((prev) => prev + 1);
			}
		}, 1000);
	}

	function stopTimer() {
		setSeconds(0);
		setStarted(false);
		clearInterval(intervalId);
	}

	return { seconds, startTimer, stopTimer, started };
};
