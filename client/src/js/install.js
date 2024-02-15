const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
deferredPrompt = event;
butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the installation prompt
        deferredPrompt.prompt();
        // Wait for the user to respond
        const choiceResult = await deferredPrompt.userChoice;
        // Check if the user accepted the prompt
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the installation prompt');
        } else {
          console.log('User dismissed the installation prompt');
        }
        // Reset the deferred prompt variable
        deferredPrompt = null;
        // Hide the install button
        butInstall.style.display = 'none';
      }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
});
