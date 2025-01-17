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
