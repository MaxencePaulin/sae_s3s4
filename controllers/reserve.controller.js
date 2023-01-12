import { where } from 'sequelize';
import model from '../models/index.js';
const Reserve = model.Reserve;


export const findAll = (req, res) => {
    Reserve.findAll({include: [{model: model.Users}, {model: model.Place},
            {model: model.Date_reserve}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_place = parseInt(req.query.id_place);
    const date_start_placereserved = req.query.date_start_placereserved;
    const date_end_placereserved = req.query.date_end_placereserved;
    Reserve.findOne({where: {id_user: id_user, id_place: id_place,
            date_start_placereserved: date_start_placereserved, date_end_placereserved: date_end_placereserved},
        include: [{model: model.Users}, {model: model.Place},
                {model: model.Date_reserve}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = async (req, res) => {
    // const body = req.body;
    let emplacement={id_user: parseInt(req.body.id_user) , 
        id_place : parseInt(req.body.id_place) ,
        date_start_placereserved : req.body.date_start_placereserved , 
        date_end_placereserved : req.body.date_end_placereserved}
    let date_deb = new Date(req.body.date_start_placereserved)
    let date_fin = new Date(req.body.date_end_placereserved)
    // console.log(typeof(date_deb) , date_deb , "|" , typeof(date_fin) , date_fin)
    let res_test =await  Reserve.findAll({where:{id_place:req.body.id_place}})
    for (const ele of res_test) {
        console.log(ele)
        let date_deb_verif = new Date(ele.date_start_placereserved.split('/').reverse().join('-'));
        let date_fin_verif = new Date(ele.date_end_placereserved.split('/').reverse().join('-'));
        if ((date_deb>=date_deb_verif && date_deb<=date_fin_verif) || (date_fin>=date_deb_verif && date_fin<=date_fin_verif)){
            res.status(500).send({data : "impossible de reserver cette emplacement une personne l'as deja reserver"})
            return 0
        }
    }
    try {
        let date={date_start_placereserved : req.body.date_start_placereserved , 
        date_end_placereserved : req.body.date_end_placereserved}
        let mon_res = await model.Date_reserve.create(date)
    } catch(e) {
        console.log(e)
    }
    Reserve.create(emplacement).then(data => {
        res.send(data);
    }).catch(e => { 
        res.status(500).send({
            message: e.message || "Some error occurred." 
        });
    }); 
}

// export const update = (req, res) => {
//     const id = parseInt(req.params.id);
//     const body = req.body;
//     Reserve.update(body, {
//         where: { id: id }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Proposes was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Proposes with id=${id}. Maybe Proposes was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_place = parseInt(req.query.id_place);
    const date_start_placereserved = req.query.date_start_placereserved;
    const date_end_placereserved = req.query.date_end_placereserved;
    Reserve.destroy({
        where: { id_user: id_user , id_place: id_place , date_start_placereserved:date_start_placereserved , date_end_placereserved:date_end_placereserved }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Reserve was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Reserve with this primary key. Maybe Reserve was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({  
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Reserve.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Reserve were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
