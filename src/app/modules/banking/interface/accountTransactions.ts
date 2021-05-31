import { Transaction } from "./transactions";

export interface AccountTransactions {
	id: number,
	accountNumber: string;
	transactions: Transaction[]
}
