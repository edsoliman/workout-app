function handleLogoButton() {
    $('main').on('click', '#logo', function(event) {
        $('main').find('#sign_in_container, #view_workouts_container, #progress_page_container, #sign_up_container, #add_workouts_container').hide();
        $('main').find('#landing_page_container, #nav_container').show();
    });
};

function handleSignUpButton() {
    $('main').on('click', '#register_button', function(event) {
        $('main').find('#landing_page_container, #sign_in_container, #view_workouts_container, #progress_page_container, #add_workouts_container').hide();
        $('main').find('#sign_up_container').show();
    });
};

function handleSignInButton() {
    $('main').on('click', '#sign_in_button', function(event) {
        $('main').find('#landing_page_container, #sign_up_container, #view_workouts_container, #progress_page_container, #add_workouts_container').hide();
        $('main').find('#sign_in_container').show();
    });
};

function handleViewWorkoutsButton() {
    $('main').on('click', '#workouts_button', function(event) {
        $('main').find('#landing_page_container, #sign_in_container, #sign_up_container, #progress_page_container, #add_workouts_container').hide();
        $('main').find('#view_workouts_container').show();
    });
};

function handleAddWorkoutsButton() {
    $('main').on('click', '#add_workouts_button', function(event) {
        $('main').find('#landing_page_container, #sign_in_container, #sign_up_container, #progress_page_container, #view_workouts_container').hide();
        $('main').find('#add_workouts_container').show();
    });
};

function handleEdsPortfolio() {
    handleLogoButton();
    handleSignUpButton();
    handleSignInButton();
    handleViewWorkoutsButton();
    handleAddWorkoutsButton();
};

$(handleEdsPortfolio);