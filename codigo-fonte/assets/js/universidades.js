let universities = []

function createUniversity(filteredUniversities) {
    const tableBody = document.getElementById('table-section')
    tableBody.innerHTML = ''
  
    filteredUniversities.forEach(university => {
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
    })
}

async function fetchUniversities() {
    universities = await fetch('http://localhost:3000/universities').then(res => res.json())
    createUniversity(universities)
}

const searchBar = document.querySelector('#search-bar')
const stateSelect = document.querySelector('#state')
const typeSelect = document.querySelector('#typeUniversity')

function filterUniversities() {
    const searchTarget = searchBar.value.toLowerCase()
    const selectedState = stateSelect.value
    const selectedType = typeSelect.value
  
    const filteredUniversities = universities.filter(university => {
        const nameMatch = university.name.toLowerCase().includes(searchTarget)
    
        let stateMatch = true
        if (selectedState !== "") { 
            stateMatch = university.state === selectedState;
        }
        let typeMatch = true
        if (selectedType !== "") {
            typeMatch = university.type === selectedType
        }
        return nameMatch && stateMatch && typeMatch
    })
  
    createUniversity(filteredUniversities)
  }

searchBar.addEventListener('keyup', filterUniversities)
stateSelect.addEventListener('change', filterUniversities)
typeSelect.addEventListener('change', filterUniversities)

fetchUniversities()





