import express from 'express';
import fs from 'fs';

const app = express();

app.post('/user', (req, res) => {
    let data = "";
    req.on("data", chunk => {
        data += chunk;
    });
    req.on("end", () => {
        res.end("done: " + data);
    });
});

app.get('/', (req, res) => {
    fs.readFile("index.html", "utf8", function (error, data) {
        const message = "Какой-то текст";
        const header = "Заголовок";
        data = data.replace("{header}", header).replace("{message}", message);
        res.end(data);
    });
});

app.use((req, res) => {
    res.status(404);
    res.end('404');
});

app.listen(3000, () => {
    console.log('Express is listening on port 3000!');
});