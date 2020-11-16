<template>
    <ul>
        <li v-for="{key, label, ...toBind} in items" :key="key" ref="listItem">
            <a v-bind="toBind">{{ label }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'test',
        props: {
            items: {
                type: Array,
                default: () => [
                    {label: 'First', key: 'first', href: '#first'},
                    {label: 'Second', key: 'second', href: '#second'},
                ],
            },
        },
        mounted() {
            console.log('Works in the browser:', this.$refs.listItem.length);
        }
    };
</script>
