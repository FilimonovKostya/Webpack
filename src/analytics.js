import * as $ from 'jquery'


function createAnalytics() {
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
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