const Sidebar = () => {
    return(
        <>
            <aside>
                <div className = "sidebar">
                    <div>
                        <h1 className = "SideH1">LOGO</h1>
                    </div>
                    <div>
                        <ul className="SideUl">
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Dashboard</li>
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Tasks</li>
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Pages</li>
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Apps</li>
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Gallary</li>
                            <li className="ForSideLi"><i className="fa-solid fa-caret-right"></i>Our Blog</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;