function createUniversity(university) {
    const tableBody = document.getElementById('table-section')

    const tableRow = document.createElement('tr')
    const nameCell = document.createElement('td')
    nameCell.textContent = university.name
    tableRow.appendChild(nameCell)

    const stateCell = document.createElement('td')
    stateCell.textContent = university.state
    tableRow.appendChild(stateCell)

    const typeCell = document.createElement('td')
    typeCell.textContent = university.type
    tableRow.appendChild(typeCell)

    const siteCell = document.createElement('td')
    const siteLink = document.createElement('a')
    siteLink.href = university.site
    siteLink.textContent = 'Site da universidade'
    siteCell.appendChild(siteLink)
    tableRow.appendChild(siteCell)

    const coursesCell = document.createElement('td')
    const coursesLink = document.createElement('a')
    coursesLink.href = `http://localhost:5500/codigo-fonte/cursos.html?universityId=${university.id}`
    coursesLink.textContent = 'Ver cursos'
    coursesCell.appendChild(coursesLink)
    tableRow.appendChild(coursesCell)

    tableBody.appendChild(tableRow)
} 
async function fetchUniversities() {
    const universities = await fetch('http://localhost:3000/universities').then(res => res.json())
    universities.forEach(createUniversity)
  }

document.addEventListener('DOMContentLoaded', () => {
    fetchUniversities()
})



