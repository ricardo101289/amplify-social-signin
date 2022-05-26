import { allLangs , COGNITO_API} from '../src/config';
describe("test webapp langs", () => {
  it("should be not none", () => {
      expect(allLangs.length).not.toBeNull
  });
  it("should return 1 or more langs", () => {
    expect(allLangs.length).toBeGreaterThanOrEqual(1)
  });
});

describe("test cognito evns", () => {
  it("should be not none", () => {
      expect(COGNITO_API.clientId).not.toBeNull
      expect(COGNITO_API.userPoolId).not.toBeNull
      expect(COGNITO_API.clientId).not.toEqual("")
  });
});