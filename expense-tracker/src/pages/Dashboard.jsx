import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartBar, faClipboardCheck, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="p-4 sm:ml-64 mt-12">
        <div className="p- border-2 border-red-700 border-dashed rounded-lg dark:border-gray-700 shadow-md ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="flex space-x-4 p-2">
              <div className="bg-gray-200 p-2 rounded-lg w-full shadow-md">
                <h2 className="text-lg font-bold mb-2">New update!</h2>
                <div>
                  <div className="flex items-start space-x-2 mt-3">
                    {/* Replace the image source with your actual image */}
                    <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <p className="font-semibold">Insights</p>
                      <p className="text-sm text-gray-600">analyzed data for Expense Trends</p>
                    </div>
                    <Button className="bg-red-900 hover:bg-red-600 text-white rounded-full">
                      <Link to="/home" className="text-white text-sm">View</Link>
                    </Button>
                  </div>

                  {/* Repeat this pattern for other sections if needed */}
                  <div className="flex items-start space-x-2 mt-5">
                    {/* Replace the image source with your actual image */}
                    <img src="src/assets/Image.png" alt="Report" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <p className="font-semibold">Report</p>
                      <p className="text-sm text-gray-600">Financial Report</p>
                    </div>
                    <Button className="bg-red-900 hover:bg-red-600 text-white rounded-full">
                      <Link to="/home" className="text-white text-sm">View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 p-2">
              <div className="bg-gray-200 p-2 rounded-lg w-full shadow-md">
                <h2 className="text-lg font-bold mb-2">Objectives</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5 flex items-center justify-center text-2xl" />
                      <div className="ml-1">
                        <p className="font-semibold">Total Expenses</p>
                        {/* <p className="text-sm text-gray-600">progress towards target</p> */}
                      </div>
                    </div>
                    <Button className="bg-red-900 hover:bg-red-600 text-white rounded-full">
                      <Link to="/home" className="text-white text-sm">View</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faPiggyBank} className="w-5 h-5 flex items-center justify-center text-2xl" />
                      <div className="ml-1">
                        <p className="font-semibold">Account Balance</p>
                        {/* <p className="text-sm text-gray-600">new investments made</p> */}
                      </div>
                    </div>
                    <Button className="bg-red-900 hover:bg-red-600 text-white rounded-full">
                      <Link to="/home" className="text-white text-sm">View</Link>
                    </Button>


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 p-2 md:flex-row md:space-x-4 md:space-y-0 -mt-5">
            <div className="bg-gray-200 p-4 rounded-lg w-full md:w-1/3 shadow-md">
              <h2 className="text-lg font-bold mb-4">Financial insights</h2>
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 text-black" />
                  <div className="ml-2">
                    <p className="font-semibold">Expense trends</p>
                    <p className="text-sm text-gray-600">Q4 Budget review</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faClipboardCheck} className="w-5 h-5 text-black" />
                  <div className="ml-2">
                    <p className="font-semibold">Financial status</p>
                    <p className="text-sm text-gray-600">Q4 Savings check-in for all categories</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-black" />
                  <div className="ml-2">
                    <p className="font-semibold">Financial operations</p>
                    <p className="text-sm text-gray-600">Future goals and investment plans</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg w-full md:w-2/5 shadow-md">
              <h2 className="text-lg font-bold mb-4">Analysis</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p>Are you meeting your budget targets?</p>
                  <div className="w-full bg-gray-300 rounded-lg h-4">
                    <div className="bg-red-500 h-4 rounded-lg" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p>How satisfied are you with the apps financial tools?</p>
                  <div className="w-full bg-gray-300 rounded-lg h-4">
                    <div className="bg-red-500 h-4 rounded-lg" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p>Do you feel confident in your financial decisions?</p>
                  <div className="w-full bg-gray-300 rounded-lg h-4">
                    <div className="bg-red-500 h-4 rounded-lg" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-md">
  <h2 className="text-lg font-bold mb-4">Help & Settings</h2>
  <div className="space-y-2">
    <Button className="w-full text-center">
      <Link to="/budget" className="text-gray-900" size="sm">Manage budget</Link>
    </Button>
    <Button className="w-full text-center">
      <Link to="" className="text-gray-900" size="sm">Learning resources</Link>
    </Button>
    <Button className="w-full text-center">
  <a href="mailto:Ayomideshaun98@gmail.com" className="text-gray-900" size="sm">Help Center</a>
</Button>

  </div>
</div>

          </div>
        </div>
      </div>

      <Footer className="mt-auto" /> {/* Use mt-auto to push footer to the bottom */}
    </div>
  );
};

export default Dashboard;
