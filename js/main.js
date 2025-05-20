// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面已加载完成');
    // 自动显示第一个内容
    if (contents.length > 0) {
        sliderNav(0);
    }
});

// 菜单按钮功能
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn?.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// 导航按钮功能
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    try {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        contents.forEach((content) => {
            content.classList.remove("active");
        });

        if (btns[manual] && slides[manual] && contents[manual]) {
            btns[manual].classList.add("active");
            slides[manual].classList.add("active");
            contents[manual].classList.add("active");
            console.log(`显示第 ${manual + 1} 个内容`);
        } else {
            console.error(`找不到索引 ${manual} 对应的内容`);
        }
    } catch (error) {
        console.error('切换内容时发生错误:', error);
    }
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
}); 