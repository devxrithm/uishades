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
  const [baseColor, setBaseColor] = useState('#00ff00'); // Initial base color

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
      <h1>Shade Generator</h1>
      <div>
        <label htmlFor="baseColor">Base Color:</label>
        <input
          type="color"
          id="baseColor"
          value={baseColor}
          onChange={handleBaseColorChange}
        />
      </div>
      <div>
        <h2>Shades:</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(5, 0fr)" }}>
          {shades.map((shade, index) => (
            <div
              key={index}
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: shade.color,
                margin: '5px',
                border: '1px solid #000',
              }}
            >
              {shade.name} - {shade.color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShadeGenerator;
