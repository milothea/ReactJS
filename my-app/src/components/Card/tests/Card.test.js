import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store';
import Card from '../Card';

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
