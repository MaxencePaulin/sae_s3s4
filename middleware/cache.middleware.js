import NodeCache from "node-cache";
const cache = new NodeCache({useClones:false});

const COLOR_GREEN = '\u001B[32m'
const COLOR_RED = '\u001B[31m'
const COLOR_RESET = '\u001B[0m'

export default duration => (req,res,next) => {
    if (req.method !== "GET") return next();
    /*Normally, lastModified retrieves the last modified date of a resource but for this example we configure it with the variable checked:
     - TRUE : lastModified will be the same as ifModifiedSince Header (same Date).
     - FALSE : lastModified will be different from ifModifiedSince Header (lastModified's Date more recent than ifModifiedSince's Date => must update cache with new resources).
     */
    // TODO change checked
    const checked = true
    const ifModifiedSince = req.headers["if-modified-since"]
    const lastModified = checked ? ifModifiedSince : new Date()

    // Find Cache resource
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    // Cache hit and with last resource
    if (cachedResponse && (ifModifiedSince === lastModified)) {
        console.log(`${COLOR_GREEN}[CACHE:HIT] ${key}${COLOR_RESET}`)
        res.send(cachedResponse);
    }
    // No Cache or Cache with an older resource
    else {
        let cacheError = cachedResponse ? `${COLOR_RED}[CACHE:IF-MODIFIED-SINCE] ${key}${COLOR_RESET}` : `${COLOR_RED}[CACHE:MISS] ${key}${COLOR_RESET}`
        console.log(cacheError)
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            res.cachedResponse = body;
            cache.set(key, body, duration);
        }
        next();
    }
}
