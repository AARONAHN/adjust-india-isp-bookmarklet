javascript: (function () {
  function urlChange() {
    const clickUrl = document.querySelector(
      "#sidebar-view > div:nth-child(2) > div > div > div > div.content-inner.flex-one.flex-box-column > div > div.scrollable.flex-one.flex-box-column > div.form-row.tracker-edit-options > div:nth-child(1) > div > div.url"
    );
    const impUrl = document.querySelector(
      "#sidebar-view > div:nth-child(2) > div > div > div > div.content-inner.flex-one.flex-box-column > div > div.scrollable.flex-one.flex-box-column > div.form-row.tracker-edit-options > div.form-row.form-row-tight.form-row-url-display > div.url"
    );
    clickUrl.innerText = clickUrl.innerText.replace(
      "app.adjust.com",
      "app.adjust.net.in"
    );
    impUrl.innerText = impUrl.innerText.replace(
      "view.adjust.com",
      "view.adjust.net.in"
    );
  }
  urlChange();
})();
