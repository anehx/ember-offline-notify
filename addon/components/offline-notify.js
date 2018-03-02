import Component from "@ember/component";
import { run } from "@ember/runloop";
import layout from "../templates/components/offline-notify";

export default Component.extend({
  layout,

  _onOnline() {
    this.set("offline", false);
  },

  _onOffline() {
    this.set("offline", true);
  },

  didInsertElement() {
    this._super(...arguments);

    this.set("offline", !navigator.onLine);

    if (window) {
      window.addEventListener("online", () => run(this, this._onOnline));
      window.addEventListener("offline", () => run(this, this._onOffline));
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    if (window) {
      window.removeEventListener("online", () => run(this, this._onOnline));
      window.removeEventListener("offline", () => run(this, this._onOffline));
    }
  }
});
