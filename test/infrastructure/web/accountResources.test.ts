import {UseCaseFactory} from "../../../src/infrastructure/usecases/useCaseFactory";
import {Request, Response} from "express";
import {Account} from "../../../src/domain/types/Account";
import {accountResources} from "../../../src/infrastructure/web/accountResources";

describe("accountRessources unit tests", () => {
    let useCaseFactory: Partial<UseCaseFactory>
    let req: Partial<Request>
    let res: Partial<Response>

    beforeEach(() => {
        useCaseFactory = {}
        req = {}
        res = {}
    });

    it("account should send account", async () => {
        const account: Account = {balance: 0, statement: []};

        useCaseFactory.getAccount = jest.fn().mockResolvedValue(account)
        res.send = jest.fn()

        await accountResources(useCaseFactory as UseCaseFactory).account(req as Request, res as Response)

        expect(res.send).toHaveBeenCalledWith(account)
    });

    it("deposit should send 204", async () => {
        useCaseFactory.deposit = jest.fn().mockImplementation(amount => Promise.resolve())
        req.body = {amount: 10}
        res.sendStatus = jest.fn()

        await accountResources(useCaseFactory as UseCaseFactory).deposit(req as Request, res as Response)
        expect(res.sendStatus).toHaveBeenCalledWith(204)
    });

    it("withdraw should send 204", async () => {
        useCaseFactory.withdraw = jest.fn().mockImplementation(amount => Promise.resolve())
        req.body = {amount: 10}
        res.sendStatus = jest.fn()

        await accountResources(useCaseFactory as UseCaseFactory).withdraw(req as Request, res as Response)
        expect(res.sendStatus).toHaveBeenCalledWith(204)
    });

})