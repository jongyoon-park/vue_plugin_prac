import Chart from "chart.js/auto";

export default {
    install(app, options) {
        console.log("plugin");
        app.config.globalProperties.$_Chart = Chart;
    }
}
