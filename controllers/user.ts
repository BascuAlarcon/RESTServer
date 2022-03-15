import { Request, Response } from "express";

import User from "../models/user";

export const getUsers = async(req: Request, res: Response) => {  
    const users = await User.findAll(); 
    res.json({users});
}

export const getUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user);
    }else{
        res.status(401).json({
            msg: `There's no user with id ${id}`
        });
    }
}

export const postUsers = async(req: Request, res: Response) => {
    const {body} = req; 
    try {
        const mailExistence = await User.findOne({
            where: {
                email: body.email
            }
        });

        if(mailExistence){
            return res.status(400).json({
                msg: 'Mail has already existed'
            });
        }

        const user = new User(body);
        await user.save(); 
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Communicate with administrator'
        });
    }
}

export const updateUsers = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req; 
    try {
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({
                msg: 'Theres no user with these id'
            });
        }

        await user.update(body); 

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Communicate with administrator'
        });
    }
}

export const deleteUsers = async(req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(404).json({
            msg: 'Theres no user with these id'
        });
    }

    // physic delete
    // await user.destroy();

    // logic delete
    await user.update({state: false});

    res.json({
        msg: 'User deleted'
    });
}


