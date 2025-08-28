// Функцию для переключения по кнопкам и ссылкам

const elements = {
    sign_in: document.getElementById("sign_in"),
    main: document.getElementById("main"),
    individual: document.getElementById("individual"),
    business: document.getElementById("business") 
};

function showOnly(elementName) { 
    for (let key in elements) {
         if (key === elementName) {
             elements[key].style.display = "block";  // показываем нужный 
            } else {
                 elements[key].style.display = "none"; // скрываем все остальные 
        } 
    } 
} // Привязываем кнопки к показу нужного элемента 

document.getElementById("click_sign_in").addEventListener("click", (e) => { e.preventDefault(); showOnly("sign_in"); });

document.getElementById("click_individual").addEventListener("click", () => { showOnly("individual"); });

document.getElementById("click_business").addEventListener("click", () => { showOnly("business"); });


// Кнопка back у Sign in

document.getElementById("firs_click_button").addEventListener("click", () => {
    elements["sign_in"].style.display = "none";
    elements["main"].style.display = "block";
})

// Кнопка back у Individual

document.getElementById("second_click_button").addEventListener("click", () => {
    elements["individual"].style.display = "none";
    elements["main"].style.display = "block";
})

// Кнопка back у Individual

document.getElementById("third_click_button").addEventListener("click", () => {
    elements["business"].style.display = "none";
    elements["main"].style.display = "block";
})
