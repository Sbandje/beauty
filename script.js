
        function toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Fermer le menu si on clique en dehors
        window.onclick = function(event) {
            if (!event.target.matches('button')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove('show');
            }
            }
        }

        
        
        function toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Fermer le menu si on clique en dehors
        window.onclick = function(event) {
            if (!event.target.matches('button')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove('show');
            }
            }
        }

   
  