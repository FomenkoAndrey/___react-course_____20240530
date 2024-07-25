import { PlacesType, Tooltip, VariantType } from 'react-tooltip'

const PLACES: PlacesType[] = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
]
const VARIANTS: VariantType[] = ['dark', 'light', 'success', 'warning', 'error', 'info']

const App = () => {
  return (
    <div>
      <h1>Tooltip</h1>

      <hr />

      <a data-tooltip-id="my-tooltip-children-multiline"> Будь що </a>
      <Tooltip id="my-tooltip-children-multiline">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Hello</span>
          <span>some stuff in between</span>
          <span>world!</span>
        </div>
      </Tooltip>

      <hr />

      {VARIANTS.map((variantValue, index) => (
        <span key={index} style={{ margin: '10px' }}>
          <a
            data-tooltip-id={`tooltip-${variantValue}`}
            style={{ cursor: 'pointer' }}
            data-tooltip-variant={variantValue}
          >
            ◕‿‿◕ {variantValue}
          </a>
          <Tooltip id={`tooltip-${variantValue}`} content={`This is a ${variantValue} tooltip`} />
        </span>
      ))}

      <hr />

      {PLACES.map((placeValue, index) => (
        <span key={index} style={{ margin: '10px' }}>
          <a data-tooltip-id={`tooltip-${index}`}>◕‿‿◕ {placeValue}</a>
          <Tooltip id={`tooltip-${index}`} content={`I'm on the ${placeValue}`} place={placeValue} />
        </span>
      ))}
    </div>
  )
}

export default App
