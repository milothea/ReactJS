import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom/extend-expect';
import CardBody from '../CardBody';

Enzyme.configure({ adapter: new Adapter() });

describe('CardBody component', () => {
    const testValue = 'some value';

    test('render paragraph in NOT edit mode', () => {
       render(
           <CardBody value={testValue}
                     isEditMode={false} />
       );

       const text = screen.getByText(testValue);
       const paragraph = screen.getByTestId('paragraph');
       const textarea = screen.queryByTestId('textarea');

       expect(text).toBeInTheDocument();
       expect(paragraph).toBeInTheDocument();
       expect(textarea).toBeNull();
    });

    test('render textarea in edit mode', () => {
        render(
            <CardBody isEditMode={true} />
        );

        const paragraph = screen.queryByTestId('paragraph');
        const textarea = screen.getByTestId('textarea');

        expect(paragraph).toBeNull();
        expect(textarea).toBeInTheDocument();
    });
});

describe('CardBody handlers', () => {
    test('works when triggered in edit mode', () => {
        const mockChange = jest.fn();
        const component = shallow(
            <CardBody isEditMode={true}
                      onChange={mockChange} />
        );
       const textarea = component.find('.card__text');

       textarea.simulate('change');
       expect(mockChange).toHaveBeenCalled();
    });
});
