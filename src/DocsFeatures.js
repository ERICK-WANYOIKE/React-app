const DocsFeatures = () => {
    return ( 
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
          How we take the hassle out of logistics

          </h5>
          <p className="mb-6 text-gray-900">
          Here's what we offer to make shipping as simple as possible:
          </p>
          <div className="flex items-center">

          </div>
            
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src="https://www.twill.net/gatsby_assets/static/2700ecfbcee262a38b068eb929e90994/icon-24-px-calendar.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Monthly fixed rates</h6>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img src="https://www.twill.net/gatsby_assets/static/8e96353722ee0207cda379b22f25860b/icon-24-px-truck.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Track and trace</h6>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
             <img src="https://www.twill.net/gatsby_assets/static/b4fb456008754ba65648412caee254e8/icon-24-px-chat.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Customer support</h6>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src="https://www.twill.net/gatsby_assets/static/6dcc0d9b919f6304d82ad8c7d0fa894b/Truck_Copy_4.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Easy booking</h6>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default DocsFeatures;