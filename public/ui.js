
const drop =  document.querySelector(".drop");
const invitationBox = document.querySelector(".invitations");
const invitationH3= document.querySelector(".invitations h3")
const ul  = document.querySelector(".usersOnline ul");
const invitationUl = document.querySelector(".invitations ul");
// const chatBox=  document.querySelector(".usersOnline")
const modal = document.querySelector(".modal");
const overlay =  document.querySelector(".overlay");
const howButton =  document.querySelector(".how button")
const index =  document.querySelector(".index");

// chatBox.addEventListener("mouseenter" , (e)=>{

//     // console.log(chatBox.getBoundingClientRect());
//     // console.log(ul.getBoundingClientRect());
//     if(chatBox.getBoundingClientRect().height === 30){
//         console.log(drop);
//         chatBox.style.height =  `${ul.getBoundingClientRect().height}%`
//         drop.innerHTML= `<i class="fas fa-sort-up"></i>`
//     }
//     // else{
//     //     chatBox.style.height =  `0.4rem`
//     //     drop.innerHTML= `<i class="fas fa-sort-down"></i>`
//     // }
    
  
// } )

// chatBox.addEventListener("mouseleave" , ()=>{
//     chatBox.style.height =  `0.4rem`
//         drop.innerHTML= `<i class="fas fa-sort-down"></i>`
// })

overlay.addEventListener("click" , ()=>{

     modal.classList.add("hidden");
     overlay.classList.add("hidden");
  

})

howButton.addEventListener("click" , ()=>{
    modal.classList.remove("hidden");
     overlay.classList.remove("hidden");
     console.log("fdr");
})


// invitationH3.addEventListener("click" , ()=>{

//     index.classList.add("hidden");
//     console.log(invitationBox.getBoundingClientRect());
//     console.log(invitationUl.getBoundingClientRect());

//     if(invitationBox.getBoundingClientRect().height === 30){

//          const height =invitationBox.getBoundingClientRect().height +invitationUl.getBoundingClientRect().height ;
//         invitationBox.style.height =  `50rem`;
//         invitationBox.style.bottom =  `-${35}rem`

//     }else{
//         invitationBox.style.height =  `0.4rem`;
//         invitationBox.style.bottom =  `-59rem`

//     }

// })
