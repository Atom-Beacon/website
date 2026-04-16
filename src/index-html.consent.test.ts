import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(resolve(repoRoot, "index.html"), "utf8");

describe("index.html — Google CMP / Consent Mode bootstrap contract", () => {
  it("runs inline consent default before any external Google script URL", () => {
    const consentDefault = html.indexOf('gtag("consent", "default"');
    const gtagJs = html.indexOf("googletagmanager.com/gtag/js");
    const adsJs = html.indexOf("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");

    expect(consentDefault, "missing gtag consent default").toBeGreaterThan(-1);
    expect(gtagJs, "missing gtag.js").toBeGreaterThan(-1);
    expect(adsJs, "missing adsbygoogle.js").toBeGreaterThan(-1);
    expect(consentDefault).toBeLessThan(adsJs);
    expect(adsJs).toBeLessThan(gtagJs);
  });

  it("queues adsbygoogle.push after the AdSense script and before gtag.js", () => {
    const adsJs = html.indexOf("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    const push = html.indexOf("adsbygoogle || []).push");
    const gtagJs = html.indexOf("googletagmanager.com/gtag/js");
    expect(push).toBeGreaterThan(-1);
    expect(adsJs).toBeLessThan(push);
    expect(push).toBeLessThan(gtagJs);
  });

  it("includes wait_for_update so async CMP can call consent update before tags proceed", () => {
    expect(html).toContain("wait_for_update");
  });

  it("initializes the adsbygoogle queue before the async AdSense script", () => {
    const queue = html.indexOf("window.adsbygoogle = window.adsbygoogle || []");
    const adsJs = html.indexOf("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    expect(queue).toBeGreaterThan(-1);
    expect(queue).toBeLessThan(adsJs);
  });

  it("keeps the live AdSense publisher client on the script tag", () => {
    expect(html).toContain("ca-pub-4575124953371835");
  });
});
