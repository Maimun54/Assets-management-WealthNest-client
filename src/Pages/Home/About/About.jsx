

const About = () => {
    return (
        <div className="pb-10">
            <div>
                <h2 className="text-4xl font-bold text-center py-5">About Us</h2>
                <p className="lg:text-3xl md:text-3xl text-center items-center lg:px-5"> At WealthNest, we believe in the power of intelligent asset management <br /> to transform  the way individuals and businesses navigate the complexities of wealth growth.</p>
            </div>
            <div  className="lg:flex px-10 gap-5">
             <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold  py-5">Our Mission</h2>
                <p className="text-xl text-center">Our mission is to provide a seamless and sophisticated asset management experience, empowering our clients to make informed financial decisions and achieve their wealth objectives. We understand that every financial journey is unique, and we are here to guide you through the intricacies of wealth management with precision and care.</p>
             </div>
             <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold py-5">Why Choose WealthNest</h2>
                <p className="text-xl text-center ">We recognize that your financial goals are as unique as you are. WealthNest tailors its asset management strategies to your individual needs, whether you're planning for retirement, wealth preservation, or future investments.WealthNest combines cutting-edge technology with a team of seasoned financial experts</p>
             </div>
            </div>
        </div>
    );
};

export default About;