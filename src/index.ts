import express, {Express} from 'express';
import bodyParser from "body-parser";
import {UseCaseFactory, useCaseFactory as factory} from "./infrastructure/usecases/useCaseFactory";
import {inMemoryEventStore} from "./infrastructure/adapters/inMemoryEventStore";
import {accountResources} from "./infrastructure/web/accountResources";

const app: Express = express()

app.use(bodyParser.json())

const useCaseFactory: UseCaseFactory = factory(inMemoryEventStore());
const resources = accountResources(useCaseFactory)

app.get('/account', resources.getAccount)
app.post('/deposit', resources.postDeposit)
app.post('/withdraw', resources.postWithdraw)

app.listen(3000, () => {
    console.log("listening on port 3000");
})