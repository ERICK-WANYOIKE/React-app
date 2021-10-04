const Feature = () => {
    return ( 
        <div className=" mt-12 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-purple-900">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <h1 className="inline-block px-3 py-px mb-4 text-2xl font-bold text-gray-50">
            Our Services
          </h1>
        </div>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 bg-gray-50 rounded
   py-16 px-2 ">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-puprple-600">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1Louw5XmdtVGyHSdJOKxtUyVwY5CvNiUNg&usqp=CAU" alt=""/>
            </div>
            <h6 className="mb-2 font-base text-purple-900">Air frieght</h6>
            <p className="mb-3 text-sm text-gray-600">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-puprple-600">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjQITXOdQc6lj97LOn7xHfpcYtcrb6-dRIQ&usqp=CAU" alt=""/>
            </div>
            <h6 className="mb-2 font-base text-purple-900">Fulfilment</h6>
            <p className="mb-3 text-sm text-gray-600">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-puprple-600">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfgOA-RviFRQbVOa0gYPnbHRA7ejtvzs3Xw&usqp=CAU" alt=""/>
            </div>
            <h6 className="mb-2 font-base text-purple-900">Sea frieght</h6>
            <p className="mb-3 text-sm text-gray-600">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-puprple-600">
             <img src="data:image/png;base64,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" alt=""/>
            </div>
            <h6 className="mb-2 font-base text-purple-900">Land transpotation</h6>
            <p className="mb-3 text-sm text-gray-600">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling.
            </p>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Feature;