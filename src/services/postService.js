const postRepository = require('../repository/postRepository');

module.exports.find = (user, text) => {
    return postRepository.find(user, text);
}

module.exports.create = (post) => {
    const _post = {...post, createdBy: post.user}
    return postRepository.create(_post);
}

module.exports.findById = (post) => {
    return postRepository.findById(post.id, post.user);
}

module.exports.delete = (post) => {
    return postRepository.delete(post.id, post.user);
}
