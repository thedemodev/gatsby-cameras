import React from 'react';
import CameraList from '../components/CameraList.js';

const Home = () => {

    return (
        <div>
            <div className="flex justify-center w-full mt-10 mb-6">
                <div className="w-11/12 lg:w-2/3">
                    <div className="flex flex-wrap -mx-2">
                        <CameraList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;