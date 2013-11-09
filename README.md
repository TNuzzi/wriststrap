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

Available fonts in iOS (include iOS 7)


In addition to the default font in the app.tss there is a provided tss file 'wriststrap/themes/wristrap/style/fonts.tss' that contains all of the available fonts on the iOS platform (200 in all).  Originally they were included in the app.tss however it added 20k lines to file and where taken out.  If you need, you can copy font sets into the app.tss or all of them back into the app.tss however the file gets hard to edit.

Supported Glyph libraries
-------------------------
Wriststrap has support for the following Glyph libraries:
* [Glyphish](http://www.glyphish.com/)
* [Glyphicons](http://glyphicons.com/) (Free version)

### Glyph libraries installation:
Simply unzip the Glyph libraries in the `wriststrap/themes/wriststrap/assets` and name the directories appropriately (the name of the library all lower case, no version numbers just the name).  The framework will reference these locations for the images.

Limitations
-----------

Available iOS fonts (includes iOS 7)
------------------------------------
<table>
     <thead>
        <tr>
          <th>Font Names (in iOS)</th>
          <th>Font TSS names</th>
        </tr>
    </thead>
    <tr>
        <td>AcademyEngravedLetPlain</td>
        <tr>font-&lt;size&gt;-Academyengravedletplain</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter</td>
        <tr>font-&lt;size&gt;-americantypewriter</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter-Bold</td>
        <tr>font-&lt;size&gt;-americantypewriter-bold</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter-Condensed</td>
        <tr>font-&lt;size&gt;-americantypewriter-condensed</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedBold</td>
        <tr>font-&lt;size&gt;-americantypewriter-condensedbold</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedLight</td>
        <tr>font-&lt;size&gt;-americantypewriter-condensedlight</tr>
    </tr>
    <tr>
        <td>AmericanTypewriter-Light</td>
        <tr>font-&lt;size&gt;-americantypewriter-light</tr>
    </tr>
    <tr>
        <td>AppleColorEmoji</td>
        <tr>font-&lt;size&gt;-applecoloremoji</tr>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Bold</td>
        <tr>font-&lt;size&gt;-applesdgothicneo-bold</tr>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Medium</td>
        <tr>font-&lt;size&gt;-applesdgothicneo-medium</tr>
    </tr>
    <tr>
        <td>ArialMT</td>
        <tr>font-&lt;size&gt;-arialmt</tr>
    </tr>
    <tr>
        <td>Arial-BoldItalicMT</td>
        <tr>font-&lt;size&gt;-arial-bolditalicmt</tr>
    </tr>
    <tr>
        <td>Arial-BoldMT</td>
        <tr>font-&lt;size&gt;-arial-boldmt</tr>
    </tr>
    <tr>
        <td>Arial-ItalicMT</td>
        <tr>font-&lt;size&gt;-arial-italicmt</tr>
    </tr>
    <tr>
        <td>ArialHebrew</td>
        <tr>font-&lt;size&gt;-arialhebrew</tr>
    </tr>
    <tr>
        <td>ArialHebrew-Bold</td>
        <tr>font-&lt;size&gt;-arialhebrew-bold</tr>
    </tr>
    <tr>
        <td>ArialRoundedMTBold</td>
        <tr>font-&lt;size&gt;-arialroundedmtbold</tr>
    </tr>
    <tr>
        <td>Avenir-Black</td>
        <tr>font-&lt;size&gt;-avenir-black</tr>
    </tr>
    <tr>
        <td>Avenir-BlackOblique</td>
        <tr>font-&lt;size&gt;-avenir-blackoblique</tr>
    </tr>
    <tr>
        <td>Avenir-Book</td>
        <tr>font-&lt;size&gt;-avenir-book</tr>
    </tr>
    <tr>
        <td>Avenir-BookOblique</td>
        <tr>font-&lt;size&gt;-avenir-bookoblique</tr>
    </tr>
    <tr>
        <td>Avenir-Heavy</td>
        <tr>font-&lt;size&gt;-avenir-heavy</tr>
    </tr>
    <tr>
        <td>Avenir-HeavyOblique</td>
        <tr>font-&lt;size&gt;-avenir-heavyoblique</tr>
    </tr>
    <tr>
        <td>Avenir-Light</td>
        <tr>font-&lt;size&gt;-avenir-light</tr>
    </tr>
    <tr>
        <td>Avenir-LightOblique</td>
        <tr>font-&lt;size&gt;-avenir-lightoblique</tr>
    </tr>
    <tr>
        <td>Avenir-Medium</td>
        <tr>font-&lt;size&gt;-avenir-medium</tr>
    </tr>
    <tr>
        <td>Avenir-MediumOblique</td>
        <tr>font-&lt;size&gt;-avenir-mediumoblique</tr>
    </tr>
    <tr>
        <td>Avenir-Oblique</td>
        <tr>font-&lt;size&gt;-avenir-oblique</tr>
    </tr>
    <tr>
        <td>Avenir-Roman</td>
        <tr>font-&lt;size&gt;-avenir-roman</tr>
    </tr>
    <tr>
        <td>AvenirNext-Bold</td>
        <tr>font-&lt;size&gt;-avenirnext-bold</tr>
    </tr>
    <tr>
        <td>AvenirNext-BoldItalic</td>
        <tr>font-&lt;size&gt;-avenirnext-bolditalic</tr>
    </tr>
    <tr>
        <td>AvenirNext-DemiBold</td>
        <tr>font-&lt;size&gt;-avenirnext-demibold</tr>
    </tr>
    <tr>
        <td>AvenirNext-DemiBoldItalic</td>
        <tr>font-&lt;size&gt;-avenirnext-demibolditalic</tr>
    </tr>
    <tr>
        <td>AvenirNext-Heavy</td>
        <tr>font-&lt;size&gt;-avenirnext-heavy</tr>
    </tr>
    <tr>
        <td>AvenirNext-HeavyItalic</td>
        <tr>font-&lt;size&gt;-avenirnext-heavyitalic</tr>
    </tr>
    <tr>
        <td>AvenirNext-Italic</td>
        <tr>font-&lt;size&gt;-avenirnext-italic</tr>
    </tr>
    <tr>
        <td>AvenirNext-Medium</td>
        <tr>font-&lt;size&gt;-avenirnext-medium</tr>
    </tr>
    <tr>
        <td>AvenirNext-MediumItalic</td>
        <tr>font-&lt;size&gt;-avenirnext-mediumitalic</tr>
    </tr>
    <tr>
        <td>AvenirNext-Regular</td>
        <tr>font-&lt;size&gt;-avenirnext-regular</tr>
    </tr>
    <tr>
        <td>AvenirNext-UltraLight</td>
        <tr>font-&lt;size&gt;-avenirnext-ultralight</tr>
    </tr>
    <tr>
        <td>AvenirNext-UltraLightItalic</td>
        <tr>font-&lt;size&gt;-avenirnext-ultralightitalic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Bold</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-bold</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-BoldItalic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-bolditalic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBold</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-demibold</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBoldItalic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-demibolditalic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Heavy</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-heavy</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-HeavyItalic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-heavyitalic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Italic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-italic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Medium</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-medium</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-MediumItalic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-mediumitalic</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Regular</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-regular</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLight</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-ultralight</tr>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLightItalic</td>
        <tr>font-&lt;size&gt;-avenirnextcondensed-ultralightitalic</tr>
    </tr>
    <tr>
        <td>BanglaSangamMN</td>
        <tr>font-&lt;size&gt;-banglasangammn</tr>
    </tr>
    <tr>
        <td>BanglaSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-banglasangammn-bold</tr>
    </tr>
    <tr>
        <td>Baskerville</td>
        <tr>font-&lt;size&gt;-baskerville</tr>
    </tr>
    <tr>
        <td>Baskerville-Bold</td>
        <tr>font-&lt;size&gt;-baskerville-bold</tr>
    </tr>
    <tr>
        <td>Baskerville-BoldItalic</td>
        <tr>font-&lt;size&gt;-baskerville-bolditalic</tr>
    </tr>
    <tr>
        <td>Baskerville-Italic</td>
        <tr>font-&lt;size&gt;-baskerville-italic</tr>
    </tr>
    <tr>
        <td>Baskerville-SemiBold</td>
        <tr>font-&lt;size&gt;-baskerville-semibold</tr>
    </tr>
    <tr>
        <td>Baskerville-SemiBoldItalic</td>
        <tr>font-&lt;size&gt;-baskerville-semibolditalic</tr>
    </tr>
    <tr>
        <td>BodoniOrnamentsITCTT</td>
        <tr>font-&lt;size&gt;-bodoniornamentsitctt</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Bold</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoitctt-bold</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Book</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoitctt-book</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-BookIta</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoitctt-bookita</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Bold</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoositctt-bold</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Book</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoositctt-book</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-BookIt</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoositctt-bookit</tr>
    </tr>
    <tr>
        <td>BodoniSvtyTwoSCITCTT-Book</td>
        <tr>font-&lt;size&gt;-bodonisvtytwoscitctt-book</tr>
    </tr>
    <tr>
        <td>BradleyHandITCTT-Bold</td>
        <tr>font-&lt;size&gt;-bradleyhanditctt-bold</tr>
    </tr>
    <tr>
        <td>ChalkboardSE-Bold</td>
        <tr>font-&lt;size&gt;-chalkboardse-bold</tr>
    </tr>
    <tr>
        <td>ChalkboardSE-Light</td>
        <tr>font-&lt;size&gt;-chalkboardse-light</tr>
    </tr>
    <tr>
        <td>ChalkboardSE-Regular</td>
        <tr>font-&lt;size&gt;-chalkboardse-regular</tr>
    </tr>
    <tr>
        <td>Chalkduster</td>
        <tr>font-&lt;size&gt;-chalkduster</tr>
    </tr>
    <tr>
        <td>Cochin</td>
        <tr>font-&lt;size&gt;-cochin</tr>
    </tr>
    <tr>
        <td>Cochin-Bold</td>
        <tr>font-&lt;size&gt;-cochin-bold</tr>
    </tr>
    <tr>
        <td>Cochin-BoldItalic</td>
        <tr>font-&lt;size&gt;-cochin-bolditalic</tr>
    </tr>
    <tr>
        <td>Cochin-Italic</td>
        <tr>font-&lt;size&gt;-cochin-italic</tr>
    </tr>
    <tr>
        <td>Copperplate</td>
        <tr>font-&lt;size&gt;-copperplate</tr>
    </tr>
    <tr>
        <td>Copperplate-Bold</td>
        <tr>font-&lt;size&gt;-copperplate-bold</tr>
    </tr>
    <tr>
        <td>Copperplate-Light</td>
        <tr>font-&lt;size&gt;-copperplate-light</tr>
    </tr>
    <tr>
        <td>Courier</td>
        <tr>font-&lt;size&gt;-courier</tr>
    </tr>
    <tr>
        <td>Courier-Bold</td>
        <tr>font-&lt;size&gt;-courier-bold</tr>
    </tr>
    <tr>
        <td>Courier-BoldOblique</td>
        <tr>font-&lt;size&gt;-courier-boldoblique</tr>
    </tr>
    <tr>
        <td>Courier-Oblique</td>
        <tr>font-&lt;size&gt;-courier-oblique</tr>
    </tr>
    <tr>
        <td>CourierNewPS-BoldItalicMT</td>
        <tr>font-&lt;size&gt;-couriernewps-bolditalicmt</tr>
    </tr>
    <tr>
        <td>CourierNewPS-BoldMT</td>
        <tr>font-&lt;size&gt;-couriernewps-boldmt</tr>
    </tr>
    <tr>
        <td>CourierNewPS-ItalicMT</td>
        <tr>font-&lt;size&gt;-couriernewps-italicmt</tr>
    </tr>
    <tr>
        <td>CourierNewPSMT</td>
        <tr>font-&lt;size&gt;-couriernewpsmt</tr>
    </tr>
    <tr>
        <td>DBLCDTempBlack</td>
        <tr>font-&lt;size&gt;-dblcdtempblack</tr>
    </tr>
    <tr>
        <td>DevanagariSangamMN</td>
        <tr>font-&lt;size&gt;-devanagarisangammn</tr>
    </tr>
    <tr>
        <td>DevanagariSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-devanagarisangammn-bold</tr>
    </tr>
    <tr>
        <td>Didot</td>
        <tr>font-&lt;size&gt;-didot</tr>
    </tr>
    <tr>
        <td>Didot-Bold</td>
        <tr>font-&lt;size&gt;-didot-bold</tr>
    </tr>
    <tr>
        <td>Didot-Italic</td>
        <tr>font-&lt;size&gt;-didot-italic</tr>
    </tr>
    <tr>
        <td>EuphemiaUCAS</td>
        <tr>font-&lt;size&gt;-euphemiaucas</tr>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Bold</td>
        <tr>font-&lt;size&gt;-euphemiaucas-bold</tr>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Italic</td>
        <tr>font-&lt;size&gt;-euphemiaucas-italic</tr>
    </tr>
    <tr>
        <td>Futura-CondensedExtraBold</td>
        <tr>font-&lt;size&gt;-futura-condensedextrabold</tr>
    </tr>
    <tr>
        <td>Futura-CondensedMedium</td>
        <tr>font-&lt;size&gt;-futura-condensedmedium</tr>
    </tr>
    <tr>
        <td>Futura-Medium</td>
        <tr>font-&lt;size&gt;-futura-medium</tr>
    </tr>
    <tr>
        <td>Futura-MediumItalic</td>
        <tr>font-&lt;size&gt;-futura-mediumitalic</tr>
    </tr>
    <tr>
        <td>GeezaPro</td>
        <tr>font-&lt;size&gt;-geezapro</tr>
    </tr>
    <tr>
        <td>GeezaPro-Bold</td>
        <tr>font-&lt;size&gt;-geezapro-bold</tr>
    </tr>
    <tr>
        <td>Georgia</td>
        <tr>font-&lt;size&gt;-georgia</tr>
    </tr>
    <tr>
        <td>Georgia-Bold</td>
        <tr>font-&lt;size&gt;-georgia-bold</tr>
    </tr>
    <tr>
        <td>Georgia-BoldItalic</td>
        <tr>font-&lt;size&gt;-georgia-bolditalic</tr>
    </tr>
    <tr>
        <td>Georgia-Italic</td>
        <tr>font-&lt;size&gt;-georgia-italic</tr>
    </tr>
    <tr>
        <td>GillSans</td>
        <tr>font-&lt;size&gt;-gillsans</tr>
    </tr>
    <tr>
        <td>GillSans-Bold</td>
        <tr>font-&lt;size&gt;-gillsans-bold</tr>
    </tr>
    <tr>
        <td>GillSans-BoldItalic</td>
        <tr>font-&lt;size&gt;-gillsans-bolditalic</tr>
    </tr>
    <tr>
        <td>GillSans-Italic</td>
        <tr>font-&lt;size&gt;-gillsans-italic</tr>
    </tr>
    <tr>
        <td>GillSans-Light</td>
        <tr>font-&lt;size&gt;-gillsans-light</tr>
    </tr>
    <tr>
        <td>GillSans-LightItalic</td>
        <tr>font-&lt;size&gt;-gillsans-lightitalic</tr>
    </tr>
    <tr>
        <td>GujaratiSangamMN</td>
        <tr>font-&lt;size&gt;-gujaratisangammn</tr>
    </tr>
    <tr>
        <td>GujaratiSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-gujaratisangammn-bold</tr>
    </tr>
    <tr>
        <td>GurmukhiMN</td>
        <tr>font-&lt;size&gt;-gurmukhimn</tr>
    </tr>
    <tr>
        <td>GurmukhiMN-Bold</td>
        <tr>font-&lt;size&gt;-gurmukhimn-bold</tr>
    </tr>
    <tr>
        <td>STHeitiSC-Light</td>
        <tr>font-&lt;size&gt;-stheitisc-light</tr>
    </tr>
    <tr>
        <td>STHeitiSC-Medium</td>
        <tr>font-&lt;size&gt;-stheitisc-medium</tr>
    </tr>
    <tr>
        <td>STHeitiTC-Light</td>
        <tr>font-&lt;size&gt;-stheititc-light</tr>
    </tr>
    <tr>
        <td>STHeitiTC-Medium</td>
        <tr>font-&lt;size&gt;-stheititc-medium</tr>
    </tr>
    <tr>
        <td>Helvetica</td>
        <tr>font-&lt;size&gt;-helvetica</tr>
    </tr>
    <tr>
        <td>Helvetica-Bold</td>
        <tr>font-&lt;size&gt;-helvetica-bold</tr>
    </tr>
    <tr>
        <td>Helvetica-BoldOblique</td>
        <tr>font-&lt;size&gt;-helvetica-boldoblique</tr>
    </tr>
    <tr>
        <td>Helvetica-Light</td>
        <tr>font-&lt;size&gt;-helvetica-light</tr>
    </tr>
    <tr>
        <td>Helvetica-LightOblique</td>
        <tr>font-&lt;size&gt;-helvetica-lightoblique</tr>
    </tr>
    <tr>
        <td>Helvetica-Oblique</td>
        <tr>font-&lt;size&gt;-helvetica-oblique</tr>
    </tr>
    <tr>
        <td>HelveticaNeue</td>
        <tr>font-&lt;size&gt;-helveticaneue</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-Bold</td>
        <tr>font-&lt;size&gt;-helveticaneue-bold</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-BoldItalic</td>
        <tr>font-&lt;size&gt;-helveticaneue-bolditalic</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBlack</td>
        <tr>font-&lt;size&gt;-helveticaneue-condensedblack</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBold</td>
        <tr>font-&lt;size&gt;-helveticaneue-condensedbold</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-Italic</td>
        <tr>font-&lt;size&gt;-helveticaneue-italic</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-Light</td>
        <tr>font-&lt;size&gt;-helveticaneue-light</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-LightItalic</td>
        <tr>font-&lt;size&gt;-helveticaneue-lightitalic</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-Medium</td>
        <tr>font-&lt;size&gt;-helveticaneue-medium</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLight</td>
        <tr>font-&lt;size&gt;-helveticaneue-ultralight</tr>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLightItalic</td>
        <tr>font-&lt;size&gt;-helveticaneue-ultralightitalic</tr>
    </tr>
    <tr>
        <td>HiraKakuProN-W3</td>
        <tr>font-&lt;size&gt;-hirakakupron-w3</tr>
    </tr>
    <tr>
        <td>HiraKakuProN-W6</td>
        <tr>font-&lt;size&gt;-hirakakupron-w6</tr>
    </tr>
    <tr>
        <td>HiraMinProN-W3</td>
        <tr>font-&lt;size&gt;-hiraminpron-w3</tr>
    </tr>
    <tr>
        <td>HiraMinProN-W6</td>
        <tr>font-&lt;size&gt;-hiraminpron-w6</tr>
    </tr>
    <tr>
        <td>HoeflerText-Black</td>
        <tr>font-&lt;size&gt;-hoeflertext-black</tr>
    </tr>
    <tr>
        <td>HoeflerText-BlackItalic</td>
        <tr>font-&lt;size&gt;-hoeflertext-blackitalic</tr>
    </tr>
    <tr>
        <td>HoeflerText-Italic</td>
        <tr>font-&lt;size&gt;-hoeflertext-italic</tr>
    </tr>
    <tr>
        <td>HoeflerText-Regular</td>
        <tr>font-&lt;size&gt;-hoeflertext-regular</tr>
    </tr>
    <tr>
        <td>Kailasa</td>
        <tr>font-&lt;size&gt;-kailasa</tr>
    </tr>
    <tr>
        <td>Kailasa-Bold</td>
        <tr>font-&lt;size&gt;-kailasa-bold</tr>
    </tr>
    <tr>
        <td>KannadaSangamMN</td>
        <tr>font-&lt;size&gt;-kannadasangammn</tr>
    </tr>
    <tr>
        <td>KannadaSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-kannadasangammn-bold</tr>
    </tr>
    <tr>
        <td>MalayalamSangamMN</td>
        <tr>font-&lt;size&gt;-malayalamsangammn</tr>
    </tr>
    <tr>
        <td>MalayalamSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-malayalamsangammn-bold</tr>
    </tr>
    <tr>
        <td>Marion-Bold</td>
        <tr>font-&lt;size&gt;-marion-bold</tr>
    </tr>
    <tr>
        <td>Marion-Italic</td>
        <tr>font-&lt;size&gt;-marion-italic</tr>
    </tr>
    <tr>
        <td>Marion-Regular</td>
        <tr>font-&lt;size&gt;-marion-regular</tr>
    </tr>
    <tr>
        <td>MarkerFelt-Thin</td>
        <tr>font-&lt;size&gt;-markerfelt-thin</tr>
    </tr>
    <tr>
        <td>MarkerFelt-Wide</td>
        <tr>font-&lt;size&gt;-markerfelt-wide</tr>
    </tr>
    <tr>
        <td>Noteworthy-Bold</td>
        <tr>font-&lt;size&gt;-noteworthy-bold</tr>
    </tr>
    <tr>
        <td>Noteworthy-Light</td>
        <tr>font-&lt;size&gt;-noteworthy-light</tr>
    </tr>
    <tr>
        <td>Optima-Bold</td>
        <tr>font-&lt;size&gt;-optima-bold</tr>
    </tr>
    <tr>
        <td>Optima-BoldItalic</td>
        <tr>font-&lt;size&gt;-optima-bolditalic</tr>
    </tr>
    <tr>
        <td>Optima-ExtraBlack</td>
        <tr>font-&lt;size&gt;-optima-extrablack</tr>
    </tr>
    <tr>
        <td>Optima-Italic</td>
        <tr>font-&lt;size&gt;-optima-italic</tr>
    </tr>
    <tr>
        <td>Optima-Regular</td>
        <tr>font-&lt;size&gt;-optima-regular</tr>
    </tr>
    <tr>
        <td>OriyaSangamMN</td>
        <tr>font-&lt;size&gt;-oriyasangammn</tr>
    </tr>
    <tr>
        <td>OriyaSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-oriyasangammn-bold</tr>
    </tr>
    <tr>
        <td>Palatino-Bold</td>
        <tr>font-&lt;size&gt;-palatino-bold</tr>
    </tr>
    <tr>
        <td>Palatino-BoldItalic</td>
        <tr>font-&lt;size&gt;-palatino-bolditalic</tr>
    </tr>
    <tr>
        <td>Palatino-Italic</td>
        <tr>font-&lt;size&gt;-palatino-italic</tr>
    </tr>
    <tr>
        <td>Palatino-Roman</td>
        <tr>font-&lt;size&gt;-palatino-roman</tr>
    </tr>
    <tr>
        <td>Papyrus</td>
        <tr>font-&lt;size&gt;-papyrus</tr>
    </tr>
    <tr>
        <td>Papyrus-Condensed</td>
        <tr>font-&lt;size&gt;-papyrus-condensed</tr>
    </tr>
    <tr>
        <td>PartyLetPlain</td>
        <tr>font-&lt;size&gt;-partyletplain</tr>
    </tr>
    <tr>
        <td>SinhalaSangamMN</td>
        <tr>font-&lt;size&gt;-sinhalasangammn</tr>
    </tr>
    <tr>
        <td>SinhalaSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-sinhalasangammn-bold</tr>
    </tr>
    <tr>
        <td>SnellRoundhand</td>
        <tr>font-&lt;size&gt;-snellroundhand</tr>
    </tr>
    <tr>
        <td>SnellRoundhand-Black</td>
        <tr>font-&lt;size&gt;-snellroundhand-black</tr>
    </tr>
    <tr>
        <td>SnellRoundhand-Bold</td>
        <tr>font-&lt;size&gt;-snellroundhand-bold</tr>
    </tr>
    <tr>
        <td>Symbol</td>
        <tr>font-&lt;size&gt;-symbol</tr>
    </tr>
    <tr>
        <td>TamilSangamMN</td>
        <tr>font-&lt;size&gt;-tamilsangammn</tr>
    </tr>
    <tr>
        <td>TamilSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-tamilsangammn-bold</tr>
    </tr>
    <tr>
        <td>TeluguSangamMN</td>
        <tr>font-&lt;size&gt;-telugusangammn</tr>
    </tr>
    <tr>
        <td>TeluguSangamMN-Bold</td>
        <tr>font-&lt;size&gt;-telugusangammn-bold</tr>
    </tr>
    <tr>
        <td>Thonburi</td>
        <tr>font-&lt;size&gt;-thonburi</tr>
    </tr>
    <tr>
        <td>Thonburi-Bold</td>
        <tr>font-&lt;size&gt;-thonburi-bold</tr>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldItalicMT</td>
        <tr>font-&lt;size&gt;-timesnewromanps-bolditalicmt</tr>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldMT</td>
        <tr>font-&lt;size&gt;-timesnewromanps-boldmt</tr>
    </tr>
    <tr>
        <td>TimesNewRomanPS-ItalicMT</td>
        <tr>font-&lt;size&gt;-timesnewromanps-italicmt</tr>
    </tr>
    <tr>
        <td>TimesNewRomanPSMT</td>
        <tr>font-&lt;size&gt;-timesnewromanpsmt</tr>
    </tr>
    <tr>
        <td>Trebuchet-BoldItalic</td>
        <tr>font-&lt;size&gt;-trebuchet-bolditalic</tr>
    </tr>
    <tr>
        <td>TrebuchetMS</td>
        <tr>font-&lt;size&gt;-trebuchetms</tr>
    </tr>
    <tr>
        <td>TrebuchetMS-Bold</td>
        <tr>font-&lt;size&gt;-trebuchetms-bold</tr>
    </tr>
    <tr>
        <td>TrebuchetMS-Italic</td>
        <tr>font-&lt;size&gt;-trebuchetms-italic</tr>
    </tr>
    <tr>
        <td>Verdana</td>
        <tr>font-&lt;size&gt;-verdana</tr>
    </tr>
    <tr>
        <td>Verdana-Bold</td>
        <tr>font-&lt;size&gt;-verdana-bold</tr>
    </tr>
    <tr>
        <td>Verdana-BoldItalic</td>
        <tr>font-&lt;size&gt;-verdana-bolditalic</tr>
    </tr>
    <tr>
        <td>Verdana-Italic</td>
        <tr>font-&lt;size&gt;-verdana-italic</tr>
    </tr>
    <tr>
        <td>ZapfDingbatsITC</td>
        <tr>font-&lt;size&gt;-zapfdingbatsitc</tr>
    </tr>
    <tr>
        <td>Zapfino</td>
        <tr>font-&lt;size&gt;-zapfino</tr>
    </tr> 
</table>