import React, { useState } from 'react'
import CareersBanner from '../components/CareersBanner';
import CareersComponent from "../components/CareersComponent"

function Careers() {
    const [currentCareerPage, setCurrentCareerPage] = useState(1)
    return (
        <>
            <CareersBanner currentImage={currentCareerPage} />
            <CareersComponent currentCareerPage={currentCareerPage} setCurrentCareerPage={setCurrentCareerPage} />

        </>
    )
}

export default Careers