import Url from "../models/Urlmodel.js";
import { nanoid } from "nanoid";

export const getAllUrl = async (req, res) => {
    try {
        const urls = await Url.find().lean();
        res.render("home", { urls: urls });
    } catch (error) {
        console.log("No se pudo obtener datos");
        res.send("falló algo....");
    }
};

export const createUrl = async (req, res) => {
    const { origin } = req.body;
    try {
        const url = new Url({ origin: origin, shortURL: nanoid(6) });
        await url.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error algo falló");
    }
};

export const deleteUrl = async (req, res) => {
    const { id } = req.params;
    try {
        await Url.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error no se ha podido eliminar esta url");
    }
}



