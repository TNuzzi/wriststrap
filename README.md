Wriststrap
==========
A Twitter Bootstrap inspired framework for [Appcelerator Titanium](http://www.appcelerator.com) (Alloy)

### Version: Beta-1

<table>
     <thead>
        <tr>
          <th>Device/Platform</th>
          <th>Support</th>
          <th>Version</th>
        </tr>
    </thead>
    <tr>
        <td>iPhone</td>
        <td>Development</td>
        <td>Version 1</td>
    </tr>
    <tr>
        <td>iPad</td>
        <td>Coming Soon</td>
        <td>Version 1</td>
    </tr>
    <tr>
        <td>Android</td>
        <td>Next</td>
        <td>Version 2</td>
    </tr>
    <tr>
        <td>Mobile Web</td>
        <td>Next</td>
        <td>Version 2</td>
    </tr>
    <tr>
        <td>Blackberry</td>
        <td>Not sure</td>
        <td>Version ?</td>
    </tr>
    <tr>
        <td>Tizen</td>
        <td>Not sure</td>
        <td>Version ?</td>
    </tr>
</table>

About
-----
Wriststrap was born out of the need to quickly prototype and visualize mobile UI in the Appcelerator Titanium [Alloy framework](http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Framework).  With the creation of the Alloy, Titanium now has the ability to apply CSS class like attributes to UI elements (think HTML).  As with HTML this allow for a clean seperation from layout logic and application functionality (contained within JS files).  Wriststrap applies the same principles as Bootstrap in allowing non-visual designers (like myself) to create and layout a visually aesthetically pleasing looking mobile UI.

### Code example
The following is an example of TSS classes being applied to different UI elements.  There is no code in the JS files for layout.

    <Alloy>
        <Window top="20">
            <View class="container bg-lightblue">
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1 col-spacing text-center bg-pink">Test</Label>
                <Label class="col col-1 col-spacing text-center bg-pink">Test</Label>
                <Label class="col col-1 col-spacing text-right bg-pink">Test</Label>
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-2 col-spacing text-center bg-pink">Test</Label>
                <Label class="col col-1 col-spacing text-right bg-pink">Test</Label>
                <Label class="col col-3 text-center bg-pink">Test</Label>
                <Label class="col col-1 col-spacing text-right bg-pink">Test</Label>
                <View class="col col-2 bg-yellow lo-horizontal">
                    <Label class="col-2 text-center bg-pink">Test</Label>
                    <Label class="col-2 col-spacing text-center bg-pink">Test</Label>
                </View>
                <View class="col col-2 col-spacing bg-yellow lo-horizontal">
                    <Label class="col-1 text-center bg-pink">Test</Label>
                    <Label class="col-1 col-spacing text-center bg-pink">Test</Label>
                    <Label class="col-1 col-spacing text-center bg-pink">Test</Label>
                    <Label class="col-1-end col-spacing text-center bg-pink">Test</Label>
                </View>
            </View>
            <View class="container bg-blue">
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1-push-2 bg-pink">Test</Label>
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1-push-2 bg-pink">Test</Label>
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1-push-2 bg-pink">Test</Label>
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1-push-2 bg-pink">Test</Label>
            </View>
            <View class="container bg-red">
                <Label class="col col-1-push-1 bg-pink">Test</Label>
                <Label class="col col-3-push-1 bg-pink">Test</Label>
                <Label class="col col-3-push-1 bg-pink">Test</Label>
                <Label class="col col-3-push-1 bg-pink">Test</Label>
                <Label class="col col-1 bg-pink">Test</Label>
                <Label class="col col-1-push-2 bg-pink">Test</Label>
            </View>
            <View class="layout-default lo-composite bg-purple">
                <View class="footer bg-25">
                    <Label class="col-4 small text-right color-white">Footer</Label>
                </View>
            </View>
        </Window>
    </Alloy>

![Layout example (Vertical)](http://tnuzzi.github.io/wriststrap/imgs/layout-vert.png "Layout example (Vertical)")

![Layout example (Horizontal)](http://tnuzzi.github.io/wriststrap/imgs/layout-horz.png "Layout example (Horizontal)")

Wriststrap TSS Classes
----------------------
### Layout
### Typography
### Buttons
### Images
### Styles
### Alerts
### Panels
### Wells
### Inputs
### Tables
### Fonts
The default font for Wriststrap is currently "HelveticaNeue-Light".  This font is lightweight and gives the app a clean feel.  The TSS classes are available in different font sizes.

The format of the tss class is: `font-<size>-<fontname>` for example:

    font-12-helveticaneue-light

The font sizes available are:
    6
    8
    10
    12
    14
    18
    24
    30
    36
    48
    60
    72

In addition to the default font in the app.tss there is a provided tss class that contains all of the available fonts on the iOS platform (200 in all).  Originally they were included in the app.tss however it added 20k lines to file and where taken out.  If you need, you can copy fonts sets into the app.tss or all of the back into the app.tss however the file gets hard to edit.

Supported Glyph libraries
-------------------------
Wriststrap has support for the following Glyph libraries:
* [Glyphish](http://www.glyphish.com/)
* [Glyphicons](http://glyphicons.com/) (Free version)

### Glyph libraries installation:
Simply unzip the Glyph libraries in the `wriststrap/themes/wriststrap/assets` and name the directories appropriately (the name of the library all lower case, no version numbers just the name).  The framework will reference these locations for the images.

Limitations
-----------