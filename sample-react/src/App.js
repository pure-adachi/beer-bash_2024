import { useState } from "react"

const App = () => {
  const [text, setText] = useState('')

  const handleClickSquare = () => {
    setText('○')
  }

  return (
    <button onClick={handleClickSquare}>{text}</button>
  );
}

export default App;
