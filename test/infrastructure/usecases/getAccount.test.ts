import {EventStore} from "../../../src/domain/ports/EventStore";
import {getAccount} from "../../../src/infrastructure/usecases/getAccount";
import {Account} from "../../../src/domain/types/Account";

describe("getAccount unit tests", () => {

    let eventStore: Partial<EventStore>

    beforeEach(() => {
        eventStore = {}
    });

    it("should resolve account", async () => {
        eventStore.all = jest.fn().mockResolvedValue([{type: 'DEPOSIT', amount:100}, {type: 'WITHDRAW', amount:30}])


        const expected: Account = {
            balance: 70,
            statement: [
                {amount: 100, balance: 100},
                {amount: -30, balance: 70}
            ]
        };

        const account: Account = await getAccount(eventStore as EventStore);
        expect(account).toStrictEqual(expected)
    });
})