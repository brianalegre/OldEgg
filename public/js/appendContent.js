let appendContent = (obj) => {
    let content = document.createElement(obj.tag)
    let keys = Object.keys(obj.setAttr)
    let values = Object.values(obj.setAttr)

    //Looping over object setAttr keys and values and setting it as contents attributes
    for (var i = 0; i < keys.length; i++) {
        content.setAttribute(keys[i], values[i])
    }

    if ('textContent' in obj) {
        let contentContent = document.createTextNode(obj.textContent)
        content.appendChild(contentContent)
    }

    if ('insertBefore' in obj) {
        obj.appendTo.appendChild(content)
        obj.insertBefore[0].insertBefore(content, obj.insertBefore[1])
        return content
    } else {
        obj.appendTo.appendChild(content)
        return content
    }
}