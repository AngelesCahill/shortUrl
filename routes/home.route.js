import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const urls = [{
        origin: "www.google.com/bluuweb",
        shortCut: "bluuweb"
    },
    {
        origin: "www.google.com/bluuweb",
        shortCut: "bluuweb"
    },
    {
        origin: "www.google.com/bluuweb",
        shortCut: "bluuweb"
    },
    ];
    res.render("home", {
        urls: urls
    });
});

export default router;