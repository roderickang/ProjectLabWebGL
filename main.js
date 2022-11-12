import * as th from './three/build/three.module.js'

let scene, camera, renderer

let pointLight=()=>{

    let light = new th.PointLight(0xFFFFFF,0.9,1000)

    light.position.set(-30,50,70)
    light.castShadow = true

    scene.add(light)

}

let spotLight=()=>{

    let light = new th.SpotLight(0xFAD5A5,1,1000)

    light.position.set(-50,50,160)
    light.castShadow = true

    scene.add(light)
}

let ground=()=>{

    let geo = new th.PlaneGeometry(200,200)
    let loader = new th.TextureLoader()
    let texture = loader.load("./assets/texture/grass.jpg")
    let mat = new th.MeshPhongMaterial({
        color: 0xFFFFFF,
        map: texture
    })
    let mesh = new th.Mesh(geo, mat)
    mesh.position.set(0,0,0)

    mesh.receiveShadow = true

    scene.add(mesh)
}

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
    
    
    // spotLight()
    ground()
    pointLight()
}

let render=()=>{
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

window.onload=()=>{
    init()
    render()
}