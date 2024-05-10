import React from 'react'
import { features } from '../../../Utils/Data'
import FeatureCard from './FeatureCard'

const Features = () => {
    return (
        <div className="px-4 md:px-28 grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {features.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}

export default Features