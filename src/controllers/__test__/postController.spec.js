const request = require("supertest");
const app = require("../../../app");

describe("Post Controller :: Creation", () => {
    it("should failed the creation because do not have a token", async (done) => {
        try {
            const res = await request(app)
                .post('/posts/create')
                .send({
                    title: 'test title',
                    description: 'test description'
                });

            expect(res.statusCode).toEqual(401);
            done();
        } catch (e) {
            done.fail(e);
        }
    });
});
