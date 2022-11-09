// SCENES MODEL
const _scene_id = Symbol('id');
const _scene_name = Symbol('name');
const _scene_stats = Symbol('stats');

class Scene {
    constructor(id, name, stats) {
        this[_scene_id] = id;
        this[_scene_name] = name;
        this[_scene_stats] = stats;
    }

    //GETTERS et SETTERS
    get id() {return this[_scene_id];}
    set id(id) {this[_scene_id] = id;}
    get name() { return this[_scene_name]; }
    set name(new_name) { this[_scene_name] = new_name; }
    get stats() { return this[_scene_stats]; }
    set stats(new_stats) { this[_scene_stats] = new_stats; }

    get JSON(){
        return JSON.stringify({
            id:this.id,
            name:this.name,
            stats:this.stats,
        });
    }

    static fromJSON(json) {
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("name")
            || typeof data.name !== 'string'
            || !data.hasOwnProperty("stats")
            || typeof data.stats !== 'string' && typeof data.stats !== 'number'){
            throw new Error(`Not a Scene: ${json}`);
        }
        const scene = new Scene(data.id, data.name, data.stats);
        return scene;
    }
}

class AbstractScenes {
    async list(callback) {}
}

export {
    Scene,
    AbstractScenes
}