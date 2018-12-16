# Test app description

### Routing

* By using **module architecture** create 2 pages of registrations(**registration/step1**, **registration/step2**)
* Use **queryParams** for auto-filing forms on step1 page
    * first_name
    * email

### Forms

* Each page should contain it's own form(example of form you can see here - **assets/html/regForm.html**)<br> Use **[Reactive Forms](https://angular.io/guide/reactive-forms)**.
* Form fields(input name - validation rules(forms where to use)):
    * first_name - **required/'^[a-zA-Z ]+$'**(step1/step2)
    * last_name - **required/'^[a-zA-Z ]+$'**(step2)
    * email - **required**(step1/step2)
    * password - **required/6-12 symbols**(step2)
    * country - **required**(step2) - simple dropdown with some countries for your choice
* After successful validation and submitting of step1's form user should be redirected to step2 page with auto-filling form inputs from previous page. As example if step1's form submitted and has phone_number input then if step2's form has this field too - it should be auto-filled.
* Show message from vocabulary after successful registration(by using alert or some other way) 

### Vocabulary

* Each page has a **vocabulary** that should be loaded from **assets/data/vocabulary.json**. It contains Placeholders/Validation errors/Registration status e.t.c.

### Styles

* Styles are not that important for this task, but if you have a time - feel free.

### GIT

* By the end of this task create pull-request into master branch in this format - **d/m/y:{your lastname}**
