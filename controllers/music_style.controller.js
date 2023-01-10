import model from '../models/index.js';
const MusicStyle = model.MusicStyle;
import {Op} from 'sequelize'

export const findAll = (req, res) => {
    MusicStyle.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    MusicStyle.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    MusicStyle.create(body).then(data => {
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
    MusicStyle.update(body, {
        where: { id_musicstyle: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "MusicStyle was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update MusicStyle with id=${id}. Maybe MusicStyle was not found or req.body is empty!`
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
    MusicStyle.destroy({
        where: { id_musicstyle: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "MusicStyle was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete MusicStyle with id=${id}. Maybe MusicStyle was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    MusicStyle.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} MusicStyle were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
export const NationalityByMusicstyle = async (req, res) => {
    let respons = await model.Make.findAll({where : {
        id_musicstyle : parseInt(req.params.id)}
    })
    let mon_tableaau=[]
    for (const ele of respons ) {
        mon_tableaau.push(ele.dataValues.id_artist)    
    }
    let mon_tableaau2=[]
    let result2 = await model.OrigineArtist.findAll({ where:{id_artist : {[Op.in] : mon_tableaau }}, include : [{model : model.Artist} , {model:model.Nationality}]})
    console.log("\n")
    // console.log("              \n",JSON.stringify(result2))
    result2.forEach(element => { 
        let tmp = mon_tableaau2.find(l => l.id_nationality === element.id_nationality)
        if (!tmp) { 
            mon_tableaau2.push({
                id_nationality: element.id_nationality,
                libelle_nationalite: element.nationality.libelle_nationality ,
                nbArtistWitheThisNationality:1
            })
        } else {
            // console.log(count);
            for (const id_nationality of mon_tableaau2) {
                // console.log("deuxiem " , id_nationality.nbArtistWitheThisNationality )
                if (id_nationality.id_nationality ===  tmp.id_nationality){
                    id_nationality.nbArtistWitheThisNationality =id_nationality.nbArtistWitheThisNationality+1;
                }
                // console.log("deuxietroisiemm " , id_nationality.nbArtistWitheThisNationality )
            }
        }
    });
    res.status(200).send(mon_tableaau2)
}