import {mount} from '@vue/test-utils';
import Broken from './Broken';

describe('Test', () => {
    test('has 2 items', () => {
        const wrapper = mount(Broken);

        expect(wrapper.vm.$refs.listItem.length).toBe(2);
    });
});
