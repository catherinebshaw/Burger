// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

    // UPDATE 
    const devour = document.querySelectorAll('.devoured')

    if(devour) {
        devour.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const devoured = e.target.getAttribute('data-devoured');

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                // Reload the page so the user can see the burger has been eaten
                console.log(`[PUT] changed to devoured`);
                location.reload('/');
              
            })
        })

    }
    // CREATE A BURGER
    const addBurgerBtn = document.getElementById('create-form');

    if (addBurgerBtn) {
        addBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

            // Grabs the value in the textarea and creates new object 
            const newBurger = {

                name: document.querySelector('#newBurger').value.trim(),
                devoured: 0,
            };
            console.log(newBurger)

            // Send POST request to create a new burger
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
            // Empty the form
            document.getElementById('newBurger').value = '';

            // Reload the page so the user can see the new quote
            console.log('[POST] Created a new burger!');
            location.reload('/');
            });
        });
    }    
})

