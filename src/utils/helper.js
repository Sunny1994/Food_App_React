export function filterData(searchtext, restaurant) {
    
    const filter= restaurant.filter(res=>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );

    return filter;
}