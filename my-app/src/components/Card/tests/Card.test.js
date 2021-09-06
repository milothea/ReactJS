import * as react from 'react';
import * as redux from 'react-redux';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';

Enzyme.configure({ adapter: new Adapter() });

describe('Card component', () => {
    const testHeading = 'some heading';
    const testText = 'some text';
    const testId = '10';

    test('renders correctly in NOT read only mode and NOT active mode', () => {
       const component = renderer.create(
           <Provider store={store}>
               <Card id={testId}
                     isReadOnly={false}
                     isActive={false}
                     heading={testHeading}
                     text={testText} />
           </Provider>
       ).toJSON();

       expect(component).toMatchSnapshot();
    });

    test('renders correctly in read only mode and NOT active mode', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Card id={testId}
                      isReadOnly={true}
                      isActive={false}
                      heading={testHeading}
                      text={testText} />
            </Provider>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });

    test('renders correctly in read only mode and active mode', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Card id={testId}
                      isReadOnly={true}
                      isActive={true}
                      heading={testHeading}
                      text={testText} />
            </Provider>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});

describe('Card methods: ', () => {
    const id = 'test-id';
    let setIsEditMode;
    let setHeadingInputValue;
    let setTextInputValue;
    let mockedDispatch;
    let component;
    let cardHeader;

    beforeEach(() => {
        setIsEditMode = jest.fn();
        jest.spyOn(react, 'useState').mockImplementation(setIsEditMode);

        mockedDispatch = jest.fn();
        redux.useDispatch = () => mockedDispatch;

        component = mount(
            <Card id={id}
                  isReadOnly={false}
                  isActive={false} />
        );
        cardHeader = component.find(CardHeader);
    });

    test('editHandler works', () => {
        const editFunc = cardHeader.props().onEdit;

        expect(typeof editFunc).toBe('function');
    });

    test('cancelHandler works', () => {
        const cancelFunc = cardHeader.props().onCancel;

        expect(typeof cancelFunc).toBe('function');
        // expect(setIsEditMode).toBeCalledWith(false);
        // expect(setHeadingInputValue).toBeCalledTimes(1);
        // expect(setTextInputValue).toBeCalledTimes(1);
    });

    test('submitHandler works', () => {
        const submitFunc = cardHeader.props().onSubmit;

        submitFunc();
        expect(typeof submitFunc).toBe('function');
        // expect(setIsEditMode).toBeCalledTimes(1);
        expect(mockedDispatch).toBeCalledTimes(1);
    });

    test('changeCheckboxHandler works', () => {
        const checkFunc = cardHeader.props().onChecked;

        checkFunc();
        expect(typeof checkFunc).toBe('function');
        expect(mockedDispatch).toBeCalledTimes(1);
        expect(mockedDispatch.mock.calls[0][0].payload).toEqual({id: id});
    });

    test('textInputHandler is a function', () => {
       const inputHandler = component.find(CardBody).props().onChange;

       expect(typeof inputHandler).toBe('function');
    });
});
