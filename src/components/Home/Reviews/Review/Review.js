import React from 'react'

const Review = (props) => {
    const {review, pic, name} = props
    return (
        <div className='review'>
            <div className='review-msg'>
                <p>
                    {review}
                </p>
            </div>
            <div className='review-detail'>
                <img src={pic} alt={name}/>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Review;