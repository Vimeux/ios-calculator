import React, { useState } from "react";
import { Historic } from "../Historic";
import Guide from "../Guide";

export const Calculator = () => {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setHistory([...history, [result, eval(result).toString()]]);
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const exportToCSV = () => {
    const header = "Expression,Resultat\n";
    const csv =
      header + history.map(([exp, res]) => `${exp},${res}`).join("\n");
    const csvBlob = new Blob([csv], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);
    const hiddenLink = document.createElement("a");
    hiddenLink.href = csvUrl;
    hiddenLink.download = "calculator_history.csv";
    hiddenLink.click();
  };

  return (
    <div className="content">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="keypad">
          <button className="key clear" onClick={clear}>
            CE
          </button>
          <button className="key backspace" onClick={backspace}>
            C
          </button>
          <button className="key operator" name="/" onClick={handleClick}>
            ÷
          </button>
          <button className="key" name="7" onClick={handleClick}>
            7
          </button>
          <button className="key" name="8" onClick={handleClick}>
            8
          </button>
          <button className="key" name="9" onClick={handleClick}>
            9
          </button>
          <button className="key operator" name="*" onClick={handleClick}>
            ×
          </button>
          <button className="key" name="4" onClick={handleClick}>
            4
          </button>
          <button className="key" name="5" onClick={handleClick}>
            5
          </button>
          <button className="key" name="6" onClick={handleClick}>
            6
          </button>
          <button className="key operator" name="-" onClick={handleClick}>
            −
          </button>
          <button className="key" name="1" onClick={handleClick}>
            1
          </button>
          <button className="key" name="2" onClick={handleClick}>
            2
          </button>
          <button className="key" name="3" onClick={handleClick}>
            3
          </button>
          <button className="key operator" name="+" onClick={handleClick}>
            +
          </button>
          <button className="key zero" name="0" onClick={handleClick}>
            0
          </button>
          <button className="key" name="." onClick={handleClick}>
            .
          </button>
          <button className="key equals" onClick={calculate}>
            =
          </button>
          <button className="key" onClick={exportToCSV}>
            Export CSV
          </button>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Historic history={history} />
        <Guide />
      </div>
    </div>
  );
};
