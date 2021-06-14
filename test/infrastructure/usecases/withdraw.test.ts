import {EventStore} from "../../../src/domain/ports/EventStore";
import {withdraw} from "../../../src/infrastructure/usecases/withdraw";

describe("withdraw unit tests", () => {

    let eventStore: Partial<EventStore>

    beforeEach(() => {
        eventStore = {}
    });

    it("should publish withdraw event", async () => {
        eventStore.publish = jest.fn()
        await withdraw(eventStore as EventStore, 10)
        expect(eventStore.publish).toHaveBeenCalledWith({type: 'WITHDRAW', amount: 10})
    });
})