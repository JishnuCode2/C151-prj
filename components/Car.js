AFRAME.registerComponent("car", {
    schema: {
        src: {type:"string", 
        default: "./models/60s_muscle_car_orange/scene.gltf"
       },
       color:{type:"string",
        default: "#ffffff"
       }
    },
    init: function() {
        this.el.setAttribute("gltf-model", this.data.src);
        this.el.setAttribute("position", {x : "-4", y: "5", z:"20"})
        this.el.setAttribute("scale", {x:5, y:5, z:5})
        this.el.setAttribute("rotation",{x: "0", y:"90", z:"0"})
        this.el.setAttribute("color", this.data.color)
    }

})