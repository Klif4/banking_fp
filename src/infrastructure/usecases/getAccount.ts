import {EventStore} from "../../domain/ports/EventStore";
import {Account} from "../../domain/types/Account";
import {accountReducer} from "../../domain/accountReducer";

export const getAccount: (eventStore: EventStore) => Promise<Account> = (eventStore) => eventStore
    .all()
    .then(domainEvents => domainEvents.reduce(accountReducer, {balance: 0, statement: []}))