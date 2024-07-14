// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import TransactionPage from './pages/TransactionPage';

// const TransactionsContainer = () => {
//   const [userGoals, setUserGoals] = useState([]);
//   const [userExpenses, setUserExpenses] = useState([]);
//   const [userIncomes, setUserIncomes] = useState([]);
//   const currentUser = localStorage.userId;

//   const getUserInfo = async () => {
//     try {
//       // const response = await axios.post('http://localhost:5000/api/users/userDetails', { currentUser });
//       const response = await axios.post('https://tracker-server-two.vercel.app/api/users/userDetails', { currentUser });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   };

//   useEffect(() => {
//     getUserInfo();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const goalsResponse = await axios.get('http://localhost:5000/api/budgetAndGoals/fetchgoal, { currentUser }');
//         const expensesResponse = await axios.get('http://localhost:5000/api/expense/fetchexpense, { currentUser)');
//         const incomesResponse = await axios.get('http://localhost:5000/api/income/fetchincome, { currentUser)');
  
//         console.log('Goals:', goalsResponse.data);
//         console.log('Expenses:', expensesResponse.data);
//         console.log('Incomes:', incomesResponse.data);
  
//         setUserGoals(goalsResponse.data);
//         setUserExpenses(expensesResponse.data);
//         setUserIncomes(incomesResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   const handleDeleteGoal = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/budgetAndGoals/${id}`);
//       setUserGoals(userGoals.filter(goal => goal._id !== id));
//     } catch (error) {
//       console.error('Error deleting goal:', error);
//     }
//   };

//   const handleDeleteExpense = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/expense/${id}`);
//       setUserExpenses(userExpenses.filter(expense => expense._id !== id));
//     } catch (error) {
//       console.error('Error deleting expense:', error);
//     }
//   };

//   const handleDeleteIncome = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/income/${id}`);
//       setUserIncomes(userIncomes.filter(income => income._id !== id));
//     } catch (error) {
//       console.error('Error deleting income:', error);
//     }
//   };

//   return (
//     <TransactionPage
//       userGoals={userGoals}
//       userExpenses={userExpenses}
//       userIncomes={userIncomes}
//       handleDeleteGoal={handleDeleteGoal}
//       handleDeleteExpense={handleDeleteExpense}
//       handleDeleteIncome={handleDeleteIncome}
//     />
//   );
// };

// export default TransactionsContainer;
