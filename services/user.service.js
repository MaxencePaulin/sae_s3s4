const test = (callback) => {
    try {
        return callback(null, "test user réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

module.exports = {
    test: test,
}