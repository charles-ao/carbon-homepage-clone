import React from 'react'
import rating from '../../../images/Rating2x.png'
import Review from './Review/Review'
import Carousel from 'react-elastic-carousel'
import { IoIosArrowDropright } from "react-icons/io";
import { useGlobalContext } from "../../../context"

const Reviews = () => {
    const {personData} = useGlobalContext();

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 3.5},
    ]


    return (
        <div className='reviews'>
            <div className='reviews-heading'>
                <h2>Trusted by over 2 million customers</h2>
                <div>
                    <div className='rating'>
                        <img src={rating} alt='icon rating'/>
                        <h4>+4.4</h4>
                    </div>
                    <h4>Score based on over 78,000 
                        reviews on Google Play Store and App Store
                    </h4>
                </div>
            </div>

            <div className='reviews-content'>
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {
                        personData.map(val =>  {
                            return <Review key={val.id} pic={val.img} review={val.review} name={val.name}/>

                        })
                    }
                </Carousel>
            </div>

            <div className='review-bottom'>
                <h4>Read more user stories</h4>
                <IoIosArrowDropright />
            </div>
        </div>
    )
}

export default Reviews;