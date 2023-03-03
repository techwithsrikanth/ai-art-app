import { useState } from 'react';
import { Configuration,OpenAIApi } from 'openai';
import './App.css';

function App() {
      const [prompt, setPrompt] = useState("")
      const configuration = new Configuration({
        apiKey: import.meta.env.VITE_Open_AI_Key,
      });
      const openai = new OpenAIApi(configuration);

      console.log(prompt)

  return( 
  <div className='App'>
    <h2>Generate an AI Art Image</h2>
    <textarea
    placeholder='lets generate an image...'
    onChange={(e)=>setPrompt(e.target.value)}/>
    <br/>
    <button onClick>Generate an Image</button>

  </div>
  );
}

export default App;
