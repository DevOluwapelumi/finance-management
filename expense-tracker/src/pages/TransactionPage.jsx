// import PropTypes from 'prop-types';

// const TransactionPage = ({
//   userGoals = [],
//   userExpenses = [],
//   userIncomes = [],
//   handleDeleteGoal,
//   handleDeleteExpense,
//   handleDeleteIncome,
// }) => {

//   console.log('User Goals:', userGoals);
//   console.log('User Expenses:', userExpenses);
//   console.log('User Incomes:', userIncomes);
    
//   // Merging all transactions into one array
//   const mergedTransactions = [
//     ...userGoals.map((goal) => ({ ...goal, type: "Goal" })),
//     ...userExpenses.map((expense) => ({ ...expense, type: "Expense" })),
//     ...userIncomes.map((income) => ({ ...income, type: "Income" })),
//   ];

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//       <h2 className="text-lg font-bold mb-4">Transactions</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Type</th>
//               <th className="py-2 px-4 border-b">Category</th>
//               <th className="py-2 px-4 border-b">Date</th>
//               <th className="py-2 px-4 border-b">Amount/Budget/Saving Goal</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           {mergedTransactions.length > 0 ? (
//             <tbody>
//               {mergedTransactions.map((transaction) => (
//                 <tr key={transaction._id}>
//                   <td className="py-2 px-4 border-b">{transaction.type}</td>
//                   <td className="py-2 px-4 border-b">{transaction.category}</td>
//                   <td className="py-2 px-4 border-b">{transaction.date}</td>
//                   <td className="py-2 px-4 border-b">
//                     {transaction.type === "Goal"
//                       ? `$${(transaction.amountb || 0).toFixed(2)} / $${(transaction.amounts || 0).toFixed(2)}`
//                       : `$${(transaction.amount || 0).toFixed(2)}`}
//                   </td>
//                   <td className="py-2 px-4 border-b">
//                     <button
//                       onClick={() =>
//                         transaction.type === "Goal"
//                           ? handleDeleteGoal(transaction._id)
//                           : transaction.type === "Expense"
//                           ? handleDeleteExpense(transaction._id)
//                           : handleDeleteIncome(transaction._id)
//                       }
//                       className="bg-red-500 text-white p-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           ) : (
//             <tbody>
//               <tr>
//                 <td colSpan="5" className="text-center py-2">
//                   No transactions, add some transactions above
//                 </td>
//               </tr>
//             </tbody>
//           )}
//         </table>
//       </div>
//     </div>
//   );
// };

// TransactionPage.propTypes = {
//   userGoals: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       amountb: PropTypes.number,
//       amounts: PropTypes.number,
//     })
//   ),
//   userExpenses: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//     })
//   ),
//   userIncomes: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//     })
//   ),
//   handleDeleteGoal: PropTypes.func.isRequired,
//   handleDeleteExpense: PropTypes.func.isRequired,
//   handleDeleteIncome: PropTypes.func.isRequired,
// };

// TransactionPage.defaultProps = {
//   userGoals: [],
//   userExpenses: [],
//   userIncomes: [],
// };

// export default TransactionPage;
