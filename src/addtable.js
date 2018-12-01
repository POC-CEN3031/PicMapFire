addDataToTable () {
        this.updateCampaignData('camp/updateLoadingState', true)
        // TODO: Set specific data for each user
        const USER_KEY = this.$store.getters['auth/getUserId']
        db.ref().child('campaigns').child(USER_KEY).set({
          campaign_name: this.campaignName,
          campaign_created: new Date().toLocaleDateString(),
          campaign_link: this.returnGeneratedUrl,
          copy: 'COPY LINK'
        })
        this.resetForm()
        this.dialog = false
        this.$store.dispatch('camp/updateDataTable')
        this.updateCampaignData('camp/updateLoadingState', false)
        console.log('data pushed to db successfully')
      }
    },