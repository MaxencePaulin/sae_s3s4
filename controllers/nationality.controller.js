import model from '../models/index.js';
const Nationality = model.Nationality;
import {Op} from 'sequelize'

export const findAll = (req, res) => {
    Nationality.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Nationality.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Nationality.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    Nationality.update(body, {
        where: { id_nationality: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "Nationality was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Nationality with id=${id}. Maybe Nationality was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id = parseInt(req.params.id);
    Nationality.destroy({
        where: { id_nationality: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Nationality was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Nationality with id=${id}. Maybe Nationality was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Nationality.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Nationality were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const musicStyleByNationality = async (req, res) => {
    let respons = await model.OrigineArtist.findAll({where : {
        id_nationality : parseInt(req.params.id)}
    })
    let mon_tableaau=[]
    for (const ele of respons ) {
        mon_tableaau.push(ele.dataValues.id_artist)    
    }
    let mon_tableaau2=[]
    let result2 = await model.Make.findAll({ where:{id_artist : {[Op.in] : mon_tableaau }}, include : [{model : model.Artist} , {model:model.MusicStyle}]})
    console.log("\n")
    // console.log("              \n",JSON.stringify(result2[0].musicstyle))
    result2.forEach(element => { 
        let tmp = mon_tableaau2.find(l => l.id_musicstyle === element.id_musicstyle)
        if (!tmp) { 
            mon_tableaau2.push({
                id_musicstyle: element.id_musicstyle,
                libelle_musicstyle: element.musicstyle.libelle_musicstyle ,
                nbArtistWitheThisStyle:1
            })
            // console.log(mon_tableaau2)
        } else {
            console.log(count);
            for (const id_music of mon_tableaau2) {
                if (id_music.id_musicstyle === tmp){
                    nbArtistWitheThisStyle=nbArtistWitheThisStyle++
                }
            }
        }
    });
    res.status(200).send(mon_tableaau2)
}