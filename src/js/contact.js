document.addEventListener('DOMContentLoaded', () => {
            // Navigation scroll effect
            window.addEventListener('scroll', () => {
                const nav = document.querySelector('nav');
                if (window.scrollY > 20) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

            // Notification dropdown
            const notificationWrapper = document.querySelector('.notification-wrapper');
            const notificationDropdown = document.getElementById('notification-dropdown');
            let isNotificationOpen = false;

            notificationWrapper.addEventListener('click', (e) => {
                e.stopPropagation();
                isNotificationOpen = !isNotificationOpen;
                notificationDropdown.classList.toggle('show');
                
                if (isNotificationOpen) {
                    const count = document.getElementById('notification-count');
                    count.style.display = 'none';
                }
            });

            // Close notification dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!notificationWrapper.contains(e.target)) {
                    notificationDropdown.classList.remove('show');
                    isNotificationOpen = false;
                }
            });

            // Button interactions
            const connectBtn = document.getElementById('connect-btn');
            const messageBtn = document.getElementById('message-btn');
            const moreBtn = document.getElementById('more-btn');
            let isConnected = false;
            let isMessageOpen = false;

            // Connect button functionality
            connectBtn.addEventListener('click', () => {
                isConnected = !isConnected;
                if (isConnected) {
                    connectBtn.innerHTML = '<i class="fas fa-check"></i> Connected';
                    connectBtn.classList.add('connected');
                } else {
                    connectBtn.innerHTML = '<i class="fas fa-user-plus"></i> Connect';
                    connectBtn.classList.remove('connected');
                }
            });

            // More options dropdown
            let moreDropdown = null;
            moreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                if (moreDropdown) {
                    moreDropdown.remove();
                    moreDropdown = null;
                    return;
                }

                moreDropdown = document.createElement('div');
                moreDropdown.className = 'more-dropdown';
                moreDropdown.innerHTML = `
                    <ul>
                        <li><i class="fas fa-flag"></i> Report Profile</li>
                        <li><i class="fas fa-share"></i> Share Profile</li>
                        <li><i class="fas fa-ban"></i> Block User</li>
                    </ul>
                `;
                
                const rect = moreBtn.getBoundingClientRect();
                moreDropdown.style.position = 'absolute';
                moreDropdown.style.top = `${rect.bottom + 5}px`;
                moreDropdown.style.right = '20px';
                
                document.body.appendChild(moreDropdown);

                // Add click handlers for dropdown options
                const options = moreDropdown.querySelectorAll('li');
                options.forEach(option => {
                    option.addEventListener('click', () => {
                        const action = option.textContent.trim();
                        console.log(`Selected action: ${action}`);
                        moreDropdown.remove();
                        moreDropdown = null;
                    });
                });
            });

            // Close more dropdown when clicking outside
            document.addEventListener('click', () => {
                if (moreDropdown) {
                    moreDropdown.remove();
                    moreDropdown = null;
                }
            });

});