
//  `                                   Get Element in to Html 

const itemBox = document.querySelector(".itemBox")
// console.log(itemBox)
const searchBar = document.querySelector("#searchbar")
// console.log(searchBar)
const searchBtn = document.querySelector("#searchBtn")
// console.log(searchBtn)
const container2 = document.querySelector(".container-2")
// console.log(searchBtn)




//                                          Maping the data

const fetchData = (data) => {
    // console.log(data)
    const mapData = data.map((items) => {
        // console.log(items)
        const createDynamicData = ` <div class="row" onclick="data()">
        <div class="col-sm-3 mt-5 ">
            <div class="box  d-flex bg-light">
            <p>
                    <img src="${items.image_url}" alt="image"
                    width="50px" class="rounded-circle">
                    <span class=" title ms-3" style="color: orange;"> ${items.title} </span>
                    <br>
                    <span class="ms-5"> ${items.publisher}</span>
                    
                    </p>
                    </div>
                    
        </div>

    </div> `

        return createDynamicData
    })

    itemBox.innerHTML = mapData
    // fetchData()
}






//                                       Fetch API to get All products 

const fetchApi = (value) => {                                                            // ====>>> fetchValue
    // console.log(value)
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search= ${value}`)          // =====>>>
        .then((response) => response.json()
            //  console.log(response,"===========RESPONSE")
        )
        .then((result) => {
            //    console.log(result.data.recipes, "===========>>>>RESULT dATA")
            fetchData(result.data.recipes)
        })
}
// fetchApi()
// fetchApi(pizza)


//                                       Function SearchBar ka 

const searchBarInput = () => {
    const search = searchBar.value
    fetchApi(search)
    console.log(searchBar.value)
    searchBar.value = ""
}
// searchBarInput()


//     productDetail.innerHTML = product;

// }

//                                       singleData Fuction 

const singleData = (data) => {
    // console.log(data)
    const mapData = data.data.recipe
    const uiToHtml = `<div class="row ">
        <div class="col-sm-3 mt-5 "onclick="data()">
            <div class="box  d-flex bg-light">
                <p>
                    <img src="${mapData.image_url}" alt="image"
                        width="50px" class="rounded-circle">
                    <span class=" title ms-3" style="color: orange;">${mapData.title} </span>
                    <br>
                    <span class="ms-5">${mapData.description}</span>

                </p>
            </div>

        </div>

    </div>`
return uiToHtml;
}
container2.innerHTML= uiToHtml


//                                        Get Data Function 

function dataFunct(id) {
    const dataFetch = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/:${id}`)
    dataFetch
    .then((respo) =>  respo.json())
        .then((data) => {
            console.log(data)
            singleData(data)
        })
}
// dataFunct(2)



// Add Event Listener

searchBtn.addEventListener("click", searchBarInput)

