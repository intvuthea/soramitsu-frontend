<template>
    <div class="input-group-container">
        <div class="label-container">
            <label :for="label">{{ label }}</label>
        </div>
        <div class="input-container">
            <input
                :type="type"
                v-model="_value"
                v-bind="$attrs"
                class="input input-lg"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextField',
    props: {
        label: {
            type: String
        },
        value: {
            required: true
        },
        type: {
            default: 'text'
        }
    },
    computed: {
        _value: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('update:value', val)
            }
        }
    }
}
</script>
