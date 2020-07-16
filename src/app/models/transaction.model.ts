export interface ITransaction {
    amount: number;
    categoryCode: string;
    merchant: string;
    merchantLogo: string;
    transactionDate: number;
    transactionType: string;
}