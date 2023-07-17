import React, { useEffect, useRef, useState } from "react";

import {
	VoiceGraph,
	VoiceMessageContent,
	VoiceMessageWrapp,
	VoiceProgress,
	VoiceTimer,
} from "./styled";
import ReactAudioPlayer from "react-audio-player";

import Button from "../../UI/Button";
import Icon from "../../UI/Icon";

import voiceExample from "../../assets/audio/brian.mp3";

import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";

import soundGraph from "../../assets/icons/sound-graph.svg";

type VoiceMessageProps = {
	url: string;
};
export const VoiceMessage: React.FC<VoiceMessageProps> = ({
	url = voiceExample,
}) => {
	const [play, setPlay] = useState<boolean>(false);
	const [duration, setDuration] = useState<any>(0);
	const [currentTime, setCurrentTime] = useState<any>(0);

	let audioRef = useRef<any>(null);

	const timerRef = useRef<any>(null);
	const testRef = useRef<any>(null);
	const progressRef = useRef<any>(null);

	const togglePlayIcon = play ? pauseIcon : playIcon;

	useEffect(() => {
		if (audioRef.current) {
			const player = audioRef.current.audioEl.current;
			!play ? player.pause() : player.play();
		}
	}, [play]);

	useEffect(() => {
		if (timerRef.current) {
			if (currentTime === 0) {
				timerRef.current.innerText = fancyTimeFormat(duration);
			} else {
				timerRef.current.innerText = fancyTimeFormat(currentTime);
			}

			progressRef.current.style.width = `calc(${
				(100 * currentTime) / duration
			}%)`;
		}
	}, [currentTime]);

	function fancyTimeFormat(dur: string | number) {
		// Hours, minutes and seconds
		const hrs = ~~(dur / 3600);
		const mins = ~~((dur % 3600) / 60);
		const secs = ~~dur % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		let ret = "";

		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;

		return ret;
	}

	const handleTogglePlay = (event: any) => {
		event.stopPropagation();
		setPlay((prev) => !prev);
	};

	const handleChangeCurrentTime = (seconds: number) => {
		setCurrentTime(seconds);
	};

	const handleSeek = (event: any) => {
		const targetStyles = event.currentTarget.getBoundingClientRect();

		let leftPosition =
			((event.clientX - targetStyles.left) * 100) / targetStyles.width;

		let newCurrentTime = (duration * leftPosition) / 100;

		audioRef.current.audioEl.current.currentTime = newCurrentTime;

		setCurrentTime(newCurrentTime);

		setPlay(true);
	};

	return (
		<VoiceMessageWrapp ref={testRef} onClick={handleSeek}>
			<VoiceProgress ref={progressRef} />
			<VoiceMessageContent>
				<Button view="ghost" onClick={handleTogglePlay}>
					<Icon url={togglePlayIcon} />
				</Button>
				<VoiceGraph style={{ background: `url(${soundGraph})` }} />
				<ReactAudioPlayer
					src={url}
					ref={(element) => {
						audioRef.current = element;
					}}
					listenInterval={100}
					onListen={(time: number) => handleChangeCurrentTime(time)}
					onEnded={() => {
						setPlay(false);
						setCurrentTime(0);
						progressRef.current.style.width = `0%`;
					}}
					onLoadedMetadata={(event: any) => {
						setDuration(Number(audioRef.current.audioEl.current.duration));
					}}
				/>
				<VoiceTimer ref={timerRef} />
			</VoiceMessageContent>
		</VoiceMessageWrapp>
	);
};
