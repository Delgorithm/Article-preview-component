const iconShare = document.querySelector('.icon-share-btn');

const previewFooter = document.querySelector('.article-preview-footer');

const previewVisible = document.querySelector('.article-preview-footer__visible');
const previewHidden = document.querySelector('.article-preview-footer__hidden');

const toggleClicked = "";

iconShare.addEventListener('click', () => {
    previewVisible.style.display = "none";
    previewHidden.style.display = "flex";
    previewFooter.style.backgroundColor = "black";
    toggleClicked === true;
    }
);

iconShare.addEventListener('click', () => {
    if (toggleClicked === true) {
        previewVisible.style.display = "block";
        previewHidden.style.display = "none";
    }
});