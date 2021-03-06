Vue.component('spark-team-settings-owner-basics-screen', {
    /*
     * Bootstrap the component. Load the initial data.
     */
    ready: function () {
        //
    },


    data: function () {
    	return {
    		user: null,
    		team: null,

    		updateTeamBasicsForm: new SparkForm({
    			name: ''
    		})
    	};
    },


    events: {
        /*
         * Handle the "userRetrieved" event.
         */
        userRetrieved: function (user) {
            this.user = user;

            return true;
        },


        /*
         * Handle the "teamRetrieved" event.
         */
        teamRetrieved: function (team) {
            this.team = team;

            this.updateTeamBasicsForm.name = this.team.name;

            return true;
        }
    },


    methods: {
    	/**
    	 * Update the team's information.
    	 */
    	updateTeam: function () {
            var self = this;

            Spark.put('/settings/teams/' + this.team.id, this.updateTeamBasicsForm)
                .then(function () {
                    self.$dispatch('updateTeam');
                    self.$dispatch('updateTeams');
                });
    	}
    }
});
