export type DomainEvent = {
    type: 'DEPOSIT' | 'WITHDRAW'
    amount: number
}