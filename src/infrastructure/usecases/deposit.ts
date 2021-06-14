import {EventStore} from "../../domain/ports/EventStore";

export const deposit: (eventStore: EventStore, amount: number) => Promise<void> = (eventStore, amount) =>
    eventStore.publish({type: 'DEPOSIT', amount})