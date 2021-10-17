
async function windowActions() {
    const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
    const mymap = L.map('mapid').setView([38.989, -76.93], 12);

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    const request = await fetch(endpoint);
     //... to spread into array instead of nesting


    function findMatches(wordToMatch, restaurant) {
    return restaurant.filter(type => {
        //figure out if the restaurant matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return type.zip.match(regex)
    });
    }

   let markers = [];
   function displayMatches() {
       markers.forEach(marker => {
           marker.remove();
       })
    const matchArray = findMatches(event.target.value, restaurant);
    //console.log(matchArray);
    const topFive = matchArray.slice(0, 5);
    console.log(topFive);
    console.log(searchInput.value);
    if (searchInput.value == '') {
        suggestions.innerHTML = "";
    }
    else {
        const html = topFive.map(type => {
        return `
            <li>
              <span class="name">${type.name}</span><br>
              <span class="name"><em>${type.address_line_1}</em></span><br>
            </li>
        `;
        }).join('');
        
        suggestions.innerHTML = html;
        
        topFive.forEach((item, index) => {
            const point = item.geocoded_column_1;
            if(!point || !point.coordinates) {
                console.log(item)
                return;
            }
            markers.push(L.marker(point.coordinates.reverse()).addTo(mymap));
            
        })
        console.log(topFive[0].geocoded_column_1.coordinates)
        mymap.panTo(topFive[0].geocoded_column_1.coordinates)
        //console.log("This is the array: " + markers)
    }
    
   }

   const restaurant = await request.json();
   searchInput.addEventListener('input', displayMatches);
   
   function mapInit() {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibW1vcnJpMjAwMCIsImEiOiJja3V0NHpyNXY1bHh5MndtYWRybmM1bGwwIn0.wy9-oKCEeZoaPkYh3yGOiA'
    }).addTo(mymap);
   }
   mapInit();
}

window.onload = windowActions;


