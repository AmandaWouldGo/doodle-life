# * Create, seed and migrate a cats table (cats will be a table independent of users, but can be seen by anyone)
#     - name, votes, and timestamps
#* Utilize existing cats model to hold any validations necessary: name presence true
# * If it doesn't already exist, create a cat controller that has an index, a new and a create route
# * Add a #add-cat-link to show.erb
 * that pops up a partial with #cat-memorium-form
* Create event listener for the #add-cat-link
* Make #add-cat-link hide when #cat-memorium-form appears
* Use ajax to connect the ajax event listener for #add-cat-link to get route for #cat-memorium-form
* Modify the controller to check for xhr for get route
* Use ajax to connect the event listener for #cat-memorium-button and the controller
* modify the controller to check for xhr for post route

* Make cat-memorium form hide and #add-cat-link show when form is submitted
* 
* Make _cats_list.erb partial. Create #cats-list if it doesn't exist. Append cat details to #cats-list
* Create event listener for #cats-list via event delegation that is attached to something that exists on the user page when the page is already loaded, make sure to add the #cats-list tag to the event listener function

Stretch
* Add voting ability to list so that each user can upvote a cat name
* Add cat details


