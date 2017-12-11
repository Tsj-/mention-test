import {get} from "./app/server";
import {account_id, alert_id} from "./app/config/env";

/* start coding here*/
console.log('Mention is starting...');

get(`https://api.mention.net/api/accounts/${account_id}/alerts/${alert_id}/mentions`).then(data => console.log(data));
