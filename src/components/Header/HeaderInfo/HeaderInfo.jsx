import './HeaderInfo.css'
import novik from '/img/novik.jpg'

export default function HeaderInfo() {
    return (
        <>
            <div className='titles'>
                <h1 className='titles-title' >Denis<br />Novik</h1>
                <p className='titles-text' >UX | UI designer<br/>24 years old, Minsk</p>
            </div>
            <img className='img' src={novik}></img>
        </>
    )
}