import {Account} from "./types/Account";
import {DomainEvent} from "./types/DomainEvent";

export const accountReducer: (account: Account, event: DomainEvent) => Account = (account, event) => {
    switch (event.type){
        case "DEPOSIT":
            const depositBalance = account.balance + event.amount;
            return {
                balance: depositBalance,
                statement: [...account.statement, {amount: event.amount, balance: depositBalance}]
            };
        case "WITHDRAW":
            const withdrawBalance = account.balance - event.amount;
            return {
                balance: withdrawBalance,
                statement: [...account.statement, {amount: - event.amount, balance: withdrawBalance}]
            };

        default:
            throw new Error('unknown event')
    }
};