<script>
  import {adpds} from '@/data/data-service.js'

  export default {
    data: () => ({
      table: {
        headers: [
          { label: 'Claim #',         key: 'claimNum'              },
          { label: 'Batch ID',        key: 'claimBatchIdStr'	      },     
          { label: 'Priority',        key: 'highPriority'	      	},
          { label: 'Device Category', key: 'deviceCategoryName'    },
          { label: 'Gtkp. Date',      key: 'signedDate'	      	  },
          { label: 'Claim Status',    key: 'claimStatusShortName'  },
          { label: 'Paid',            key: 'displayPaid'	      	  },
          { label: 'Health #',        key: 'healthNumber'	      	},
          { label: 'Client Name',     key: 'displayClaimClientName'},
          { label: 'Last Updated',    key: 'lastUpdatedDate'       }
        ],
        items: [
        ]
      },
      summaries : [],
		  pageSummaries : []
    }),
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    methods: {
      fetchData() {
          const claims = adpds.claims([], claimSummaries => {
          var i=0;
          claimSummaries.forEach( summary => { 
            this.table.items.push(summary);
            if (i++ < 10)
              this.pageSummaries.push(summary);
          });
        }); 
      },
      selected(item, index) {
        console.log("item selected ", item);
      }
    }
  }

</script>

<template>
<w-table
  :headers="table.headers"
  :items="table.items"
  :row-select="selected()"
  fixed-headers
  style="height:80vh;">
</w-table>
</template>
