/**
 * Created by vanessa on 2017/5/25.
 * component test
 */
import chai from 'chai';
import Todo from '../components/todo';
import { shallow } from 'enzyme';

let expect = chai.expect;

function setup(text) {
    const actions = {
        onTodoClick: expect.createSpy()
    };

    const component = shallow(
        <Todo done="false" text={text} />
    );
}

describe('component', () => {
    describe('todo', () => {
        it('checkbox click should call toggleTodo', () => {
            const { checkbox, actions} = setup("下班没");
            checkbox.simulate('click');
            expect(actions.onTodoClick).toHaveBeenCalled();
        });
    });
});

