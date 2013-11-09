Wriststrap
==========
A Twitter Bootstrap inspired framework for [Appcelerator Titanium](http://www.appcelerator.com) (Alloy)

### Installation:
1.  Clone the git project to your local machine: `git clone https://github.com/TNuzzi/wriststrap.git`
2.  Copy the `themes` directory to the `app` directory under your Appcelerator mobile project
3.  Edit the [config.json](http://docs.appcelerator.com/titanium/3.0/#!/guide/Project_Configuration_File_%28config.json%29) (in your mobile project) and add the following entry: `"theme":"wriststrap"` to the `"global":` json section [(more details here)](http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Styles_and_Themes-section-35621526_AlloyStylesandThemes-Themes).  
4.  Rebuild your mobile project

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
### Overview

Default Element styling:
<table>
     <thead>
        <tr>
          <th>UI Element</th>
          <th>Default styling</th>
        </tr>
    </thead>
    <tr>
        <td>Window</td>
        <td>
        <pre>layout: 'vertical',
backgroundColor: 'ffffff'</pre>
        </td>
    </tr>
    <tr>
        <td>View</td>
        <td>
        <pre>layout: 'vertical',
backgroundColor: 'ffffff'</pre>
        </td>
    </tr>
    <tr>
        <td>ScrollView</td>
        <td>
        <pre>layout: 'vertical',
backgroundColor: 'ffffff'</pre>
        </td>
    </tr>
    <tr>
        <td>Label</td>
        <td>
        <pre>font: {
fontFamily: 'HelveticaNeue-Light',
    fontSize: '14dp',
},
color: '333333'</pre>
        </td>
    </tr>
    <tr>
        <td>Button</td>
        <td>
        <pre>font: {
fontFamily: 'HelveticaNeue-Light', 
    fontSize: '14dp'
},
height: '44dp',
width: '100%'</pre>
        </td>
    </tr>
    <tr>
        <td>TableView</td>
        <td>
        <pre>backgroundColor: 'transparent',
width: '100%',
height: Ti.UI.FILL</pre>
        </td>
    </tr>
    <tr>
        <td>TableViewRow</td>
        <td>
        <pre>font: {
fontFamily: 'HelveticaNeue-Light',
fontSize: '14dp'
}</pre>
        </td>
    </tr>
</table>
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
<table>
     <thead>
        <tr>
          <th>Font Sizes</th>
        </tr>
    </thead>
    <tr>
        <td>6</td>
    </tr>
    <tr>
        <td>8</td>
    </tr>
    <tr>
        <td>10</td>
    </tr>
    <tr>
        <td>12</td>
    </tr>
    <tr>
        <td>14</td>
    </tr>
    <tr>
        <td>18</td>
    </tr>
    <tr>
        <td>24</td>
    </tr>
    <tr>
        <td>30</td>
    </tr>
    <tr>
        <td>36</td>
    </tr>
    <tr>
        <td>48</td>
    </tr>
    <tr>
        <td>60</td>
    </tr>
    <tr>
        <td>72</td>
    </tr>
</table>

#### Additional fonts

In addition to the default font in the app.tss there is a provided tss file `wriststrap/themes/wristrap/style/fonts.tss` that contains all of the available fonts on the iOS platform (200 in all).  Originally they were included in the app.tss however it added 20k lines to file and where taken out.  If you need, you can copy font sets into the app.tss or all of them back into the app.tss however the file gets hard to edit.  See Appendix section for font names and tss class names.

Supported Glyph libraries
-------------------------
Wriststrap has support for the following Glyph libraries:
* [Glyphish](http://www.glyphish.com/)
* [Glyphicons](http://glyphicons.com/) (Free version)

### Glyph libraries installation:
Simply unzip the Glyph libraries in the `wriststrap/themes/wriststrap/assets` and name the directories appropriately (the name of the library all lower case, no version numbers just the name).  The framework will reference these locations for the images.

Limitations
-----------

Appendix
--------

### Available iOS fonts (includes iOS 7)

Use the size table under font section for the available font sizes in the tss file.

<table>
     <thead>
        <tr>
          <th>Font Names (in iOS)</th>
          <th>Font TSS names</th>
        </tr>
    </thead>
    <tr>
        <td>AcademyEngravedLetPlain</td>
        <td>font-&lt;size&gt;-academyengravedletplain</td>
    </tr>
    <tr>
        <td>AmericanTypewriter</td>
        <td>font-&lt;size&gt;-americantypewriter</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Bold</td>
        <td>font-&lt;size&gt;-americantypewriter-bold</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Condensed</td>
        <td>font-&lt;size&gt;-americantypewriter-condensed</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedBold</td>
        <td>font-&lt;size&gt;-americantypewriter-condensedbold</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedLight</td>
        <td>font-&lt;size&gt;-americantypewriter-condensedlight</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Light</td>
        <td>font-&lt;size&gt;-americantypewriter-light</td>
    </tr>
    <tr>
        <td>AppleColorEmoji</td>
        <td>font-&lt;size&gt;-applecoloremoji</td>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Bold</td>
        <td>font-&lt;size&gt;-applesdgothicneo-bold</td>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Medium</td>
        <td>font-&lt;size&gt;-applesdgothicneo-medium</td>
    </tr>
    <tr>
        <td>ArialMT</td>
        <td>font-&lt;size&gt;-arialmt</td>
    </tr>
    <tr>
        <td>Arial-BoldItalicMT</td>
        <td>font-&lt;size&gt;-arial-bolditalicmt</td>
    </tr>
    <tr>
        <td>Arial-BoldMT</td>
        <td>font-&lt;size&gt;-arial-boldmt</td>
    </tr>
    <tr>
        <td>Arial-ItalicMT</td>
        <td>font-&lt;size&gt;-arial-italicmt</td>
    </tr>
    <tr>
        <td>ArialHebrew</td>
        <td>font-&lt;size&gt;-arialhebrew</td>
    </tr>
    <tr>
        <td>ArialHebrew-Bold</td>
        <td>font-&lt;size&gt;-arialhebrew-bold</td>
    </tr>
    <tr>
        <td>ArialRoundedMTBold</td>
        <td>font-&lt;size&gt;-arialroundedmtbold</td>
    </tr>
    <tr>
        <td>Avenir-Black</td>
        <td>font-&lt;size&gt;-avenir-black</td>
    </tr>
    <tr>
        <td>Avenir-BlackOblique</td>
        <td>font-&lt;size&gt;-avenir-blackoblique</td>
    </tr>
    <tr>
        <td>Avenir-Book</td>
        <td>font-&lt;size&gt;-avenir-book</td>
    </tr>
    <tr>
        <td>Avenir-BookOblique</td>
        <td>font-&lt;size&gt;-avenir-bookoblique</td>
    </tr>
    <tr>
        <td>Avenir-Heavy</td>
        <td>font-&lt;size&gt;-avenir-heavy</td>
    </tr>
    <tr>
        <td>Avenir-HeavyOblique</td>
        <td>font-&lt;size&gt;-avenir-heavyoblique</td>
    </tr>
    <tr>
        <td>Avenir-Light</td>
        <td>font-&lt;size&gt;-avenir-light</td>
    </tr>
    <tr>
        <td>Avenir-LightOblique</td>
        <td>font-&lt;size&gt;-avenir-lightoblique</td>
    </tr>
    <tr>
        <td>Avenir-Medium</td>
        <td>font-&lt;size&gt;-avenir-medium</td>
    </tr>
    <tr>
        <td>Avenir-MediumOblique</td>
        <td>font-&lt;size&gt;-avenir-mediumoblique</td>
    </tr>
    <tr>
        <td>Avenir-Oblique</td>
        <td>font-&lt;size&gt;-avenir-oblique</td>
    </tr>
    <tr>
        <td>Avenir-Roman</td>
        <td>font-&lt;size&gt;-avenir-roman</td>
    </tr>
    <tr>
        <td>AvenirNext-Bold</td>
        <td>font-&lt;size&gt;-avenirnext-bold</td>
    </tr>
    <tr>
        <td>AvenirNext-BoldItalic</td>
        <td>font-&lt;size&gt;-avenirnext-bolditalic</td>
    </tr>
    <tr>
        <td>AvenirNext-DemiBold</td>
        <td>font-&lt;size&gt;-avenirnext-demibold</td>
    </tr>
    <tr>
        <td>AvenirNext-DemiBoldItalic</td>
        <td>font-&lt;size&gt;-avenirnext-demibolditalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Heavy</td>
        <td>font-&lt;size&gt;-avenirnext-heavy</td>
    </tr>
    <tr>
        <td>AvenirNext-HeavyItalic</td>
        <td>font-&lt;size&gt;-avenirnext-heavyitalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Italic</td>
        <td>font-&lt;size&gt;-avenirnext-italic</td>
    </tr>
    <tr>
        <td>AvenirNext-Medium</td>
        <td>font-&lt;size&gt;-avenirnext-medium</td>
    </tr>
    <tr>
        <td>AvenirNext-MediumItalic</td>
        <td>font-&lt;size&gt;-avenirnext-mediumitalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Regular</td>
        <td>font-&lt;size&gt;-avenirnext-regular</td>
    </tr>
    <tr>
        <td>AvenirNext-UltraLight</td>
        <td>font-&lt;size&gt;-avenirnext-ultralight</td>
    </tr>
    <tr>
        <td>AvenirNext-UltraLightItalic</td>
        <td>font-&lt;size&gt;-avenirnext-ultralightitalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Bold</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-bold</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-BoldItalic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-bolditalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBold</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-demibold</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBoldItalic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-demibolditalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Heavy</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-heavy</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-HeavyItalic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-heavyitalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Italic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-italic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Medium</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-medium</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-MediumItalic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-mediumitalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Regular</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-regular</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLight</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-ultralight</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLightItalic</td>
        <td>font-&lt;size&gt;-avenirnextcondensed-ultralightitalic</td>
    </tr>
    <tr>
        <td>BanglaSangamMN</td>
        <td>font-&lt;size&gt;-banglasangammn</td>
    </tr>
    <tr>
        <td>BanglaSangamMN-Bold</td>
        <td>font-&lt;size&gt;-banglasangammn-bold</td>
    </tr>
    <tr>
        <td>Baskerville</td>
        <td>font-&lt;size&gt;-baskerville</td>
    </tr>
    <tr>
        <td>Baskerville-Bold</td>
        <td>font-&lt;size&gt;-baskerville-bold</td>
    </tr>
    <tr>
        <td>Baskerville-BoldItalic</td>
        <td>font-&lt;size&gt;-baskerville-bolditalic</td>
    </tr>
    <tr>
        <td>Baskerville-Italic</td>
        <td>font-&lt;size&gt;-baskerville-italic</td>
    </tr>
    <tr>
        <td>Baskerville-SemiBold</td>
        <td>font-&lt;size&gt;-baskerville-semibold</td>
    </tr>
    <tr>
        <td>Baskerville-SemiBoldItalic</td>
        <td>font-&lt;size&gt;-baskerville-semibolditalic</td>
    </tr>
    <tr>
        <td>BodoniOrnamentsITCTT</td>
        <td>font-&lt;size&gt;-bodoniornamentsitctt</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Bold</td>
        <td>font-&lt;size&gt;-bodonisvtytwoitctt-bold</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Book</td>
        <td>font-&lt;size&gt;-bodonisvtytwoitctt-book</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-BookIta</td>
        <td>font-&lt;size&gt;-bodonisvtytwoitctt-bookita</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Bold</td>
        <td>font-&lt;size&gt;-bodonisvtytwoositctt-bold</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Book</td>
        <td>font-&lt;size&gt;-bodonisvtytwoositctt-book</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-BookIt</td>
        <td>font-&lt;size&gt;-bodonisvtytwoositctt-bookit</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoSCITCTT-Book</td>
        <td>font-&lt;size&gt;-bodonisvtytwoscitctt-book</td>
    </tr>
    <tr>
        <td>BradleyHandITCTT-Bold</td>
        <td>font-&lt;size&gt;-bradleyhanditctt-bold</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Bold</td>
        <td>font-&lt;size&gt;-chalkboardse-bold</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Light</td>
        <td>font-&lt;size&gt;-chalkboardse-light</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Regular</td>
        <td>font-&lt;size&gt;-chalkboardse-regular</td>
    </tr>
    <tr>
        <td>Chalkduster</td>
        <td>font-&lt;size&gt;-chalkduster</td>
    </tr>
    <tr>
        <td>Cochin</td>
        <td>font-&lt;size&gt;-cochin</td>
    </tr>
    <tr>
        <td>Cochin-Bold</td>
        <td>font-&lt;size&gt;-cochin-bold</td>
    </tr>
    <tr>
        <td>Cochin-BoldItalic</td>
        <td>font-&lt;size&gt;-cochin-bolditalic</td>
    </tr>
    <tr>
        <td>Cochin-Italic</td>
        <td>font-&lt;size&gt;-cochin-italic</td>
    </tr>
    <tr>
        <td>Copperplate</td>
        <td>font-&lt;size&gt;-copperplate</td>
    </tr>
    <tr>
        <td>Copperplate-Bold</td>
        <td>font-&lt;size&gt;-copperplate-bold</td>
    </tr>
    <tr>
        <td>Copperplate-Light</td>
        <td>font-&lt;size&gt;-copperplate-light</td>
    </tr>
    <tr>
        <td>Courier</td>
        <td>font-&lt;size&gt;-courier</td>
    </tr>
    <tr>
        <td>Courier-Bold</td>
        <td>font-&lt;size&gt;-courier-bold</td>
    </tr>
    <tr>
        <td>Courier-BoldOblique</td>
        <td>font-&lt;size&gt;-courier-boldoblique</td>
    </tr>
    <tr>
        <td>Courier-Oblique</td>
        <td>font-&lt;size&gt;-courier-oblique</td>
    </tr>
    <tr>
        <td>CourierNewPS-BoldItalicMT</td>
        <td>font-&lt;size&gt;-couriernewps-bolditalicmt</td>
    </tr>
    <tr>
        <td>CourierNewPS-BoldMT</td>
        <td>font-&lt;size&gt;-couriernewps-boldmt</td>
    </tr>
    <tr>
        <td>CourierNewPS-ItalicMT</td>
        <td>font-&lt;size&gt;-couriernewps-italicmt</td>
    </tr>
    <tr>
        <td>CourierNewPSMT</td>
        <td>font-&lt;size&gt;-couriernewpsmt</td>
    </tr>
    <tr>
        <td>DBLCDTempBlack</td>
        <td>font-&lt;size&gt;-dblcdtempblack</td>
    </tr>
    <tr>
        <td>DevanagariSangamMN</td>
        <td>font-&lt;size&gt;-devanagarisangammn</td>
    </tr>
    <tr>
        <td>DevanagariSangamMN-Bold</td>
        <td>font-&lt;size&gt;-devanagarisangammn-bold</td>
    </tr>
    <tr>
        <td>Didot</td>
        <td>font-&lt;size&gt;-didot</td>
    </tr>
    <tr>
        <td>Didot-Bold</td>
        <td>font-&lt;size&gt;-didot-bold</td>
    </tr>
    <tr>
        <td>Didot-Italic</td>
        <td>font-&lt;size&gt;-didot-italic</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS</td>
        <td>font-&lt;size&gt;-euphemiaucas</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Bold</td>
        <td>font-&lt;size&gt;-euphemiaucas-bold</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Italic</td>
        <td>font-&lt;size&gt;-euphemiaucas-italic</td>
    </tr>
    <tr>
        <td>Futura-CondensedExtraBold</td>
        <td>font-&lt;size&gt;-futura-condensedextrabold</td>
    </tr>
    <tr>
        <td>Futura-CondensedMedium</td>
        <td>font-&lt;size&gt;-futura-condensedmedium</td>
    </tr>
    <tr>
        <td>Futura-Medium</td>
        <td>font-&lt;size&gt;-futura-medium</td>
    </tr>
    <tr>
        <td>Futura-MediumItalic</td>
        <td>font-&lt;size&gt;-futura-mediumitalic</td>
    </tr>
    <tr>
        <td>GeezaPro</td>
        <td>font-&lt;size&gt;-geezapro</td>
    </tr>
    <tr>
        <td>GeezaPro-Bold</td>
        <td>font-&lt;size&gt;-geezapro-bold</td>
    </tr>
    <tr>
        <td>Georgia</td>
        <td>font-&lt;size&gt;-georgia</td>
    </tr>
    <tr>
        <td>Georgia-Bold</td>
        <td>font-&lt;size&gt;-georgia-bold</td>
    </tr>
    <tr>
        <td>Georgia-BoldItalic</td>
        <td>font-&lt;size&gt;-georgia-bolditalic</td>
    </tr>
    <tr>
        <td>Georgia-Italic</td>
        <td>font-&lt;size&gt;-georgia-italic</td>
    </tr>
    <tr>
        <td>GillSans</td>
        <td>font-&lt;size&gt;-gillsans</td>
    </tr>
    <tr>
        <td>GillSans-Bold</td>
        <td>font-&lt;size&gt;-gillsans-bold</td>
    </tr>
    <tr>
        <td>GillSans-BoldItalic</td>
        <td>font-&lt;size&gt;-gillsans-bolditalic</td>
    </tr>
    <tr>
        <td>GillSans-Italic</td>
        <td>font-&lt;size&gt;-gillsans-italic</td>
    </tr>
    <tr>
        <td>GillSans-Light</td>
        <td>font-&lt;size&gt;-gillsans-light</td>
    </tr>
    <tr>
        <td>GillSans-LightItalic</td>
        <td>font-&lt;size&gt;-gillsans-lightitalic</td>
    </tr>
    <tr>
        <td>GujaratiSangamMN</td>
        <td>font-&lt;size&gt;-gujaratisangammn</td>
    </tr>
    <tr>
        <td>GujaratiSangamMN-Bold</td>
        <td>font-&lt;size&gt;-gujaratisangammn-bold</td>
    </tr>
    <tr>
        <td>GurmukhiMN</td>
        <td>font-&lt;size&gt;-gurmukhimn</td>
    </tr>
    <tr>
        <td>GurmukhiMN-Bold</td>
        <td>font-&lt;size&gt;-gurmukhimn-bold</td>
    </tr>
    <tr>
        <td>STHeitiSC-Light</td>
        <td>font-&lt;size&gt;-stheitisc-light</td>
    </tr>
    <tr>
        <td>STHeitiSC-Medium</td>
        <td>font-&lt;size&gt;-stheitisc-medium</td>
    </tr>
    <tr>
        <td>STHeitiTC-Light</td>
        <td>font-&lt;size&gt;-stheititc-light</td>
    </tr>
    <tr>
        <td>STHeitiTC-Medium</td>
        <td>font-&lt;size&gt;-stheititc-medium</td>
    </tr>
    <tr>
        <td>Helvetica</td>
        <td>font-&lt;size&gt;-helvetica</td>
    </tr>
    <tr>
        <td>Helvetica-Bold</td>
        <td>font-&lt;size&gt;-helvetica-bold</td>
    </tr>
    <tr>
        <td>Helvetica-BoldOblique</td>
        <td>font-&lt;size&gt;-helvetica-boldoblique</td>
    </tr>
    <tr>
        <td>Helvetica-Light</td>
        <td>font-&lt;size&gt;-helvetica-light</td>
    </tr>
    <tr>
        <td>Helvetica-LightOblique</td>
        <td>font-&lt;size&gt;-helvetica-lightoblique</td>
    </tr>
    <tr>
        <td>Helvetica-Oblique</td>
        <td>font-&lt;size&gt;-helvetica-oblique</td>
    </tr>
    <tr>
        <td>HelveticaNeue</td>
        <td>font-&lt;size&gt;-helveticaneue</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Bold</td>
        <td>font-&lt;size&gt;-helveticaneue-bold</td>
    </tr>
    <tr>
        <td>HelveticaNeue-BoldItalic</td>
        <td>font-&lt;size&gt;-helveticaneue-bolditalic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBlack</td>
        <td>font-&lt;size&gt;-helveticaneue-condensedblack</td>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBold</td>
        <td>font-&lt;size&gt;-helveticaneue-condensedbold</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Italic</td>
        <td>font-&lt;size&gt;-helveticaneue-italic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Light</td>
        <td>font-&lt;size&gt;-helveticaneue-light</td>
    </tr>
    <tr>
        <td>HelveticaNeue-LightItalic</td>
        <td>font-&lt;size&gt;-helveticaneue-lightitalic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Medium</td>
        <td>font-&lt;size&gt;-helveticaneue-medium</td>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLight</td>
        <td>font-&lt;size&gt;-helveticaneue-ultralight</td>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLightItalic</td>
        <td>font-&lt;size&gt;-helveticaneue-ultralightitalic</td>
    </tr>
    <tr>
        <td>HiraKakuProN-W3</td>
        <td>font-&lt;size&gt;-hirakakupron-w3</td>
    </tr>
    <tr>
        <td>HiraKakuProN-W6</td>
        <td>font-&lt;size&gt;-hirakakupron-w6</td>
    </tr>
    <tr>
        <td>HiraMinProN-W3</td>
        <td>font-&lt;size&gt;-hiraminpron-w3</td>
    </tr>
    <tr>
        <td>HiraMinProN-W6</td>
        <td>font-&lt;size&gt;-hiraminpron-w6</td>
    </tr>
    <tr>
        <td>HoeflerText-Black</td>
        <td>font-&lt;size&gt;-hoeflertext-black</td>
    </tr>
    <tr>
        <td>HoeflerText-BlackItalic</td>
        <td>font-&lt;size&gt;-hoeflertext-blackitalic</td>
    </tr>
    <tr>
        <td>HoeflerText-Italic</td>
        <td>font-&lt;size&gt;-hoeflertext-italic</td>
    </tr>
    <tr>
        <td>HoeflerText-Regular</td>
        <td>font-&lt;size&gt;-hoeflertext-regular</td>
    </tr>
    <tr>
        <td>Kailasa</td>
        <td>font-&lt;size&gt;-kailasa</td>
    </tr>
    <tr>
        <td>Kailasa-Bold</td>
        <td>font-&lt;size&gt;-kailasa-bold</td>
    </tr>
    <tr>
        <td>KannadaSangamMN</td>
        <td>font-&lt;size&gt;-kannadasangammn</td>
    </tr>
    <tr>
        <td>KannadaSangamMN-Bold</td>
        <td>font-&lt;size&gt;-kannadasangammn-bold</td>
    </tr>
    <tr>
        <td>MalayalamSangamMN</td>
        <td>font-&lt;size&gt;-malayalamsangammn</td>
    </tr>
    <tr>
        <td>MalayalamSangamMN-Bold</td>
        <td>font-&lt;size&gt;-malayalamsangammn-bold</td>
    </tr>
    <tr>
        <td>Marion-Bold</td>
        <td>font-&lt;size&gt;-marion-bold</td>
    </tr>
    <tr>
        <td>Marion-Italic</td>
        <td>font-&lt;size&gt;-marion-italic</td>
    </tr>
    <tr>
        <td>Marion-Regular</td>
        <td>font-&lt;size&gt;-marion-regular</td>
    </tr>
    <tr>
        <td>MarkerFelt-Thin</td>
        <td>font-&lt;size&gt;-markerfelt-thin</td>
    </tr>
    <tr>
        <td>MarkerFelt-Wide</td>
        <td>font-&lt;size&gt;-markerfelt-wide</td>
    </tr>
    <tr>
        <td>Noteworthy-Bold</td>
        <td>font-&lt;size&gt;-noteworthy-bold</td>
    </tr>
    <tr>
        <td>Noteworthy-Light</td>
        <td>font-&lt;size&gt;-noteworthy-light</td>
    </tr>
    <tr>
        <td>Optima-Bold</td>
        <td>font-&lt;size&gt;-optima-bold</td>
    </tr>
    <tr>
        <td>Optima-BoldItalic</td>
        <td>font-&lt;size&gt;-optima-bolditalic</td>
    </tr>
    <tr>
        <td>Optima-ExtraBlack</td>
        <td>font-&lt;size&gt;-optima-extrablack</td>
    </tr>
    <tr>
        <td>Optima-Italic</td>
        <td>font-&lt;size&gt;-optima-italic</td>
    </tr>
    <tr>
        <td>Optima-Regular</td>
        <td>font-&lt;size&gt;-optima-regular</td>
    </tr>
    <tr>
        <td>OriyaSangamMN</td>
        <td>font-&lt;size&gt;-oriyasangammn</td>
    </tr>
    <tr>
        <td>OriyaSangamMN-Bold</td>
        <td>font-&lt;size&gt;-oriyasangammn-bold</td>
    </tr>
    <tr>
        <td>Palatino-Bold</td>
        <td>font-&lt;size&gt;-palatino-bold</td>
    </tr>
    <tr>
        <td>Palatino-BoldItalic</td>
        <td>font-&lt;size&gt;-palatino-bolditalic</td>
    </tr>
    <tr>
        <td>Palatino-Italic</td>
        <td>font-&lt;size&gt;-palatino-italic</td>
    </tr>
    <tr>
        <td>Palatino-Roman</td>
        <td>font-&lt;size&gt;-palatino-roman</td>
    </tr>
    <tr>
        <td>Papyrus</td>
        <td>font-&lt;size&gt;-papyrus</td>
    </tr>
    <tr>
        <td>Papyrus-Condensed</td>
        <td>font-&lt;size&gt;-papyrus-condensed</td>
    </tr>
    <tr>
        <td>PartyLetPlain</td>
        <td>font-&lt;size&gt;-partyletplain</td>
    </tr>
    <tr>
        <td>SinhalaSangamMN</td>
        <td>font-&lt;size&gt;-sinhalasangammn</td>
    </tr>
    <tr>
        <td>SinhalaSangamMN-Bold</td>
        <td>font-&lt;size&gt;-sinhalasangammn-bold</td>
    </tr>
    <tr>
        <td>SnellRoundhand</td>
        <td>font-&lt;size&gt;-snellroundhand</td>
    </tr>
    <tr>
        <td>SnellRoundhand-Black</td>
        <td>font-&lt;size&gt;-snellroundhand-black</td>
    </tr>
    <tr>
        <td>SnellRoundhand-Bold</td>
        <td>font-&lt;size&gt;-snellroundhand-bold</td>
    </tr>
    <tr>
        <td>Symbol</td>
        <td>font-&lt;size&gt;-symbol</td>
    </tr>
    <tr>
        <td>TamilSangamMN</td>
        <td>font-&lt;size&gt;-tamilsangammn</td>
    </tr>
    <tr>
        <td>TamilSangamMN-Bold</td>
        <td>font-&lt;size&gt;-tamilsangammn-bold</td>
    </tr>
    <tr>
        <td>TeluguSangamMN</td>
        <td>font-&lt;size&gt;-telugusangammn</td>
    </tr>
    <tr>
        <td>TeluguSangamMN-Bold</td>
        <td>font-&lt;size&gt;-telugusangammn-bold</td>
    </tr>
    <tr>
        <td>Thonburi</td>
        <td>font-&lt;size&gt;-thonburi</td>
    </tr>
    <tr>
        <td>Thonburi-Bold</td>
        <td>font-&lt;size&gt;-thonburi-bold</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldItalicMT</td>
        <td>font-&lt;size&gt;-timesnewromanps-bolditalicmt</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldMT</td>
        <td>font-&lt;size&gt;-timesnewromanps-boldmt</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-ItalicMT</td>
        <td>font-&lt;size&gt;-timesnewromanps-italicmt</td>
    </tr>
    <tr>
        <td>TimesNewRomanPSMT</td>
        <td>font-&lt;size&gt;-timesnewromanpsmt</td>
    </tr>
    <tr>
        <td>Trebuchet-BoldItalic</td>
        <td>font-&lt;size&gt;-trebuchet-bolditalic</td>
    </tr>
    <tr>
        <td>TrebuchetMS</td>
        <td>font-&lt;size&gt;-trebuchetms</td>
    </tr>
    <tr>
        <td>TrebuchetMS-Bold</td>
        <td>font-&lt;size&gt;-trebuchetms-bold</td>
    </tr>
    <tr>
        <td>TrebuchetMS-Italic</td>
        <td>font-&lt;size&gt;-trebuchetms-italic</td>
    </tr>
    <tr>
        <td>Verdana</td>
        <td>font-&lt;size&gt;-verdana</td>
    </tr>
    <tr>
        <td>Verdana-Bold</td>
        <td>font-&lt;size&gt;-verdana-bold</td>
    </tr>
    <tr>
        <td>Verdana-BoldItalic</td>
        <td>font-&lt;size&gt;-verdana-bolditalic</td>
    </tr>
    <tr>
        <td>Verdana-Italic</td>
        <td>font-&lt;size&gt;-verdana-italic</td>
    </tr>
    <tr>
        <td>ZapfDingbatsITC</td>
        <td>font-&lt;size&gt;-zapfdingbatsitc</td>
    </tr>
    <tr>
        <td>Zapfino</td>
        <td>font-&lt;size&gt;-zapfino</td>
    </tr> 
</table>