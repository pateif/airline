document.addEventListener('DOMContentLoaded', () => {
    const seatMap = document.getElementById('seat-map');
    const selectedSeatsDisplay = document.getElementById('selected-seats');
    const resetButton = document.getElementById('reset-seats');
    const rows = 20;
    const cols = 6;
    const seatStatus = {
        available: 'available',
        selected: 'selected',
        occupied: 'occupied',
        exitRow: 'exit-row'
    };

    const seatConfiguration = [
        { row: 10, col: [2, 3], status: seatStatus.exitRow },
        { row: 15, col: [1, 4], status: seatStatus.occupied }
    ];

    let selectedSeats = [];

    function createSeat(row, col, status = seatStatus.available) {
        const seat = document.createElement('div');
        seat.classList.add('seat', status);
        seat.dataset.row = row;
        seat.dataset.col = col;
        seat.textContent = `${row}${String.fromCharCode(65 + col)}`;
        if (status === seatStatus.available) {
            seat.addEventListener('click', () => toggleSeatSelection(seat));
        }
        return seat;
    }

    function toggleSeatSelection(seat) {
        const row = seat.dataset.row;
        const col = seat.dataset.col;
        const seatId = `${row}${String.fromCharCode(65 + col)}`;

        if (seat.classList.contains(seatStatus.selected)) {
            seat.classList.remove(seatStatus.selected);
            selectedSeats = selectedSeats.filter(s => s !== seatId);
        } else {
            seat.classList.add(seatStatus.selected);
            selectedSeats.push(seatId);
        }

        updateSelectedSeatsDisplay();
    }

    function updateSelectedSeatsDisplay() {
        if (selectedSeats.length > 0) {
            selectedSeatsDisplay.textContent = `You have selected: ${selectedSeats.join(', ')}`;
        } else {
            selectedSeatsDisplay.textContent = 'You have selected: None';
        }
    }

    function resetSelectedSeats() {
        selectedSeats = [];
        document.querySelectorAll('.seat.selected').forEach(seat => {
            seat.classList.remove(seatStatus.selected);
        });
        updateSelectedSeatsDisplay();
    }

    for (let row = 1; row <= rows; row++) {
        for (let col = 0; col < cols; col++) {
            let status = seatStatus.available;
            seatConfiguration.forEach(config => {
                if (config.row === row && config.col.includes(col)) {
                    status = config.status;
                }
            });
            seatMap.appendChild(createSeat(row, col, status));
        }
    }

    resetButton.addEventListener('click', resetSelectedSeats);
});
