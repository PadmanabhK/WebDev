'use strict';

// const API_KEY = 'sk-Uv8U644816b67d677634';
// const PAGE_NUMBER = 1;

// axios.get(`https://perenual.com/api/species-list?page=${PAGE_NUMBER}&key=${API_KEY}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// Declarations
const slogans = [
    "Bringing Nature Home",
    "Greenify Your Space",
    "Nature's Delight at Your Doorstep",
    "Enhance Your Living Spaces",
    "Breathe Life into Your Home",
    "Plant Parenthood Made Easy",
    "Transform Your Space with Nature's Elegance",
    "Find Serenity in Greenery",
    "Nature's Beauty Delivered",
    "Create Your Oasis"
];
const catbox = document.querySelector('.catBox')
const words = Array.from(document.querySelectorAll('.navOp'))
const navImages = document.querySelectorAll('.navImg')
const navItems = Array.from(document.querySelectorAll('.navItem a'));
const wordColors = ["#31c48d", "pink", "yellow"];
const sidebar = document.querySelector('.sideBar');
const sideBarBtn = document.querySelector('.sbBtn');
const sidebarOptions = document.querySelector('.options');
const sideBarOptionsItem = Array.from(document.querySelectorAll('.optionsItem'));
const burgerIcon = document.querySelector('.burger');
const video = document.querySelector('.earth');
video.playbackRate = 0.65;
const apiSection = document.querySelector('.apiSection')
const apiText = document.querySelector('.text')
const plants = document.querySelector('.plants');
const flowers = document.querySelector('.flowera');
const ps2Container = document.querySelector('.ps2Container')
const ps2Containers = Array.from(document.querySelectorAll('.ps2Container ul'))
const ps2Nav = Array.from(document.querySelectorAll('.ps2NavItem'))

const fs2Container = document.querySelector('.fs2Container')
const fs2Containers = Array.from(document.querySelectorAll('.fs2Container ul'))
const fs2Nav = Array.from(document.querySelectorAll('.fs2NavItem'))
const stats = Array.from(document.querySelectorAll('.brandLine'));

// Theme Declaration
const navbox = document.querySelector('.navBlock')
const slogan = document.querySelector('.slogan');
const contentBoxh1 = document.querySelector('.contentBoxH1');
const navContent = document.querySelector('.navContent');
const themeBar = document.querySelector('.themeBar');
const themeButton = document.querySelector('.themeButton');
const themeIcon = document.querySelector('.themeIcon');
const themeList = document.querySelector('.themeList');
const themeItems = Array.from(document.querySelectorAll('.themeItem'));

// Functions
const themeColor = {
    currentIndex: 0,
    navItemsColors: ["#31c48d", "white"],
    headerBackground: ["rgb(240, 252, 254)", "linear-gradient(45deg, #d8f3dc, #74c69d)"],
    sloganColor: ["rgba(0, 0, 0, 0.6)", "white"],
    h1Color: ["rgba(0, 0, 0, 0.7)", "white"],
    changeTheme(index = 0) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = this.navItemsColors[index];
        }
        contentBoxh1.style.color = this.h1Color[index]
        slogan.style.color = this.sloganColor[index];
        navbox.style.background = this.headerBackground[index];
        sideBarBtn.style.background = this.headerBackground[index];
        themeButton.style.background = this.headerBackground[index];
        this.currentIndex = index;
    }
}

const barValues = {
    height: ["400px", "60px"],
    display: ["flex", "none"],
    boxShadow: ["0px 0px 10px 4px rgba(0, 0, 0, 0.1)", ""],
    backgroundColor: ["white", "rgb(240, 252, 254)"],
    transform: ["rotate(45deg)", "rotate(0deg)"]
}

const barMaker = (btn, bar, list, items, icon) => {
    let barClicked = true;
    btn.addEventListener('click', () => {
        let time = 100;
        let index = barClicked ? 0 : 1;
        barClicked = barClicked ? false : true;
        bar.style.height = barValues.height[index];
        list.style.display = barValues.display[index];
        items.map(item => {
            time += 100;
            index === 0 ? setTimeout(() => {
                item.style.display = 'flex';
            }, time) : item.style.display = 'none';
        })
        btn.style.boxShadow = barValues.boxShadow[index];
        btn.style.backgroundColor = barValues.backgroundColor[index];
        icon.style.transform = barValues.transform[index];

    })
}

