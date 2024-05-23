import React, { useEffect, useState } from 'react'
import StartupProjectBanner from '../components/StartupProjectBanner'
import StarupProjectComponent from '../components/StarupProjectComponent'
import { useLocation } from 'react-router-dom'



const startupinfo = [
    {
        title: "Agriculture drone",
        startup_equipments: [
            {
                name: 'Agricultue Drone',
                para: [`We provide cutting-edge agricultural drone technology to maximize crop management and yield. Sergisole's advanced drone solutions deliver precision agriculture at its best.`],
                img: {
                    path: '/assets/images/droneimg.png',
                    className: 'aspect-[626/626] w-[400px] xl:w-[480px] 2xl:w-auto'
                },
                link: '/startup-project/about/Agricultue Drone'
            },
        ],
        link: '/'
    },
    {

        title: "Medicine Dispenser",
        startup_equipments: [
            {
                name: 'Medicine Dispenser',
                para: ['The Strom® 2.0 series stands at the forefront of electrosurgery, embodying advanced technology and intelligent features that redefine surgical precision and safety. Incorporating Smart Tissue Sensing Technology powered by an ARM Core processor, these devices revolutionize the surgical landscape.'],
                img: {
                    path: '/assets/images/medicineimg.png',
                    className: 'w-[772px] h-[354px] object-contain'
                },
                link: '/startup-project/about/Medicines Dispenser'
            },
        ],
        link: '/'
    },
    {

        title: "Hospital Laundry",
        startup_equipments: [
            {
                name: 'Hospital Laundry',
                para: ['Our specialized hospital laundry services ensure pristine cleanliness and integrity for StartUp linens and garments by ensuring top-tier hygiene and efficiency. Trust our dedicated hospital laundry solutions for impeccable sterilization and handling of medical textiles, prioritizing infection control and patient well-being.'],
                img: {
                    path: '/assets/images/laundryimg.png',
                    className: 'w-[630px] h-[367px] object-contain'
                },
                link: '/startup-project/about/Hospital Laundry'
            },

        ],
        link: '/'
    }
]

function StartupProject() {
    const [currentStartUpPage, setCurrentStartUpPage] = useState(0)
    const { state } = useLocation();

    useEffect(() => {
        setCurrentStartUpPage(state?.activePage ? state.activePage : 0)
    }, [state?.activePage])
    return (
        <>
            <StartupProjectBanner currentImage={currentStartUpPage + 1} currentPageName={startupinfo[currentStartUpPage].title} />
            <StarupProjectComponent currentStartUpPage={currentStartUpPage} setCurrentStartUpPage={setCurrentStartUpPage} data={startupinfo[currentStartUpPage]} />

        </>
    )
}

export default StartupProject