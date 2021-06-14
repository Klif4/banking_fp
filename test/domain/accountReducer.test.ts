import {Account} from "../../src/domain/types/Account";
import {accountReducer} from "../../src/domain/accountReducer";
import {DomainEvent} from "../../src/domain/types/DomainEvent";

describe('accountReducer unit tests', () => {

    it("deposit event should reduce", () => {

        const account: Account = {
            balance: 10,
            statement: [
                {
                    amount: 10,
                    balance: 10
                }
            ]
        };

        const event: DomainEvent = {
            type: 'DEPOSIT',
            amount: 20,
        };

        const expected = {
            balance: 30,
            statement: [
                {amount: 10, balance: 10},
                {amount: 20, balance: 30}
            ]
        };

        expect(accountReducer(account, event)).toStrictEqual(expected);
    })

    it("withdraw event should reduce", () => {

        const account: Account = {
            balance: 10,
            statement: [
                {
                    amount: 10,
                    balance: 10
                }
            ]
        };

        const event: DomainEvent = {
            type: 'WITHDRAW',
            amount: 3,
        };

        const expected = {
            balance: 7,
            statement: [
                {amount: 10, balance: 10},
                {amount: -3, balance: 7}
            ]
        };

        expect(accountReducer(account, event)).toStrictEqual(expected);
    })

});




