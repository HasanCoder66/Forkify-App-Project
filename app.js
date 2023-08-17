
//  `                                   Get Element in to Html 

const itemBox = document.querySelector(".itemBox")
// console.log(itemBox)
const searchBar = document.querySelector("#searchbar")
// console.log(searchBar)
const searchBtn = document.querySelector("#searchBtn")
// console.log(searchBtn)
const container2 = document.querySelector(".productDetail")
// console.log(container2)


function filteringData() {
    const search = searchBar.value
    // console.log(search)
    searchHandler(search)
    searchBar.value = ""

}


function sideBarHandler  (data)  {
    let dataWork = data.data.recipe;
    let uiContainer = `<div class="card mb-3" style="background-color: beige; border: none;">
    <div class="img">
        <img src="${dataWork.image_url}"
            class="card-img-top image-fit" alt="Recipe Image">
    </div>
    <div class="card-body d-flex flex-column align-items-center">
        <h1 class="card-title text-center recipeName">Recipe name/title</h1>
        <div class="container d-flex justify-content-center info">
            <div class="d-flex me-auto justify-content-center align-items-center">
                <p id="timeToCook"><i class="fa-regular fa-clock me-2"></i>45 minutes</p>
                <p id="servings"><i class="fa-solid fa-user-group me-2"></i>4-5 servings</p>
            </div>
            <p id="bookmark"><i class="fa-solid fa-bookmark rounded-circle p-3 fs-5"
                    style="color: #ffffff;"></i></p>
        </div>
    </div>
</div>

<div class="card ingredientCard mb-3" style="width: 100%; height: 400px; background-color: beige; border: none;">
    <div class="card-body d-flex flex-column flex-wrap">
        <h4 class="card-title text-center my-4 recipeIng">Recipe Ingredients</h4>
        <div id="ingredientsList" class="d-flex flex-column flex-wrap">
            <div class="items d-flex align-items-baseline">
                <i class="fa-solid fa-check me-2"></i>
                <p>Ingredient 01</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="background-color: beige; border: none;">
    <div class="card-body">
        <h4 class="card-title text-center my-4 howToCook">How To Cook It</h4>
        <p class="card-text text-center">
            This is some text within a card body.
        </p>
    </div>
</div>`

    container2.innerHTML = uiContainer;
    return uiContainer
    // console.log(uiContainer)
}

async function getData(id) {
    try {
        const fetchData = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        console.log(fetchData)
        const dataInJson = await fetchData.json()
        console.log(dataInJson)
        sideBarHandler(dataInJson)
    } catch (err) {
        console.log(err)
    }

}
// getData()


function searchHandler(value) {

    const hitApi = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${value}`)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then(function (jsonFormData) {
            console.log(jsonFormData)
            uiCreate(jsonFormData)
        })
}

const uiCreate = (dataFromThen) => {
    const mapData = dataFromThen.data.recipes.map((item) => {
        const itemBoxFromUi = ` <div class="row mx-auto " onclick="getData('${item.id}')">
    <div class="col-sm-4 mt-5 style="background-color: gold;">                                    
        <div class="box  d-flex bg-light">
            <p>
                <img src="${item.image_url}" alt="image"
                    width="100px" class="rounded-circle">
                <span class=" title ms-3" style="color: orange;"> ${item.title
            } </span>
                <br>
                <span class="ms-5"> ${item.publisher}</span>

            </p>
        </div>

    </div>
</div>`
        // console.log(itemBoxFromUi)
        return itemBoxFromUi;
    })
    itemBox.innerHTML = mapData
}




// ApiHit





searchBtn.addEventListener('click', filteringData)









//                                          Maping the data

// const fetchData = (data) => {
//     // console.log(data)
//     const mapData = data.map((items) => {
//         // console.log(items)
//         const createDynamicData = ` <div class="row" onclick="data()">
//         <div class="col-sm-3 mt-5 ">
//             <div class="box  d-flex bg-light">
//             <p>
//                     <img src="${items.image_url}" alt="image"
//                     width="50px" class="rounded-circle">
//                     <span class=" title ms-3" style="color: orange;"> ${items.title} </span>
//                     <br>
//                     <span class="ms-5"> ${items.publisher}</span>

//                     </p>
//                     </div>

//         </div>

//     </div> `

//         return createDynamicData
//     })

//     itemBox.innerHTML = mapData
//     // fetchData()
// }

// const HitApis = async () => {
//   await  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes `)
//         .then((response) => response.json())
//     console.log(response, "response ====<<<")
//         .catch((data => console.log(data)))
// }
// HitApis()

// const hitApi = fetch(`https://fakestoreapi.com/products/`)
// .then((dataRes)=>{
//     console.log(dataRes)
//     return dataRes.json()
// })
// .then((jsonData)=>{
//      console.log(jsonData)

// })





//                                       Fetch API to get All products

// const fetchApi = (value) => {                                                            // ====>>> fetchValue
//     // console.log(value)
//     fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search= ${value}`)          // =====>>>
//         .then((response) => response.json()
//             //  console.log(response,"===========RESPONSE")
//         )
//         .then((result) => {
//             //    console.log(result.data.recipes, "===========>>>>RESULT dATA")
//             fetchData(result.data.recipes)
//         })
// }
// fetchApi()
// fetchApi("pizza")


//                                       Function SearchBar ka

// const searchBarInput = () => {
//     const search = searchBar.value
//     fetchApi(search)
//     console.log(searchBar.value)
//     searchBar.value = ""
// }
// searchBarInput()


//     productDetail.innerHTML = product;

// }

//                                       singleData Fuction

// const singleData = (data) => {
//     // console.log(data)
//     const mapData = data.data.recipe
//     const uiToHtml = `<div class="row ">
//         <div class="col-sm-3 mt-5 "onclick="data()">
//             <div class="box  d-flex bg-light">
//                 <p>
//                     <img src="${mapData.image_url}" alt="image"
//                         width="50px" class="rounded-circle">
//                     <span class=" title ms-3" style="color: orange;">${mapData.title} </span>
//                     <br>
//                     <span class="ms-5">${mapData.description}</span>

//                 </p>
//             </div>

//         </div>

//     </div>`
// return uiToHtml;
// }
// container2.innerHTML= uiToHtml


//                                        Get Data Function

// function dataFunct(id) {
//     const dataFetch = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/:${id}`)
//     dataFetch
//     .then((respo) =>  respo.json())
//         .then((data) => {
//             console.log(data)
//             singleData(data)
//         })
// }
// dataFunct(2)



// Add Event Listener

// searchBtn.addEventListener("click", searchBarInput)

