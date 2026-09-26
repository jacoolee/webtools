# Install

## add https://addons.firefox.org

https://addons.mozilla.org/en-US/developers/addon/13cde0ec5b3b4d5dbdf5/versions

---

## For development

For development, you can load it as a temporary extension.

1. Put the files in a directory

For example:

~/firefox-reuse-tab/
├── manifest.json
└── background.js

2. Open Firefox’s extension debugger

In Firefox, open:

about:debugging#/runtime/this-firefox

Or:

Menu → More Tools → Browser Tools → about:debugging

3. Load the extension

Click:

Load Temporary Add-on…

Then select:

~/firefox-reuse-tab/manifest.json

You should see Reuse Existing Tab in the extensions list.

4. Test it

Open:

https://example.com

in one tab.

Then from Terminal:

open -a Firefox https://example.com

The extension should close the newly created duplicate and activate the existing tab.

5. After modifying background.js

Go back to:

about:debugging#/runtime/this-firefox

and click Reload for the extension.

You don’t need to restart Firefox.

---

## For release

For a normal Firefox release build, an extension loaded with “Load Temporary Add-on…” cannot be made permanent. It is removed when Firefox restarts.

For your own extension, the practical options are:

1. Sign the extension

Package it as an .xpi and have Firefox add-on signing enabled. For a personal extension, you can submit it to Mozilla as unlisted and install the signed XPI.

You can use Mozilla’s add-on developer site:

⁠Firefox Add-on Developer Hub

After signing, install the .xpi normally in Firefox. It will survive restarts.

2. Use Firefox Developer Edition / Nightly

If this is just for your own development, Firefox Developer Edition or Nightly can be configured to allow unsigned extensions.

In about:config:

xpinstall.signatures.required = false

Then you can install your .xpi without signing it.

Important: this setting is not available/effective in standard Firefox release builds.

3. For your current extension

You can package your directory directly:

cd ~/firefox-reuse-tab
zip -r ~/firefox-reuse-tab.xpi .

Then install:

about:addons
→ Extensions
→ gear ⚙
→ Install Add-on From File...
→ firefox-reuse-tab.xpi

For your Reuse Existing Tab extension, I’d use Developer Edition + unsigned XPI while you’re iterating. Once the behavior is stable, signing it as an unlisted add-on is the straightforward way to keep it permanently in regular Firefox.
