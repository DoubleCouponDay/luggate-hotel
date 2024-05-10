
window.onload = function() {
    if (isIOS()) {
        normalizeStyles()
    }   
}

function isIOS() {
    let tester = new RegExp("/iPad|iPhone|iPod/")
    let IOSdetected = tester.test(navigator.userAgent)
    let msStreamNotUsed = isNullOrUndefined(window.MSStream) //prevent fake user agent in internet explorer

    if (IOSdetected === true && msStreamNotUsed) {
        return true
    }    
    return false
}

function isNullOrUndefined(input) {
    return input === null || input === undefined
}

function normalizeStyles() {
    let newSheet = window.document.styleSheets[0]  
    // newSheet.insertRule(".nav-button { font-size: 13.4px; border: 6px ridge var(--content-box-colour); }", newSheet.length)
    // newSheet.insertRule(".description-item { font-size: 10px; }", newSheet.length)
    // newSheet.insertRule(".description-2 { width: 370px; }", newSheet.length)
    // newSheet.insertRule(".description-3 { display: none; }", newSheet.length)
    // newSheet.insertRule(".facebook-link { display: visible; }", newSheet.length)
    // newSheet.insertRule("#google-map { top: 380px; }", newSheet.length)
    // newSheet.insertRule(".facebook-container { display: none; }", newSheet.length)
    // newSheet.insertRule(".footer-item { font-size: 10px; }", newSheet.length)

    newSheet.insertRule(".nav-button { font-size: 13.4px; }", newSheet.length)
}
