"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CodeSnippets_1 = require("./models/CodeSnippets");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [CodeSnippets_1.CodeSnippets],
    dbName: "callofcode",
    type: "postgresql",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    debug: true
};
//# sourceMappingURL=mikro-orm.config.js.map