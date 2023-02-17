import React, { Component } from 'react';
// import Badge from 'react-bootstrap/Badge';

class NavBar extends Component {
    render() {
        return (
            <div className="wrapper d-flex">
                <div className="sidebar">
                    {/* <small className="text-muted pl-3">WIDR PAY</small> */}
                    <ul>
                        <li>
                            <a href="https://bbbootstrap.com/snippets/bootstrap-fixed-responsive-left-sidebar-menu-34380762">
                                <i className="fas fa-home"></i>Feed
                            </a>
                        </li>
                        <li>
                            <a href="https://bbbootstrap.com/snippets/bootstrap-fixed-responsive-left-sidebar-menu-34380762">
                                <i className="far fa-credit-card"></i>Friends{" "}
                            </a>
                        </li>
                        <li>
                            <a href="https://bbbootstrap.com/snippets/bootstrap-fixed-responsive-left-sidebar-menu-34380762">
                                <i className="fas fa-file-invoice"></i>Profile{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;