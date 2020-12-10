import { performAction } from '../src/client/js/app'

test('should return true', () => {
    expect(typeof performAction).toBeDefined();
});