const postModel = require('../models/post');

module.exports.find = async (user, text) => {
    let statement = {$or: [{createdBy: user}, {privacy: 'PUBLIC'}]};
    if (text) {
        statement = {
            $and: [
                statement,
                {$or: [{title: new RegExp(text , "i")}, {description: new RegExp(text , "i")}]},
            ]
        }
    }
    return postModel.find(statement);
}

module.exports.create = async (post) => {
    return postModel.create(post);
}

module.exports.findById = async (id, user) => {
    const post = await postModel.findById(id);
    if (post.createdBy !== user) {
        throw Error('You don\'t have rights to retrieve this post');
    }
    return post;
}

module.exports.delete = async (id, user) => {
    const post = await postModel.findById(id);
    if (post.createdBy !== user) {
        throw Error('You don\'t have rights to delete this post');
    }
    return post.delete();
}
