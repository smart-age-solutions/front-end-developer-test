import React, {useState} from 'react'
import { Collections_sec } from './CollectionsStyles'
import ima from './images/Earring.png'
import { IoIosArrowForward } from 'react-icons/io'

const Images = [
    {
        index: 1,
        title: "SWIRLD RINGS",
        image: require('./images/Earring.png').default
    },
    {
        index: "2",
        title: "BUTTERFLY",
        image: "https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        index: 3,
        title: "CARISSA",
        image: "https://images.unsplash.com/photo-1603960820172-31f71c8c1637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
]

export default function Collections() {
    const [current, setCurrent] = useState(1);
    return (
        <Collections_sec>

                <div className="left-side">
                    <h1>Collections</h1>
                    <div className="titles-box">
                        {Images.map(({ title, index}) => {
                            return(
                                <div className={current === index ? 'title active' : 'title'}>
                                    <p onClick={() => setCurrent(index)}>{title}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="elipse-box">
                    <span className="Elipse"><IoIosArrowForward/></span>
                    <p>VIEW ALL</p>
                    </div>

                </div>

                <div className="right-box">
                    {Images.map(({ index, image}) => {
                        return(
                            <div className="image-box">
                                {current === index ? (
                                    <div>
                                        <img src={image} alt=""/>
                                    </div>
                                ): null}
                            </div>
                            
                        )
                    })}

                    <div className="elipse-box">
                        <span className="Elipse"><IoIosArrowForward/></span>
                        <p>VIEW MORE</p>
                    </div>
                </div>
        </Collections_sec>
    )
}
