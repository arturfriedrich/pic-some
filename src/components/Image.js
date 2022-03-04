import React, { useState } from "react"

export default function Image({img, className}) {

    const [hovered, setHovered] = useState(false)

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter= {() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
        </div>
    )
}