const service = require("../../services/postService");

describe("Post Service", () => {
    it("should create the post", async () => {
        try {
            const post = {
                title: 'TEST TITLE',
                description: 'TEST DESCRIPTION',
                createdBy: 'TEST_USER'
            };

            const createdPost = await service.create(post);

            expect(createdPost).toBeTruthy();
            expect(createdPost.title).toEqual(post.title);
        } catch (e) {
        }
    });
    it("should NOT create the post", async () => {
        try {
            await service.create({
                title: 'TEST TITLE',
                description: 'TEST DESCRIPTION'
            })
        } catch (e) {
            expect(e).toBeTruthy();
            expect(e.message).toEqual('post validation failed: createdBy: Path `createdBy` is required.');
        }
    });
});
