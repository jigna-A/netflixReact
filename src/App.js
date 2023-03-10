import './App.css';
import Row from './Components/Row'
import requests from './requests'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav/>
      </header>

      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row
      isLargeRow={true}
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
       <Row
      title="Trending"
      fetchUrl={requests.fetchTrending}
      />
       <Row
      title="Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
       <Row
      title="Action"
      fetchUrl={requests.fetchActionMovies}
      />
       <Row
      title="Comedy"
      fetchUrl={requests.fetchComedyMovies}
      />
       <Row
      title="Horror"
      fetchUrl={requests.fetchHorrorMovies}
      />
       <Row
      title="Romance"
      fetchUrl={requests.fetchRomanceMovies}
      />
        <Row
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  );
}

export default App;
