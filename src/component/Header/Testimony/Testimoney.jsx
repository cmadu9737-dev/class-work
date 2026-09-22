import React from 'react'
import './Testimoney.css';
import car from '../../../assets/car.jpg';
import beauty from '../../../assets/beauty.jpg';
import buyer from '../../../assets/buyer.png';

const Testimoney = () => {
  return (
    <div>
      {/* <!-- TESTIMONY --> */}
    <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Student</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src={beauty} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This Academy completely changed my career. i learnt how to design from this program</p>
            </div>
            <div className="card">
                <img src={buyer} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>head the spin me and am confused at first but later it started becoming so clearer thanks to the the program</p>
            </div>
            <div className="card">
                <img   src={car} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This program helped me to become confident in my design</p>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Testimoney
