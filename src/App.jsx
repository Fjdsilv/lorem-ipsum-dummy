import { useState } from "react";
import { nanoid } from 'nanoid';
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      const amount = parseInt(count);
      setText(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"></label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          min="1" 
          step="1" 
          max="8"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => {
            const id = nanoid();
            return <p key={id}>{item}</p>
          })
        }
      </article>
    </section>
  )
}
export default App