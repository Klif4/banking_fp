import {EventStore} from "../../domain/ports/EventStore";
import {DomainEvent} from "../../domain/types/DomainEvent";

export const inMemoryEventStore = (): EventStore => {
    const events: DomainEvent[] = []

    return {
        all: () => Promise.resolve(events),
        publish: event => {
            events.push(event)
            return Promise.resolve()
        }
    }
}