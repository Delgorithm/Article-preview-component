const iconShare = document.querySelector('.icon-share');
const imgShare = iconShare.querySelector('img');

const previewVisible = document.querySelector('.article-preview-footer__visible');
const previewHidden = document.querySelector('.article-preview-footer__hidden');

const activeShare = true;

imgShare.addEventListener('click', () => {
    if (activeShare) {
        previewVisible.style.display = "none";
        previewHidden.style.display = "block";
    } else {
        previewVisible.style.display = "block";
        previewHidden.style.display = "none";
    }
});