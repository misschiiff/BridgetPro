
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenuOverlay");
    const closeMenu = document.getElementById("closeMenu");


    if (menuToggle && mobileMenu && closeMenu) {
        menuToggle.addEventListener("click", function() {
            mobileMenu.classList.toggle("active");
        });

        closeMenu.addEventListener("click", function() {
            mobileMenu.classList.remove("active");
        });
    }
});



    // Open Mobile Menu
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        hamburgerIcon.classList.add("active"); // Transform hamburger to "X"
    });

    // Close Mobile Menu
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        hamburgerIcon.classList.remove("active"); // Reset hamburger icon
    });

    // Close menu when clicking outside overlay
    mobileMenu.addEventListener("click", function (event) {
        if (event.target === mobileMenu) {
            mobileMenu.classList.remove("active");
            hamburgerIcon.classList.remove("active");
        }
    });

    // Close menu when clicking a link inside it
    document.querySelectorAll(".overlay-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            hamburgerIcon.classList.remove("active");
        });
    });


 



    // Navigation active state
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active')); // Remove 'active' from all
            this.classList.add('active'); // Add 'active' to the clicked item
        });
    });

    // Set the home tab as active by default
    document.getElementById('home').classList.add('active');

    // Change cursor to animated GIF
    const customCursor = document.createElement("div");
    customCursor.id = "customCursor";
    customCursor.style.position = "absolute";
    customCursor.style.width = "40px";
    customCursor.style.height = "40px";
    customCursor.style.background = "url('assets/img/asterix.svg') no-repeat center"
    customCursor.style.backgroundSize = "contain";
    customCursor.style.pointerEvents = "none";
    customCursor.style.zIndex = "10000";
    document.body.appendChild(customCursor);

    document.addEventListener("mousemove", function (e) {
        customCursor.style.left = e.pageX + "px";
        customCursor.style.top = e.pageY + "px";
    });

    // Loading animation GIF
    const loader = document.createElement("div");
    loader.id = "pageLoader";
    loader.innerHTML = `<img src="assets/img/LoadingBRPR.gif" alt="Loading..." class="loading-gif">`;
    loader.style.position = "fixed";
    loader.style.top = "0";
    loader.style.left = "0";
    loader.style.width = "100vw";
    loader.style.height = "100vh";
    loader.style.background = "rgba(0, 0, 0, 0.9)";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.zIndex = "99999";
    document.body.appendChild(loader);

    // Hide loading animation after 2 seconds
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);




const cloneEl = document.querySelector(".showcase-slide").cloneNode(true);
 const logos = document.querySelector('.logos').appendChild(cloneEl);
1






document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".project-image img");

    images.forEach(img => {
        let isDragging = false;
        let startX, startY, translateX = 0, translateY = 0;

        // Click to toggle zoom
        img.addEventListener("click", function(event) {
            if (!this.classList.contains("zoomed")) {
                this.classList.add("zoomed");
            } else {
                this.classList.remove("zoomed");
                this.style.transform = "scale(1) translate(0px, 0px)";
                translateX = 0;
                translateY = 0;
            }
        });

        // Drag to move (for mobile users)
        img.addEventListener("touchstart", function(event) {
            if (this.classList.contains("zoomed")) {
                isDragging = true;
                startX = event.touches[0].clientX - translateX;
                startY = event.touches[0].clientY - translateY;
                this.classList.add("dragging");
            }
        });

        img.addEventListener("touchmove", function(event) {
            if (isDragging) {
                event.preventDefault();
                translateX = event.touches[0].clientX - startX;
                translateY = event.touches[0].clientY - startY;
                this.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`;
            }
        });

        img.addEventListener("touchend", function() {
            isDragging = false;
            this.classList.remove("dragging");
        });
    });
});

document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let projectType = document.getElementById('projectType').value;
    let details = document.getElementById('details').value;
    let contactMethod = document.getElementById('contactMethod').value;

    // Create message text
    let message = `Hello, I want to work with you. Here are my details:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Project Type: ${projectType}
    Description: ${details}`;


     // Validate required fields
    if (!name || !email || !phone || !projectType) {
       alert("All fields are required.");
       return;
    }

    // Determine contact method
    if (contactMethod === 'whatsapp') {
        let whatsappUrl = `https://wa.me/23407018116934?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else if (contactMethod === 'telegram') {
        let telegramUrl = `https://t.me/bridgetpromax?text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    } else {
        alert("Done! We will contact you soon.");
    }
        // Open contact link in a new tab if WhatsApp or Telegram
        if (contactUrl) {
            window.open(contactUrl, '_blank');
        }
    
        // Close modal properly
        let modalElement = document.getElementById('contactModal');
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    
        // Reset form
        document.getElementById('clientForm').reset();
});












document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  
  // Animate modal closing smoothly
  projectModalEl.addEventListener("hidden.bs.modal", function () {
    gsap.to(".modal-content", { opacity: 0, y: -50, scale: 0.9, duration: 0.3 });
  });
  gsap.utils.toArray(".btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power2.out" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.inOut" });
    });
  });
      
  gsap.from("body", { opacity: 0, duration: 1.2, ease: "power2.out" });
