import Nav from '../components/Nav';

const Header = () => {
  return (
    <>
   
    <nav className="fixed top-0 z-50 w-full bg-red-900 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">The Oracle.</span>
        </div>
        <div className="flex items-center">
            <div className="flex items-center ms-3 bg-white-900">
              <div>
                  <Nav />
              </div>
              </div>
              </div>
      </div>
    </div>
  </nav>
  </>
  );
};

export default Header;
