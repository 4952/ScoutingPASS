function setUpGoogleSheets() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxVQuS47ClrV2-XCHK_6_avHboALiEpXzti7G8fWz5OvM4g5BA6Xizl2KqzK9NMBiM4/exec'
  const form = document.querySelector('#scoutingForm')
  const btn = document.querySelector('#submit')


  form.addEventListener('submit', e => {
    e.preventDefault()
    btn.disabled = true
    btn.innerHTML = "Sending..."

    let fd = getData(false)
    for (const [key, value] of fd) {
      console.log(`${key}: ${value}\n`);
    }

    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
      .then(response => {
        alert('Success!', response)
      })
      .catch(error => {
        alert('Error!', error.message)
      })

    btn.disabled = false
    btn.innerHTML = "Send to Google Sheets"
  })
}
