// // Canvas setup
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = 500;
// canvas.height = 500;
// document.body.appendChild(canvas);

// // Player variables
// let playerX = 250; // Initial X position of the player's plane
// const playerWidth = 50;
// const playerHeight = 50;
// const playerSpeed = 10;

// // Obstacle variables
// let obstacles = [];
// let destroyedCount = 0;
// let obstacleSpeed = 2;
// const obstacleWidth = 30;
// const obstacleHeight = 30;

// // Game state
// let level = 1;
// let gameActive = true;

// // Draw player's plane
// function drawPlayer() {
//     ctx.fillStyle = 'blue';
//     ctx.fillRect(playerX, canvas.height - playerHeight, playerWidth, playerHeight);
// }

// // Draw obstacles
// function drawObstacles() {
//     ctx.fillStyle = 'red';
//     for (let obstacle of obstacles) {
//         ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
//     }
// }

// // Spawn obstacles
// function spawnObstacle() {
//     if (destroyedCount < 20 || level === 2) {
//         let obstacle = {
//             x: Math.random() * (canvas.width - obstacleWidth), // Random X position
//             y: 0, // Start at the top
//         };
//         obstacles.push(obstacle);
//     }
// }

// // Update obstacles' positions
// function updateObstacles() {
//     for (let i = obstacles.length - 1; i >= 0; i--) {
//         obstacles[i].y += obstacleSpeed; // Move obstacle downward
//         if (obstacles[i].y > canvas.height) { // If obstacle goes off-screen
//             obstacles.splice(i, 1); // Remove obstacle
//         }
//     }
// }

// // Check for collisions (player bullets hitting obstacles)
// function checkCollision() {
//     for (let i = obstacles.length - 1; i >= 0; i--) {
//         // Simple collision detection (player bullet hits obstacle)
//         if (
//             playerX < obstacles[i].x + obstacleWidth &&
//             playerX + playerWidth > obstacles[i].x &&
//             canvas.height - playerHeight < obstacles[i].y + obstacleHeight
//         ) {
//             destroyedCount++;
//             obstacles.splice(i, 1); // Remove destroyed obstacle
//         }
//     }

//     // Level 1 complete condition
//     if (destroyedCount >= 20 && level === 1) {
//         alert(`Level 1 Complete! Score: ${destroyedCount}`);
//         level = 2;
//         startLevel2();
//     }
// }

// // Start Level 2
// function startLevel2() {
//     obstacleSpeed = 4; // Increase obstacle speed
//     setInterval(spawnObstacle, 500); // Spawn obstacles more frequently
// }

// // Handle player movement
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowLeft' && playerX > 0) {
//         playerX -= playerSpeed; // Move left
//     } else if (event.key === 'ArrowRight' && playerX < canvas.width - playerWidth) {
//         playerX += playerSpeed; // Move right
//     }
// });

// // Game loop
// function gameLoop() {
//     if (!gameActive) return;

//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Update game state
//     updateObstacles();
//     checkCollision();

//     // Draw game objects
//     drawPlayer();
//     drawObstacles();

//     // Continue the game loop
//     requestAnimationFrame(gameLoop);
// }

// // Start the game
// setInterval(spawnObstacle, 1000); // Spawn obstacles every 1 second
// gameLoop();