function changeLink() {
    let anchor = document.createElement('a');
    let link = document.createTextNode("FindtheCow");
    anchor.appendChild(link);
    anchor.href = "https://findtheinvisiblecow.com";
    document.body.appendChild(anchor);
}

