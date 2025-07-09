const blogs = document.querySelectorAll('.blog-card');
const projects = document.querySelectorAll('.project-card');
const icons = document.querySelectorAll('.icon');
// 각 blog 요소에 클릭 이벤트 등록
blogs.forEach(div => {
    div.addEventListener('click', () => {
        const url = div.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});

projects.forEach(div => {
    div.addEventListener('click', () => {
        const url = div.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});

icons.forEach(div => {
    div.addEventListener('click', () => {
        const url = div.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});