import React from 'react'

export default function Pot_cards({image , title , description}) {
    return (
        <>
            <div className="col">
                
                <div className="card shadow-sm border-0">
                    
                    <div className='w-100' style={{height:"250px"}}>
                        <img src={image} alt="" className='w-100 h-100 object-fit-cover' />
                    </div>
                    
                    <div className="card-body d-flex flex-column gap-2 bg-light">
                        <div>
                            {title}
                        </div>
                        <p className="card-text fs-6 text-secondary">
                            {description}
                        </p>
                        
                    </div>
                </div>
            </div>

        </>
    )
}
