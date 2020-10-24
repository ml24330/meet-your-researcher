"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_formidable_1 = __importDefault(require("express-formidable"));
require("dotenv").config();
var app = express_1.default();
var PORT = process.env.PORT || 8000;
app.use(cookie_parser_1.default());
app.use(express_formidable_1.default());
var authMiddleware = function (req, res, next) {
    console.log(req.cookies);
    var token = req.cookies.token;
    if (!token || token !== process.env.TOKEN) {
        return res.redirect("/auth");
    }
    else {
        next();
    }
};
app.get("/auth", function (req, res) {
    return res.sendFile(path_1.default.resolve(__dirname, "auth.html"));
});
app.post("/auth", function (req, res) {
    if (req.fields.id) {
        if (req.fields.id === process.env.ACCESS_TOKEN) {
            res.cookie("token", process.env.TOKEN, { maxAge: 1000 * 60 * 60 * 24 * 365, httpOnly: true });
            res.redirect("/");
        }
        else {
            return res.status(401).send("401 Unauthorized");
        }
    }
    else {
        return res.status(403).send("403 Forbidden");
    }
});
app.use(authMiddleware);
app.use(express_1.default.static(path_1.default.resolve(__dirname, "build")));
app.get("*", function (req, res) {
    return res.sendFile(path_1.default.resolve(__dirname, "build", "index.html"));
});
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
