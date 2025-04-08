document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiStepForm");
    const steps = document.querySelectorAll(".step");
    const progress = document.getElementById("progress");
    const stepIndicators = document.querySelectorAll(".step-indicator");
    const nextBtns = document.querySelectorAll(".btn-next");
    const prevBtns = document.querySelectorAll(".btn-prev");
    const summary = document.getElementById("summary");
    
    let currentStep = 0;

    // Load saved data from localStorage
    document.querySelectorAll("input").forEach(input => {
        input.value = localStorage.getItem(input.id) || "";
        
        input.addEventListener("input", () => {
            localStorage.setItem(input.id, input.value);
        });
    });

    function updateForm() {
        // Update steps visibility
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
        
        // Update progress bar
        const progressPercent = (currentStep / (steps.length - 1)) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index <= currentStep);
        });
    }

    function validateStep(stepIndex) {
        const inputs = steps[stepIndex].querySelectorAll("input[required]");
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = "#ff6b6b";
                input.nextElementSibling?.classList.add("error");
                isValid = false;
            } else {
                input.style.borderColor = "";
                input.nextElementSibling?.classList.remove("error");
            }
        });
        
        if (!isValid) {
            alert("Please fill in all required fields.");
        }
        
        return isValid;
    }

    function updateSummary() {
        summary.innerHTML = `
            <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
            <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
            <p><strong>Address:</strong> ${document.getElementById("address").value}</p>
            <p><strong>City:</strong> ${document.getElementById("city").value}</p>
        `;
    }

    // Next button event listeners
    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (validateStep(currentStep)) {
                currentStep++;
                updateForm();
                
                // Update summary on the last step
                if (currentStep === steps.length - 1) {
                    updateSummary();
                }
            }
        });
    });

    // Previous button event listeners
    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentStep--;
            updateForm();
        });
    });

    // Form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // In a real app, you would send data to a server here
        alert("Registration submitted successfully!");
        
        // Clear localStorage
        document.querySelectorAll("input").forEach(input => {
            localStorage.removeItem(input.id);
            input.value = "";
        });
        
        // Reset form
        currentStep = 0;
        updateForm();
    });

    // Initialize form
    updateForm();
});