import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {name: "Jhonny deep", id: 1, img: expert1},
    {name: "Will Smith", id: 2, img: expert2},
    {name: "Leonardo D caprio", id: 3, img: expert3},
    {name: "The Rock", id: 4, img: expert4},
    {name: "Bred pitt", id: 5, img: expert5},
    {name: "Lerry page", id: 6, img: expert6}
]


const Experts = () => {
    return (
        <div>
            <h1 id='experts' className='text-center mt-5 text-primary mb-3'>Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;