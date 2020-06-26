const {PostState} = require("./postState");

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    privacy: {type: String, required: true, default: PostState.PUBLIC },
    createdBy: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('post', postSchema);
