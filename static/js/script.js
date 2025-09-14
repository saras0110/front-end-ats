// Basic form validation & interactions

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let inputs = form.querySelectorAll("input[required], select[required]");
        for (let input of inputs) {
            if (!input.value.trim()) {
                e.preventDefault();
                alert("Please fill out all required fields.");
                input.focus();
                return;
            }
        }
    });
}

// Example: Attach validation to login & register forms
document.addEventListener("DOMContentLoaded", () => {
    validateForm("loginForm");
    validateForm("registerForm");
});

// Simple navigation (for static preview only)
function goBack() {
    window.history.back();
}
