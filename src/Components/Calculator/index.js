import React, { useState } from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">result</div>
      <div className="keypad">
        <button className="key clear">
          CE
        </button>
        <button className="key backspace">
          C
        </button>
        <button className="key operator" name="/">
          ÷
        </button>
        <button className="key" name="7">
          7
        </button>
        <button className="key" name="8">
          8
        </button>
        <button className="key" name="9">
          9
        </button>
        <button className="key operator" name="*">
          ×
        </button>
        <button className="key" name="4">
          4
        </button>
        <button className="key" name="5">
          5
        </button>
        <button className="key" name="6">
          6
        </button>
        <button className="key operator" name="-">
          −
        </button>
        <button className="key" name="1">
          1
        </button>
        <button className="key" name="2">
          2
        </button>
        <button className="key" name="3">
          3
        </button>
        <button className="key operator" name="+">
          +
        </button>
        <button className="key zero" name="0">
          0
        </button>
        <button className="key" name=".">
          .
        </button>
        <button className="key equals">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
