const registerForm = document.querySelector('#register-form')
const registerContainer = document.getElementById('register-container');
const registerButton = document.getElementById('register')
const updateForm = document.querySelector('#update-form')
const updateButton = document.getElementById('update')
const updateContainer = document.getElementById('update-container')
const deleteButton = document.getElementById('delete')
const deleteContainer = document.getElementById('delete-container')
const deleteForm = document.querySelector('#delete-form')
const registerCourseForm = document.querySelector('#register-course')
const registerCourseContainer = document.getElementById('cRegister-course')
const registerButtonCourse = document.getElementById('register-button-course')
const updateButtonCourse = document.getElementById('updateButtonCourse')
const updateCourseContainer = document.getElementById('uRegister-course')
const updateCourseForm = document.getElementById('update-course')
const deleteButtonCourse = document.getElementById('deleteButtonCourse')
const deleteCourseForm = document.getElementById('delete-course')
const deleteCourseContainer = document.getElementById('dRegister-course')
const universitySelect = document.getElementById('university-id')
const universitySelect1 = document.getElementById('university-id1')

registerButton.addEventListener('click', () => {
    showSection(registerContainer)
})

updateButton.addEventListener('click', async () => {
    showSection(updateContainer)
    const updateUniversitySelect = document.getElementById('update-university')
    await showUniversities(updateUniversitySelect)
})

deleteButton.addEventListener('click', async () => {
    showSection(deleteContainer)
    const deleteUniversity = document.querySelector('#delete-university')
    await showUniversities(deleteUniversity)
})

registerForm.addEventListener('submit', async (ev) => {
    console.log("entreiiii");
    ev.preventDefault()

    const name = document.querySelector('#name').value
    const state = document.querySelector('#state').value
    const site = document.querySelector('#site').value
    const type = document.querySelector('#type').value

    const university = {
        name,
        state,
        site,
        type
    }

    console.log({university});

    try {
        const resp = await fetch('http://localhost:3000/universities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(university)
        }) 
        alert("cadastro realizado com sucesso")
    }
    catch(err) {
        console.log(err)
    }

    registerForm.reset()
})

updateForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const id = document.querySelector('#update-university').value
    const name = document.querySelector('#update-name').value
    const state = document.querySelector('#update-state').value
    const site = document.querySelector('#update-site').value
    const type = document.querySelector('#update-type').value

    const university = {
        name,
        state,
        site, 
        type
    }

    try {
        const resp = await fetch(`http://localhost:3000/universities/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(university)
        }) 
        alert("editado com sucesso")
        location.reload()
    }
    catch(err) {
        console.log(err);
    }

    updateForm.reset()
})

deleteForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const id = document.querySelector('#delete-university').value
    console.log(id);

    try {
        const response = await fetch(`http://localhost:3000/universities/${id}`, {
          method: 'DELETE',
        })

        alert('Deletado com sucesso')
            
      } catch (err) {
        console.error(err)
      }
    deleteForm.reset()

})

async function fetchUniversities() {
    try {
      const universities = await fetch('http://localhost:3000/universities').then(res => res.json())
      return universities
    } catch (err) {
      console.error(err)
    }
}

async function showUniversities(element) {
    const universities = await fetchUniversities()
    element.innerHTML = ''

    universities.forEach(university => {
        const option = document.createElement('option');
        option.value = university.id
        option.text = university.name
       element.appendChild(option)
    })
}

async function fetchCourses(universityId) {
    try {
      const url = universityId ? `http://localhost:3000/courses?universityId=${universityId}` : 'http://localhost:3000/courses'
      const courses = await fetch(url).then(res => res.json())
      return courses
    } catch (err) {
      console.error(err)
    }
}

async function showCourses(element, universityId) {
    const courses = await fetchCourses(universityId);
    element.innerHTML = ''

    courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.id
      option.text = course.name
      element.appendChild(option)
    });
}

function showSection(sectionToShow) {
    const sections = document.querySelectorAll('.container')
    sections.forEach(section => section.style.display = 'none')

    sectionToShow.style.display = 'block'
}

  registerButtonCourse.addEventListener('click', async () => {
    showSection(registerCourseContainer)
    const selectUniversity = document.querySelector('#university-id-course')
    await showUniversities(selectUniversity)
})

updateButtonCourse.addEventListener('click', async () => {
    showSection(updateCourseContainer)
    await showUniversities(universitySelect)
  });

deleteButtonCourse.addEventListener('click', async () => {
    showSection(deleteCourseContainer)
    await showUniversities(universitySelect1)
})

universitySelect.addEventListener('change', async (event) => {
    const selectedUniversityId = event.target.value
    const courseSelect = document.getElementById('course-id')
    await showCourses(courseSelect, selectedUniversityId)
});

universitySelect1.addEventListener('change', async (event) => {
    const selectedUniversityId = event.target.value
    const courseSelect = document.getElementById('delete-course-id')
    await showCourses(courseSelect, selectedUniversityId)
});

registerCourseForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const universityId = document.querySelector('#university-id-course').value
    const name = document.querySelector('#course-name').value
    const acronym = document.querySelector('#acronym').value
    const duration = document.querySelector('#duration').value
    const schedule = document.querySelector('#schedule').value
    const curriculum = document.querySelector('#curriculum').value

    const course = {
        name,
        acronym,
        duration,
        schedule,
        curriculum,
        universityId
    }

    try {
        const resp = await fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        }) 
        alert("Cadastro realizado com sucesso")
    }
    catch(err) {
        console.log(err)
    }

    registerCourseForm.reset()
})

updateCourseForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    
    const id = document.getElementById('course-id').value
    console.log(id);
    const name = document.querySelector('#update-course-name').value
    const acronym = document.querySelector('#update-acronym').value
    const duration = document.querySelector('#update-duration').value
    const schedule = document.querySelector('#update-schedule').value
    const curriculum = document.querySelector('#update-curriculum').value

    const course = {
        name,
        acronym,
        duration,
        schedule,
        curriculum,
    }

    try {
        const resp = await fetch(`http://localhost:3000/courses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        }) 
        alert("Editado com sucesso")
    }
    catch(err) {
        console.log(err)
    }

    updateCourseForm.reset()
})

deleteCourseForm.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const id = document.getElementById('delete-course-id').value
    console.log();
    try {
        const response = await fetch(`http://localhost:3000/courses/${id}`, {
          method: 'DELETE',
        })
        alert('Deletado com sucesso')
      } catch (err) {
        console.error(err)
      }
      deleteCourseForm.reset()
})






