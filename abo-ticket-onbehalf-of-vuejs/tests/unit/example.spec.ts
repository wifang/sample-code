import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Modal from '@/Modal.vue';

describe('Modal.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Modal, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
