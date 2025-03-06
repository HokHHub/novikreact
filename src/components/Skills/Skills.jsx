import './Skills.css'
import H2 from '../h2/h2'
import Skill from './Skill/Skill'
import PS from '/img/PS.svg'
import AI from '/img/AI.svg'
import AE from '/img/AE.svg'
import Figma from '/img/Figma.svg'

export default function Skills() {
    return (
        <>
            <div className="skills" id='skills'>
                <H2 titleText={'Skills'}/>
                <p className='skills-text'>I work in such programs as</p>
                <div className="skills-all">
                    <Skill name='Adobe Photoshop' img={PS} numofskills={4} />
                    <Skill name='Adobe Illustrator' img={AI} numofskills={3} />
                    <Skill name='Adobe After Effects' img={AE} numofskills={4} />
                    <Skill name='Figma' img={Figma} numofskills={4} />
                </div>
            </div>
        </>
    )
}