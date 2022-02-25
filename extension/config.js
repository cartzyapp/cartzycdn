const $$ = document.querySelectorAll.bind(document);
const app_selectors = {
    title: function() {
        return $$('label[aria-label="Title"]');
    },
    sku: function() {
        return $$('label[aria-label="SKU"]');
    },
    brand: function() {
        return $$('label[aria-label="Brand"]');
    },
    availabilty: function() {
        return $$('label[aria-label="Availability"]');
    },
    price: function() {
        return $$('label[aria-label="Price"]');
    },
    condition: function() {
        return $$('label[aria-label="Condition"]');
    },
    category: function () {
        return $$('label[aria-label="Category"]');
    },
    description: function() {
        return $$("textarea");
    },
    stock_menu_item: function () {
        return "list as in stock";
    },
    out_stock: function() {
        if(document.querySelector('div[aria-label="Mark as Out of Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark as Out of Stock"]');
        } else if(document.querySelector('div[aria-label="Mark Out of Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark Out of Stock"]');
        } else if(document.querySelector('div[aria-label="Mark as out of Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark as out of Stock"]');
        } else if(document.querySelector('div[aria-label="Mark out of Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark out of Stock"]');
        } else if(document.querySelector('div[aria-label="Mark out of stock"]') != null) {
            return document.querySelector('div[aria-label="Mark out of stock"]');
        }

    },
    in_stock: function() {
        if(document.querySelector('div[aria-label="Mark as In Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark as In Stock"]');
        } else if(document.querySelector('div[aria-label="Mark In Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark In Stock"]');
        } else if(document.querySelector('div[aria-label="Mark as in Stock"]') != null) {
            return document.querySelector('div[aria-label="Mark as in Stock"]');
        } else if(document.querySelector('div[aria-label="Mark as in stock"]') != null) {
            return document.querySelector('div[aria-label="Mark as in stock"]');
        }

    },
    delete_menu_item: function() {
        return "delete listing";
    },
    delete_btn: function() {
        return document.querySelector('div[aria-label="Delete"]');
    },
    edit_menu_item: function() {
        return "edit listing";
    },
    selector_by_title: function (title) {
        return document.querySelector(`div[aria-label='` + title + `'][role="button"]`);
    },
    options: function () {
        return $$('div[role="option"]');
    },
    main_div: function () {
        return $$('div[role="main"]');
    },
    category: function () {
        return $$('label[aria-label="Category"]');
    },
    category_options: function () {
        return $$('div[data-visualcompletion="ignore-dynamic"]');
    },
    category_xpath: function () {
        return "//span[text()='Miscellaneous']";
    },
    condition_xpath: function () {
        return "//span[text()='New'][@dir='auto']";
    },
    availability_xpath: function () {
        return "//span[text()='List as In Stock'][@dir='auto']";
    },
    edit_menu_xpath: function () {
        return "//a[contains(@href,'marketplace/edit')]";
    },
    more_button_xpath: function () {
        return "//div[@aria-label='More'][@role='button']";
    }
}