barMaker(sideBarBtn, sidebar, sidebarOptions, sideBarOptionsItem, burgerIcon);
barMaker(themeButton, themeBar, themeList, themeItems, themeIcon);
words.map((word, i) => {
    word.style.color = wordColors[i];
    navImages[i].style.boxShadow = `0px 0px 15px 4px ${wordColors[i]}`
})
const opacityCheck = (curPos, scrollPositions, values) => {
    let opacity = 0;
    values.map((pos, index) => {
        if (curPos < scrollPositions[index])
            opacity = pos;
    })
    return opacity;
}


window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const positions = [500, 450, 400, 350, 300, 250, 200];
    const opacities = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1];
    let op = opacityCheck(scrollPosition, positions, opacities)
    navbox.style.opacity = op;
});

const navData = {
    bgColor: ["#80ed99", "gold", "purple"],
    clicked: ["clicked", "null", "null"],
    conBg: ["rgb(0, 240, 0, 0.1)", "rgb(255, 215, 0, 0.1)", "rgb(198, 33, 229, 0.1)"],
}
const flData = {
    bgColor: ["rgb(255, 192, 203)", "rgb(255, 230, 0)", "#c621e5"],
    clicked: ["clicked", "null", "null"],
    conBg: ["rgb(255, 192, 203, 0.2)", "rgb(255, 255, 0, 0.1)", "rgb(255, 81, 235, 0.1)"]
}

const sectionLayout = (container, Navs, containers, data) => {
    container.style.backgroundColor = data.conBg[0];
    Navs.map((btn, i) => {
        if (data.clicked[i] === "clicked") {
            btn.style.backgroundColor = data.bgColor[i];
            btn.style.color = "white";
        }
        btn.addEventListener("click", () => {
            btn.style.backgroundColor = data.bgColor[i];
            btn.style.color = "white";
            !containers[i].classList.contains('removed') ?
                containers[i].classList.toggle('removed') : "";
            containers.map((con, j) => {
                i === j ? con.classList.toggle('removed') : !con.classList.contains('removed') ? con.classList.toggle('removed') : "";
                if (i == j) {
                    data.clicked[j] = "clicked"
                    container.style.backgroundColor = data.conBg[i];
                }
                else {
                    data.clicked[j] = "null";
                    Navs[j].style.backgroundColor = ""
                }
            })
        })
    })
}
sectionLayout(ps2Container, ps2Nav, ps2Containers, navData)
sectionLayout(fs2Container, fs2Nav, fs2Containers, flData)





// Brands Section

const brandLinks = new Map(
    [[0, ["Brands/icons8-shopify-48.png",
        "Brands/icons8-linkedIn-48.png",
        "Brands/icons8-discord-48.png",
        "Brands/icons8-paypal-48.png"]],
    [1, ["Brands/icons8-stripe-48.png",
        "Brands/icons8-pagelines-48.png",
        "Brands/icons8-swift-48.png",
        "Brands/icons8-quora-64.png",
        "Brands/icons8-patreon-48.png"]],
    [2, ["Brands/icons8-kaggle-48.png",
        "Brands/icons8-git-48.png",
        "Brands/icons8-fedex-48.png",
        "Brands/icons8-envira-48.png"
    ]]]
)

// console.log(brandLinks);
stats.map((line, i) => {
    brandLinks.get(i).map((links) => {
        let brand = document.createElement('div');
        brand.classList.add('brand', 'flex', 'fd-col', 'jc-se', 'ai-cen', 'vis-hidden', 'op-0', 'pointer');
        let image = document.createElement('img');
        let para = document.createElement('p');

        para.classList.add('brandName', 'fw-bold');
        image.src = links;
        para.textContent = links.split('-')[1];
        brand.appendChild(image)
        brand.append(para)
        line.appendChild(brand)
    })
})
const brandBlock = Array.from(document.querySelectorAll('.brand'))

window.addEventListener('scroll', () => {
    let time = 200;
    if (window.pageYOffset > 3100) {
        brandBlock.map((brand) => {
            setTimeout(() => {
                brand.style.visibility = "visible";
                brand.style.opacity = 1;
            }, time);
            time += 200;
        })
    }
})


