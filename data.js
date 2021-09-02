const searchFood = () => {
    const searchField = document.getElementById("myInput");
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));

}

const displaySearchResult = data => {
    // console.log(data);
    const searchResult = document.getElementById('searchResult');

    const number = `${data.numFound}`;
    console.log(number);
    
    if(number===0){
        document.getElementById("num").innerHTML = "No result Found";
    }
    
    else{
        document.getElementById("num").innerHTML = number;
    }

    data.docs.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
             <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${element.title}</h5>
                 <p>${element.author_name}<p>
                 <p>${element.first_publish_year}<p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });


}