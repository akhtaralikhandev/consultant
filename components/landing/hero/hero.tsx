import "./hero.css";

// padding to sections md:pl-28 md:pr-28 p-4
const HeroMain = () => {
    return (
        <div className="heroMain">
            <div className="heroMainWarpper">
                <div className="navbar">
                    <div className="navbarWrapper md:pl-28 md:pr-28 md:p-4 pl-6 pr-6 2 flex items-center justify-between">
                        <div className="navbar_logo">
                            <img src="/images/hero/companyLogo1.png" alt="" />
                        </div>
                        <div className="navbar_middle">
                            <ul className="lg:flex hidden items-center justify-between gap-14">
                                <li className="navbar_item_list">Home</li>
                                <li className="navbar_item_list">About</li>
                                <li className="navbar_item_list">Services</li>
                                <li className="navbar_item_list">Resources</li>
                                <li className="navbar_item_list">Projects</li>
                            </ul>
                        </div>
                        <div className="navbar_right lg:flex hidden">
                            <button className="navbar_right_button rounded-md md:pl-5 md:pr-5 p-4">
                                Contact us today
                            </button>
                        </div>
                        <span className="lg:hidden block">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div className="heroMainSection">
                    <div className="heroMainSectionWrapper flex items-center justify-between md:pl-28 md:pr-28 md:p-8 md:pt-28 pl-6 pr-6 p-4">
                        <div className=" flex flex-1 flex-col gap-8">
                            <div className="flex flex-col heroMainLeft">
                                <span>
                                    Our <span className="consultation_span">consultation</span> is
                                </span>
                                <span>always in sync</span>
                                <span>with your strategy</span>
                            </div>
                            <div className="flex Scelerisque flex-col">
                                <span>
                                    Scelerisque dignissim in leo at magna donec mi metus ipsum{" "}
                                </span>
                                <span>luctus nam elit sociis luctus et aliquam libero.</span>
                            </div>
                            <div>
                                <button className="our_services_button pl-4 pr-4 p-3 rounded-lg">
                                    Our Services
                                </button>
                            </div>
                        </div>
                        <div className="heroMainRight flex-1">
                            <img src="/images/hero/profile1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureWrapper flex flex-col items-center md:gap-28 gap-4 md:pl-28 md:pr-28 md:p-8 md:pt-28 pl-6 pr-6 p-4">
                        <div className="flex flex-col items-center justify-center md:gap-6 gap-2">
                            <span className="care_feature_span">CARE FEATURES</span>
                            <span className="awesome_services">
                                Awesome Service With Our Tools
                            </span>
                        </div>
                        <div className="flex items-center md:gap-28 gap-4">
                            <div className="flex items-center flex-col md:gap-6 gap-2">
                                <img
                                    className="features_div_image"
                                    src="/images/features/image 2.png"
                                    alt=""
                                />
                                <span className="features_span_app">App Development</span>
                                <div className="helping_span_features flex flex-col items-center">
                                    <span>Helping families live intelligently</span>
                                    <span>means we’re always working to</span>
                                    <span> bring our customers.</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:gap-6 gap-2">
                                <img
                                    className="features_div_image"
                                    src="/images/features/image 3.png"
                                    alt=""
                                />
                                <span className="features_span_app">App Development</span>
                                <div className="helping_span_features flex flex-col items-center">
                                    <span>Helping families live intelligently</span>
                                    <span>means we’re always working to</span>
                                    <span> bring our customers.</span>
                                </div>
                            </div>
                            <div className="flex items-center flex-col md:gap-6 gap-2">
                                <img
                                    className="features_div_image"
                                    src="/images/features/image 4.png"
                                    alt=""
                                />
                                <span className="features_span_app">App Development</span>
                                <div className="helping_span_features flex flex-col items-center">
                                    <span>Helping families live intelligently</span>
                                    <span>means we’re always working to</span>
                                    <span> bring our customers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="aboutWrapper flex   gap-8 md:pl-28 md:pr-28 md:p-8 md:pt-28 pl-6 pr-6 p-4">
                        <div className="flex flex-1 gap-4 relative">
                            <img
                                className="pb-8"
                                src="/images/about/Rectangle 2.png"
                                alt=""
                            />
                            <img
                                className="absolute bottom-0 h-16"
                                src="/images/about/Combined Shape.png"
                                alt=""
                            />
                            <img src="/images/about/Rectangle 3.png" alt="" />
                        </div>
                        <div className="flex flex-1 flex-col  items-start md:gap-8 gap-4 ">
                            <span className="about_span">About</span>
                            <div className="influencer flex flex-col">
                                <span>Influencer Marketing</span>
                                <span>for Your Business</span>
                            </div>
                            <div className="with_over_25">
                                <span>
                                    With over 25 years of experience, we have crafted thousands{" "}
                                </span>
                                <span>
                                    of Strategic discovery process that enables us to peel back{" "}
                                </span>
                                <span>
                                    the Layers which enable us to understand, connect, represent
                                </span>
                                <span> and Dominate your market.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amazing">
                    <div className="amazingWrapper flex flex-col items-center justify-center md:gap-8 gap-4 md:pl-28 md:pr-28 p-8 md:pt-28 pl-6 pr-6 md:p-24">
                        <span className="amazing_span">Our Services</span>
                        <span className="amazing_spann">Amazing Business Services</span>
                        <div className="flex items-center gap-8">
                            <div className="amazing_div1 flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>
                                    <span>alteration in some form, by injected humour, or</span>
                                    <span>randomised words which don't look even slightly</span>
                                    <span>believable. If you are going</span>
                                </div>
                            </div>
                            <div className="amazing_div2 flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>
                                    <span>alteration in some form, by injected humour, or</span>
                                    <span>randomised words which don't look even slightly</span>
                                    <span>believable. If you are going</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="who_are_we flex items-center justify-center">
                    <div className="who_wrapper flex items-start md:gap-24 gap-8 justify-center md:pl-28 md:pr-2 md:pt-24  p-8">
                        <div className="relative flex-1">
                            <img src="/images/who/image.png" alt="" />
                            <img className="absolute  -bottom-14 right-0" src="/images/who/image 3.png" alt="" />
                            <img className="absolute top-0" src="/images/who/Abstract.png" alt="" />
                        </div>
                        <div className="flex-1 flex flex-col md:gap-8 gap-4">
                            <span className="who_we_are_span">Who We Are</span>
                            <div className="flex flex-col have_a_project">
                                <span>Have A Project In Mind?</span>
                                <span>Let’s Get To Work.</span>
                            </div>
                            <div className="flex flex-col sed_ut">
                                <span>Sed ut perspiciatis unde omnis iste natus sit voluptatem </span>
                                <span>accusantium doloremque laudantium totam rem apereaque</span>
                                <span>abillo inventore veritatis quasi architecto beatae</span>
                            </div>
                            <ul className=" list-decimal gap-4 flex flex-col  list_about">
                                <li>Business Planning, Strategy</li>
                                <li>Financial Projections And Analysis</li>
                                <li>International Business Opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="latest_projects">
                    <div className="latest_projects_wrapper flex flex-col md:gap-12 gap-4 md:pb-28 md:pt-28 justify-center items-center">
                        <span className="our_projects">Latest Project & Case</span>
                        <span className="global_projects">Let’s Looks Our Global Projects</span>
                        <div className="flex items-center gap-8">
                            <div className="amazing_div3 flex-1 md:gap-8  flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical1">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>

                                </div>
                            </div>
                            <div className="amazing_div3 flex-1 flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical1">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>

                                </div>
                            </div>
                            <div className="amazing_div3 flex-1 flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical1">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>

                                </div>
                            </div>
                            <div className="amazing_div3 flex-1 flex pb-8 p-4 items-start justify-end gap-4 flex-col">
                                <span className="technical1">Technical Analysis</span>
                                <div className="technical_div">
                                    <span>There are many variations of passages of Lorem</span>
                                    <span>Ipsum available, but the majority have suffered </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background h-96 object-center flex items-center bg-no-repeat">
                    <div className="background_wrapper flex md:pl-28 md:pr-28 md:gap-48 md:p-4 pl-6 pr-6 items-center justify-between">
                        <div className="flex flex-col get_free">
                            <span>Get Free Consultations! We’re</span>
                            <span>Ready to Work Together</span>
                        </div>
                        <div>
                            <button className="get_free_consultation_button">Get Free Consultations</button>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamWrapper flex flex-col items-center justify-center md:p-28 md:pl-28 md:pr-28 md:gap-24  pl-6 pr-6">
                        <div className="flex flex-col items-center gap-8 justify-center">
                            <span className="meet_our">Meet Our Team</span>
                            <span className="experience">Experience Team Members</span>
                        </div>
                        <div className="flex items-center  justify-center md:gap-8">
                            <div className="flex flex-col gap-4">
                                <img src="/images/team/image.png" alt="" />
                                <span className="span_name">Robert C. Simmons</span>
                                <span className="consultant">Business Consultant</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <img src="/images/team/image 2.png" alt="" />
                                <span className="span_name">Christopher L. Wagner</span>
                                <span className="consultant">Senior Manager</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <img src="/images/team/image 3.png" alt="" />
                                <span className="span_name">Lawrence C. Dickerson</span>
                                <span className="consultant">Financial Consultant</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="newsLetter">
                    <div className="newLetterWrapper md:p-28 ">
                        <div className="newsContainer md:p-28 flex justify-between items-center">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col subscribe_span">
                                    <span>Subscribe to Our Newsletter For</span>
                                    <span>Weekly Article Update.</span>
                                </div>
                                <div className="flex flex-col passages_span">
                                    <span>Passages of lorem ipsum available, but the majority have suffered</span>
                                    <span>alteration, by injected words.</span>
                                </div>
                            </div>
                            <div>
                                <button className="getStarted">Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <div className="footerWrapper flex items-center justify-center md:gap-28  md:pl-28 md:pr-28 md:p-8 md:pt-28 pl-6 pr-6 p-4">
                        <div className="flex flex-col gap-8">
                            <img
                                src="/images/footer/logo.png"
                                alt=""
                                className="logo_footer"
                            />
                            <div className="flex flex-col">
                                <span>2021 Award winning Vaccination</span>
                                <span>and Lorem ipsum dolor sit amet</span>
                            </div>
                            <img className="footer_group" src="/images/footer/Group 67.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-8">
                            <span className="location">Location</span>
                            <ul className="ul_location flex flex-col gap-4">
                                <li>America</li>
                                <li>Asia</li>
                                <li>Europe</li>
                                <li>Africa</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span className="location">Location</span>
                            <ul className="ul_location flex flex-col gap-4">
                                <li>America</li>
                                <li>Asia</li>
                                <li>Europe</li>
                                <li>Africa</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span className="location">Location</span>
                            <ul className="ul_location flex flex-col gap-4">
                                <li>America</li>
                                <li>Asia</li>
                                <li>Europe</li>
                                <li>Africa</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default HeroMain;
