
        // Встановлюємо час початку в 2 години (в мілісекундах)
        let countdownTime = 2 * 60 * 60 * 1000;
        
        function updateTimer() {
            // Розраховуємо години, хвилини та секунди
            let hours = Math.floor(countdownTime / (1000 * 60 * 60));
            let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
            
            // Форматуємо години, хвилини та секунди, додаючи провідні нулі, якщо потрібно
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            // Оновлюємо відображення таймера
            document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
            
            // Зменшуємо час зворотного відліку на 1 секунду
            countdownTime -= 1000;
            
            // Перевіряємо, чи завершився таймер
            if (countdownTime < 0) {
                clearInterval(timerInterval);
                document.getElementById('timer').innerHTML = '00:00:00';
                alert('Таймер завершено!');
            }
        }
        
        // Оновлюємо таймер щосекунди
        let timerInterval = setInterval(updateTimer, 1000);