
const div = document.getElementById("ramen-menu")

const div2 = document.getElementById("ramen-detail")
const img2 = document.querySelector(".detail-image")
const name = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const rating = document.getElementById("rating-display")
const comment = document.getElementById("comment-display")



fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(ramens =>{
    ramens.forEach(ramen=>{
        const img = document.createElement("img")
        img.src = ramen.image
         div.appendChild(img)

    img.addEventListener("click", event =>{
        
         img2.src = ramen.image
        name.textContent = ramen.name
         restaurant.textContent = ramen.restaurant
         rating.textContent = ramen.rating
        comment.textContent = ramen.comment
         })
    
    })

})


        const form = document.getElementById("new-ramen");
        const ramenMenu = document.getElementById("ramen-menu");
      
        form.addEventListener("submit", function (event) {
          event.preventDefault();
      
          const newName = document.getElementById("new-name").value;
          const newRestaurant = document.getElementById("new-restaurant").value;
          const newImage = document.getElementById("new-image").value;
          const newRating = document.getElementById("new-rating").value;
          const newComment = document.getElementById("new-comment").value;
      
          const newRamenItem = document.createElement("div");
          newRamenItem.className = "ramen-item";
      
          const newRamenImage = document.createElement("img");
          newRamenImage.src = newImage;
        

          newRamenImage.addEventListener("click", event =>{

           name.textContent = newName
          restaurant.textContent = newRestaurant
          img2.src = newImage
          comment.textContent = newComment
          rating.textContent = newRating
        })
      
      
          newRamenItem.appendChild(newRamenImage);
      
          ramenMenu.appendChild(newRamenItem);
      
          form.reset();
        });
      






  
   
