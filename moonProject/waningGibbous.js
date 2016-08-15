function starCreate(element, index) {

    var self = this;

    self.div = document.createElement("div");
    document.body.appendChild(self.div);
    self.div.className = "stars";
    self.div.style.width = (Math.random() * 4) * 4 + "px";
    self.div.style.height = self.div.style.width;
    self.div.style.backgroundColor = "#E6E6FA";
    self.div.style.position = "fixed";
    self.div.id = "star" + index;
    self.div.style.borderRadius = "40%";
    self.div.style.top = Math.floor((Math.random() * 4) * 100) + "px";
    self.div.style.left = Math.floor(Math.random() * 3 * 300) + "px";
    self.div.className = "stars";
    // starArray.push(self.div);


    self.div.addEventListener("click", function() {
        console.log("frank!");
        texts.style.backgroundImage = "url(" + element[2] + ")";
    });



};


moonDiv.style.backgroundImage = "url(http://cl.ly/1D0B2f0U0S1d/waning-gibbous.png)";

var waningGibbous =

    [
        ["Waning Gibbous", "Saturday, August 1st, 2015", "http://cl.ly/0s0Y3d3T3C3J/8-1-15_207PM.png"],

        ["Waning Gibbous", "Sunday, August 2nd, 2015", "http://cl.ly/0s0Y3d3T3C3J/8-1-15_207PM.png"],

        ["Waning Gibbous", "Monday, August 3rd, 2015", "http://cl.ly/0s0Y3d3T3C3J/8-1-15_207PM.png"],

        ["Waning Gibbous", "Tuesday, August 4th, 2015", "http://cl.ly/0s0Y3d3T3C3J/8-1-15_207PM.png"],

        ["Waning Gibbous", "Wednesday, August 5th, 2015", "http://cl.ly/0s0Y3d3T3C3J/8-1-15_207PM.png"]
    ];

waningGibbous.forEach(function(value, index) {
    starCreate(waningGibbous[index])

});
