import React from "react";
import requests from "./Requests";
import Row from "./Row";
import Banner from "./Banner";
import Header from "./Header";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          LargerImages
        />

        <Row
          title="TRENDING NOW"
          fetchUrl = {requests.fetchTrending}
        />

        <Row
          title="TOP RATED"
          fetchUrl = {requests.fetchTopRated}
        />

        <Row
          title="ACTION MOVIES"
          fetchUrl = {requests.fetchActionMovies}
        />

        <Row
          title="COMEDY MOVIES"
          fetchUrl = {requests.fetchComedyMovies}
        />

        <Row
          title="HORROR MOVIES"
          fetchUrl = {requests.fetchHorrorMovies}
        />

        <Row
          title="ROMENCE MOVIES"
          fetchUrl = {requests.fetchRomanceMovies}
        />

        <Row
          title="DOCUMENTRIES"
          fetchUrl = {requests.fetchDocumentaries}
        />
      </div>
    </div>
  );
}

export default App;
