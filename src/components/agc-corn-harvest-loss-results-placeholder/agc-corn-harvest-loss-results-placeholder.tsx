import { Component } from "@stencil/core";

@Component({
  tag: "agc-corn-harvest-loss-results-placeholder"
})
export class AgcCornHarvestLossResultsPlaceholder {
  render() {
    const placeholder = () => (
      <span>
        <i class="mark" /> <i class="mark" /> <i class="mark" />{" "}
        <i class="mark" />
      </span>
    );

    return (
      <section>
        <ul class="agc-results-placeholder">
          <li>
            <h2 data-i18n="results.yield-loss">Yield Loss</h2>
            {placeholder()}
          </li>
        </ul>
      </section>
    );
  }
}
