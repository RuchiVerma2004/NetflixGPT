const Heading = ()=>{
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-br from-black  z-10 w-full h-full">
          
            {/* <h1 className="text-3xl font-bold font-mono text-red-600">STREAMX</h1> */}
        
            <img 
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="Netflix Logo" 
                className="w-40 "
            />
        </div>
    );
};

export default Heading;