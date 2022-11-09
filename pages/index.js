import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import bg from "../src/assets/background.png";
import { FavoritosStyle } from "../src/components/FavoritosStyle";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <TimeLine searchValue={valorDoFiltro} perfis={config.perfis} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    /* margin-top: 50px; */
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    background-image: url(${bg.src});
    height: 28vh;
    width: 100%;
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <div className="banner"></div>
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`}></img>
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </section>
      </StyledHeader>
    </>
  );
}

function TimeLine({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);
  const favoritosNames = Object.keys(props.perfis);
  return (
    <>
      <StyledTimeline>
        {playlistNames.map((playlistNames) => {
          const videos = props.playlists[playlistNames];
          return (
            <section key={playlistNames}>
              <h2>{playlistNames}</h2>
              <div>
                {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase(); 
                  const searchValueNormalized = searchValue.toLowerCase(); 
                  return titleNormalized.includes(searchValueNormalized)
                }).map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </StyledTimeline>

      <FavoritosStyle>
        {favoritosNames.map((favoritosNames)=>{
          const profile = props.perfis[favoritosNames];
          return(
            <section>
              <h2>{favoritosNames}</h2>
              <div className="profile">
                {profile.map((profile) => {
                  return (
                    <a href={profile.url}>
                      <img src={`https://github.com/${profile.foto}.png`} />
                      <span>{profile.name}</span>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}
      </FavoritosStyle>
    </>
  );
}