const membershipFeatures = new Map([
    [1, [
        "Access to a wide variety of plant and flower listings.",
        "Ability to browse and explore the collection of seeds for personal gardening.",
        "Access to informative articles and resources on plant care and maintenance.",
        "Receive notifications about exclusive discounts and promotions.",
        "Join community forums and engage with fellow plant enthusiasts.",
        "Option to create a personalized wishlist for future purchases.",
        "Regular updates on new arrivals and seasonal offerings."
    ]],
    [2, [
        "All the benefits of Seedling Serenade membership.",
        "Enhanced access to premium plants, rare flower varieties, and limited editions.",
        "Exclusive early access to new product releases.",
        "Priority customer support and assistance.",
        "Additional discounts and special offers on selected products.",
        "Access to curated content and expert tips on advanced gardening techniques.",
        "Eligibility for seasonal gift packages and surprise bonuses."
    ]],
    [3, [
        "All the benefits of Blossom Enchantment membership.",
        "VIP access to highly sought-after plants and exclusive collections.",
        "Dedicated account manager for personalized assistance and recommendations.",
        "Premium packaging and express shipping for faster delivery.",
        "Extended return and exchange policies.",
        "Exclusive invitations to member-only events, workshops, and webinars.",
        "Special discounts on partner brands and services."
    ]]
]);
const featuresHeadings = ["This membership represents the beginning of a journey, like a seed sprouting and taking its first steps towards growth. It offers essential benefits and access to basic features.", "This membership captures the enchanting beauty of blossoms in full bloom. It provides enhanced privileges, exclusive perks, and a deeper immersion into the world of plants and flowers.", "This membership embodies the enduring strength and stature of evergreen trees. It grants unparalleled access, premium benefits, and a truly elevated experience, symbolizing the pinnacle of membership."]

const mBlocks = Array.from(document.querySelectorAll('.mBlock'))
const blockHead = Array.from(document.querySelectorAll('.mHead'));
const mBlockPrice = Array.from(document.querySelectorAll('.price'));
const memberShipBlock = document.querySelector('.membershipBlock')
const mBlockFeatures = document.querySelector('.mBlockFeatures');
const featuresHeading = document.querySelector('.featuresHeading');
const featuresHead = document.querySelector('.featuresHead');
const featuresList = document.querySelector('.featuresList');
const listBtn = Array.from(document.querySelectorAll('.fa-list-ul'));
const listBack = document.querySelector('.fa-arrow-left')
const purchaseBtn = Array.from(document.querySelectorAll('.purchase'))

const blockData = ['null', 'null', 'null']
const positions = ['50px', '-350px', '-767px']
const gradientData = ['#6eee87', '#ff51eb', '#c621e5']

purchaseBtn.map((btn, i) => {
    btn.style.border = `1px solid ${gradientData.slice(1)[i]}`;
    btn.style.color = gradientData.slice(1)[i];
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = gradientData.slice(1)[i];
        btn.style.color = 'white';
    })
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = 'white';
        btn.style.color = gradientData.slice(1)[i];;
    })
})

const changeElementAttributes = (elementHead, elementList, heading, listItems, col) => {
    elementHead.textContent = heading;
    featuresHead.style.backgroundColor = gradientData[col]
    Array.from(elementList.children).map((item, i) => {
        item.innerHTML = `<i class="fa-solid fa-circle featureDot" style="color: ${gradientData[col]}"></i>${listItems[i]}`;

    })
}

mBlocks.map((Block, i) => {
    blockHead[i].style.color = 'white';
    mBlockPrice[i].style.backgroundColor = gradientData[i];
    blockHead[i].parentElement.style.background = `linear-gradient(43deg, ${gradientData[i]} 82%, ${gradientData[i]}80 85%, white 70%)`;
    listBtn[i].style.color = gradientData[i];
    listBtn[i].addEventListener('click', function () {
        if (blockData[i] === 'null') {
            blockData[i] = 'clicked';
            mBlockFeatures.style.opacity = 1;
            mBlockFeatures.style.visibility = 'visible';
            mBlockFeatures.style.transform = 'translateY(0px)';
            Block.style.transform = `translateX(${positions[i]})`
            changeElementAttributes(featuresHeading, featuresList, featuresHeadings[i], membershipFeatures.get(i + 1), i);

            listBack.addEventListener('click', function () {
                mBlockFeatures.style.opacity = 0;
                mBlockFeatures.style.visibility = 'hidden';
                mBlockFeatures.style.transform = `translateY(-450px)`

                Block.style.transform = `translateX(0px)`
                mBlocks.map((nBlock, k) => {
                    nBlock.style.opacity = 1;
                    nBlock.style.visibility = 'visible';
                    blockData[k] = 'null';
                })
            })

            mBlocks.map((rBlock, j) => {
                if (blockData[j] === 'null') {
                    rBlock.style.opacity = 0;
                    rBlock.style.visibility = 'hidden';
                }
            })
        }
    })
})
