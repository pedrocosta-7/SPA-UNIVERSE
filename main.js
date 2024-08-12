function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    const initial = document.querySelector("#initial")

    

    handle()
    initial.remove()


}
const routes = {
 "/" : "/SPA-UNIVERSE/pages/home.html",
 "/universo" : "/SPA-UNIVERSE/pages/universo.html",
 "/explore" : "/SPA-UNIVERSE/pages/explore.html"

}
function handle() {
    const pathname = window.location.pathname
    const route = routes[pathname]
  

    fetch(route).then(data => data.text()).then(html => document.querySelector("#app").innerHTML = html)
    
    
}

window.onpopstate = () => handle()


