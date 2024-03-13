import React, { useState } from 'react';
import './DomainFinder.css';
import axios from 'axios';

export default function DomainFinder() {
    const [search, setSearch] = useState("Enter Domain Name");
    const [domain, setDomain] = useState([]);

    const API_KEY = '3mM44UdBetm1xC_GxCVyfQsnJkrwxujs9k81P';
    const API_SECRET = 'WoZAA6amZt1pvy95VXNjW1';
    const API_URL = 'https://api.ote-godaddy.com/v1/domains/available';

    const searchDomain = () => {
        console.log("button clicked");
        axios.get(`${API_URL}?domain=${search}`, {
            headers: {
                Authorization: `sso-key ${API_KEY}:${API_SECRET}`,
            },
        })
        .then((response) => {
            setDomain(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleEventChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="container">
            <header>
                <h1>Domain Seeker</h1>
            </header>
            <main>
                <div className="search-container">
                    <input type="text" id="domainInput" placeholder={search} onChange={handleEventChange} />
                    {/* <select id="extensionSelect">
                        <option value=".com">.com</option>
                        <option value=".net">.net</option>
                        <option value=".org">.org</option>
                    </select> */}
                    <button id="searchButton" onClick={searchDomain}>Search</button>
                </div>
                <div id="resultsContainer"></div>
            </main>
        </div>
    );
}