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
<table>
     <thead>
        <tr>
          <th>Font Sizes</th>
        </tr>
    </thead>
    <tr>
        <td>AcademyEngravedLetPlain</td>
    </tr>
    <tr>
        <td>AmericanTypewriter</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Bold</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Condensed</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedBold</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-CondensedLight</td>
    </tr>
    <tr>
        <td>AmericanTypewriter-Light</td>
    </tr>
    <tr>
        <td>AppleColorEmoji</td>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Bold</td>
    </tr>
    <tr>
        <td>AppleSDGothicNeo-Medium</td>
    </tr>
    <tr>
        <td>ArialMT</td>
    </tr>
    <tr>
        <td>Arial-BoldItalicMT</td>
    </tr>
    <tr>
        <td>Arial-BoldMT</td>
    </tr>
    <tr>
        <td>Arial-ItalicMT</td>
    </tr>
    <tr>
        <td>ArialHebrew</td>
    </tr>
    <tr>
        <td>ArialHebrew-Bold</td>
    </tr>
    <tr>
        <td>ArialRoundedMTBold</td>
    </tr>
    <tr>
        <td>Avenir-Black</td>
    </tr>
    <tr>
        <td>Avenir-BlackOblique</td>
    </tr>
    <tr>
        <td>Avenir-Book</td>
    </tr>
    <tr>
        <td>Avenir-BookOblique</td>
    </tr>
    <tr>
        <td>Avenir-Heavy</td>
    </tr>
    <tr>
        <td>Avenir-HeavyOblique</td>
    </tr>
    <tr>
        <td>Avenir-Light</td>
    </tr>
    <tr>
        <td>Avenir-LightOblique</td>
    </tr>
    <tr>
        <td>Avenir-Medium</td>
    </tr>
    <tr>
        <td>Avenir-MediumOblique</td>
    </tr>
    <tr>
        <td>Avenir-Oblique</td>
    </tr>
    <tr>
        <td>Avenir-Roman</td>
    </tr>
    <tr>
        <td>AvenirNext-Bold</td>
    </tr>
    <tr>
        <td>AvenirNext-BoldItalic</td>
    </tr>
    <tr>
        <td>AvenirNext-DemiBold</td>
    </tr>
    <tr>
        <td>AvenirNext-DemiBoldItalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Heavy</td>
    </tr>
    <tr>
        <td>AvenirNext-HeavyItalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Italic</td>
    </tr>
    <tr>
        <td>AvenirNext-Medium</td>
    </tr>
    <tr>
        <td>AvenirNext-MediumItalic</td>
    </tr>
    <tr>
        <td>AvenirNext-Regular</td>
    </tr>
    <tr>
        <td>AvenirNext-UltraLight</td>
    </tr>
    <tr>
        <td>AvenirNext-UltraLightItalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Bold</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-BoldItalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBold</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-DemiBoldItalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Heavy</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-HeavyItalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Italic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Medium</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-MediumItalic</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-Regular</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLight</td>
    </tr>
    <tr>
        <td>AvenirNextCondensed-UltraLightItalic</td>
    </tr>
    <tr>
        <td>BanglaSangamMN</td>
    </tr>
    <tr>
        <td>BanglaSangamMN-Bold</td>
    </tr>
    <tr>
        <td>Baskerville</td>
    </tr>
    <tr>
        <td>Baskerville-Bold</td>
    </tr>
    <tr>
        <td>Baskerville-BoldItalic</td>
    </tr>
    <tr>
        <td>Baskerville-Italic</td>
    </tr>
    <tr>
        <td>Baskerville-SemiBold</td>
    </tr>
    <tr>
        <td>Baskerville-SemiBoldItalic</td>
    </tr>
    <tr>
        <td>BodoniOrnamentsITCTT</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Bold</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-Book</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoITCTT-BookIta</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Bold</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-Book</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoOSITCTT-BookIt</td>
    </tr>
    <tr>
        <td>BodoniSvtyTwoSCITCTT-Book</td>
    </tr>
    <tr>
        <td>BradleyHandITCTT-Bold</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Bold</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Light</td>
    </tr>
    <tr>
        <td>ChalkboardSE-Regular</td>
    </tr>
    <tr>
        <td>Chalkduster</td>
    </tr>
    <tr>
        <td>Cochin</td>
    </tr>
    <tr>
        <td>Cochin-Bold</td>
    </tr>
    <tr>
        <td>Cochin-BoldItalic</td>
    </tr>
    <tr>
        <td>Cochin-Italic</td>
    </tr>
    <tr>
        <td>Copperplate</td>
    </tr>
    <tr>
        <td>Copperplate-Bold</td>
    </tr>
    <tr>
        <td>Copperplate-Light</td>
    </tr>
    <tr>
        <td>Courier</td>
    </tr>
    <tr>
        <td>Courier-Bold</td>
    </tr>
    <tr>
        <td>Courier-BoldOblique</td>
    </tr>
    <tr>
        <td>Courier-Oblique</td>
    </tr>
    <tr>
        <td>CourierNewPS-BoldItalicMT</td>
    </tr>
    <tr>
        <td>CourierNewPS-BoldMT</td>
    </tr>
    <tr>
        <td>CourierNewPS-ItalicMT</td>
    </tr>
    <tr>
        <td>CourierNewPSMT</td>
    </tr>
    <tr>
        <td>DBLCDTempBlack</td>
    </tr>
    <tr>
        <td>DevanagariSangamMN</td>
    </tr>
    <tr>
        <td>DevanagariSangamMN-Bold</td>
    </tr>
    <tr>
        <td>Didot</td>
    </tr>
    <tr>
        <td>Didot-Bold</td>
    </tr>
    <tr>
        <td>Didot-Italic</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Bold</td>
    </tr>
    <tr>
        <td>EuphemiaUCAS-Italic</td>
    </tr>
    <tr>
        <td>Futura-CondensedExtraBold</td>
    </tr>
    <tr>
        <td>Futura-CondensedMedium</td>
    </tr>
    <tr>
        <td>Futura-Medium</td>
    </tr>
    <tr>
        <td>Futura-MediumItalic</td>
    </tr>
    <tr>
        <td>GeezaPro</td>
    </tr>
    <tr>
        <td>GeezaPro-Bold</td>
    </tr>
    <tr>
        <td>Georgia</td>
    </tr>
    <tr>
        <td>Georgia-Bold</td>
    </tr>
    <tr>
        <td>Georgia-BoldItalic</td>
    </tr>
    <tr>
        <td>Georgia-Italic</td>
    </tr>
    <tr>
        <td>GillSans</td>
    </tr>
    <tr>
        <td>GillSans-Bold</td>
    </tr>
    <tr>
        <td>GillSans-BoldItalic</td>
    </tr>
    <tr>
        <td>GillSans-Italic</td>
    </tr>
    <tr>
        <td>GillSans-Light</td>
    </tr>
    <tr>
        <td>GillSans-LightItalic</td>
    </tr>
    <tr>
        <td>GujaratiSangamMN</td>
    </tr>
    <tr>
        <td>GujaratiSangamMN-Bold</td>
    </tr>
    <tr>
        <td>GurmukhiMN</td>
    </tr>
    <tr>
        <td>GurmukhiMN-Bold</td>
    </tr>
    <tr>
        <td>STHeitiSC-Light</td>
    </tr>
    <tr>
        <td>STHeitiSC-Medium</td>
    </tr>
    <tr>
        <td>STHeitiTC-Light</td>
    </tr>
    <tr>
        <td>STHeitiTC-Medium</td>
    </tr>
    <tr>
        <td>Helvetica</td>
    </tr>
    <tr>
        <td>Helvetica-Bold</td>
    </tr>
    <tr>
        <td>Helvetica-BoldOblique</td>
    </tr>
    <tr>
        <td>Helvetica-Light</td>
    </tr>
    <tr>
        <td>Helvetica-LightOblique</td>
    </tr>
    <tr>
        <td>Helvetica-Oblique</td>
    </tr>
    <tr>
        <td>HelveticaNeue</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Bold</td>
    </tr>
    <tr>
        <td>HelveticaNeue-BoldItalic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBlack</td>
    </tr>
    <tr>
        <td>HelveticaNeue-CondensedBold</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Italic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Light</td>
    </tr>
    <tr>
        <td>HelveticaNeue-LightItalic</td>
    </tr>
    <tr>
        <td>HelveticaNeue-Medium</td>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLight</td>
    </tr>
    <tr>
        <td>HelveticaNeue-UltraLightItalic</td>
    </tr>
    <tr>
        <td>HiraKakuProN-W3</td>
    </tr>
    <tr>
        <td>HiraKakuProN-W6</td>
    </tr>
    <tr>
        <td>HiraMinProN-W3</td>
    </tr>
    <tr>
        <td>HiraMinProN-W6</td>
    </tr>
    <tr>
        <td>HoeflerText-Black</td>
    </tr>
    <tr>
        <td>HoeflerText-BlackItalic</td>
    </tr>
    <tr>
        <td>HoeflerText-Italic</td>
    </tr>
    <tr>
        <td>HoeflerText-Regular</td>
    </tr>
    <tr>
        <td>Kailasa</td>
    </tr>
    <tr>
        <td>Kailasa-Bold</td>
    </tr>
    <tr>
        <td>KannadaSangamMN</td>
    </tr>
    <tr>
        <td>KannadaSangamMN-Bold</td>
    </tr>
    <tr>
        <td>MalayalamSangamMN</td>
    </tr>
    <tr>
        <td>MalayalamSangamMN-Bold</td>
    </tr>
    <tr>
        <td>Marion-Bold</td>
    </tr>
    <tr>
        <td>Marion-Italic</td>
    </tr>
    <tr>
        <td>Marion-Regular</td>
    </tr>
    <tr>
        <td>MarkerFelt-Thin</td>
    </tr>
    <tr>
        <td>MarkerFelt-Wide</td>
    </tr>
    <tr>
        <td>Noteworthy-Bold</td>
    </tr>
    <tr>
        <td>Noteworthy-Light</td>
    </tr>
    <tr>
        <td>Optima-Bold</td>
    </tr>
    <tr>
        <td>Optima-BoldItalic</td>
    </tr>
    <tr>
        <td>Optima-ExtraBlack</td>
    </tr>
    <tr>
        <td>Optima-Italic</td>
    </tr>
    <tr>
        <td>Optima-Regular</td>
    </tr>
    <tr>
        <td>OriyaSangamMN</td>
    </tr>
    <tr>
        <td>OriyaSangamMN-Bold</td>
    </tr>
    <tr>
        <td>Palatino-Bold</td>
    </tr>
    <tr>
        <td>Palatino-BoldItalic</td>
    </tr>
    <tr>
        <td>Palatino-Italic</td>
    </tr>
    <tr>
        <td>Palatino-Roman</td>
    </tr>
    <tr>
        <td>Papyrus</td>
    </tr>
    <tr>
        <td>Papyrus-Condensed</td>
    </tr>
    <tr>
        <td>PartyLetPlain</td>
    </tr>
    <tr>
        <td>SinhalaSangamMN</td>
    </tr>
    <tr>
        <td>SinhalaSangamMN-Bold</td>
    </tr>
    <tr>
        <td>SnellRoundhand</td>
    </tr>
    <tr>
        <td>SnellRoundhand-Black</td>
    </tr>
    <tr>
        <td>SnellRoundhand-Bold</td>
    </tr>
    <tr>
        <td>Symbol</td>
    </tr>
    <tr>
        <td>TamilSangamMN</td>
    </tr>
    <tr>
        <td>TamilSangamMN-Bold</td>
    </tr>
    <tr>
        <td>TeluguSangamMN</td>
    </tr>
    <tr>
        <td>TeluguSangamMN-Bold</td>
    </tr>
    <tr>
        <td>Thonburi</td>
    </tr>
    <tr>
        <td>Thonburi-Bold</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldItalicMT</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-BoldMT</td>
    </tr>
    <tr>
        <td>TimesNewRomanPS-ItalicMT</td>
    </tr>
    <tr>
        <td>TimesNewRomanPSMT</td>
    </tr>
    <tr>
        <td>Trebuchet-BoldItalic</td>
    </tr>
    <tr>
        <td>TrebuchetMS</td>
    </tr>
    <tr>
        <td>TrebuchetMS-Bold</td>
    </tr>
    <tr>
        <td>TrebuchetMS-Italic</td>
    </tr>
    <tr>
        <td>Verdana</td>
    </tr>
    <tr>
        <td>Verdana-Bold</td>
    </tr>
    <tr>
        <td>Verdana-BoldItalic</td>
    </tr>
    <tr>
        <td>Verdana-Italic</td>
    </tr>
    <tr>
        <td>ZapfDingbatsITC</td>
    </tr>
    <tr>
        <td>Zapfino</td>
    </tr>
</table>