const service = require("../../services/postService");

describe("Post Service :: Creation", () => {
    it("should create the post fine", async (done) => {
        try {
            const post = {
                title: 'TEST TITLE',
                description: 'TEST DESCRIPTION',
                user: 'TEST_USER'
            };

            const createdPost = await service.create(post);

            expect(createdPost).toBeTruthy();
            expect(createdPost.title).toEqual(post.title);
            done();
        } catch (e) {
            done.fail(e);
        }
    });
    it("should fail because of missing user", async (done) => {
        try {
            await service.create({
                title: 'TEST TITLE',
                description: 'TEST DESCRIPTION'
            })
            done.fail('Should fail');
        } catch (e) {
            expect(e).toBeTruthy();
            expect(e.message).toEqual('post validation failed: createdBy: Path `createdBy` is required.');
            done();
        }
    });
});
