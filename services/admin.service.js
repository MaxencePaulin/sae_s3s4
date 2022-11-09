const test = (callback) => {
    try {
        return callback(null, "test admin réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

export default {
    test: test
}