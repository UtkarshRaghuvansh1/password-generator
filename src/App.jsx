import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState("");
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~:";
    }

    for (let i = 1; i <= length; i++) {
      //generate password
      pass = str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    console.log(pass);
    // Set password
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 text-orange-400 rounded-2xl shadow-lg p-6 my-12">
      <h1 className="text-3xl font-semibold text-center text-white mb-6">
        Password Generator
      </h1>

      <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-inner">
        <input
          type="text"
          value={password}
          className="w-full bg-gray-800 text-white placeholder-gray-500 py-3 px-4 outline-none"
          placeholder="Your secure password"
          readOnly
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-3 text-base transition-all duration-200">
          Copy
        </button>
      </div>
      {/* Length Slider */}
      <div className="flex items-center justify-between  rounded-md px-4 py-3">
        <input
          id="length"
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-2/3 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <label htmlFor="length" className="text-gray-300 font-medium">
          Length:{" "}
          <span className="text-orange-400 font-semibold">{length}</span>
        </label>
      </div>
      {/* Checkboxes Section */}
      <div className="bg-[#1e293b] rounded-md px-4 py-3 flex flex-col gap-3">
        <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
            className="accent-orange-500 w-4 h-4 cursor-pointer"
          />
          <span>Include Numbers</span>
        </label>

        <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-orange-500 w-4 h-4 cursor-pointer"
          />
          <span>Include Special Characters</span>
        </label>
      </div>
    </div>
  );
}

export default App;
