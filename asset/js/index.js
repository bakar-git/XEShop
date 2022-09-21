// index page side bar tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
window.onload = ()=>{
    // copy of header-categories-items in body-categories-items
    let header_cate_items = document.getElementById("header-categories-items");
    let body_cate_items = document.getElementById("body-categories-items");
    body_cate_items.innerHTML = header_cate_items.innerHTML;
};