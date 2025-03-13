<template>
    <q-table class="default-table" flat hide-bottom :columns="columns" :rows="rows">
        <template v-slot:header="props">
            <q-tr :props="props">
                <q-th v-if="expanded">
                    <span>Detalhes</span>
                </q-th>
                <q-th v-for="col in props.cols" :style="col.width ? `width:${col.width}%` : ''" :key="col.name"
                    :props="props">
                    <span v-html="col.label"></span>
                </q-th>
            </q-tr>
        </template>
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td auto-width class="text-center" v-if="expanded">
                    <q-btn size="sm" color="primary" flat dense unelevated @click="props.row.expand = !props.row.expand"
                        :icon="props.row.expand ? 'arrow_drop_up' : 'arrow_drop_down'" />
                </q-td>
                <q-td v-for="column in columns" :key="column.name" :props="props">
                    <div v-if="column.name === 'actions'">
                        <q-btn title="Editar" @click="column.edit_action(props.row)" class="default-table__edit-btn" unelevated icon="edit" dense></q-btn>
                    </div>
                    <div v-else-if="column.name === 'actions_custom'" style="display: flex; gap: 5px;">
                        <q-btn :title="action.title" v-for="(action, index) of column.actions" :key="index" class="default-table__edit-btn" @click="action.execute(props.row)" unelevated :icon="action.icon" dense></q-btn>
                    </div>
                    <div v-else>
                        <div v-html="props.row[column.field]"></div>
                    </div>
                </q-td>
            </q-tr>

            <q-tr v-if="props.row.expand" :props="props">
                <q-td colspan="100%">
                    <div class="text-left" v-html="props.row['expansion_content']"></div>
                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script setup lang="ts">

interface Props {
    columns: any
    rows: object[]
    expanded?: boolean
}

defineProps<Props>()
</script>

<style lang="sass">
.default-table
    border: 1px solid rgba(0, 0, 0, 0.12)
    border-radius: 10px
    thead > tr
        background: #F9F9F9
    th, td
        padding: 13px 19px
        white-space: pre-wrap
    th
        font-size: 14px
        font-weight: 600
        color: $dark
        > span
            > span
                display: block
                color: $gray
                font-size: 12px
    td
        font-size: 15px
        span
            display: block
            color: $gray
            font-size: 13px
    &__edit-btn
        background: $primary-transparency
        padding: 5px 10px
        .q-icon
            font-size: 1.2em !important
            color: $primary !important
</style>
