//your JS code here. If required.
 function updateSize() {
    document.getElementById("width").textContent = window.innerWidth;
    document.getElementById("height").textContent = window.innerHeight;
}
        
window.addEventListener("resize", updateSize);
        
updateSize();