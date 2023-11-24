

const Packages = () => {
    return (
        <div>
        <div>
                <h2 className="text-4xl font-bold text-center py-5">Our Packages</h2>
                <p className="text-2xl text-center"> Discover the right fit for your  goals with our three comprehensive packages</p>
            </div>
        <div className="flex">
            <div>
      <div  className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src="https://i.ibb.co/1T4sfxK/pexels-fauxels-3184295.jpg"alt="brad car" /></figure>
      <div className="card-body">
      <h2 className="card-title text-center">Maximum 5 employees $5</h2>
      </div>
      </div>
     
        </div>
            <div>
      <div  className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src="https://i.ibb.co/D84s50M/pexels-fauxels-3184298.jpg"alt="brad car" /></figure>
      <div className="card-body">
      <h2 className="card-title text-center">Maximum 10 employees $8</h2>
      </div>
      </div>
     
        </div>
            <div>
      <div  className=" card card-compact  m-5 bg-base-100 shadow-xl">
      <figure><img className="w-[500px] h-[300px]" src="https://i.ibb.co/10G2DxZ/pexels-canva-studio-3153198.jpg"alt="brad car" /></figure>
      <div className="card-body">
      <h2 className="card-title text-center">Maximum 20 employees $15</h2>
      </div>
      </div>
     
        </div>
        </div>
        </div>
    );
};

export default Packages;