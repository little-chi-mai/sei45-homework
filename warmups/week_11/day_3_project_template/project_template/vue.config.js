module.exports = {
	css: {
		loaderOptions: {
			// pass options to sass-loader
			sass: {
				// @/ is an alias to src/
				prependData: `@import "@/styles/tools/responsive.scss"; 
                      @import "@/styles/settings/responsive.scss";
                      @import "@/styles/settings/gutters.scss";
                      @import "@/styles/settings/animation.scss";
                      @import "@/styles/settings/general.scss";
                    `,
			},
		},
	},
};
