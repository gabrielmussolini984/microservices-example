import Logger from '../config/lib/logger';
import { get as app } from "./main";

const port = process.env.PORT || 3000;
app().listen(port, () => Logger.debug(`App listening on port ${port}!`));