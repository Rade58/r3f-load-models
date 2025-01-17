# R3F Workshops - Loading Models

- Bootstraped with:

```
pnpm create vite
```

- dependancies

```
pnpm add three @react-three/fiber @react-three/drei leva@0.9.34
```

```
pnpm add -D r3f-perf @types/three
```

# Leva @0.9.34

latest version has bug I think, unable to use joystick and color picker (maybe because I'm using react 18)

## Where to find draco loader

`node_modules/three/examples/jsm/libs/draco`

copy to `public` folder

Why we used this?

Just to show you how we can load models without drei helper

# useGLTF replaces usage `useLoader`, `GLTFLoader` and `DRACOLoader`

All of mentioned is implemented under the hood of useGLTF

DRACOLoader will be obtained from CDN

if you want you can remove `draco` folder we added earlier

# For preloading you can use `preload` method of `useGLTF`

it is strange looking but you can use `useGLTF.preload`

To see how this is used check the: `src/8_preloading/Donuts.tsx`

# Fo cloning look at:

`src/9_cloning_models/Donuts.tsx`

WE use `Clone` component multiple times to clone model

This is good for performances.

Don't load same model multiple times, use this instead

# GLTF to component (gltfjsx)

If we want to manipulate the different parts of our donuts, we need to traverse the loaded model, search for the right child, save it in some ways, and apply whatever we need to it

We can traverse the scene of the model to find right mesh

We can go back to blender and make a change

But what we are going to use is `GLTF -> React Three Fiber`

See here: <https://github.com/pmndrs/gltfjsx>

online version: <https://gltf.pmnd.rs/>

we will use online version

### Converting the model

just upload your model

you can see leva where you can pick what you want, I just selected shadows

### Copy generated component code

see: src/10_GLTF_to_component/DounutsParts.tsx

### Refactor it

you need to change path in your copied code since generated code, doesn't point right to your model

see: src/10_GLTF_to_component/DounutsParts.tsx

**Now you can add your new component an manipulate with individial meshes**

### Problem with `https://gltf.pmnd.rs/`

using this changed my model a bit

Materials look bad, some geometry is messed

Maybe because of nature of my model, of modifiers I used in blender

### Problem is something called shadow acne

Because model is casting shadow on itself

we need to fix this with changing `shadowBias` or `bias` on directionalLight in src/10_GLTF_to_component/Experience.tsx component

### I also change position of some of indivudual meshes
