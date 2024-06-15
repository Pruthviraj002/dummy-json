// const student = { name: "sagar", age: 22 }
// console.log(student.age);

const students = [{ name: "sagar", age: 22 }, { name: "shubham", age: 22 }, { name: "santosh", age: 23 }]

// console.log(students[0].name);

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }

// for (let stud of students) {
//     console.log(stud.name);
//     document.querySelector(".demo").innerHTML += `${stud.name} ${stud.age} <br />`
// }

const movies = [
    { movieName: "kgf", movieRating: 5, movieYear: 2022 },
     { movieName: "pushpa", movieRating: 4, movieYear: 2023 },
      { movieName: "kgf2", movieRating: 5, movieYear: 2023 }
    ]

function GetData() {
    for (let movie of movies) {
        console.log(movie.movieName);
        document.querySelector("tbody").innerHTML += `<tr><td>${movie.movieName}</td><td>${movie.movieRating}</td><td>${movie.movieYear}</td></tr>`
    }
}

const data = { "products": [{ "id": 121, "title": "iPhone 5s", "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.", "category": "smartphones", "price": 199.99, "discountPercentage": 11.85, "rating": 3.92, "stock": 65, "tags": ["smartphones", "apple"], "brand": "Apple", "sku": "AZ1L68SM", "weight": 4, "dimensions": { "width": 8.49, "height": 25.34, "depth": 18.12 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships in 1 week", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Wyatt Perry", "reviewerEmail": "wyatt.perry@x.dummyjson.com" }, { "rating": 5, "comment": "Awesome product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Olivia Anderson", "reviewerEmail": "olivia.anderson@x.dummyjson.com" }, { "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Mateo Nguyen", "reviewerEmail": "mateo.nguyen@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 2, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "2903942810911", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png" }, { "id": 122, "title": "iPhone 6", "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.", "category": "smartphones", "price": 299.99, "discountPercentage": 4.54, "rating": 3.76, "stock": 99, "tags": ["smartphones", "apple"], "brand": "Apple", "sku": "ZPXH3X9J", "weight": 8, "dimensions": { "width": 16.21, "height": 22.94, "depth": 5.63 }, "warrantyInformation": "3 year warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Nicholas Bailey", "reviewerEmail": "nicholas.bailey@x.dummyjson.com" }, { "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Clara Berry", "reviewerEmail": "clara.berry@x.dummyjson.com" }, { "rating": 3, "comment": "Not as described!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Gavin Stanley", "reviewerEmail": "gavin.stanley@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 3, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "2517230562429", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png" }, { "id": 123, "title": "iPhone 13 Pro", "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.", "category": "smartphones", "price": 1099.99, "discountPercentage": 18.3, "rating": 3.42, "stock": 26, "tags": ["smartphones", "apple"], "brand": "Apple", "sku": "YGQKHPGK", "weight": 8, "dimensions": { "width": 22.39, "height": 9.77, "depth": 19.6 }, "warrantyInformation": "1 year warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Aria Roberts", "reviewerEmail": "aria.roberts@x.dummyjson.com" }, { "rating": 4, "comment": "Great product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Ryan Graham", "reviewerEmail": "ryan.graham@x.dummyjson.com" }, { "rating": 2, "comment": "Poor quality!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Mason Wright", "reviewerEmail": "mason.wright@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "2986724589988", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png" }, { "id": 124, "title": "iPhone X", "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.", "category": "smartphones", "price": 899.99, "discountPercentage": 14.19, "rating": 4.96, "stock": 99, "tags": ["smartphones", "apple"], "brand": "Apple", "sku": "9QN3UDUD", "weight": 10, "dimensions": { "width": 27.86, "height": 8.53, "depth": 17.07 }, "warrantyInformation": "3 months warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 1, "comment": "Very unhappy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Eleanor Tyler", "reviewerEmail": "eleanor.tyler@x.dummyjson.com" }, { "rating": 5, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Maya Reed", "reviewerEmail": "maya.reed@x.dummyjson.com" }, { "rating": 4, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Elena Baker", "reviewerEmail": "elena.baker@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 2, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "4331405454760", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png", "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png" }, { "id": 125, "title": "Oppo A57", "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.", "category": "smartphones", "price": 249.99, "discountPercentage": 12.17, "rating": 3.1, "stock": 76, "tags": ["smartphones", "oppo"], "brand": "Oppo", "sku": "J1NO9ULG", "weight": 3, "dimensions": { "width": 29.52, "height": 11.25, "depth": 14.41 }, "warrantyInformation": "No warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 2, "comment": "Not worth the price!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Owen Fisher", "reviewerEmail": "owen.fisher@x.dummyjson.com" }, { "rating": 4, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Jack Ward", "reviewerEmail": "jack.ward@x.dummyjson.com" }, { "rating": 2, "comment": "Very dissatisfied!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Nora Mills", "reviewerEmail": "nora.mills@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "1743445108634", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png" }, { "id": 126, "title": "Oppo F19 Pro+", "description": "The Oppo F19 Pro+ is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.", "category": "smartphones", "price": 399.99, "discountPercentage": 15.62, "rating": 2.57, "stock": 92, "tags": ["smartphones", "oppo"], "brand": "Oppo", "sku": "H2TTGWXB", "weight": 2, "dimensions": { "width": 20.35, "height": 16.4, "depth": 13.31 }, "warrantyInformation": "3 year warranty", "shippingInformation": "Ships in 1-2 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Benjamin Foster", "reviewerEmail": "benjamin.foster@x.dummyjson.com" }, { "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Lillian Bishop", "reviewerEmail": "lillian.bishop@x.dummyjson.com" }, { "rating": 3, "comment": "Would not recommend!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Harper Garcia", "reviewerEmail": "harper.garcia@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "7451360954140", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/thumbnail.png" }, { "id": 127, "title": "Oppo K1", "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.", "category": "smartphones", "price": 299.99, "discountPercentage": 14.58, "rating": 3.39, "stock": 61, "tags": ["smartphones", "oppo"], "brand": "Oppo", "sku": "ELZ94HM3", "weight": 2, "dimensions": { "width": 21.83, "height": 27.83, "depth": 27.47 }, "warrantyInformation": "2 year warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 2, "comment": "Would not buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Penelope Harper", "reviewerEmail": "penelope.harper@x.dummyjson.com" }, { "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Nathan Reed", "reviewerEmail": "nathan.reed@x.dummyjson.com" }, { "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Madison Stewart", "reviewerEmail": "madison.stewart@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "7535531820285", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png", "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png" }, { "id": 128, "title": "Realme C35", "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.", "category": "smartphones", "price": 149.99, "discountPercentage": 16.47, "rating": 2.56, "stock": 81, "tags": ["smartphones", "realme"], "brand": "Realme", "sku": "25KENV7J", "weight": 6, "dimensions": { "width": 21.74, "height": 28.75, "depth": 22.22 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 1 week", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Ava Harrison", "reviewerEmail": "ava.harrison@x.dummyjson.com" }, { "rating": 3, "comment": "Waste of money!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Sophia Brown", "reviewerEmail": "sophia.brown@x.dummyjson.com" }, { "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Grace Perry", "reviewerEmail": "grace.perry@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "3119744926904", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png" }, { "id": 129, "title": "Realme X", "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.", "category": "smartphones", "price": 299.99, "discountPercentage": 2.39, "rating": 4.42, "stock": 87, "tags": ["smartphones", "realme"], "brand": "Realme", "sku": "5E11C5C4", "weight": 1, "dimensions": { "width": 29.32, "height": 16.3, "depth": 24.12 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships in 3-5 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Benjamin Foster", "reviewerEmail": "benjamin.foster@x.dummyjson.com" }, { "rating": 4, "comment": "Very satisfied!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Madison Collins", "reviewerEmail": "madison.collins@x.dummyjson.com" }, { "rating": 5, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Emily Johnson", "reviewerEmail": "emily.johnson@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "0139612574728", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png" }, { "id": 130, "title": "Realme XT", "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.", "category": "smartphones", "price": 349.99, "discountPercentage": 3.03, "rating": 4.14, "stock": 53, "tags": ["smartphones", "realme"], "brand": "Realme", "sku": "GHDMRAP2", "weight": 4, "dimensions": { "width": 28.82, "height": 23.44, "depth": 6.21 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships in 1 month", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Awesome product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Hannah Howard", "reviewerEmail": "hannah.howard@x.dummyjson.com" }, { "rating": 1, "comment": "Would not recommend!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Claire Foster", "reviewerEmail": "claire.foster@x.dummyjson.com" }, { "rating": 1, "comment": "Very dissatisfied!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Nora Russell", "reviewerEmail": "nora.russell@x.dummyjson.com" }], "returnPolicy": "60 days return policy", "minimumOrderQuantity": 5, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "3985844484131", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png" }, { "id": 131, "title": "Samsung Galaxy S7", "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.", "category": "smartphones", "price": 299.99, "discountPercentage": 8.83, "rating": 4.9, "stock": 55, "tags": ["smartphones", "samsung galaxy"], "brand": "Samsung", "sku": "VZF4Z58Z", "weight": 8, "dimensions": { "width": 23.33, "height": 27.33, "depth": 27.02 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships in 2 weeks", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Jace Smith", "reviewerEmail": "jace.smith@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Ruby Andrews", "reviewerEmail": "ruby.andrews@x.dummyjson.com" }, { "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Aria Roberts", "reviewerEmail": "aria.roberts@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "8841359359362", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png" }, { "id": 132, "title": "Samsung Galaxy S8", "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.", "category": "smartphones", "price": 499.99, "discountPercentage": 2.69, "rating": 3.69, "stock": 75, "tags": ["smartphones", "samsung galaxy"], "brand": "Samsung", "sku": "GLXQQKBF", "weight": 6, "dimensions": { "width": 6.88, "height": 8.96, "depth": 18.13 }, "warrantyInformation": "Lifetime warranty", "shippingInformation": "Ships in 3-5 business days", "availabilityStatus": "In Stock", "reviews": [{ "rating": 2, "comment": "Very unhappy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Christopher West", "reviewerEmail": "christopher.west@x.dummyjson.com" }, { "rating": 5, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Hazel Evans", "reviewerEmail": "hazel.evans@x.dummyjson.com" }, { "rating": 4, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Luna Russell", "reviewerEmail": "luna.russell@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "1337599403784", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png" }, { "id": 133, "title": "Samsung Galaxy S10", "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.", "category": "smartphones", "price": 699.99, "discountPercentage": 0.97, "rating": 2.81, "stock": 40, "tags": ["smartphones", "samsung galaxy"], "brand": "Samsung", "sku": "5GJFL98I", "weight": 3, "dimensions": { "width": 28.23, "height": 7.35, "depth": 10.68 }, "warrantyInformation": "1 month warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 4, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Grace Perry", "reviewerEmail": "grace.perry@x.dummyjson.com" }, { "rating": 4, "comment": "Highly impressed!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Elijah Hill", "reviewerEmail": "elijah.hill@x.dummyjson.com" }, { "rating": 4, "comment": "Would buy again!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Eleanor Tyler", "reviewerEmail": "eleanor.tyler@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 1, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "0311929399881", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png" }, { "id": 134, "title": "Vivo S1", "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.", "category": "smartphones", "price": 249.99, "discountPercentage": 4.25, "rating": 2.83, "stock": 13, "tags": ["smartphones", "vivo"], "brand": "Vivo", "sku": "BG6974E7", "weight": 1, "dimensions": { "width": 28.83, "height": 26.69, "depth": 23.12 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 5, "comment": "Very pleased!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Alice Smith", "reviewerEmail": "alice.smith@x.dummyjson.com" }, { "rating": 5, "comment": "Great value for money!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Harper Kelly", "reviewerEmail": "harper.kelly@x.dummyjson.com" }, { "rating": 5, "comment": "Great product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Lillian Simmons", "reviewerEmail": "lillian.simmons@x.dummyjson.com" }], "returnPolicy": "7 days return policy", "minimumOrderQuantity": 3, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "4070349673041", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png" }, { "id": 135, "title": "Vivo V9", "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.", "category": "smartphones", "price": 299.99, "discountPercentage": 14.57, "rating": 3.1, "stock": 19, "tags": ["smartphones", "vivo"], "brand": "Vivo", "sku": "N9WFE2WH", "weight": 5, "dimensions": { "width": 27.29, "height": 9.73, "depth": 14.79 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "In Stock", "reviews": [{ "rating": 3, "comment": "Would not recommend!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Elijah Stewart", "reviewerEmail": "elijah.stewart@x.dummyjson.com" }, { "rating": 4, "comment": "Great product!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Aria Roberts", "reviewerEmail": "aria.roberts@x.dummyjson.com" }, { "rating": 4, "comment": "Very happy with my purchase!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Hannah Howard", "reviewerEmail": "hannah.howard@x.dummyjson.com" }], "returnPolicy": "No return policy", "minimumOrderQuantity": 2, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "1506104702332", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png" }, { "id": 136, "title": "Vivo X21", "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.", "category": "smartphones", "price": 499.99, "discountPercentage": 7.32, "rating": 2.75, "stock": 0, "tags": ["smartphones", "vivo"], "brand": "Vivo", "sku": "KSF00BOC", "weight": 7, "dimensions": { "width": 5.72, "height": 16.47, "depth": 27.76 }, "warrantyInformation": "1 week warranty", "shippingInformation": "Ships overnight", "availabilityStatus": "Out of Stock", "reviews": [{ "rating": 5, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Logan Lee", "reviewerEmail": "logan.lee@x.dummyjson.com" }, { "rating": 5, "comment": "Highly recommended!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Nolan Gonzalez", "reviewerEmail": "nolan.gonzalez@x.dummyjson.com" }, { "rating": 4, "comment": "Fast shipping!", "date": "2024-05-23T08:56:21.625Z", "reviewerName": "Bella Grant", "reviewerEmail": "bella.grant@x.dummyjson.com" }], "returnPolicy": "30 days return policy", "minimumOrderQuantity": 4, "meta": { "createdAt": "2024-05-23T08:56:21.625Z", "updatedAt": "2024-05-23T08:56:21.625Z", "barcode": "2543504494043", "qrCode": "https://dummyjson.com/public/qr-code.png" }, "images": ["https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png", "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"], "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png" }], "total": 16, "skip": 0, "limit": 16 }


console.log(data.products.reviews[0]);

function getData(){
    for(i=0;i<data.products.length;i++){
        document.querySelector("tbody").innerHTML +=
        `<tr>
        <td>${data.products[i].id}</td>
        <td>${data.products[i].brand}</td>
        <td>${data.products[i].price}</td>
        <td>${data.products[i].rating}</td>
        <td>${data.products[i].category}</td>
        <td>${data.products[i].returnPolicy}</td>
        <td>${data.products[i].reviews[0].comment}</td>
        <td>${data.products[i].availabilityStatus}</td>
        <td>${data.products[i].warrantyInformation}</td>
        <td>${data.products[i].meta.createdAt}</td>
        </tr>`
}
}


