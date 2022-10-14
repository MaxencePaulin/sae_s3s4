// users model
const _users_id = Symbol('id');
const _users_firstname = Symbol('firstname');
const _users_lastname = Symbol('lastname');
const _users_username = Symbol('username');
const _users_email = Symbol('email');
const _users_password = Symbol('password');
const _users_role = Symbol('role');
const _users_created_at = Symbol('created_at');
const _users_updated_at = Symbol('updated_at');
const _users_is_admin = Symbol('is_admin');
const _users_is_guest = Symbol('is_guest');

class User {
    constructor(id, firstname, lastname, username, email, password, role, is_admin, is_guest) {
        this[_users_id] = id;
        this[_users_firstname] = firstname;
        this[_users_lastname] = lastname;
        this[_users_username] = username;
        this[_users_email] = email;
        this[_users_password] = password;
        this[_users_role] = role;
        this[_users_created_at] = new Date(Date.now());
        this[_users_updated_at] = new Date(Date.now());
        this[_users_is_admin] = is_admin;
        this[_users_is_guest] = is_guest;
    }

    get id() {
        return this[_users_id];
    }

    get firstname() {
        return this[_users_firstname];
    }

    get lastname() {
        return this[_users_lastname];
    }

    get username() {
        return this[_users_username];
    }

    get email() {
        return this[_users_email];
    }

    get password() {
        return this[_users_password];
    }

    get role() {
        return this[_users_role];
    }

    get created_at() {
        return this[_users_created_at];
    }

    get updated_at() {
        return this[_users_updated_at];
    }

    get is_admin() {
        return this[_users_is_admin];
    }

    get is_guest() {
        return this[_users_is_guest];
    }

    get JSON(){
        return JSON.stringify({
            id:this.id,
            firstname:this.firstname,
            lastname:this.lastname,
            username:this.username,
            email:this.email,
            password:this.password,
            role:this.role,
            created_at:this.created_at,
            updated_at:this.updated_at,
            is_admin:this.is_admin,
            is_guest:this.is_guest
        });
    }

    static fromJSON(json) {
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("firstname")
            || typeof data.firstname !== 'string'
            || !data.hasOwnProperty("lastname")
            || typeof data.firstname !== 'string'
            || !data.hasOwnProperty("username")
            || typeof data.username !== 'string'
            || !data.hasOwnProperty("email")
            || typeof data.email !== 'string'
            || !data.hasOwnProperty("password")
            || typeof data.password !== 'string'
            || !data.hasOwnProperty("role")
            || typeof data.role !== 'string'
            || !data.hasOwnProperty("created_at")
            || typeof data.created_at !== 'string'
            || !data.hasOwnProperty("updated_at")
            || typeof data.updated_at !== 'string'
            || !data.hasOwnProperty("is_admin")
            || typeof data.is_admin !== 'boolean'
            || !data.hasOwnProperty("is_guest")
            || typeof data.is_guest !== 'boolean'){
            throw new Error(`Not a User: ${json}`);
        }
        return new User(data.id, data.firstname, data.lastname, data.username, data.email, data.password, data.role, data.is_admin, data.is_guest);
    }
}

class AbstractUsers{
    async list(callback) {}
}

module.exports = {
    User,
    AbstractUsers
}