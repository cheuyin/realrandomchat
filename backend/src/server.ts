import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world! How you doin? I'm doin' great, thank you! Coolio.")
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});
