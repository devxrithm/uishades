"use client"
import React, { useState } from 'react';
import "./shades.css"

function hexToRGB(hex) {
  // Function to convert hex color to RGB
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(rgb) {
  // Function to convert RGB color to hex
  return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
}

function ShadeGenerator() {
  const [baseColor, setBaseColor] = useState('#00ffbf'); // Initial base color

  const handleBaseColorChange = (event) => {
    setBaseColor(event.target.value);
  };

  const generateShades = (color) => {
    // Function to generate shades of a color
    const numShades = 20;
    const shadeStep = 5;
    const baseRGB = hexToRGB(color);
    const shades = [];

    for (let i = 0; i < numShades; i++) {
      const newR = Math.max(baseRGB.r - shadeStep * i, 0);
      const newG = Math.max(baseRGB.g - shadeStep * i, 0);
      const newB = Math.max(baseRGB.b - shadeStep * i, 0);
      const newColor = rgbToHex({ r: newR, g: newG, b: newB });
      const name = `Shade ${i + 1}`;
      shades.push({ color: newColor, name: name });
    }
    return shades;
  };

  const shades = generateShades(baseColor);

  return (
    <div className='shade-x'>
      <h1 style={{ textAlign: "center", fontSize: "4vmax", fontWeight: "bold" }}>Shade Generator</h1>
      <h2 style={{ textAlign: "center", }}>Create Color shades by
        pick color button and get multiple of tint and shades cards</h2>

      <div className='select-color'>
        <label htmlFor="baseColor" style={{ fontSize: "1.5rem", fontWeight: "600", }}>Base Color<br />
        </label>

        <div className='input-color'>
          <input
            type="color"
            id="baseColor"
            value={baseColor}
            onChange={handleBaseColorChange}
          />
          <p style={{ color: "white" }}>{baseColor}</p>
        </div>

      </div>

      <div>

        <div className="shades-boxes">
          {shades.map((shade, index) => (
            
              <div
                key={index}
                style={{
                  padding: "3.5vmax 1vmax",
                  backgroundColor: shade.color,
                  borderRadius: "5px",
                  textAlign: "center",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}
              >
                {shade.color}
              </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ShadeGenerator;
