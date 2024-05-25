import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from "./config/firebase";
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [movieList, setMovieList] = useState();

  const moviesCollectionRef = collection(db, "fahfoanvankvnk1490184021");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      };
    };

    getMovieList();
  }, []);

  return (
    <div className="App">
      <Auth />

      <div>
        <input placeholder='Movie title...' />
        <input placeholder='Release Date....' type="number" />
        <input type='checkbox' />
        <label> Received an Oscar </label>
      </div>
      <div>
        {(movieList ?? []).map((movie) => (
          <div>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}> {movie?.title} </h1>
            <p> Date: {movie?.releaseDate} </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
