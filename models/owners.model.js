// OWNERS MODEL
const _owner_id = Symbol('id');
const _owner_first_name = Symbol('first_name');
const _owner_last_name = Symbol('last_name');

class Owner {
    constructor(id, first_name, last_name) {
        this[_owner_id] = id;
        this[_owner_first_name] = first_name;
        this[_owner_last_name] = last_name;
    }

    //GETTERS et SETTERS
    get id() {return this[_owner_id];}
    set id(id) {this[_owner_id] = id;}
    get first_name() { return this[_owner_first_name]; }
    set first_name(new_first_name) { this[_owner_first_name] = new_first_name; }
    get last_name() { return this[_owner_last_name]; }
    set last_name(new_last_name) { this[_owner_last_name] = new_last_name; }

    get JSON(){
        return JSON.stringify({
            id:this.id,
            first_name:this.first_name,
            last_name:this.last_name,
        });
    }

    static fromJSON(json) {
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("first_name")
            || typeof data.first_name !== 'string'
            || !data.hasOwnProperty("last_name")
            || typeof data.last_name !== 'string'){
            throw new Error(`Not a Owner: ${json}`);
        }
        const owner = new Owner(data.id, data.first_name, data.last_name);
        return owner;
    }
}

class AbstractOwners {
    async list(callback) {}
}

module.exports = {
        Owner: Owner,
        AbstractOwners: AbstractOwners,
}