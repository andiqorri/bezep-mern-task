import '../date/time.css'

const Time = () => {

    let time = new Date().toLocaleTimeString();

    const handleClick = () => {
        <h2>{time}</h2>
    }

  return (
    <div className='last'>
        <button className="last2" onClick={handleClick}>Last time refreshed ToDos {time}</button>
    </div>
  )
}

export default Time