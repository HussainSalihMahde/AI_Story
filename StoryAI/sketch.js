// var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
// function setup() {
//     foo.onResult = showResult; // bind callback function to trigger when speech is recognized
//     foo.start(true);
// } // start listening

// function showResult() {
//     console.log(foo.resultString); // log the result
// }

// function draw() {}

var doc = new jsPDF();

doc.setFontSize(20);
// pageHeight = doc.internal.pageSize.height;

// // Before adding new content
// y = 500 // Height position of new content
// if (y >= pageHeight) {
//     doc.addPage();
//     y = 0 // Restart height position
// }
doc.text(15, 50, "value");
doc.addPage();
doc.text(15, 50, "value");
doc.addPage();
doc.text(15, 50, "value");



function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(25);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        doc.save('sample-file.pdf');
    }

}