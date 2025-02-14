$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(600, 500, 45, 55, "black")
    createPlatform(400, 600, 60, 60, "black")
    createPlatform(200, 700, 300, 300, "black")
    createPlatform(700, 600, 60, 60, "black")
    createPlatform(400, 800, 70, 400, "black")
    createPlatform(800, 500, 70, 400, "black")
    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("diamond", 600, 650, 0.5, 0.7);
    createCollectable("diamond", 800, 400, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 500, 600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
