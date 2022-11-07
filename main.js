import * as th from './three/build/three.module.js'

let scene, camera, renderer

let init=()=>{

    scene = new th.Scene()

    let fov = 45
    let aspect = window.innerWidth / window.innerHeight
    camera = new th.PerspectiveCamera(fov, aspect)
    camera.position.set(0,50,220)
    camera.lookAt(0,0,0)

    renderer = new th.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.PCFShadowMap = true

    document.body.appendChild(renderer.domElement)
}

let render=()=>{
    renderer.render(scene, camera)
}

window.onload=()=>{
    init()
    render()
}