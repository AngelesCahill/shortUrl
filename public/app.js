document.addEventListener("click", (e) => {
    if(e.target.dataset.short){
        const url = `http://localhost:3000/${e.target.dataset.short}`;
    navigator.clipboard
        .writeText(url)
        .then(() => {
            console.log("Texto copiado al clipboard");
        })
    .catch ((err) => {
        console.log("Something wrong", err);
    });
    }
});