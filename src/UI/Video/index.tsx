import React, { useState } from "react";

import ReactPlayer from "react-player";

import Text from "../Text";
import Button from "../Button";
import { Row } from "../Layout";

import playButton from "../../assets/icons/play.svg";
import pauseButton from "../../assets/icons/pause.svg";
import muteButton from "../../assets/icons/music-sound.svg";

import {
  VideoWrapp,
  VideoUpControls,
  MuteButton,
  VideoBottomControls,
} from "./styled";

type VideoProps = {
  url?: string;
};

const Video: React.FC<VideoProps> = ({ url }) => {
  const [duration, setDuration] = useState("");
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);
  const [currentTime, setCurrentTime] = useState<number | string>("00:00");

  const videoRef = React.createRef<any>();
  const videoWrapp = React.useRef(null);

  const secondsToMinutes = (seconds, func) => {
    if (!seconds) return "";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      func(`${parseInt(hours, 10)}:${min}:${sec}`);
    } else if (min == 0) {
      func(`00:${sec}`);
    } else {
      func(`${min}:${sec}`);
    }
  };

  const handleChangeDuration = (seconds: any) => {
    secondsToMinutes(seconds, setDuration);
  };

  const handleChangePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };

  const handleMute = (event: any) => {
    event.stopPropagation();

    mute ? setMute(false) : setMute(true);
  };

  const handleChangeCurrentTime = (seconds: any) => {
    secondsToMinutes(seconds, setCurrentTime);
  };

  return (
    <VideoWrapp ref={videoWrapp} onClick={() => handleChangePlay(!play)}>
      <ReactPlayer
        ref={videoRef}
        height="180px"
        width="100%"
        url={url}
        muted={mute}
        playing={play ? true : false}
        style={{ borderRadius: "15px", overflow: "hidden" }}
        onDuration={(state: any) => handleChangeDuration(state)}
        onProgress={(state: any) =>
          handleChangeCurrentTime(state.playedSeconds)
        }
      />
      <VideoUpControls style={{ justifyContent: "flex-end" }}>
        <MuteButton
          icon={muteButton}
          onClick={(event: any) => handleMute(event)}
          style={{ height: 16 }}
          fill="#fff"
          mute={mute}
        />
      </VideoUpControls>
      <VideoBottomControls $center>
        <Button
          icon={play ? pauseButton : playButton}
          onClick={() => handleChangePlay()}
          style={{ height: 16 }}
        />
        <Text
          text={play ? currentTime : currentTime > 0 ? currentTime : duration}
          $textColor="#fff"
        />
      </VideoBottomControls>
    </VideoWrapp>
  );
};

export default Video;
