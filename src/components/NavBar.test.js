describe('NavBar', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('should render without error', () => {
    const navbarComponent = wrapper.find(".nav-container");
    expect(navbarComponent.length).toBe(1);
  });
  
  it('should render a logo', () => {
    const logoImg = wrapper.find(".logo");
    expect(logoImg.length).toBe(1);
  });
  
  it('should render a searchbar', () => {
    const searchbar = wrapper.find('.searchbar');
    expect(searchbar.length).toBe(1);
  });
  
  it('should render menu items', () => {
    const menuItemList = wrapper.find('.menu-item');
    expect(menuItemList.length).toBeGreaterThan(0);
  });
  
  });