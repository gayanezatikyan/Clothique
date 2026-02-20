class Blog {
    constructor(
        img, date, brand, name, description
    ) {
        this.img = img;
        this.date = date;
        this.brand = brand;
        this.name = name;
        this.description = description;
    }
    render = () => {
        const Blog = document.createElement("article");
        Blog.setAttribute("class", "Blog");
        Blog.innerHTML = `
        <img src="${this.img}">
        <div>
        <span>${this.date}</span>
        <span>${this.brand}</span>
        </div>
        <h2>${this.name}</h2>
        <span>${this.description}`;
        document.querySelector("#Blog_box").append(Blog);
    };
};


var Blogs = [
    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-1.jpg",
        "22 AUG 2021",
        "TIPS & TRICKS",
        "Top 10 Casual Look Ideas To Dress Up Your Kids",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-2.jpg",
        "25 AUG 2021",
        "TRENDING",
        "Latest Trends Of Wearing Street Wears Supremeli",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-3.jpg",
        "28 AUG 2021",
        "INSPIRATION",
        "10 Different Types Of Comfortable Clothes Ideas For Women",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-1.jpg",
        "22 AUG 2021",
        "TIPS & TRICKS",
        "Top 10 Casual Look Ideas To Dress Up Your Kids",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-2.jpg",
        "25 AUG 2021",
        "TRENDING",
        "Latest Trends Of Wearing Street Wears Supremeli",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-3.jpg",
        "28 AUG 2021",
        "INSPIRATION",
        "10 Different Types Of Comfortable Clothes Ideas For Women",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-1.jpg",
        "22 AUG 2021",
        "TIPS & TRICKS",
        "Top 10 Casual Look Ideas To Dress Up Your Kids",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-2.jpg",
        "25 AUG 2021",
        "TRENDING",
        "Latest Trends Of Wearing Street Wears Supremeli",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),

    new Blog(
        "https://demo.templatesjungle.com/clothique/images/post-thumbnail-3.jpg",
        "28 AUG 2021",
        "INSPIRATION",
        "10 Different Types Of Comfortable Clothes Ideas For Women",
        `From Minimalist-Approved Colorblocking to Striped 
         Shirting, These Are the 2024 Dress Trends That Matter Most...`,
    ),
];

Blogs.map((e) => {
    e.render()
});
