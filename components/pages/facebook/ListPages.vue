<template>
<div class="card">
  <el-table class="table-responsive table-flush" header-row-class-name="thead-light" :data="listPages">
    <el-table-column label="Página" min-width="310px" prop="name" sortable>
      <template v-slot="{row}">
        <div class="media align-items-center">
          <a href="#" @click.prevent="SelectPage(row.id,row.instagram_business_account.id,row.name,row.picture.data.url,row.access_token)" class="avatar rounded-circle mr-3">
            <img alt="Image placeholder" :src="row.picture.data.url">
          </a>
          <div class="media-body">
            <span class="font-weight-600 name mb-0 text-sm">{{row.name}}</span>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'element-ui'

export default {
  name: 'list-pages',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  props: {
    itemLimit: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      projects: [],
      currentPage: 1
    };
  },
  methods: {
    SelectPage(id,instagram_business_account,name,picture,access_token) {

      localStorage.setItem('page_id', id)
      localStorage.setItem('page_id_instagram', instagram_business_account)
      localStorage.setItem('page_name', name)
      localStorage.setItem('page_photo', picture)
      localStorage.setItem('page_token', access_token)

      this.$router.push('/instagram')
    },
  },
  computed: {
    listPages() {
      return this.$store.state.listPages
    }
  },
}
</script>
