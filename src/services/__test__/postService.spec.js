import { service } from "../../services/postService";
import {describe} from "@jest/globals";

describe("forgotPassword()", () => {
    it("should return true", () => {
        //Testing a boolean
        expect(service()).toBeTruthy();
        //Another way to test a boolean
        expect(service()).toEqual(true);
    });
});
