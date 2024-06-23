function createCourse(course) {
    const tableBody = document.getElementById('table-section')

    const tableRow = document.createElement('tr')
    const nameCell = document.createElement('td')
    nameCell.textContent = course.name
    tableRow.appendChild(nameCell)

    const acronymCell = document.createElement('td')
    acronymCell.textContent = course.acronym
    tableRow.appendChild(acronymCell)

    const durationCell = document.createElement('td')
    durationCell.textContent = course.duration
    tableRow.appendChild(durationCell)

    const scheduleCell = document.createElement('td')
    scheduleCell.textContent = course.schedule
    tableRow.appendChild(scheduleCell)

    const curriculumCell = document.createElement('td')
    const curriculum = document.createElement('a')
    curriculum.href = course.curriculum
    curriculum.textContent = 'Ver grade'
    curriculumCell.appendChild(curriculum)
    tableRow.appendChild(curriculumCell)

    tableBody.appendChild(tableRow)
} 

async function fetchCourses() {
    const id = extractdId()
    const courses = await fetch(`https://95d198e5-9453-4ce3-a614-cf52bc14e7c6-00-33m3674okfn35.picard.replit.dev/courses?universityId=${id}`).then(res => res.json())
    console.log(courses);
    courses.forEach(createCourse) 
}

function extractdId() {
    const urlParams = new URLSearchParams(window.location.search)
    const universityId = urlParams.get('universityId')
    console.log(universityId);
    if (universityId === null) {
        console.log('ID da universidade não encontrado na URL');
        return
    } 
    return universityId
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCourses()
})


