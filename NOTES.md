## createApi()
    The core of RTK(Redux Toolkit) Query's functionality. It allows you to define a set of endpoints and describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
## fetchBaseQuery()
    A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
## ApiProvider
    Can be used as a Provider if you do not already have a Redux store.
## setupListeners()
    A utility used to enable refetchOnMount and refetchOnReconnect behaviors.

## [Maath](https://github.com/pmndrs/maath)
    This is a collection of useful math helpers, random generators, bits and bobs.
    The library is mostly meant to be used with three.js
# [Threejs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
    Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage.
    Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D. WebGL is a very low-level system that only draws points, lines, and triangles. To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.

![img](https://threejs.org/manual/resources/images/threejs-structure.svg)
- There is a Renderer. This is arguably the main object of three.js. You pass a Scene and a Camera to a Renderer and it renders (draws) the portion of the 3D scene that is inside the frustum of the camera as a 2D image to a canvas.

- There is a scenegraph which is a tree like structure, consisting of various objects like a Scene object, multiple Mesh objects, Light objects, Group, Object3D, and Camera objects. A Scene object defines the root of the scenegraph and contains properties like the background color and fog.

- Note in the diagram Camera is half in half out of the scenegraph. This is to represent that in three.js, unlike the other objects, a Camera does not have to be in the scenegraph to function. Just like other objects, a Camera, as a child of some other object, will move and orient relative to its parent object. There is an example of putting multiple Camera objects in a scenegraph at the end of the article on scenegraphs.

- Mesh objects represent drawing a specific Geometry with a specific Material. Both Material objects and Geometry objects can be used by multiple Mesh objects. For example to draw two blue cubes in different locations we could need two Mesh objects to represent the position and orientation of each cube. We would only need one Geometry to hold the vertex data for a cube and we would only need one Material to specify the color blue. Both Mesh objects could reference the same Geometry object and the same Material object.

- Geometry objects represent the vertex data of some piece of geometry like a sphere, cube, plane, dog, cat, human, tree, building, etc... Three.js provides many kinds of built in geometry primitives. You can also create custom geometry as well as load geometry from files.

- Material objects represent the surface properties used to draw geometry including things like the color to use and how shiny it is. A Material can also reference one or more Texture objects which can be used, for example, to wrap an image onto the surface of a geometry.

- Texture objects generally represent images either loaded from image files, generated from a canvas or rendered from another scene.

- Light objects represent different kinds of lights.



## [react-three drei](https://github.com/pmndrs/drei)
    A growing collection of useful helpers and fully functional, ready-made abstractions for @react-three/fiber
## [React-three-fiber]()
    React-three-fiber is an open-source react-renderer for three.js. It makes it easier to use three.js in React by exposing reusable and self-contained components from three.js.

### [Points](https://threejs.org/docs/#api/en/objects/Points)
- A wrapper around THREE.Points. It has the same api and properties as Instances.
- A class for displaying points. The points are rendered by the WebGLRenderer using gl.POINTS.

```
<Points
  limit={1000} // Optional: max amount of items (for calculating buffer size)
  range={1000} // Optional: draw-range
>
  <pointsMaterial vertexColors />
  <Point position={[1, 2, 3]} color="red" onClick={onClick} onPointerOver={onPointerOver} ... />
  // As many as you want, make them conditional, mount/unmount them, lazy load them, etc ...
</Points>
```
If you just want to use buffers for position, color and size, you can use the alternative API:

```
<Points positions={positionsBuffer} colors={colorsBuffer} sizes={sizesBuffer}>
  <pointsMaterial />
</Points>
```
### [PointMaterial](https://threejs.org/docs/index.html?q=PointsMaterial#api/en/materials/PointsMaterial)

- Antialiased round dots. It takes the same props as regular THREE.PointsMaterial on which it is based.
- The default material used by Points.
```
<points>
  <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
</points>
```
### <Preload all />
    In drei, the <Preload all /> component forces everything to be visible to a camera once and flushes the textures to the GPU. This is especially useful for scrolling.
    Preloads assets in a declarative way with automatic unloading when not visible anymore or if an error occurs during loading.
### [Suspense](https://react.dev/reference/react/Suspense)
    <Suspense> lets you display a fallback until its children have finished loading.
    In React, a fallback is an alternate UI that is rendered when a component is suspended.
### [Canvas](https://docs.pmnd.rs/react-three-fiber/api/canvas) (in @react-three/fiber)
    The Canvas object is where you start to define your React Three Fiber Scene.
## [useFrame](https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe) (in react-three/fiber)
    This hook allows you to execute code on every rendered frame, like running effects, updating controls, and so on. You receive the state (same as useThree) and a clock delta. Your callback function will be invoked just before a frame is rendered. When the component unmounts it is unsubscribed automatically from the render-loop.
## [useRef](https://react.dev/reference/react/useRef) (in react)
    useRef is a React Hook that lets you reference a value that’s not needed for rendering.
## [useState](https://react.dev/reference/react/useState) (in react)
    The React useState Hook allows us to track state in a function component.

    State generally refers to data or properties that need to be tracking in an application.

- useState accepts an initial state and returns two values:
    - The current state.
    - A function that updates the state.

