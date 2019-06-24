export default (config, env, helpers) => {
	const style_plugin = config.plugins.find((el) => el.filename == "style.[contenthash:5].css")
	style_plugin.filename = "[name].css";

	config.entry['mobile_style'] = '/home/user/IdeaProjects/PreactProject/src/mobile_style/index.css'
	config.entry['style'] = '/home/user/IdeaProjects/PreactProject/src/style/index.css'
	config.output['filename'] = '[name].js'
	console.log(config);
};
