import "./styles.css";
import React from "react";
import ListContainer from "./components/ListContainer/ListContainer";

export default function App() {
    return (
        <div className="App">
            <h2>List of notes</h2>
            <ListContainer/>
        </div>
    );
}
