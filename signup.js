

// SIGN UP JAVASCRIPT

document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('signupForm');
        
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          let isValid = true;
          const formGroups = form.querySelectorAll('.form-group');
          
          formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            let hasError = false;
            
            // Clear previous errors
            group.classList.remove('error');
            
            // Check if empty
            if (!input.value.trim()) {
              hasError = true;
            }
            
            // Email validation
            if (input.type === 'email' && !validateEmail(input.value)) {
              hasError = true;
            }
            
            // Password validation
            if (input.type === 'password' && input.value.length < 6) {
              hasError = true;
            }
            
            // Phone validation
            if (input.name === 'phone' && !validatePhone(input.value)) {
              hasError = true;
            }
            
            if (hasError) {
              group.classList.add('error');
              isValid = false;
            }
          });
          
          if (isValid) {
            alert('Sign up successful!');
            form.reset();
          }
        });
        
        // Real-time validation
        form.querySelectorAll('input, textarea').forEach(input => {
          input.addEventListener('blur', function() {
            const group = this.closest('.form-group');
             
            // Clear error
            group.classList.remove('error');
            
            // Check if empty
            if (this.required && !this.value.trim()) {
              group.classList.add('error');
            }
            
            // Email validation
            if (this.type === 'email' && !validateEmail(this.value) && this.value.trim()) {
              group.classList.add('error');
            }
            
            // Password validation
            if (this.type === 'password' && this.value.length < 6 && this.value.trim()) {
              group.classList.add('error');
            }
            
            // Phone validation
            if (this.name === 'phone' && !validatePhone(this.value) && this.value.trim()) {
              group.classList.add('error');
            }
          });
          
          // Clear error when user starts typing
          input.addEventListener('input', function() {
            const group = this.closest('.form-group');
            if (group.classList.contains('error')) {
              group.classList.remove('error');
            }
          });
        });
        
        function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
        }
        
        function validatePhone(phone) {
          // Remove all non-digits
          const digits = phone.replace(/\D/g, '');
          // Check if the number is between 10 and 15 digits
          return digits.length >= 10 && digits.length <= 15;
        }
      });
















// SIGN IN JAVASCRIPT


      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('signinForm');
        
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          let isValid = true;
          const formGroups = form.querySelectorAll('.form-group');
          
          formGroups.forEach(group => {
            const input = group.querySelector('input');
            let hasError = false;
            
            // Clear previous errors
            group.classList.remove('error');
            
            // Check if empty
            if (!input.value.trim()) {
              hasError = true;
            }
            
            // Email validation
            if (input.type === 'email' && !validateEmail(input.value)) {
              hasError = true;
            }
            
            if (hasError) {
              group.classList.add('error');
              isValid = false;
            }
          });
          
          if (isValid) {
            alert('Sign in successful!');
            form.reset();
          }
        });
        
        // Real-time validation
        form.querySelectorAll('input').forEach(input => {
          input.addEventListener('blur', function() {
            const group = this.closest('.form-group');
            
            // Clear error
            group.classList.remove('error');
            
            // Check if empty
            if (this.required && !this.value.trim()) {
              group.classList.add('error');
            }
            
            // Email validation
            if (this.type === 'email' && !validateEmail(this.value) && this.value.trim()) {
              group.classList.add('error');
            }
          });
          
          // Clear error when user starts typing
          input.addEventListener('input', function() {
            const group = this.closest('.form-group');
            if (group.classList.contains('error')) {
              group.classList.remove('error');
            }
          });
        });
        
        function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
        }
      });
