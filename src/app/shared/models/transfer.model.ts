export interface ITransfer {
    fromAccount: string;
    fromAccountBalance: number;
    toAccount: string;
    amount: string;
    isPreview?: boolean;
}
