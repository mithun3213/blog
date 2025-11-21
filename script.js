function filterSelection(categoryId, element) {
    // 1. Hide all content categories
    const contents = document.getElementsByClassName("category-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // 2. Remove 'active' class from all filter buttons
    const buttons = document.getElementsByClassName("filter-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 3. Show the specific category requested
    document.getElementById(categoryId).style.display = "block";

    // 4. Add 'active' class to the button that was clicked
    element.classList.add("active");
}

// Optional: Default to opening 'Web' on page load if not hardcoded in HTML
// document.getElementById('web').style.display = 'block';