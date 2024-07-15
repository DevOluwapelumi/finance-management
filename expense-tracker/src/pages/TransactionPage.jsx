import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const currentUser = localStorage.userId;

  const fetchAllTransactions = async () => {
    if (currentUser) {
      try {
        const [expensesResponse, incomesResponse, goalsResponse] = await Promise.all([
        //   axios.post('http://localhost:5000/api/expense/fetchexpense', { currentUser }),
        //   axios.post('http://localhost:5000/api/income/fetchincome', { currentUser }),
        //   axios.post('http://localhost:5000/api/budgetAndGoals/fetchgoal', { currentUser })
          axios.post('https://tracker-server-two.vercel.app/api/expense/fetchexpense', { currentUser }),
          axios.post('https://tracker-server-two.vercel.app/api/income/fetchincome', { currentUser }),
          axios.post('https://tracker-server-two.vercel.app/api/budgetAndGoals/fetchgoal', { currentUser })
        ]);

        const expenses = expensesResponse.data.map(expense => ({ ...expense, type: 'Expense' }));
        const incomes = incomesResponse.data.map(income => ({ ...income, type: 'Income' }));
        const goals = goalsResponse.data.map(goal => ({ 
          ...goal, 
          type: 'Budget/Goal',
          amount: goal.amountb // Use budget amount for sorting
        }));

        const allTransactions = [...expenses, ...incomes, ...goals];
        
        // Sort transactions by date in descending order
        allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        setTransactions(allTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        toast.error('Error fetching transactions');
      }
    }
  };

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  const formatAmount = (transaction) => {
    if (transaction.type === 'Budget/Goal') {
      return `₦${transaction.amountb.toFixed(2)} / ₦${transaction.amounts.toFixed(2)}`;
    }
    return `₦${transaction.amount.toFixed(2)}`;
  };

    // Function to convert transactions to CSV
    const convertToCSV = (transactions) => {
        const headers = ['Date', 'Type', 'Category', 'Amount'];
        const csvRows = [headers.join(',')];
    
        for (const transaction of transactions) {
          const row = [
            transaction.date,
            transaction.type,
            transaction.category,
            formatAmount(transaction).replace('₦', '') // Remove the Naira symbol for CSV
          ];
          csvRows.push(row.join(','));
        }
    
        return csvRows.join('\n');
      };
    
      // Function to download CSV
      const downloadCSV = () => {
        const csv = convertToCSV(transactions);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', 'transactions.csv');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-2 md:ml-60 mt-[70px]">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="card-header">
          <div className="float-end">
            {/* <h2 className="text-lg font-bold mb-4">All Transactions</h2> */}
            <button 
                onClick={downloadCSV} 
                className="btn btn-sm btn-primary bg-red-900 text-white font-bold py-2 px-4 rounded"
              >
                Download CSV
              </button>

      {/* <Link to="/transaction" className="btn btn-sm btn-primary bg-red-900">See All</Link> */}
    </div>
    <h2 className="text-lg font-bold mb-4">All Transactions</h2>
  </div> 
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Type</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                      <tr key={transaction._id}>
                        <td className="py-2 px-4 border-b">{transaction.date}</td>
                        <td className="py-2 px-4 border-b">{transaction.type}</td>
                        <td className="py-2 px-4 border-b">{transaction.category}</td>
                        <td className="py-2 px-4 border-b">{formatAmount(transaction)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-2 px-4 border-b">
                        No transactions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer className="mt-auto" />
      <ToastContainer />
    </div>
  );
};

export default TransactionPage;