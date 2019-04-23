import { shallow } from 'enzyme';
import * as React from 'react';

import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  it('TodoItem should have proper className', () => {
    const wrapper = shallow(
      <TodoItem
        text="적절한 텍스트"
        completed={true}
        onClickRemove={() => ''}
        onToggleComplete={() => ''}
      />
    );
    expect(wrapper.prop('className')).toEqual('TodoItem');
  });
});
