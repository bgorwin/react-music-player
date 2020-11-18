import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
	audioRef,
	currentSong,
	isPlaying,
	setIsPlaying,
	setSongInfo,
	songInfo,
	songs,
	setSongs,
	setCurrentSong
}) => {
	// Event Handlers
	const activeLibraryHandler = (nextPrev) => {
		const newSongs = songs.map((song) => {
			if (song.id === nextPrev.id) {
				return {
					...song,
					active: true
				};
			} else {
				return {
					...song,
					active: false
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) audioRef.current.play();
	};

	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === 'skip-forward') {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		}
		if (direction === 'skip-back') {
			if ((currentIndex - 1) % songs.length === -1) {
				return setCurrentSong(songs[songs.length - 1]);
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
		}
		if (isPlaying) audioRef.current.play();
	};

	// Add the styles
	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`
	};

	return (
		<div className='player'>
			<div className='time-control'>
				<p>{getTime(songInfo.currentTime)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`
					}}
					className='track'
				>
					<input
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						onChange={dragHandler}
						type='range'
					/>
					<div className='animate-track' style={trackAnim}></div>
				</div>

				<p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler('skip-back')}
					className='skip-back'
					size='2x'
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className='play'
					size='2x'
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler('skip-forward')}
					className='skip-forward'
					size='2x'
					icon={faAngleRight}
				/>
			</div>
		</div>
	);
};

export default Player;