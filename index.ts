import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));   
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));