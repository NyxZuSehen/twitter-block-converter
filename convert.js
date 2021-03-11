function convert(){
    let inp = document.getElementById("in");
    let out = document.getElementById("out");
    let text = inp.value;
    
    text = text.replace("window.YTD.block.part0 =","");

    
    let data = JSON.parse(text);
    let out_data = "{\"users\": [";
    console.log(data);
    let first = true;
    data.forEach(element => {
        if (first){
            first = false;
        }else{
            out_data +=","
        }
        out_data += "{ \"id\":\""+element.blocking.accountId+"\",\"name\": \"IMPORTED\"}\n";
    });
    out_data = out_data.slice(0, -1);
    out_data += "],\"type\": \"following\",\"connection\": \"IMPORTED\",\"on\": 1615424632024}"
    out.textContent = out_data;
}