
async function windowActions() {
    const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
    
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    const request = await fetch(endpoint);
     //... to spread into array instead of nesting


    function findMatches(wordToMatch, restaurant) {
    return restaurant.filter(type => {
        //figure out if the restaurant matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return type.category.match(regex) ||
        type.name.match(regex)
    });
    }
   function displayMatches() {
    const matchArray = findMatches(event.target.value, restaurant);
    console.log(matchArray);
    const html = matchArray.map(type => {
        return `
            <li>
              <span class="name">${type.name}</span><br>
              <span class="name">${type.category}</span><br>
              <span class="name"><em>${type.address_line_1}</em></span><br>
              <span class="name"><em>${type.zip}</em></span><br>
              <span>,</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
   }
   const restaurant = await request.json();
   searchInput.addEventListener('change', displayMatches);
   searchInput.addEventListener('keyup', (evt) => { displayMatches(evt) });
}

window.onload = windowActions;


