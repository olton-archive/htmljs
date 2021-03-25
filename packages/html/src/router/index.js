export class Router {
    version = "0.1.0"
    _routes = []
    _route = '/'
    _mode = null
    _ignore = '[data-route-ignore]'
    _404 = () => {}

    constructor(options = {}) {
        this.options = Object.assign({}, this.options, options)

        if (this.options.mode) this._mode = this.options.mode
        if (this.options.ignore) this._ignore = this.options.ignore
        if (this.options.routes) this.addRoutes(this.options.routes)
        if (this.options["404"] && typeof this.options["404"] === "function") this._404 = this.options["404"]
    }

    clearSlashes(path) {
        return path.replace(/\/$/, '').replace(/^\//, '')
    }

    index(path){
        let exists = -1

        for(let i = 0; i < this._routes.length; i++) {
            if (this._routes[i].path === path) {
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
                if (routes.hasOwnProperty(key))
                    this[fn](key, routes[key])
            }
        }

    }

    addRoute(path, callback){
        if (path && !this.routeExists(path)) {
            this._routes.push({
                path: path,
                callback: callback,
                pattern: new RegExp('^' + (path).replace(/:\w+/g,'(\\w+)') + '$'),
            })
        }

        return this
    }

    addRoutes(routes){
        this._routesFn(routes, 'addRoute')
        return this
    }

    updRoute(path, route){
        const i = this.index(path)

        if (i === -1) return

        if (route && route.path) this._routes[i].path = route.path
        if (route && route.callback) this._routes[i].callback = route.callback

        return this
    }

    updRoutes(routes){
        this._routesFn(routes, 'updRoute')
        return this
    }

    delRoute(path){
        if (this.routeExists(path))
            delete this._routes[path]

        return this
    }

    findRoute(path){
        let result

        for (let i = 0; i < this._routes.length; i++) {
            if (path.match(this._routes[i].pattern)) {
                result = this._routes[i]
                break
            }
        }

        return result
    }

    exec(loc = document.location, pushState = false){
        let url, path, route

        url = new URL(loc)
        path = url.pathname
        route = this.findRoute(path)

        if (!route) {
            this._404()
            return this
        }

        if (pushState)
            history.pushState(null, null, path)

        if (route && typeof route.callback === "function") {
            route.callback.apply(this, [path])
        }

        this.route = path

        return this
    }

    listen(){
        const {ignore} = this.options

        window.addEventListener('click', (e) => {
            const target = e.target
            let href

            if (target.tagName.toLowerCase() !== "a" || target.matches(ignore)) return

            e.preventDefault()

            href = target.href

            if (href) this.exec(href, true)
        }, false)

        window.addEventListener("popstate", (e) => {
            this.exec(document.location)
        }, false)

        return this
    }
}

export const router = routes => new Router(routes)