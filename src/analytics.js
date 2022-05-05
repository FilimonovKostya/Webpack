function createAnalytics() {
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        getClick() {
            if (isDestroyed) {
                return `Analytics was destroyed. Total clickssы ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()