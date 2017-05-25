/**
 * Created by vanessa on 2017/5/25.
 * test action
 * tools: mocha , chai
 */

import * as actions from '../actions/todos';
import contants from "../constants/TodoConstants";
import chai from 'chai';

let expect = chai.expect;

describe('action', () => {
    describe('todos', () => {
        it('add should create add action.', () => {
            expect(actions.add("eee")).to.deep.equal({type: contants.NEW_ITEM,
                text:"eee"});
        });

        it('add should create add action.', () => {
            expect(actions.clearCompleted()).to.deep.equal({type: contants.CLEAR_COMPLETED});
        });

    });
});