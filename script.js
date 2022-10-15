let cars = [
    {
        model: "Malibu 2",
        year: 2020,
        color: "black",
        engine: 2.4,
        additional: {
            isTurbo: false,
            hasLuke: true,
            onGas: false
        },
        img: "https://roodell.uz/uploads/articles/806/article-original.jpg",
        price: 30000
    },
    {
        model: 'Nexia 2',
        year: 2008,
        color: 'white',
        engine: 1.6,
        additional: {
            isTurbo: true,
            hasLuke: true,
            onGas: false
        },
        img: 'https://frankfurt.apollo.olxcdn.com/v1/files/ozzc81fqqiwl-UZ/image;s=1000x700',
        price: 10500
    },
    {
        model: 'Lacetti',
        year: 2009,
        color: 'white',
        engine: 1.8,
        additional: {
            isTurbo: true,
            hasLuke: true,
            onGas: false,
        },
        img: "https://a.d-cd.net/NyAAAgGjYeA-960.jpg",
        price: 8000
    },
    {
        model: "BMW M2",
        year: 2013,
        color: "gray",
        engine: 3.0,
        additional: {
            isTurbo: true,
            hasLuke: true,
            onGas: false
        },
        img: "https://cdn.bmwblog.com/wp-content/uploads/2018/03/Mineral-Gray-BMW-M2-Project-By-IND-Distribution-Image-24.jpg",
        price: 20000
    },
    {
        model: "Tesla model x",
        year: 2020,
        color: "white",
        engine: 2.4,
        additional: {
            isTurbo: false,
            hasLuke: false,
            onGas: false
        },
        img: "https://tesla-cars.by/wp-content/webpc-passthru.php?src=https://tesla-cars.by/wp-content/uploads/2022/02/Tesla-Model-X_1000x660_17.jpg&nocache=1",
        price: 120000
    },
    {
        model: "Nexia Ravon",
        year: 2020,
        color: "white",
        engine: 1.5,
        additional: {
            isTurbo: false,
            hasLuke: true,
            onGas: false,
        },
        img: "https://avatars.mds.yandex.net/get-autoru-vos/2180033/1ff831e64df55970d721c3be202b5270/1200x900n",
        price: 120000
    },
    {
        model: "Supra",
        year: 2019,
        color: "red",
        engine: 3.0,
        additional: {
            isTurbo: true,
            hasLuke: false,
            onGas: false
        },
        img: "https://avatars.mds.yandex.net/get-verba/1672712/2a00000169576f759863fb9f206523d618eb/cattouchret",
        price: 20000
    },
    {
        model: 'nexia 3',
        year: 2018,
        color: 'red',
        engine: 1.5,
        additional: {
            isTurbo: false,
            hasLuke: false,
            onGas: false
        },
        img: 'https://files.aster.kz/market/aster/2022-9/211205_968950c9-9e59-4e01-b201-8e3002eeaa77_L_resolution2085x1173.webp?roistat_visit=11887113',
        price: 120000,
    }
]


let max = cars.reduce((a, b) => a.engine > b.engine ? a : b).engine

for (let item of cars) {
    let wPr = item.engine * 100 / max

    if (item.year < 2015 || item.additional.isTurbo) {
        item.price = item.price / 100 * 80
        document.write(`
       <div class="item_1" >
       <h1>Турбовая</h1>
       <h3>Model: ${item.model}</h3>
       <span>Year: ${item.year}</span> <br>
       <div style="width: 50px; height: 50px; background-color: ${item.color};" ></div> <br>
       <span>
       Engine: 
            <div class="engine" >
            <div style=" text-align:center; height: 100%; width: ${wPr}%; background: orange; " >${Math.round(wPr)}%</div>
            </div>
            </span> <br>
            <img src="${item.img}" alt="${item.model}" />
            <h3 style="color: red;" >Price: ${item.price}</h3>
            </div>
            `)
    } else if (item.additional.isTurbo == false) {
        document.write(`
            <div class="item" >
            <h1>Не Турбовая</h1>
            <h3>Model: ${item.model}</h3>
            <span>Year: ${item.year}</span> <br>
            <div style="width: 50px; height: 50px; background-color: ${item.color};" ></div> <br>
            <span>
            Engine: 
            <div class="engine" >
            <div style=" text-align:center; height: 100%; width: ${wPr}%; background: orange; " >${Math.round(wPr)}%</div>
            </div>
       </span> <br>
       <img src="${item.img}" alt="${item.model}" />
       <h3 style="color: red;" >Price: ${item.price}</h3>
       </div>
       `)
    }
    //   else if (item.additional.hasLuke == true) {
    //     document.write(`
    //         <div class="item" >
    //         <h1>Не Турбовая</h1>
    //         <h1>Есть люк!</h1>
    //         <h3>Model: ${item.model}</h3>
    //         <span>Year: ${item.year}</span> <br>
    //         <div style="width: 50px; height: 50px; background-color: ${item.color};" ></div> <br>
    //         <span>
    //         Engine: 
    //         <div class="engine" >
    //         <div style=" text-align:center; height: 100%; width: ${wPr}%; background: orange; " >${Math.round(wPr)}%</div>
    //         </div>
    //    </span> <br>
    //    <img src="${item.img}" alt="${item.model}" />
    //    <h3 style="color: red;" >Price: ${item.price}</h3>
    //    </div>
    //    `)

    // } else if (item.additional.hasLuke == false) {
    //     document.write(`
    //         <div class="item" >
    //         <h1>Не Турбовая</h1>
    //         <h4>Нету люка!</h4>
    //         <h3>Model: ${item.model}</h3>
    //         <span>Year: ${item.year}</span> <br>
    //         <div style="width: 50px; height: 50px; background-color: ${item.color};" ></div> <br>
    //         <span>
    //         Engine: 
    //         <div class="engine" >
    //         <div style=" text-align:center; height: 100%; width: ${wPr}%; background: orange; " >${Math.round(wPr)}%</div>
    //         </div>
    //    </span> <br>
    //    <img src="${item.img}" alt="${item.model}" />
    //    <h3 style="color: red;" >Price: ${item.price}</h3>
    //    </div>
    //    `)

    // }
}


