/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
export class IndexTabsPageContainer {
    constructor() {
        this._initView();
    }

    _initView() {
        const container = document.createElement("div");
        container.setAttribute("class", "widgets-tabpage");

        const header = document.createElement("ul");
        this.header = header;

        const content = document.createElement("div");
        content.setAttribute("class", "widgets-tabpage-content");
        this.content = content;

        container.appendChild(header);
        container.appendChild(content);
        this.container = container;

    }

    showView() {
        this.container.hidden = false;
    }

    closeView() {
        this.container.hidden = true;
    }

    getElement() {
        return this.container;
    }


    setTabs(tabs) {
        this.removeAllTabs();
        this.appendTabs(tabs);
    }

    appendTabs(tabs) {
        for (let i = 0; i < tabs.length; i++) {
            let title = document.createElement("span");
            title.index = i;
            title.appendChild(document.createTextNode(tabs[i].title));
            //绑定标签切换对应页面：
            title.onclick = this._changeTabsPage.bind(this);
            let content = tabs[i].content;
            content.index = i;
            content.hidden = true;

            this.header.appendChild(title);
            this.content.appendChild(content);
        }
        //todo 确认是否两个子元素的 index 相互对应
        //默认显示第一个标签对象
        this.header.firstChild.setAttribute("class", "on");
        this.content.firstChild.hidden = false;
    }

    /**
     * @function NavTabsPage.prototype.removeTab
     * @description 删除某个标签页面
     * @param {number} index - 标签索引号
     */
    removeTab(index) {
        this.header.removeChild(this.header.children[index]);
        this.content.removeChild(this.content.children[index]);
    }

    /**
     * @function NavTabsPage.prototype.removeAllTabs
     * @description 删除所有标签F
     */
    removeAllTabs() {
        for (let i = this.header.children.length; i > 0; i--) {
            this.header.removeChild(this.header.children[i]);
            this.content.removeChild(this.content.children[i]);
        }
    }

    _changeTabsPage(e) {
        const index = e.target.index;
        for (let i = 0; i < this.header.children.length; i++) {
            this.header.children[i].setAttribute("class", "");
            this.content.children[i].hidden = true;
            if (i === index) {
                this.header.children[i].setAttribute("class", "on");
                this.content.children[i].hidden = false;
            }
        }
    }

}