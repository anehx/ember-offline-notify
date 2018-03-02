import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | offline-notify", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`
      {{#offline-notify}}
        offline
      {{/offline-notify}}
    `);

    assert.dom(this.element).hasText("");

    await window.dispatchEvent(new Event("offline"));

    assert.dom(this.element).hasText("offline");
  });
});
