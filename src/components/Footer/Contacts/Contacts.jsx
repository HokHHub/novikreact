import './Contacts.css'
import LinkedIn from '/img/LinkedIn.svg'
import Instagram from '/img/Instagram.svg'
import Behance from '/img/Behance.svg'
import Dribble from '/img/Dribble.svg'

export default function Contacts() {
    return (
        <>
            <div className='contacts'>
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
                <img src={Behance} alt="" />
                <img src={Dribble} alt="" />
            </div>
            <p className='like-text'>Like me on <br/> LinkedIn, Instagram, Behance, Dribble</p>
        </>
    )
}