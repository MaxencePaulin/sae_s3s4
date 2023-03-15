import NodeCache from "node-cache";
const cache = new NodeCache({useClones:false});
const COLOR = '\u001B[32m'
const COLOR_RESET = '\u001B[0m'

export default duration => (req,res,next) => {
        if (req.method !== "GET") return next();
        const key = req.originalUrl;
        const cachedResponse = cache.get(key);

        if (cachedResponse) {
            console.log(`${COLOR}[CACHE] HIT:${key}${COLOR_RESET}`)
            res.send(cachedResponse);
        } else {
            console.log(`${COLOR}[CACHE] MISS:${key}${COLOR_RESET}`)
            res.originalSend = res.send;
            res.send = body => {
                res.originalSend(body);
                res.cachedResponse = body;
                cache.set(key, body, duration);
            }
            next();
        }
    }
