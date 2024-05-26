const form = document.querySelector('form')


form.addEventListener('submit', async (ev) => {
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
    }
    catch(err) {
        console.log(err);
    }

    form.reset()
})