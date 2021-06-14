import {UseCaseFactory} from "../usecases/useCaseFactory";
import {Request, Response} from "express";

export const accountResources = (useCaseFactory: UseCaseFactory) => ({
    getAccount: (__: Request, res: Response) => {
        useCaseFactory.getAccount().then(account => res.send(account))
    },

    postDeposit: (req: Request, res: Response) => {
        const {amount} = req.body
        useCaseFactory.deposit(amount).then(() => res.sendStatus(204))
    },

    postWithdraw: (req: Request, res: Response) => {
        const {amount} = req.body
        useCaseFactory.withdraw(amount).then(() => res.sendStatus(204))
    },
})