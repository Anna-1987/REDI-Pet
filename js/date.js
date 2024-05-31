function displayCurrentDate() {
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth() + 1; // Місяці від 0 до 11
            const year = today.getFullYear();
            
            const formattedDay = day < 10 ? '0' + day : day;
            const formattedMonth = month < 10 ? '0' + month : month;
            
            const formattedDate = formattedDay + '.' + formattedMonth + '.' + year;
            
            document.getElementById('currentDate').innerText = formattedDate;
        }
        displayCurrentDate();