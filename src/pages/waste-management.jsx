import React, { useEffect, useState } from 'react'
import WasteManagementBanner from '../components/WasteManagementBanner';
import WasteManagementComponent from "../components/WasteManagementComponent"
import { useLocation } from 'react-router-dom';

const wasteManagement = [
    {

        title: "Solid Waste Management",
        hero: {
            title: "Solid Waste Management",
            desc: "Solid waste encompasses various discarded materials from households, industries, and commercial activities. Its mismanagement poses significant challenges, including environmental degradation, health hazards, and resource depletion. UNISOL stands at the forefront of the battle against improper waste management, striving for a sustainable future. With collaborative efforts and innovative strategies, the organization demonstrates the significance of responsible waste handling."
        },
        applications: {
            desc: "UNISOL, a frontrunner in the medical and surgical equipment industry, champions sustainable waste management.",
            img: '../assets/images/solidwaste.png',
            data: [
                {
                    title: "Solid Waste Generation",
                    desc: "The generation of solid waste is influenced by population density, lifestyle, economic activities, and urbanization. Waste includes organic, inorganic, recyclable, and hazardous materials. Managing waste at its source through awareness and reduction strategies is vital to curb excessive generation."
                },
                {
                    title: "On-site Handling and Storage",
                    desc: "Proper handling and storage techniques are imperative to prevent environmental contamination and health risks. Segregation, composting, and containment of waste at its origin help minimize adverse impacts on surroundings and ecosystems."
                },
                {
                    title: "Collection Methods",
                    desc: "Efficient waste collection systems vary based on locality and waste types. Utilizing segregated bins, scheduled pickups, and involving community participation aids in streamlining collection processes. Addressing challenges like irregular waste disposal and limited infrastructure is pivotal for effective collection."
                },
                {
                    title: "Transfer and Transport",
                    desc: "Moving waste from collection points to treatment facilities demands effective transportation methods. Embracing eco-friendly transport options, optimizing routes, and investing in suitable vehicles minimize energy consumption and environmental impact during transit."
                },
                {
                    title: " Material and Resource Recovery",
                    desc: "Recovering materials through recycling, composting, and energy recovery reduces the strain on natural resources. Innovative technologies facilitate the extraction of valuable resources from waste, promoting a circular economy and minimizing landfill reliance."
                },
                {
                    title: "Disposal Methods",
                    desc: "Disposal involves the final treatment and disposition of residual waste. Landfills, incineration, and biological treatment are among the prevalent disposal methods. However, minimizing disposal by maximizing recycling and recovery remains a primary goal for sustainable waste management."
                },

            ]
        },

        aboutus: {
            title: "Solid Waste",
            desc: "Solid waste encompasses various discarded materials from households, industries, and commercial activities. Its mismanagement poses significant challenges, including environmental degradation, health hazards, and resource depletion. UNISOL stands at the forefront of the battle against improper waste management, striving for a sustainable future. With collaborative efforts and innovative strategies, the organization demonstrates the significance of responsible waste handling.Solid waste encompasses various discarded materials from households, industries, and commercial activities .With collaborative efforts and innovative strategies, the organization demonstrates the significance of responsible waste handling.Solid waste encompasses various discarded materials from households, industries, and commercial activities"
        },

    },
    {

        title: "Biomedical Waste",
        hero: {
            title: "Bio-medical Waste ",
            desc: "Bio-medical waste constitutes a critical concern in the healthcare sector, encompassing a diverse range of materials that pose potential hazards if improperly handled or disposed of. From discarded surgical instruments to infectious materials, this waste demands conscientious management to mitigate health risks and environmental degradation. Bio-medical waste demands meticulous attention due to its potential risks to health and the environment. Collaborative efforts, led by organizations like UNISOL, are crucial in advocating stringent regulations, implementing effective management strategies, and fostering awareness to safeguard our well-being and planet."
        },
        applications: {
            desc: "UNISOL's endeavors include fostering best practices, implementing advanced disposal methods, and promoting safe handling techniques.",
            img: '../assets/images/biomedicalwaste.png',
            data: [
                {
                    title: "Environmental Impact",
                    desc: "Improper handling of bio-medical waste poses severe environmental threats."
                },
                {
                    title: "Public Health Concerns",
                    desc: "Inadequate management of bio-medical waste heightens the risk of infections and injuries to healthcare workers, waste handlers, and the general public."
                },
                {
                    title: "Regulations and Guidelines",
                    desc: "The management of bio-medical waste is governed by stringent international standards and local regulations."
                },
                {
                    title: "Bio-medical Waste Segregation and Handling",
                    desc: "Proper segregation of bio-medical waste at the source is pivotal. Segregation into categories like infectious, sharp, pharmaceutical, and non-hazardous waste allows for efficient handling and appropriate disposal."
                },
                {
                    title: "Treatment and Disposal Methods",
                    desc: "Various treatment methods including autoclaving, microwaving, and chemical treatments are employed to disinfect bio-medical waste"
                },


            ]
        },

        aboutus: {
            title: "Biomedical Waste",
            desc: "Bio-medical waste constitutes a critical concern in the healthcare sector, encompassing a diverse range of materials that pose potential hazards if improperly handled or disposed of. From discarded surgical instruments to infectious materials, this waste demands conscientious management to mitigate health risks and environmental degradation. Bio-medical waste demands meticulous attention due to its potential risks to health and the environment. Collaborative efforts, led by organizations like UNISOL, are crucial in advocating stringent regulations, implementing effective management strategies, and fostering awareness to safeguard our well-being and planet"
        },

    },
    {

        title: "Water Waste",
        hero: {
            title: "Waste Water Treatment",
            desc: "Wastewater treatment plays a pivotal role in preserving the environment and maintaining public health. It involves the purification process of contaminated water, ensuring it's safe to return to the ecosystem. By developing equipment that promotes water conservation and efficient treatment processes, UNISOL contributes to environmental sustainability."
        },
        applications: {
            desc: "UNISOL, an esteemed entity dedicated to medical and surgical equipment advancements, actively engages in leveraging wastewater treatment for the betterment of society and the environment.",
            img: '../assets/images/waterwaste.png',
            data: [
                {
                    title: "Medical Facilities",
                    desc: "Wastewater treatment finds extensive utility in medical facilities, safeguarding against the dissemination of harmful pathogens and contaminants."
                },
                {
                    title: "Surgical Equipment Production",
                    desc: "The production of surgical equipment demands stringent hygiene standards. UNISOL integrates wastewater treatment practices into its manufacturing processes, upholding quality assurance in the production of sterile medical instruments."
                },
                {
                    title: "Environmental Impact and Sustainability",
                    desc: "Beyond immediate applications, wastewater treatment aligns with UNISOL's commitment to environmental sustainability. By advocating for responsible wastewater management, UNISOL actively contributes to preserving ecosystems and conserving water resources."
                },

            ]
        },

        aboutus: {
            title: "Waste Water",
            desc: "Wastewater treatment plays a pivotal role in preserving the environment and maintaining public health. It involves the purification process of contaminated water, ensuring it's safe to return to the ecosystem. By developing equipment that promotes water conservation and efficient treatment processes, UNISOL contributes to environmental sustainability.Wastewater treatment plays a pivotal role in preserving the environment and maintaining public health. It involves the purification process of contaminated water, ensuring it's safe to return to the ecosystem. By developing equipment that promotes water conservation and efficient treatment processes, UNISOL contributes to environmental sustainability."
        },

    }
]

function WasteManagement() {
    const { state } = useLocation();
    const [currentWasteManagementPage, setCurrentWasteManagementPage] = useState(0)

    useEffect(() => {
        setCurrentWasteManagementPage(state?.activePage ? state.activePage : 0)
    }, [state?.activePage])
    return (
        <>
            <WasteManagementBanner currentImage={currentWasteManagementPage + 1} currentPageName={wasteManagement[currentWasteManagementPage].title} />
            <WasteManagementComponent currentWasteManagementPage={currentWasteManagementPage} setCurrentWasteManagementPage={setCurrentWasteManagementPage} data={wasteManagement[currentWasteManagementPage]} />

        </>
    )
}

export default WasteManagement