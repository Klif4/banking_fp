import {EventStore} from "../../../src/domain/ports/EventStore";
import {deposit} from "../../../src/infrastructure/usecases/deposit";

describe("deposit unit tests", () => {
    let eventStore: Partial<EventStore>

    beforeEach(() => {
        eventStore = {}
    });

    it("should publish deposit event", async () => {
        eventStore.publish = jest.fn()
        await deposit(eventStore as EventStore, 10)
        expect(eventStore.publish).toHaveBeenCalledWith({type: 'DEPOSIT', amount: 10})
    });
})