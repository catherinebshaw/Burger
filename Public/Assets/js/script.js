 // Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE - devour button recognized
//   const changeDevour = document.querySelectorAll('.devoured');

  // Set up the event listener for the add a burger button
  if (addBurgerBtn) {
      addBurgerBtn.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('burgerList');
        const devoured = e.target.getAttribute('devoured');

        const newBurger = {
            id: id,
            name: name,
          devoured: false,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(devoured),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed devoured to: ${true}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      })//stop here 
    });
  }

  // CREATE A NEW BURGER
  const addBurgerBtn = document.getElementById('create-form');

  if (addBurgerBtn) {
    addBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "burger-name" 
      // Devoured on 'false' by default
      const newBurger = {
        name: document.getElementById('burg').value.trim(),
        devoured: false,
      };

      // Send POST request to create a new quote
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
        document.getElementById('burg').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });
    });
  }

  // Devour!! 
  const eatBurger = document.querySelector('.delete-cat');

  // Set up the event listeners for each delete button
  if (addBurgerBtn) {
  burgerbtn.addEventListener('click', (e) => {
      const id = e.target.getAttribute(`${id}`);

      // Send the delete request
      fetch(`/api/cats/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted cat: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
