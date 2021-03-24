export class Router {
    routes = []
    route = '/'
    mode = null
    ignore = '[data-route-ignore]'
    root = '/'

    constructor(options = {}) {
        this.options = Object.assign({}, this.options, options)
    }

    clearSlashes(path) {
        return path.replace(/\/$/, '').replace(/^\//, '')
    }

    index(path){
        let exists = -1

        for(let i = 0; i < this.routes.length; i++) {
            if (this.routes[i].path === path) {
                exists = i
                break
            }
        }

        return exists
    }

    routeExists(path){
        return this.index(path) !== -1
    }

    _routesFn(routes, fn){
        if (Array.isArray(routes) && routes.length) {
            routes.forEach( r => {
                if (r.path)
                    this[fn](r.path, r.callback)
            } )
        } else if (typeof routes === "object") {
            for (let key in routes) {
                this[fn](key, routes[key])
            }
        }

    }

    addRoute(path, callback){
        if (path && !this.routeExists(path)) {
            this.routes.push({
                path: path,
                callback: callback,
                pattern: new RegExp('^' + path.replace(/:\w+/g,'(\\w+)') + '$'),
            })
        }

        return this
    }

    addRoutes(routes){
        this._routesFn(routes, 'addRoute')
        return this
    }

    updRoute(path, cb){
        const i = this.index(path)
        if (i === -1) return
        this.routes[i].callback = cb
        return this
    }

    updRoutes(routes){
        this._routesFn(routes, 'updRoute')
        return this
    }

    delRoute(path){
        delete this.routes[path]

        return this
    }

    findRoute(path){
        let result

        for (let i = 0; i < this.routes.length; i++) {
            if (path.match(this.routes[i].pattern)) {
                result = this.routes[i]
                break
            }
        }

        return result
    }

    exec(loc = document.location, pushState = false){
        const url = new URL(loc)
        const path = url.pathname
        const route = this.findRoute(path)
        const cb = route.callback

        history.pushState(null, null, loc)

        if (typeof cb === "function") {
            cb.apply(this, url)
        }

        return this
    }

    listen(){
        const {selector, ignore} = this.options

        window.addEventListener('click', (e) => {
            const target = e.target
            let href

            if (target.tagName.toLowerCase() !== "a" || target.matches(ignore)) return

            e.preventDefault()

            href = target.href || target.getAttribute('data-href')

            if (href) this.exec(href, true)
        }, false)

        window.addEventListener("popstate", (e) => {
            this.exec(document.location)
        }, false)

        return this
    }
}

export const router = routes => new Router(routes)