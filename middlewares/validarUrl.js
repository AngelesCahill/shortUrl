import  { URL } from "url";
export const validarUrl = (req, res, next) => {
    try {
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        if (urlFrontend.origin !== "null") {
            return next();
        } else {
            throw new Error("url no valida");
        }
    } catch (error) {
        return res.redirect("/");
    }
};