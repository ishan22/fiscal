// Saves options to chrome.storage
function save_options() {
    console.log('Activating save options');
    var phone = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    chrome.storage.sync.set({
      phoneNumber: phone,
      name: name
    }, function() {
        console.log('do we get here1');
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.sync.get({
      phoneNumber: '',
      name: ''
    }, function(items) {
      document.getElementById('phone').phone = items.phoneNumber;
      document.getElementById('name').name = items.name;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);