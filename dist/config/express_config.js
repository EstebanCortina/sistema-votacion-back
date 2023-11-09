"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require('express');
const app = express();
exports.app = app;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
