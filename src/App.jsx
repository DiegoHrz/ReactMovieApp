import { useEffect } from 'react';

import'./App.css'


// const API_URL = 'http://www.omdbapi.com?apikey=772fd908';

// const API_URL = 'http://www.omdbapi.com?apikey=772fd908https://dog.ceo/api/breeds/image/random'

const App = () =>{

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s${title}`)
    const data = await response.json();
    console.log(data)
  }

  useEffect(()=>{
    searchMovies('Superman')
  },[]);

  return (
    <h1>App</h1>
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