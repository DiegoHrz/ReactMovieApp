import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import SearchIcon from './search.svg'
import './App.css'


// const API_URL = 'http://www.omdbapi.com?apikey=772fd908';

const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dbbbd59d0msh47caed0e006a686p1e1c8ejsn9cf7df155129',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

const movie1 = {
  "i": {
      "height": 750,
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BODg5NDJhMjYtMTYyYi00NzAwLTliNmYtNGZhMjQ4ZjNkMjgyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg",
      "width": 1334
  },
  "id": "tt6857128",
  "l": "Unaired Game of Thrones Prequel Pilot",
  "q": "TV movie",
  "qid": "tvMovie",
  "rank": 29261,
  "s": "Naomi Watts, Miranda Richardson",
  "y": 2019
}
console.log(movie1)


const App = () =>{
  const [movies, setMovies] = useState([])

  const searchMovies = async (l) => {
    const response = await fetch(url, options)
    const data = await response.json();

    setMovies(data.Search);  
  }

  useEffect(()=>{
    searchMovies('Game of Thrones')
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies'
        value='Superman' //gives you a static value so you ned to do an onChange;
        onChange={()=> {}}
        />
        <img 
        src={SearchIcon}
        alt='search'
        onClick={() =>{}}
        />
      </div>
      {
        movies?.length > 0
        ? (
          <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))}
        </div>
        ): 
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }



    </div>

  );
}

export default App




// const App = () =>{
//   let name = 'John';
//   const isNameShowing = false;

//   //A hook is every function that starts with use
//   const [counter, setCounter] = useState(0);
//   //good practice call the second variable the same as you called the 1st one but with set


//   // useEffect allows us to do smt on an event/state when the PAGES RELOAD
//   useEffect(() => {
//     alert("You've changed the counter to")
//   }), [counter]; //2nd parameter called dependency eff 


// //NEVER MODIFY STATE MANUALLY  LIKE counter = 100; BUT YOU CAN DO THIS= setCounter(100)

//   return (
//     <div className='App'>
//       <h1>Hello {isNameShowing? name : 'Nobody'}!</h1>
//         {/* Also it can be written with parenthesis like this: {isNameShowing? (name) : ('Nobody')} */}
//         {name ? (
//           <>
//             test
//           </>
//         ) : (
//           //<h1>New test</h1>
//           //<h2>There is no name</h2> This is wrong cos adjacent elements must be wrapped in an enclosing tag :
//           <>
//           <h1>Hi</h1>
//           <h2>Nobody</h2>
//           </>
//         ) 
//       }
//       <div>
//         { /* prevCounter can be whatever you want*/}
//         <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((nextCounter)=> nextCounter + 1) }>+</button>
//       </div>
//     </div>
//   );
// }

// const Person = (props) =>{
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Lat Name: {props.lastName}</h2>
//     <h2>Age: {props.Age}</h2>
//     </>
//   )
// }
 

{/* <Person name={'John'} lastName={'Lennon'} Age={40} />
  <Person name={'Joe'} lastName={'Biden'} Age={70} />
  <Person name={'Jon'} lastName={'Leon'} Age={30} />
  <Person name={'Sam'} lastName={'Mr'} Age={10} />
  <Person name={'Louis'} lastName={'Wr'} Age={50 + 2} /> */}