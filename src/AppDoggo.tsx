import { useState } from "react";

export default function AppDog() {

  const [dog, setDog] = useState<Doggo>();

  const [count, setCount] = useState<(number)>(0);

  const [currentPics, newPics] = useState<(string)[]>([]);
  
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
        setCount(count+1)
        console.log(count)
        // newPics([ ...currentPics, dog!.message])
      }
      const getMeMoreDogs = async () => {

        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random"
        );
        const jsonBody: Doggo = await response.json();
        setDog(jsonBody)
        setCount(count+1)
        newPics([ ...currentPics, dog!.message])
      }


  if (dog && count > 0){
    return(
        <div>
          <h1>Doggo Pic App</h1>
          <button onClick = {getMeMoreDogs}> Click me to get a doggo</button>
          <img src = {dog!.message} alt = "doggo pic" />
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