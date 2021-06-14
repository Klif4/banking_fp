export interface EventStore {
    all: () => Promise<DomainEvent[]>
    publish: (event: DomainEvent) => Promise<void>
}