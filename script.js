const iconShare = document.querySelector('.icon-share-btn');

const previewVisible = document.querySelector('.article-preview-footer__visible');
const previewHidden = document.querySelector('.article-preview-footer__hidden');

iconShare.addEventListener('click', () => {
    if (iconShare.toggle('clicked')) {
        previewVisible.style.display = "none";
        previewHidden.style.display = "flex";
        
    } else {
        previewVisible.style.display = "block";
        previewHidden.style.display = "none";
    }
});