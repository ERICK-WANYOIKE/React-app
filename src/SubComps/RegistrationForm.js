const RegistrationForm = () => {
    return (  
        <div className="bg-gray-900 flex flex-col h-screen mb-4">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Register</h1>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name" />

                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />

                <button type="submit"
                    className="w-full text-center py-3 rounded bg-blue-900 text-white">Create Account</button>

                <div classNameName="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a classNameName="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="text-white mt-6">
                Already have an account? 
                <a className="no-underline border-b border-blue text-blue-100" href="../login/">
                    Log in
                </a>.
            </div>
        </div>
    </div>
    );
}
 
export default RegistrationForm;
