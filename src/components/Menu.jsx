const Menu = ({ tabs, handle }) => {

    return (
        <div className="menu">
            {tabs.map(tab => 
                <div
                    className="menu-item"
                    key={tab.name}
                    onClick={() => handle(tab)}>
                    {tab.name}
                </div>
            )}
        </div>
    );
};

export default Menu;