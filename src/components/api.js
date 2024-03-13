const searchDomain=()=>{
    console.log("button clicked");
    axios.get(`${API_URL}?domain=${search}`, {
        headers: {
            Authorization: `sso-key ${API_KEY}:${API_SECRET}`,
        },
    }
    
    )
    .then((response)=>{
        setDomain(response.data);
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
}