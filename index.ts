import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import formidable from 'express-formidable';

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cookieParser());
app.use(formidable());

const authMiddleware = (req, res, next) => {
    console.log(req.cookies);
    const { token } = req.cookies;
    if(!token || token !== process.env.TOKEN){
        return res.redirect("/auth");
    }else{
        next();
    }
}

app.get("/auth", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "auth.html"));
});

app.post("/auth", (req, res) => {
    if(req.fields!.id){
        if(req.fields!.id === process.env.ACCESS_TOKEN){
            res.cookie("token", process.env.TOKEN, {maxAge: 1000*60*60*24*365, httpOnly: true});
            res.redirect("/");
        }else{
            return res.status(401).send("401 Unauthorized");
        }
    }else{
        return res.status(403).send("403 Forbidden");
    }
});

app.use(authMiddleware);

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "build", "index.html"));   
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));