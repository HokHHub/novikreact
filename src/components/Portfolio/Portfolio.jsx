import './Portfolio.css'
import Card from './Card/Card'
import H2 from '../h2/h2'
import FashionStore from '/img/FashionStore.jpg'
import reebok from '/img/reebok.jpg'
import braun from '/img/braun.jpg'


export default function Portfolio() {
    return (
        <>
            <div id='portfolio' className="portfolio">
                <div className="portfolio-all">
                    <H2 titleText={'Portfolio'} />
                    <div className="portfolio-cards">
                        <Card text="Online fashion store - Homepage" img={FashionStore} />
                        <Card text="Reebok Store - Concept" img={reebok} />
                        <Card text="Braun Landing Page - Concept" img={braun} />
                    </div>
                </div>
            </div>
        </>
    )
}