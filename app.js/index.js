const loadCategory = async () => {
  document.getElementById('error').style.display = 'none';
  loadingHide('data-loading')
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
  displayCategory(data.categories);
  
}

const loadPets = async (petsName) => {
  document.getElementById('pets-container').style.display = 'block';
  document.getElementById('error').style.display = 'none';
  document.getElementById('pets-container').style.display = 'grid';
  document.getElementById('pets-container').style.display = 'grid-cols-3';
  loadingShow('data-loading');
const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petsName}`);
  const data = await response.json()
  loadingHide('data-loading')
    displayPet(data.data);
}

const displayPet = (petData) => {

  if (petData.length === 0) {
    document.getElementById('pets-container').style.display = 'none';
    document.getElementById('error').style.display = 'block';
  }
  const petsContainer = document.getElementById('pets-container');
 
    petsContainer.innerHTML = "";
    for (const data of petData) {
      const div = document.createElement('div');
    
        const petsContainer = document.getElementById('pets-container');
        div.innerHTML = `
        <div class="border-2 border-[#1313131A] rounded-lg ">
  <figure>
    <img class =" p-5  mx-auto rounded-3xl"
      src="${data.image}" />
  </figure>
  <div class="px-5 space-y-3">
    <h1 class="text-2xl font-bold"> Pet Name :
      ${data.pet_name}
    </h1>
    <p><i class="fa-solid fa-magnifying-glass"></i> Breed : ${data.breed}</p>
    <p><i class="fa-regular fa-calendar"></i> Birth : ${data.date_of_birth}</p>
    <p><i class="fa-solid fa-venus"></i> Gender : ${data.gender}</p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price : ${data.price}$</p>
    <div class="items-center gap-5 flex mb-3">
  <i class="fa-regular fa-thumbs-up fa-xl border-2 rounded-md border-[#0E7A8126] px-6 py-4 hover:cursor-pointer hover:text-white hover:bg-[#0E7A81]"></i>
      <button class="font-bold border-2 rounded-md border-[#0E7A8126] px-4 py-1 text-[#0E7A81] hover:cursor-pointer hover:text-white hover:bg-[#0E7A81]">Adopt</button>
     <button onclick = "petDetails(${data.petId})" class=" font-bold border-2 rounded-md border-[#0E7A8126] px-4 py-1 text-[#0E7A81] hover:cursor-pointer hover:text-white hover:bg-[#0E7A81] all-details">Details</button>
    </div>
    <div>
  </div>
</div>

<div>
</div>
        `
        petsContainer.appendChild(div);

       
  }
  


}

const petDetails = (petId) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  fetch(url)
    .then(res => res.json())
  .then(data=>displayDetails(data.petData))

}

const displayDetails = (details) => {
  console.log(details);
  document.getElementById('pet_details').showModal()
  const modal = document.getElementById('modal_container');
  modal.innerHTML = `
  <div>
  <img class="w-9/12 mx-auto rounded-xl" src=${details.image}></img>
  <h2 class="text-2xl font-bold">Pet Name : ${details.pet_name}</h2>
  <div class="grid grid-cols-2 border-b-2 border-[#1313131A]">
   <p><i class="fa-solid fa-magnifying-glass"></i> Breed : ${details.breed}</p>
    <p><i class="fa-regular fa-calendar"></i> Birth : ${details.date_of_birth}</p>
    <p><i class="fa-solid fa-venus"></i> Gender : ${details.gender}</p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price : ${details.price}$</p>
    <p><i class="fa-solid fa-dollar-sign mb-5"></i> Vaccinated status :  ${details.vaccinated_status}</p>
    </div>
    <h3 class="font-bold text-xl">Details Information</h3>
    <p>${details.pet_details}</p>
  </div>
  `
}





const displayCategory = (category) => {
    
    const categories = document.getElementById('category-container');
  for (const cate of category) {
      const div = document.createElement('div');
     
      div.innerHTML = `
      <div class=" gap-3 mb-5">
      <div onclick = "loadPets('${cate.category}')" class="flex items-center border-2 border-[#0E7A8126] px-8 py-4 gap-2 hover:cursor-pointer">
      <p class="font-bold text-xl">${cate.category}</p>
      <img class="w-8" src=${cate.category_icon}></img>
      </div>
      </div>
      `
      categories.appendChild(div);
  }
   
}

const loadingHide = (id) => {
  
  document.getElementById(id).style.display = 'none';
}
const loadingShow = (id) => {
  
  document.getElementById(id).style.display = 'block';
}



loadCategory()