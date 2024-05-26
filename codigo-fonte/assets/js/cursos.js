function createUniversity(university) {
    const courses = document.querySelector('#curso')

    const card = document.createElement('div')
    card.classList.add('card')
    card.id = `university-${university.id}`
    console.log(university.id);
   
    const name = document.createElement('h3')
    name.classList.add('university-name')
    name.textContent = university.name
    console.log(university.name);

    const state = document.createElement('h4')
    state.classList.add('university-state')
    state.textContent = university.state

    const isPublic = document.createElement('p')
    isPublic.classList.add('university-public')
    if (university.isPublic) {
        isPublic.textContent = "Pública"
    } else {
        isPublic.textContent = "Privada"
    }

    const link = document.createElement('a')
    link.classList.add('university-link')
    link.textContent = `Página da universidade`
    link.href = university.site
    console.log(university.link);

    card.append(name, state, isPublic, link) 
    courses.append(card)
}

async function fetchUniversities() {
    const universities = await fetch('http://localhost:3000/universities').then(res => res.json())
    universities.forEach(createUniversity) 
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUniversities()
})



