// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }
  
  // CREATE A BURGER
  const addBurgerBtn = document.getElementById('create-form');

  if (addBurgerBtn) {
        addBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

            // Grabs the value of the textarea that goes by the name, "burger-name" 
            const newBurger = {

                name: document.querySelector('#newBurger').value.trim(),
                devoured: 0,
            };
            console.log(newBurger, `nanananana`)

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
            document.querySeletor('#newBurger').value = '';

            // Reload the page so the user can see the new quote
            console.log('Created a new burger!');
            location.reload();
            });
        });
    }      

    // UPDATE 
    const devour = document.querySelectorAll('.devoured')

    if(devour) {
        devour.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const devoured = e.target.getAttribute('data-devoured');
                console.log(`this is`, id, devoured)
                
                const updateBurger = {
                    devoured: 1
                }

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        },
                
                    // ?? do we need to stringify - boolean 
                    body: JSON.stringify(updateBurger),
                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the burger has been eaten
                    if (response.ok) {
                        console.log(`changed devoured to: ${devoured}`);
                        location.reload('/');
                        } else {
                            alert('something went wrong!');
                        }
                });
            })
        })

    }

})
