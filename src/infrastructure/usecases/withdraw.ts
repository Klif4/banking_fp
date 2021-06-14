import {EventStore} from "../../domain/ports/EventStore";

export const withdraw: (eventStore: EventStore, amount: number) => Promise<void> = (eventStore, amount) =>
    eventStore.publish({type: 'WITHDRAW', amount})