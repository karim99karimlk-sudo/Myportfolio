        // 1. SCROLL ANIMATION (Intersection Observer)
        // This watches elements to see if they are in the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } 
                // Remove the 'else' block if you only want the animation to happen once
            });
        });

        // Target all elements with the 'hidden' class
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));


        // 2. TYPEWRITER EFFECT
        const textElement = document.querySelector(".typewriter");
        const texts = ["Responsive Web Design", "Interactive JavaScript", "AI-Augmented Coding"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                // Pause at end of word
                isDeleting = true;
                setTimeout(type, 2000); 
            } else if (isDeleting && charIndex === 0) {
                // Move to next word
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                // Typing speed
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        // Start typing on load
        document.addEventListener('DOMContentLoaded', type);
