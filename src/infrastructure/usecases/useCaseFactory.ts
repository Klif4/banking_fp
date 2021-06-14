import {EventStore} from "../../domain/ports/EventStore";
import {getAccount} from "./getAccount";
import {deposit} from "./deposit";
import {withdraw} from "./withdraw";
import {Account} from "../../domain/types/Account";

export const useCaseFactory: (eventStore: EventStore) => UseCaseFactory = (eventStore) => ({
    getAccount: () => getAccount(eventStore),
    deposit: (amount: number) => deposit(eventStore, amount),
    withdraw: (amount: number) => withdraw(eventStore, amount),
})

export interface UseCaseFactory {
    getAccount: () => Promise<Account>,
    deposit: (amount: number) => Promise<void>,
    withdraw: (amount: number) => Promise<void>,
}
