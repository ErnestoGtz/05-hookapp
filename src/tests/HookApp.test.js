import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en el componente <HookApp />', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});

