import {mount} from '@vue/test-utils';
import Working from './Working';

describe('Working', () => {
    test('has 2 items', () => {
        const wrapper = mount(Working);

        expect(wrapper.vm.$refs.listItem.length).toBe(2);
    });
});
