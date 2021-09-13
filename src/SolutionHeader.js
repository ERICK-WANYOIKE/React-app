const SolutionHeader = () => {
    return (
        <div className="bg-green-500">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                Connect your business with the world
                </h2>
                <p className="text-base text-gray-100 md:text-lg leading-loose">
                It doesn't matter if you run a global powerhouse or local startup. We're here to help your business grow.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-green-500 bg-white border-2 border-current hover:bg-green-500 hover:text-white "
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}
 
export default SolutionHeader;