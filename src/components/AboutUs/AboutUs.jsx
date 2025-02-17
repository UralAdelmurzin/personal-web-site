import React from 'react';
import './style.scss'
// import videoImg from 'src/assets/img/video_bg.jpg'
// import playBtn from 'src/assets/img/play-button.png'

function AboutUs() {
  // const [video, setVideo] = useState(false)

  return (
    <div className='about'>
      <div className="container">
        <h2 className='title'>About us</h2>
        {/* <div className="about_body">
          { video && 
            <div className="video_wrapper" onClick={() => setVideo(false)}>
              <div className="video_body">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/hrQ8M3NHNHw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                  ></iframe>
              </div>
            </div>
          }
          <div className="video_img" style={{backgroundImage: `url(${videoImg})`}}>
            <a className='video_btn' onClick={() => setVideo(true)} >
              <img src={playBtn} alt="play button" />
            </a>
          </div>

        </div> */}

        <div>
          <p>✔️ 4+ Years of Experience – We have been in the industry for over four years, honing our skills and perfecting our craft.</p>

          <p>✔️ Skilled & Professional Team – Our experts are trained to handle a wide range of repair and improvement tasks, ensuring top-quality results.</p>

          <p>✔️ Hundreds of Satisfied Clients – We have built a reputation for excellence, earning the trust of numerous happy customers.</p>

          <p>✔️ Extensive Portfolio – From small repairs to major home improvements, our diverse portfolio showcases our commitment to quality workmanship.</p>

          <p>✔️ Affordable & Transparent Pricing – No hidden fees! We provide clear and fair pricing for all our services.</p>

          <p>✔️ Punctual & Reliable – We respect your time and always strive to complete projects on schedule.</p>

          <p>✔️ Fully Equipped – We bring all the necessary tools and materials to get the job done efficiently.</p>

          <p>✔️ Customized Solutions – Every home and project is unique, so we tailor our services to meet your specific needs.</p>

          <p>✔️ Attention to Detail – We believe that even the smallest details matter, ensuring a perfect finish every time.</p>

          <p>✔️ Friendly & Professional Service – Customer satisfaction is our priority! We listen, communicate, and work with you to achieve the best results.</p>

          <p>We treat every project as if it were our own. Whether you need quick fixes, renovations, or expert advice, we’re here to help.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;