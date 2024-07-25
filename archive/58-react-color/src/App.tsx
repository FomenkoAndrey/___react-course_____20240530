import { RGBColor, SketchPicker } from 'react-color'
import { useState } from 'react'

interface ColorState {
  r: number
  g: number
  b: number
  a: number
}

const App = () => {
  const [color, setColor] = useState<ColorState>({ r: 0, g: 0, b: 0, a: 1 })
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)

  const rgbaToHex = (color: ColorState) => {
    const { r, g, b, a } = color
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${Math.round(a * 255)
      .toString(16)
      .padStart(2, '0')}`
  }

  const handleColorChange = (updatedColor: RGBColor) => {
    // Встановлюємо a на 1, якщо воно undefined
    setColor({
      r: updatedColor.r,
      g: updatedColor.g,
      b: updatedColor.b,
      a: updatedColor.a !== undefined ? updatedColor.a : 1
    })
  }

  return (
    <div>
      <h1 style={{ color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }}>
        Selected RGBA color: rgba({color.r}, {color.g}, {color.b}, {color.a})
        <br />
        HEX Alpha color: {rgbaToHex(color)}
      </h1>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>

      {showColorPicker && <SketchPicker color={color} onChange={(colorResult) => handleColorChange(colorResult.rgb)} />}
    </div>
  )
}

export default App
