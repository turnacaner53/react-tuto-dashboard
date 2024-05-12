import { create } from 'zustand';

const useWalletStore = create((set) => ({
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
  addTransaction: (transaction) => {
    set((state) => {
      const updatedTransactions = [...state.transactions, transaction];
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      return { transactions: updatedTransactions };
    });
  },
  removeTransaction: (transactionId) => {
    set((state) => {
      const updatedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== transactionId,
      );
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      return { transactions: updatedTransactions };
    });
  },
}));

export default useWalletStore;
