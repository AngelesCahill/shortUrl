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
};

export const editForm = async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findById(id).lean();
        res.render("home", { url });


    } catch (error) {
        console.log(error);
        res.send("Error algo falló");
    }
};

export const editUrl = async (req, res) => {
    const { id } = req.params;
    const { origin } = req.body;
  try {
      await Url.findByIdAndUpdate(id, { origin: origin });
       res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Error algo falló");
  }
};

export const redireccionamiento = async (req, res) => {
    const { shortURL } = req.params;
    try {
        const urlDB = await Url.findOne({ shortURL: shortURL });
        res.redirect(urlDB.origin);
    } catch (error) {
        console.log(error);
        res.send("Error algo falló");
    }
};



