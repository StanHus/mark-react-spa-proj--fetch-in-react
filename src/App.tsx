

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

import { useState } from "react";

function App() {

  const [dog, setDog] = useState<Doggo>();
  
  interface Doggo {
      message: string,
      status: string
      }
  
  const getMeADog = async () => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const jsonBody: Doggo = await response.json();
      setDog(jsonBody)
    }
  
    if (dog){
      return(
          <div>
            <h1>Doggo Pic App</h1>
            <button onClick = {getMeADog}> Click me to get a doggo</button>
            <img src = {dog.message} alt = "doggo pic" />
          </div>  
      )
  }
  else {
      return (
        <div>
        <h1>Doggo Pic App</h1>
        <button onClick = {getMeADog}> Click me to get a doggo</button>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          doggo pic from an API!
        </p>
      </div>  
      )
  }
}

  // const [joke, setJoke] = useState<Joke>();

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  // const handleGetJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

//   if (joke) {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <details>
//           <summary>{joke.setup}</summary>
//           <p>{joke.punchline}</p>
//         </details>
//         <hr />
//         <button onClick={handleGetJoke}>Get another joke</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Joke app</h1>
//         <p>
//           Click the button to trigger a <code>fetch</code> that gets a random
//           joke from an API!
//         </p>
//         <button onClick={handleGetJoke}>Get joke</button>
//       </div>
//     );
//   }
// }

export default App;
