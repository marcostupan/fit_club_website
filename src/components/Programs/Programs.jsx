import React from 'react'
import './Programs.css';
import {programsData} from  '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore nossos</span>
            <span>Programas</span>
            <span className='stroke-text'>Para te modelar</span>
        </div>
        <div className="program-categories">
            {/* Programs categories */}
            {programsData.map((program) =>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Comece Aogra</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
