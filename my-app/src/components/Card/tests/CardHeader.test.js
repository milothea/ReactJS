import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom/extend-expect';
import CardHeader from '../CardHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('CardHeader component', () => {
    const testValue = 'some value';

    test('renders correctly read only mode', () => {
        render(
            <CardHeader isActive={false}
                        isEditMode={false}
                        isReadOnly={true}
                        value={testValue} />
        );

        const headerText = screen.getByText(testValue);
        const editIcon = screen.queryByTestId('edit-icon');
        const checkbox = screen.getByTestId('checkbox');
        const input = screen.queryByTestId('input');
        const submit = screen.queryByTestId('submit-icon');
        const cancel = screen.queryByTestId('cancel-icon');

        expect(headerText).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(editIcon).toBeNull();
        expect(input).toBeNull();
        expect(submit).toBeNull();
        expect(cancel).toBeNull();
    });

    test('renders correctly in NOT edit mode and NOT read only mode', () => {
        render(
            <CardHeader isActive={false}
                        isEditMode={false}
                        isReadOnly={false}
                        value={testValue} />
        );

        const headerText = screen.getByText(testValue);
        const editIcon = screen.getByTestId('edit-icon');
        const checkbox = screen.getByTestId('checkbox');
        const input = screen.queryByTestId('input');
        const submit = screen.queryByTestId('submit-icon');
        const cancel = screen.queryByTestId('cancel-icon');

        expect(headerText).toBeInTheDocument();
        expect(editIcon).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(input).toBeNull();
        expect(submit).toBeNull();
        expect(cancel).toBeNull();
    });

    test('renders correctly elements in edit mode', () => {
        render(
            <CardHeader isActive={false}
                        isEditMode={true}
                        isReadOnly={false}
                        value={testValue} />
        );

        const headerText = screen.queryByText(testValue);
        const editIcon = screen.queryByTestId('edit-icon');
        const checkbox = screen.queryByTestId('checkbox');
        const input = screen.getByTestId('input');
        const submit = screen.getByTestId('submit-icon');
        const cancel = screen.getByTestId('cancel-icon');

        expect(headerText).toBeNull();
        expect(editIcon).toBeNull();
        expect(checkbox).toBeNull();
        expect(input).toBeInTheDocument();
        expect(cancel).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
    });
});

describe('CardHeader handlers', () => {
    const testValue = 'some value';

    it('works when triggered in edit mode', () => {
            const mockChange = jest.fn();
            const mockSubmit = jest.fn();
            const mockCancel = jest.fn();
            const component = shallow(
                <CardHeader isActive={false}
                            isEditMode={true}
                            isReadOnly={false}
                            onChange={mockChange}
                            onCancel={mockCancel}
                            onSubmit={mockSubmit} />
            );
            const input = component.find('.card__heading');
            const submit = component.find('.card__submit');
            const cancel = component.find('.card__cancel');

            input.simulate('change');
            submit.simulate('click');
            cancel.simulate('click');
            expect(mockChange).toHaveBeenCalled();
            expect(mockSubmit).toHaveBeenCalled();
            expect(mockCancel).toHaveBeenCalled();
    });

    it('works when triggered in NOT edit mode and NOT read only mode', () => {
        const mockEdit = jest.fn();
        const component = shallow(
            <CardHeader isActive={false}
                        isEditMode={false}
                        isReadOnly={false}
                        id='10'
                        value={testValue}
                        onEdit={mockEdit}
            />
        );
        const editIcon = component.find('.card__edit');

        editIcon.simulate('click');
        expect(mockEdit).toHaveBeenCalled();
    });

    it('works when triggered in NOT edit mode but read only mode', () => {
        const mockChange = jest.fn();
        const component = shallow(
            <CardHeader isActive={false}
                        isEditMode={false}
                        isReadOnly={true}
                        onChecked={mockChange}
            />
        );
        const checkbox = component.find('.card__checkbox');

        checkbox.simulate('change');
        expect(mockChange).toHaveBeenCalled();
    });
});
