const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Saksuka",
    category: "Turkey",
    price: 5.95 ,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171350-03-best-turkish-foods-saksuka.jpg",
    desc: `Turkish cuisine incorporates a huge range of vegetable dishes known as zeytinyagli yemegi -- foods cooked in olive oil. The majority are vegetable-based and include green beans, artichokes and of course, eggplant`,
  },
  {
    id: 11,
    title: "Ezogelin corba",
    category: "Turkey",
    price: 5.95 ,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171319-02-best-turkish-foods-ezogelin.jpg",
    desc: `According to legend, this dish was dreamed up by an unhappily married woman named Ezo who was trying to win over her mother-in-law via her stomach.`,
  },
  {
    id: 12,
    title: "Lahmacun",
    category: "Turkey",
    price: 12 ,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200402101927-18-best-turkish-foods-lahmacun.jpg",
    desc: `According to Ottoman explorer Evliya Celebi, who roamed far and wide in the 17th century, lahmacun takes its name from the Arabic word lahm-i acinli.`,
  },
  {
    id: 13,
    title: "Iskender kebab",
    category: "Turkey",
    price: 25 ,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171826-08-best-turkish-foods-iskender-kebab.jpg",
    desc: `Located in northwest Turkey, Bursa is famous for three things -- silk, the ski fields of Uludag and a type of kebab called Iskender.`,
  },
];


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) { //Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması
    //console.log(item);
    return `
    <div class="menu-items col-lg-6 col-sm-12">
    <img src="${item.img}" alt="${item.title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>`
  });
  displayMenu = displayMenu.join(""); // join() ile arada , ile ayırıyor. join("") ile , olmuyor.
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values,item) { // unique categories 
    //console.log("values",values); //values ["all"] , values (2) ["all", "Korea"] ...
    //console.log("item",item); //item {id: 1, title: "Tteokbokki", category: "Korea", price: 10.99, img: "https://twoplaidaprons.com/wp-content/uploads/2020…top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg", …}
                                //item {id: 2, title: "Chicken Ramen", category: "Japan", price: 7.99, img: "https://www.forkknifeswoon.com/wp-content/uploads/…le-homemade-chicken-ramen-fork-knife-swoon-01.jpg", …} ...
    
    if (!values.includes(item.category)) {//console.log(!values.includes(item.category)); // çıktı: 2true, false, true, 5false
      values.push(item.category);
    }
    return values;
  },
  ['All']
  );
  //console.log("categories",categories); //çıktı: categories (4) ["all", "Korea", "Japan", "China"]
  const categoryBtns = categories.map(function (category) {
    return `<button type="button" class="btn btn-outline-dark me-3 filter-btn" data-id="${category}">${category}</button> `
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  //filter items
  filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //console.log(e.currentTarget.dataset.id); çıktısı: all butona basınca data-id="all" yazdığımız için all gösterir. 
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) { //Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi
      //console.log(menuItem.category);// çıktısı: Korea Japan Korea 2China Japan Korea  China Japan
      if (menuItem.category === category) {
        return menuItem;
      }
    })
    //console.log(menuCategory); //çıktısı: korea butona basınca  (3) [{…}, {…}, {…}] category: "Korea" olanları gösterir.
    if (category === "All") {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }
  });

});
  
}