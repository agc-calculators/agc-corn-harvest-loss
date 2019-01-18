/*! Built with http://stenciljs.com */
const { h } = window.AgcCornHarvestLoss;

class AgcCornHarvestLossResultsPlaceholder {
    render() {
        const placeholder = () => (h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" })));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.yield-loss" }, "Yield Loss"),
                    placeholder()))));
    }
    static get is() { return "agc-corn-harvest-loss-results-placeholder"; }
}

export { AgcCornHarvestLossResultsPlaceholder };
