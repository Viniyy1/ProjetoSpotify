import React, { useState, useRef, useEffect } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const Song = () => {
  const { id } = useParams();

  const [volume, setVolume] = useState(1);
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = volume;
    }
  }, [volume]);

  const { image, name, duration, artist, audio } = songsArray.find(
    (currentSongObj) => currentSongObj._id === id
  );

  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;
  const volumePercent = volume * 100;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        {/* Player */}
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
          audioPlayer={audioPlayer}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="song__info">
          <FontAwesomeIcon icon={faVolumeLow} />
          <div className="song__volume">
            <input
              type="range"
              min="0"
              max="100"
              value={volumePercent}
              onChange={(e) => setVolume(e.target.value / 100)}
              className="song__volume-slider"
              style={{
                background: `linear-gradient(to right, var(--green-400) 0%, var(--green-400) ${volumePercent}%, var(--green-900) ${volumePercent}%, var(--green-900) 100%)`,
              }}
            />
          </div>

          <div className="song__text">
            <p className="song__name">{name}</p>
            <p>{artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
