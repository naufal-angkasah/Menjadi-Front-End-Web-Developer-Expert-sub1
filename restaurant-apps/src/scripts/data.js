import('../DATA.json').then(({ default: datalist }) => {
    let datacontent = datalist.restaurants;
    let itemdata = ``;
    datacontent.forEach(function (datalist) {
        itemdata += `
        <div class="contentlist" id="list">
        <img class="image" src="${datalist.pictureId}" alt="Restaurant Image">
        <div class="restaurant_info">
            <h2 class="info_title" tabindex="0">${datalist.name}</h2>
            <p class="info_city">${datalist.city}
            <p class="info_desc">${datalist.description.slice(0, 225)}</p>
          </div>
        </div>`
    })
    document.querySelector('#content').innerHTML = itemdata;
})