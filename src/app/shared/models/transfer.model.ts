export interface ITransfer {
    fromAccount: string;
    fromAccountBalance: number;
    toAccount: string;
    amount: number;
    isPreview?: boolean;
}
