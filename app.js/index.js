const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    displayCategory(data.categories);
}

const loadPets = async(petsName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petsName}`);
    const data = await response.json()
    displayPet(data.data);
}

const displayPet = (petData) => {
    const petContainer = document.getElementById('pets-container');
    petContainer.innerHTML = "";
    for (const data of petData) {
        const div = document.createElement('div');
       
       
        div.innerHTML = `
        <div class="border-2 border-[#1313131A] rounded-lg">
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
      <P class=" font-bold border-2 rounded-md border-[#0E7A8126] px-4 py-1 text-[#0E7A81] hover:cursor-pointer hover:text-white hover:bg-[#0E7A81]">Adopt</P>
     <p class=" font-bold border-2 rounded-md border-[#0E7A8126] px-4 py-1 text-[#0E7A81] hover:cursor-pointer hover:text-white hover:bg-[#0E7A81]">Details</p>
    </div>
  </div>
</div>
        `
        petContainer.appendChild(div);

    }
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

loadCategory()