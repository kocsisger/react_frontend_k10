import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Person manager</a>
                    <button className="btn btn-outline-success" type="submit">Add person</button>
                </div>
            </nav>
        </div>
    )
}
