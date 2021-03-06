const colorCombos = [
    {
        dashboard_color: "#e67575",
        fun1_color: "#efaf7c",
        fun2_color: "#ebd35e",
        fun3_color: "#41ad9b",
        fun4_color: "#abc9c3",

        primary_text_color: "#000",
        info_text_color: "#232322",
        outer_background_color: "#fefefe",
        page_background_color: "#f5f5f2",
        page_border_color: "#eee",
        box_shadow_color: "#aaa"
    },
    // {
    //     // dashboard_color: "#ffbb00",
    //     // fun1_color: "#fad632",
    //     // fun2_color: "#ffe25e",
    //     // fun3_color: "#fce783",
    //     // fun4_color: "#fff9c7",
    //     primary_text_color: "#f1f1e0",
    //     info_text_color: "#f1f1e0",
    //     outer_background_color: "#787878",
    //     page_background_color: "#232322",
    //     page_border_color: "#222",
    //     box_shadow_color: "#232322"
    // }
];

window.addEventListener("load", function () {

    // for (let i = 0; i < 2; i++) {
    //     const currButton = document.querySelector(`#color-button-${i}`);
    //     currButton.addEventListener("click", function () {
    //         // document.documentElement.style.setProperty('--dashboard-color', colorCombos[i].dashboard_color);
    //         // for (let j = 1; j <= 4; j++)
    //         //     document.documentElement.style.setProperty(`--fun-${j}-color`, colorCombos[i][`fun${j}_color`]);
    //
    //         document.documentElement.style.setProperty('--info-text-color', colorCombos[i].info_text_color);
    //         document.documentElement.style.setProperty('--outer-background-color', colorCombos[i].outer_background_color);
    //         document.documentElement.style.setProperty('--page-background-color', colorCombos[i].page_background_color);
    //         document.documentElement.style.setProperty('--page-border-color', colorCombos[i].page_border_color);
    //         document.documentElement.style.setProperty('--box-shadow-color', colorCombos[i].box_shadow_color);
    //     })
    // }


    const tags = document.querySelectorAll(".page-tag");

    tags.forEach(tag => {
        tag.addEventListener("click", function (e) {
            tags.forEach(inactive => {
                inactive.classList.remove("active-tag")
            });
            e.target.classList.add("active-tag");

        })}
    )
});

