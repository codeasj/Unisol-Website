import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HealthCareBanner from "../components/HealthCareBanner"
import HealthCareComponent from "../components/HealthCareComponent"

const healthCareInfo = [
    {
        title: "Visualization System",
        medical_equipments: [
            {
                name: 'Smart SurgN',
                para: ['The Smart SurgN machine is an innovative medical device designed to revolutionize surgical procedures through advanced technology and intelligent automation. This cutting-edge system integrates artificial intelligence (AI), robotics, and high-precision surgical tools to enhance the accuracy, efficiency, and safety of various surgical interventions.', 'At its core, the Smart SurgN machine utilizes sophisticated AI algorithms to analyze vast amounts of medical data, including patient information, imaging scans, and surgical protocols. This AI-driven analysis assists surgeons by providing real-time guidance, predictive insights, and personalized recommendations during procedures.'],
                img: {
                    path: '/assets/images/smartsurgn.png',
                    className: 'w-[573.42px] h-[510px] object-contain'
                },
                link: '/health-care/about/Smart SurgN'
            },
            {
                name: 'Surrounded Scope',
                para: [`UNISOL's interest in implementing the cutting-edge SURROUND SCOPE system within our medical facilities. UNISOL is committed to advancing patient care through innovative technologies, and after comprehensive evaluation, we believe that integrating the SURROUND SCOPE into our surgical practices will significantly elevate our standards of minimally invasive surgery.`],
                img: {
                    path: '/assets/images/surroundedscope.png',
                    className: 'w-[669px] h-[531px] object-contain'
                },
                link: '/health-care/about/Surrounded Scope'
            },

        ],
        link: '/'
    },
    {

        title: "Electro Cautery",
        medical_equipments: [
            {
                name: 'Storm 2.0',
                para: ['The Strom® 2.0 series stands at the forefront of electrosurgery, embodying advanced technology and intelligent features that redefine surgical precision and safety. Incorporating Smart Tissue Sensing Technology powered by an ARM Core processor, these devices revolutionize the surgical landscape.'],
                img: {
                    path: '/assets/images/storm.png',
                    className: 'w-[772px] h-[354px] object-contain'
                },
                link: '/health-care/about/Strom 2.0'
            },
        ],
        link: '/'
    },
    {

        title: "3 in One Access System",

        medical_equipments: [
            {
                name: 'Smoke Evacuation',
                para: ['The AirSeal® System has emerged as a groundbreaking innovation in laparoscopic and robotic surgery. It redefines conventional insufflation, trocar, and filtered tubing systems, ushering in a new era of surgical precision and efficiency.'],
                img: {
                    path: '/assets/images/smokeevacuation.png',
                    className: 'w-[630px] h-[367px] object-contain'
                },
                link: '/health-care/about/Smoke Evacuation'
            },

        ],
        link: '/'
    },
    {

        title: "Other",
        medical_equipments: [
            {
                name: 'Vcare',
                para: ['VCare® Plus helps surgeons deliver clear control of the anatomy using effective uterine manipulation while assisting with the identification of key surgical landmarks for a safe, efficient, and repeatable procedure.'],
                img: {
                    path: '/assets/images/vcare.png',
                    className: 'w-[483px] h-[579px] object-contain'
                },
                link: '/health-care/about/Vcare'

            },
            {
                name: 'Dozee',
                para: ['Dozee, your guardian of health and wellness. We specialize in cutting-edge, contactless health monitoring solutions designed to bring hospital-grade care to the comfort of your home. With Dozee, experience a revolution in remote health monitoring that ensures precise, real-time tracking of vital health parameters.'],
                img: {
                    path: '/assets/images/dozee.png',
                    className: 'w-[437px] h-[660px] object-contain'
                },
                link: '/health-care/about/Dozee'

            },
            {
                name: 'Vaginal Speculum',
                para: [`The vaginal speculum stands as a vital medical tool designed for the purpose of gently expanding the vaginal walls, facilitating thorough and precise examinations of the cervix and vaginal canal. Typically composed of two blades operated via a secure locking handle, this instrument enables medical professionals to carefully widen the vaginal opening for comprehensive assessments. Its versatility is exemplified by the availability of various sizes, ensuring suitability for all individuals. Notably, a smaller iteration serves exceptionally well in scenarios where the hymen remains intact, allowing for meticulous and comfortable examinations tailored to each woman's unique needs.`],
                img: {
                    path: '/assets/images/vaginospeculam.png',
                    className: 'w-[365px] h-[468px] object-contain'
                },
                link: '/health-care/about/Vaginal%20Speculum'

            },
        ],
        link: '/'

    },

]

function HealthCare(params) {
    const { state } = useLocation();
    const [currentHealthCarePage, setCurrentHealthCarePage] = useState(0)

    useEffect(() => {
        setCurrentHealthCarePage(state?.activePage ? state.activePage : 0)
    }, [state?.activePage])
    return (
        <>
            <HealthCareBanner currentImage={currentHealthCarePage + 1} currentPageName={healthCareInfo[currentHealthCarePage].title} />
            <HealthCareComponent currentHealthCarePage={currentHealthCarePage} setCurrentHealthCarePage={setCurrentHealthCarePage} data={healthCareInfo[currentHealthCarePage]} />

        </>
    )
}

export default HealthCare