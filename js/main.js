//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");
//store the dragged piece in a global variable
//we will need it in the handleDrop function 
const resetButton = document.getElementById('resetBut');

function resetPuzzlePieces() {
  puzzlePieces.forEach(piece => {
    const puzzlePiecesContainer = document.querySelector('.puzzle-pieces');
    puzzlePiecesContainer.appendChild(piece);
    piece.style.top = '0';
    piece.style.left = '0';
  });
}

resetButton.addEventListener('click', resetPuzzlePieces);

resetButton.addEventListener('click', resetPuzzlePieces);   
let draggedPiece;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg'); 
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function handleStartDrag() {
    //console.log("Started dragging this piece:", this)
    draggedPiece = this;
}


function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
    if (this.children.length > 0) {
        return;
    }
    //this line moves the dragged piece from the left side of the board
    //into whatever dropzone we choose.
    this.appendChild(draggedPiece);
}


    

    // function to rest image pieces when we selecr a new background image.

    function changeBGImage() {
        puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    
        // Move the images from the puzzle board back to the puzzle pieces
        dropZones.forEach(zone => {
            const piecesInZone = zone.querySelectorAll('.puzzle-image');
            piecesInZone.forEach(piece => {
                const puzzlePiecesContainer = document.querySelector('.puzzle-pieces');
                puzzlePiecesContainer.appendChild(piece);
            });
        });
    
        // this will change the puzzle piece images when a new background image is selected
        puzzlePieces.forEach((piece, index) => {
            const imageName = piece.alt.split(' ')[0]; // Extract the image name from alt text
            piece.src = `images/${imageName}${this.id}.jpg`;
        });
    }
    

  
  


//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));