import React from 'react'; 
    import { shallow } from 'enzyme'; 
    import Manage from './Manage'; 
    
    describe('Manage Component', () => { 
        it('should render without crashing', () => { 
            shallow(<Manage />);
        }); 
    });