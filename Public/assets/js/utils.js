function redirectPost(url, data) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = url;

    for (var name in data) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }


    // You might have to add document.body.appendChild(form); 
    // to this (for example just before form.submit()), 
    //because the HTML spec doesn't allow forms that are not associated with the document to be submitted. 
    document.body.appendChild(form);
    form.submit();
}