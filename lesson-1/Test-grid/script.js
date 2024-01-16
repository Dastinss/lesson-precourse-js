document.addEventListener("DOMContentLoaded", function () {
	const player = document.getElementById("player");
	let positionX = 0;
	let positionY = 0;

	document.addEventListener("keydown", function (event) {
		// Обработка клавиш для движения
		switch (event.key) {
			case "ArrowUp":
				positionY = Math.max(0, positionY - 1);
				break;
			case "ArrowDown":
				positionY = Math.min(3, positionY + 1);
				break;
			case "ArrowLeft":
				positionX = Math.max(0, positionX - 1);
				break;
			case "ArrowRight":
				positionX = Math.min(3, positionX + 1);
				break;
		}

		// Обновление позиции игрока
		updatePlayerPosition();
	});

	function updatePlayerPosition() {
		player.style.gridColumn = positionX + 1;
		player.style.gridRow = positionY + 1;
	}
});
