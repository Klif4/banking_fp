import {UseCaseFactory} from "../usecases/useCaseFactory";
import {Request, Response} from "express";

export const accountResources = (useCaseFactory: UseCaseFactory) => ({
    account: (__: Request, res: Response) => {
        useCaseFactory.getAccount().then(account => res.send(account))
    },

    deposit: (req: Request, res: Response) => {
        const {amount} = req.body
        useCaseFactory.deposit(amount).then(() => res.sendStatus(204))
    },

    withdraw: (req: Request, res: Response) => {
        const {amount} = req.body
        useCaseFactory.withdraw(amount).then(() => res.sendStatus(204))
    },
})