Class: ObscureMailto {#ObscureMailto}
=====================================

<big>Decodes email addresses in `anchor` tags to present a valid email address to the user while keeping an obscured address to email harvesting bots</big>

### Demo

<iframe src="http://mooshell.net/rpflo/Djze3/embedded/?tabs=result,js,html" style="width: 100%; height:150px"></iframe>

ObscureMailto Method: constructor {#ObscureMailto:constructor}
---------------------------------------------------------------


### Syntax:

    var myObscureMailto = new ObscureMailto(options);

### Arguments:

1. options - (obj) The options below:

### Options:

* selector - (string: defaults to `a[href=mailto:]`) Selects which anchor tags should be decoded.
* at - (string: defaults to `{at}`) The search string to replace for the `@` character.
* dot - (string: defaults to `{dot}`) The search string to replace for the `.` character.

### Example:

#### HTML:

    <a href="mailto:">rpflorence{at}gmail{dot}come</a>

#### JavaScript

    new ObscureMailto();

