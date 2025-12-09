import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [persons, setPersons] = useState([]); // 1. state

    const loadPersons = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8081/person");
            setPersons(result.data);
            console.log(result.data);
        } catch (error) {
            console.error("Error loading persons:", error);
        }
    };

    const deletePerson = async (id) => {
        await axios.delete(`http://localhost:8080/person/${id}`);
        loadPersons();
    };

    useEffect(() => {
        loadPersons();
    }, []);

    return (
        <div className="container-fluid" style={{ minWidth: "66vw" }}>
            <table className="table table-striped table-bordered w-100 align-middle">
                <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {persons.map((person, index) => (
                    <tr key={person.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.email}</td>
                        <td>{person.password}</td>
                        <td>
                            <button className="btn btn-primary me-2" onClick={()=>deletePerson(person.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}