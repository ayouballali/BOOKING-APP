import React from 'react'
import useFetch from '../../hooks/useFetch';
import './featured.css'

export default function Featured() {


    const [data, loading, error] = useFetch(
        "http://localhost:8800/api/hotels/countByCity?cities=casa,souk sebt,rabat"
    );
    console.log("loading "+loading)
    console.log(error);



    return (
        <div className='featured'>
            {loading ? (
                "Loading please wait"
            ) : (<>
                <div className='featuredItem'>
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                        alt='loading'
                        className='featuredImg'
                    />
                    <div className="featuredTitles">
                        <h1 >CasaBlanca</h1>
                        <p>{data[0]} properties</p>
                    </div>
                </div>

                <div className='featuredItem'>
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                        alt='loading'
                        className='featuredImg'
                    />
                    <div className="featuredTitles">
                        <h1 >souk sebt</h1>
                        <p>{data[1]} properties</p>
                    </div>
                </div>

                <div className='featuredItem'>
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                        alt='loading'
                        className='featuredImg'
                    />
                    <div className="featuredTitles">
                        <h1 >rabat</h1>
                        <p>{data[2]} properties</p>
                    </div>
                </div>
                </>)}
        </div>
    )
}
