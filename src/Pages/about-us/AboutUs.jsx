import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './AboutUs.module.css';
import photo from '../../Auth/aboutus.webp';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className={`${classes.heading} row justify-content-center align-items-center pt-3 `}>
                <h1 className={`${classes.title} col-12 col-md-6 text-center`}>درباره ما</h1>
            </div>
            <main className='container-fluid mt-5 '>
                <div className={`${classes.mainaboutus} card `}>
                    <div className="row g-0">
                        <div className=" col-12 col-md-4">
                            <img src={photo} alt="" className="img-fluid" />
                        </div>
                        <div className={`${classes.informationBOx} col-12 col-md-8`}>
                            <div className="card-body ">
                                <h3 className="card-title text-center py-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
                                <p className="card-text text-justify px-md-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </>
    );
}

export default AboutUs;
