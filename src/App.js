import React,{useState ,useEffect} from 'react'
import "./components/css/App.css";
import axios from "axios";
export default function App() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
        const quoteObject = await axios.get("https://api.quotable.io/random");
        setQuote(quoteObject.data);
    }
    return (
      <div id="wrapper">
      <div id="quote-box">
        <div id="quotetext"><i class="fa fa-quote-left"></i><p id="text">{quote.content}</p> </div>
        <div id="quote-author"><h4 id="author">{quote.author}</h4></div>
        <div id="buttons">
        <a id="tweet-quote"class="button" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i className='fa fa-twitter'></i></a>
        <button class="button" id="new-quote" className='btn btn-block' onClick={fetchRandomQuote}>New Quote</button>
        </div>
      </div>
      </div>
    );

  };


