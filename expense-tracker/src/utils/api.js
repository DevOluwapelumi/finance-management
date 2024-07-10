// utils/api.js
export const fetchExpenses = async (token) => {
    const response = await fetch('http://localhost:5000/api/expenses', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return await response.json();
  };
  
  export const addExpense = async (expense, token) => {
    const response = await fetch('http://localhost:5000/api/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(expense),
    });
    return await response.json();
  };
  
  export const deleteExpense = async (id, token) => {
    await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  };
  