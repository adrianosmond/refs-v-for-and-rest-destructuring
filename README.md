# Issue with @vue/test-utils, $refs, v-for and object rest destructuring

This repo demonstrates an issue when using refs, v-for and object rest destructuring in `@vue/test-utils`

`src/components/Broken.vue` contains the following lines which don't get handled properly in tests:
```
<li v-for="{key, label, ...toBind} in items" :key="key" ref="listItem">
    <a v-bind="toBind">{{ label }}</a>
</li>
```

In Vue itself the component's $refs.listItem is an array. The mounted version in Jest has $refs.listItem as undefined


`src/components/Working.vue` doesn't contain object rest destructuring and tests work fine

## Project setup
```
npm install
```

### Run tests
```
npm run test
```

### Run project
```
npm run serve
```
