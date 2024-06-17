import style from './Test.module.css'

const Test = () => {
  console.log(style)
  return (
    <div>
      <div className={style.testBlock}>Test</div>
      <div className={style.testBlock2}>Header 1</div>
    </div>
  )
}

export default Test
