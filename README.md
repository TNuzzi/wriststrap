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
The goal of Wriststrap is to simplify the UI by have a set of tss classes that are globally available.  As with Bootstrap, you can override and/or add your own styling along with Wriststrap by using the [tss syling override mechanism](http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Styles_and_Themes-section-35621526_AlloyStylesandThemes-StylePriorities).  Wriststrap is intended to be used as a starting point for developing a rich set of tss libraries for styling your app.

#### Mobile first
Along with simpliciation, Wriststrap is intended to make Mobile first a priority.  For example, the Button element default to 44dp (height) as is recommend.  By no means will it be exahustive but will get your app started in the right direction. 

#### Default Element styling
The following table is used to show the override default styling of UI Elements.
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

### Styling
Status bar style (`statusBarStyle`) used the `Window` UI element.
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>sb-style-default</td>
        <td>Titanium.UI.iPhone.StatusBar.DEFAULT</td>
    </tr>
    <tr>
        <td>sb-style-gray</td>
        <td>Titanium.UI.iPhone.StatusBar.GRAY</td>
    </tr>
    <tr>
        <td>sb-style-opaque-black</td>
        <td>Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK</td>
    </tr>
    <tr>
        <td>sb-style-light-content</td>
        <td>Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT</td>
    </tr>
    <tr>
        <td>sb-style-translucent-black</td>
        <td>Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK</td>
    </tr>
</table>

`Window` UI helpers
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>fullscreen</td>
        <td>fullscreen: true</td>
    </tr>
    <tr>
        <td>hideNav</td>
        <td>navBarHidden: true</td>
    </tr>
    <tr>
        <td>showNav</td>
        <td>navBarHidden: true</td>
    </tr>
</table>

#### Borders
There are set of TSS classes that can be used for putting a border around any UI element (that supports it).  The TSS classes are `rounded-border-4`, `rounded-border-6`, and `rounded-border-10`.  The number at the end of the TSS style name is in refernce to the border radius.

### Layout
Wriststrap uses the concept of CSS grid systems for layout out UI elements and content.  Using TSS styles on the UI elements, Wriststrap allows you to layout out your entire UI without having to use JS for layout (for most cases).

#### Layout TSS Details
Using the TSS classes, it applies a 3% gutter on either side of the content.  This allow for a horizontal visual break in the content and layout.  The two TSS classes used for setting this layout are:

1.  `layout-default` simply applies the layout gutters on the UI element.
2.  `container` is used to setup the grid system to be used by the 'col-<number>' system.

#### Grid System
![Layout basic grid](http://tnuzzi.github.io/wriststrap/imgs/layout-basic.png "Layout basic grid")

As with other CSS grid layout system, Wriststrap uses the same basic concepts to allow the developer to simply add TSS classes to a UI element to specify its position on screen.  The image above illustrates how it works by apply the TSS classes to `Label` and `View`.  The use of `container` is required on the outer element in order to use the `col-<number>` classes.

At this time, this layout system is based on a grid system of 4 columns (for handheld devices).  The system also allows for embedding columns within columns.  The horizontal height of the columns are set to `Ti.UI.SIZE`.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>row</td>
        <td>Sets the top of `10dp` to provide a visual break from the content above.</td>
    </tr>
    <tr>
        <td>col-&lt;number&gt;</td>
        <td>Sets the width of the UI element.  The number indicates how many grid columns it should occupy.  The number should be between 1 and 4</td>
    </tr>
    <tr>
        <td>col-1-end</td>
        <td>Use this class if you are embedded 1 column elements.  This is temporary fix.</td>
    </tr>
    <tr>
        <td>col-&lt;number&gt;-push-&lt;number&gt;</td>
        <td>Pushes the column a set number of columns before setting the width of the UI element.  Allows you to set elements further right.  For a col-1 the push number can between 1 and 3.  For col-2 the push number be between 1 and 2.  Finally a col-3 the push number can only be set to 1</td>
    </tr>
     <tr>
        <td>col-spacing</td>
        <td>Provides the columns with a visual break between each column</td>
    </tr>
</table>

Example:

    <View class="container">
        <Label class="col col-1">Test</Label>
        <Label class="col col-1 col-spacing">Test</Label>
        <Label class="col col-1 col-spacing">Test</Label>
        <Label class="col col-1 col-spacing">Test</Label>
        <Label class="col col-1">Test</Label>
        <Label class="col col-2 col-spacing">Test</Label>
        <Label class="col col-1 col-spacing">Test</Label>
        <Label class="col col-3">Test</Label>
        <Label class="col col-1 col-spacing">Test</Label>
        <View class="col col-2 lo-horizontal">
            <Label class="col-2">Test</Label>
            <Label class="col-2 col-spacing">Test</Label>
        </View>
        <View class="col col-2 col-spacing lo-horizontal">
            <Label class="col-1">Test</Label>
            <Label class="col-1 col-spacing">Test</Label>
            <Label class="col-1 col-spacing">Test</Label>
            <Label class="col-1-end col-spacing">Test</Label>
        </View>
    </View>

### Typography
The Typography TSS classes will help with styling your `Label` and content.  These TSS classes provide a general type of functionality around font sizes, types and text positioning.

#### Typography TSS Details
![Typography example 1](http://tnuzzi.github.io/wriststrap/imgs/typography-example-1.png "Typography example 1")
![Typography example 2](http://tnuzzi.github.io/wriststrap/imgs/typography-example-2.png "Typography example 2")

##### Headings
As with HTML, Wriststrap provide the h1 - h6 text weight styling.  `h1` being used for large heads or banner text where as `h6` is used for sub-headings.

Example:

    <Label id="label" class="h1">h1 heading</Label> 
    <Label id="label" class="h2">h2 heading</Label>
    <Label id="label" class="h3">h3 heading</Label>
    <Label id="label" class="h4">h4 heading</Label>
    <Label id="label" class="h5">h5 heading</Label>
    <Label id="label" class="h6">h6 heading</Label>

##### Paragraphs
Paragraphs also borrow from HTML but with a but of twist.  There is formatting around the paragraph TSS classes.  In that if the device is resized (landscape -> portrait) the paragragh resized appropriately.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>p</td>
        <td>Set <code>p</code> on the outer <code>View</code> that will take contain the <code>p-content</code> <code>Label(s)</code>.  It will ensure that the paragraph keeps the formatting.</td>
    </tr>
    <tr>
        <td>p-content</td>
        <td>Generally used on <code>Label</code> element inside the <code>View</code> containing the <code>p</code> TSS class.</td>
    </tr>
    <tr>
        <td>lead</td>
        <td>Used to title paragraph blocks.</td>
    </tr>
</table>

Example: 

    <View class="p">
        <Label class="p-content lead">Lead - Some Awesome Title</Label>
        <Label class="p-content">Regular - Nullam quis risus eget urna mollis ornare vel eu 
                                 leo. Cum sociis natoque penatibus et magnis dis ridiculus
        </Label>
        <Label class="p-content bold">Bold - Cum sociis natoque penatibus et magnis dis 
                                      parturient montes, nascetur ridiculus mus. Donec
        </Label>
    </View>

##### Text Formatting and Positioning
These TSS classes provide a basic set of formatting and positing styles.  They can be applied to any UI elcodeent that formats with the `font` style.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>small</td>
        <td>Sets the fontSize smaller than the default: <code>fontSize: '12dp'</code></td>
    </tr>
    <tr>
        <td>large</td>
        <td>Sets the fontSize larger than the default: <code>fontSize: '18dp'</code></td>
    </tr>
    <tr>
        <td>bold</td>
        <td>Bolds the text (uses HelveticaNeue) but keeps the same font size</td>
    </tr>
    <tr>
        <td>em</td>
        <td>Italicises the text but keeps the same font size</td>
    </tr>
    <tr>
        <td>text-left</td>
        <td>Positions the text at left justified</td>
    </tr>
    <tr>
        <td>text-center</td>
        <td>Positions the text at center justified</td>
    </tr>
    <tr>
        <td>text-right</td>
        <td>Positions the text at right justified</td>
    </tr>
</table>

**NOTE: Make sure when using the `text-<justify>` style the `Label` is defined at 100% width.**

Example:

    <Label id="label" class="">Regular Label</Label>
    <Label id="label" class="small">Regular Label - Small</Label>
    <Label id="label" class="bold">Regular Label - bold</Label>
    <Label id="label" class="em">Regular Label - italic</Label>
    <Label id="label" class="w-100% text-left">Left</Label>
    <Label id="label" class="w-100% text-center">Center</Label>
    <Label id="label" class="w-100% text-right">Right</Label>

##### Address and Cite
These two set of TSS classes are convenient classes used to format addresses and quotes.  As with paragraphs (`p`) an outer `View` is needed to ensure correct formatting when the device is resized.

**Address**
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>address</td>
        <td>Used to setup the outer <code>View</code> for the address title and/or content</td>
    </tr>
    <tr>
        <td>address-title</td>
        <td>Formats the address title text</code></td>
    </tr>
    <tr>
        <td>address-content</td>
        <td>Container for the address content.  Formats each line of the address appropriately.</td>
    </tr>
</table>

**Cite**
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>cite</td>
        <td>Used to setup the outer <code>View</code> for the quote</td>
    </tr>
    <tr>
        <td>cite-quote</td>
        <td>Formats the text of the quote</td>
    </tr>
    <tr>
        <td>cite-source</td>
        <td>Formats the text of the quote source</td>
    </tr>
</table>

Example:

    <View class="address">
        <Label class="address-title">Twitter, Inc.</Label>
        <Label class="address-content">795 Folsom Ave, Suite 600\nSan Francisco, CA 94107</Label>
        <Label class="address-content-bold color-primary">Phone: (123) 456-7890</Label>
    </View>

    <View class="cite">
        <Label class="cite-quote text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</Label>
        <Label class="cite-source text-left">- Someone famous in Source Title</Label>
    </View>


### Buttons
### Images
<table>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_000_glass.png" /><br />glass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_001_leaf.png" /><br />leaf</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_002_dog.png" /><br />dog</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_003_user.png" /><br />user</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_004_girl.png" /><br />girl</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_005_car.png" /><br />car</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_006_user_add.png" /><br />user_add</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_007_user_remove.png" /><br />user_remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_008_film.png" /><br />film</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_009_magic.png" /><br />magic</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_010_envelope.png" /><br />envelope</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_011_camera.png" /><br />camera</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_012_heart.png" /><br />heart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_013_beach_umbrella.png" /><br />beach_umbrella</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_014_train.png" /><br />train</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_015_print.png" /><br />print</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_016_bin.png" /><br />bin</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_017_music.png" /><br />music</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_018_note.png" /><br />note</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_019_heart_empty.png" /><br />heart_empty</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_020_home.png" /><br />home</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_021_snowflake.png" /><br />snowflake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_022_fire.png" /><br />fire</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_023_magnet.png" /><br />magnet</td>
        </tr>
    <tr>    
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_024_parents.png" /><br />parents</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_025_binoculars.png" /><br />binoculars</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_026_road.png" /><br />road</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_027_search.png" /><br />search</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_028_cars.png" /><br />cars</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_029_notes_2.png" /><br />notes_2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_030_pencil.png" /><br />pencil</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_031_bus.png" /><br />bus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_032_wifi_alt.png" /><br />wifi_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_033_luggage.png" /><br />luggage</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_034_old_man.png" /><br />old_man</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_035_woman.png" /><br />woman</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_036_file.png" /><br />file</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_037_coins.png" /><br />coins</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_038_airplane.png" /><br />airplane</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_039_notes.png" /><br />notes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_040_stats.png" /><br />stats</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_041_charts.png" /><br />charts</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_042_pie_chart.png" /><br />pie_chart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_043_group.png" /><br />group</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_044_keys.png" /><br />keys</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_045_calendar.png" /><br />calendar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_046_router.png" /><br />router</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_047_camera_small.png" /><br />camera_small</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_048_dislikes.png" /><br />dislikes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_049_star.png" /><br />star</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_050_link.png" /><br />link</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_051_eye_open.png" /><br />eye_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_052_eye_close.png" /><br />eye_close</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_053_alarm.png" /><br />alarm</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_054_clock.png" /><br />clock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_055_stopwatch.png" /><br />stopwatch</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_056_projector.png" /><br />projector</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_057_history.png" /><br />history</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_058_truck.png" /><br />truck</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_059_cargo.png" /><br />cargo</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_060_compass.png" /><br />compass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_061_keynote.png" /><br />keynote</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_062_paperclip.png" /><br />paperclip</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_063_power.png" /><br />power</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_064_lightbulb.png" /><br />lightbulb</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_065_tag.png" /><br />tag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_066_tags.png" /><br />tags</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_067_cleaning.png" /><br />cleaning</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_068_ruller.png" /><br />ruller</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_069_gift.png" /><br />gift</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_070_umbrella.png" /><br />umbrella</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_071_book.png" /><br />book</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_072_bookmark.png" /><br />bookmark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_073_wifi.png" /><br />wifi</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_074_cup.png" /><br />cup</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_075_stroller.png" /><br />stroller</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_076_headphones.png" /><br />headphones</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_077_headset.png" /><br />headset</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_078_warning_sign.png" /><br />warning_sign</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_079_signal.png" /><br />signal</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_080_retweet.png" /><br />retweet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_081_refresh.png" /><br />refresh</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_082_roundabout.png" /><br />roundabout</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_083_random.png" /><br />random</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_084_heat.png" /><br />heat</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_085_repeat.png" /><br />repeat</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_086_display.png" /><br />display</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_087_log_book.png" /><br />log_book</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_088_address_book.png" /><br />address_book</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_089_building.png" /><br />building</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_090_eyedropper.png" /><br />eyedropper</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_091_adjust.png" /><br />adjust</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_092_tint.png" /><br />tint</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_093_crop.png" /><br />crop</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_094_vector_path_square.png" /><br />vector_path_square</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_095_vector_path_circle.png" /><br />vector_path_circle</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_096_vector_path_polygon.png" /><br />vector_path_polygon</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_097_vector_path_line.png" /><br />vector_path_line</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_098_vector_path_curve.png" /><br />vector_path_curve</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_099_vector_path_all.png" /><br />vector_path_all</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_100_font.png" /><br />font</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_101_italic.png" /><br />italic</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_102_bold.png" /><br />bold</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_103_text_underline.png" /><br />text_underline</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_104_text_strike.png" /><br />text_strike</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_105_text_height.png" /><br />text_height</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_106_text_width.png" /><br />text_width</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_107_text_resize.png" /><br />text_resize</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_108_left_indent.png" /><br />left_indent</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_109_right_indent.png" /><br />right_indent</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_110_align_left.png" /><br />align_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_111_align_center.png" /><br />align_center</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_112_align_right.png" /><br />align_right</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_113_justify.png" /><br />justify</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_114_list.png" /><br />list</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_115_text_smaller.png" /><br />text_smaller</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_116_text_bigger.png" /><br />text_bigger</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_117_embed.png" /><br />embed</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_118_embed_close.png" /><br />embed_close</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_119_table.png" /><br />table</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_120_message_full.png" /><br />message_full</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_121_message_empty.png" /><br />message_empty</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_122_message_in.png" /><br />message_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_123_message_out.png" /><br />message_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_124_message_plus.png" /><br />message_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_125_message_minus.png" /><br />message_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_126_message_ban.png" /><br />message_ban</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_127_message_flag.png" /><br />message_flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_128_message_lock.png" /><br />message_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_129_message_new.png" /><br />message_new</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_130_inbox.png" /><br />inbox</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_131_inbox_plus.png" /><br />inbox_plus</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_132_inbox_minus.png" /><br />inbox_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_133_inbox_lock.png" /><br />inbox_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_134_inbox_in.png" /><br />inbox_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_135_inbox_out.png" /><br />inbox_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_136_cogwheel.png" /><br />cogwheel</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_137_cogwheels.png" /><br />cogwheels</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_138_picture.png" /><br />picture</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_139_adjust_alt.png" /><br />adjust_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_140_database_lock.png" /><br />database_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_141_database_plus.png" /><br />database_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_142_database_minus.png" /><br />database_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_143_database_ban.png" /><br />database_ban</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_144_folder_open.png" /><br />folder_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_145_folder_plus.png" /><br />folder_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_146_folder_minus.png" /><br />folder_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_147_folder_lock.png" /><br />folder_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_148_folder_flag.png" /><br />folder_flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_149_folder_new.png" /><br />folder_new</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_150_edit.png" /><br />edit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_151_new_window.png" /><br />new_window</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_152_check.png" /><br />check</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_153_unchecked.png" /><br />unchecked</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_154_more_windows.png" /><br />more_windows</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_155_show_big_thumbnails.png" /><br />show_big_thumbnails</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_156_show_thumbnails.png" /><br />show_thumbnails</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_157_show_thumbnails_with_lines.png" /><br />show_thumbnails_with_lines</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_158_show_lines.png" /><br />show_lines</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_159_playlist.png" /><br />playlist</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_160_imac.png" /><br />imac</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_161_macbook.png" /><br />macbook</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_162_ipad.png" /><br />ipad</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_163_iphone.png" /><br />iphone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_164_iphone_transfer.png" /><br />iphone_transfer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_165_iphone_exchange.png" /><br />iphone_exchange</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_166_ipod.png" /><br />ipod</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_167_ipod_shuffle.png" /><br />ipod_shuffle</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_168_ear_plugs.png" /><br />ear_plugs</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_169_record.png" /><br />record</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_170_step_backward.png" /><br />step_backward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_171_fast_backward.png" /><br />fast_backward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_172_rewind.png" /><br />rewind</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_173_play.png" /><br />play</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_174_pause.png" /><br />pause</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_175_stop.png" /><br />stop</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_176_forward.png" /><br />forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_177_fast_forward.png" /><br />fast_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_178_step_forward.png" /><br />step_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_179_eject.png" /><br />eject</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_180_facetime_video.png" /><br />facetime_video</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_181_download_alt.png" /><br />download_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_182_mute.png" /><br />mute</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_183_volume_down.png" /><br />volume_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_184_volume_up.png" /><br />volume_up</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_185_screenshot.png" /><br />screenshot</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_186_move.png" /><br />move</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_187_more.png" /><br />more</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_188_brightness_reduce.png" /><br />brightness_reduce</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_189_brightness_increase.png" /><br />brightness_increase</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_190_circle_plus.png" /><br />circle_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_191_circle_minus.png" /><br />circle_minus</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_192_circle_remove.png" /><br />circle_remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_193_circle_ok.png" /><br />circle_ok</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_194_circle_question_mark.png" /><br />circle_question_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_195_circle_info.png" /><br />circle_info</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_196_circle_exclamation_mark.png" /><br />circle_exclamation_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_197_remove.png" /><br />remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_198_ok.png" /><br />ok</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_199_ban.png" /><br />ban</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_200_download.png" /><br />download</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_201_upload.png" /><br />upload</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_202_shopping_cart.png" /><br />shopping_cart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_203_lock.png" /><br />lock</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_204_unlock.png" /><br />unlock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_205_electricity.png" /><br />electricity</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_206_ok_2.png" /><br />ok_2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_207_remove_2.png" /><br />remove_2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_208_cart_out.png" /><br />cart_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_209_cart_in.png" /><br />cart_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_210_left_arrow.png" /><br />left_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_211_right_arrow.png" /><br />right_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_212_down_arrow.png" /><br />down_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_213_up_arrow.png" /><br />up_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_214_resize_small.png" /><br />resize_small</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_215_resize_full.png" /><br />resize_full</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_216_circle_arrow_left.png" /><br />circle_arrow_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_217_circle_arrow_right.png" /><br />circle_arrow_right</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_218_circle_arrow_top.png" /><br />circle_arrow_top</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_219_circle_arrow_down.png" /><br />circle_arrow_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_220_play_button.png" /><br />play_button</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_221_unshare.png" /><br />unshare</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_222_share.png" /><br />share</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_223_chevron-right.png" /><br />chevron-right</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_224_chevron-left.png" /><br />chevron-left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_225_bluetooth.png" /><br />bluetooth</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_226_euro.png" /><br />euro</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_227_usd.png" /><br />usd</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_228_gbp.png" /><br />gbp</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_229_retweet_2.png" /><br />retweet_2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_230_moon.png" /><br />moon</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_231_sun.png" /><br />sun</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_232_cloud.png" /><br />cloud</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_233_direction.png" /><br />direction</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_234_brush.png" /><br />brush</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_235_pen.png" /><br />pen</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_236_zoom_in.png" /><br />zoom_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_237_zoom_out.png" /><br />zoom_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_238_pin.png" /><br />pin</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_239_albums.png" /><br />albums</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_240_rotation_lock.png" /><br />rotation_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_241_flash.png" /><br />flash</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_242_google_maps.png" /><br />google_maps</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_243_anchor.png" /><br />anchor</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_244_conversation.png" /><br />conversation</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_245_chat.png" /><br />chat</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_246_male.png" /><br />male</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_247_female.png" /><br />female</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_248_asterisk.png" /><br />asterisk</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_249_divide.png" /><br />divide</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_250_snorkel_diving.png" /><br />snorkel_diving</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_251_scuba_diving.png" /><br />scuba_diving</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_252_oxygen_bottle.png" /><br />oxygen_bottle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_253_fins.png" /><br />fins</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_254_fishes.png" /><br />fishes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_255_boat.png" /><br />boat</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_256_delete.png" /><br />delete</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_257_sheriffs_star.png" /><br />sheriffs_star</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_258_qrcode.png" /><br />qrcode</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_259_barcode.png" /><br />barcode</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_260_pool.png" /><br />pool</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_261_buoy.png" /><br />buoy</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_262_spade.png" /><br />spade</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_263_bank.png" /><br />bank</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_264_vcard.png" /><br />vcard</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_265_electrical_plug.png" /><br />electrical_plug</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_266_flag.png" /><br />flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_267_credit_card.png" /><br />credit_card</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_268_keyboard_wireless.png" /><br />keyboard_wireless</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_269_keyboard_wireless.png" /><br />keyboard_wireless</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_270_shield.png" /><br />shield</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_271_ring.png" /><br />ring</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_272_cake.png" /><br />cake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_273_drink.png" /><br />drink</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_274_beer.png" /><br />beer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_275_fast_food.png" /><br />fast_food</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_276_cutlery.png" /><br />cutlery</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_277_pizza.png" /><br />pizza</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_278_birthday_cake.png" /><br />birthday_cake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_279_tablet.png" /><br />tablet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_280_settings.png" /><br />settings</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_281_bullets.png" /><br />bullets</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_282_cardio.png" /><br />cardio</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_283_t-shirt.png" /><br />t-shirt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_284_pants.png" /><br />pants</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_285_sweater.png" /><br />sweater</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_286_fabric.png" /><br />fabric</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_287_leather.png" /><br />leather</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_288_scissors.png" /><br />scissors</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_289_bomb.png" /><br />bomb</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_290_skull.png" /><br />skull</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_291_celebration.png" /><br />celebration</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_292_tea_kettle.png" /><br />tea_kettle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_293_french_press.png" /><br />french_press</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_294_coffe_cup.png" /><br />coffe_cup</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_295_pot.png" /><br />pot</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_296_grater.png" /><br />grater</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_297_kettle.png" /><br />kettle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_298_hospital.png" /><br />hospital</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_299_hospital_h.png" /><br />hospital_h</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_300_microphone.png" /><br />microphone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_301_webcam.png" /><br />webcam</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_302_temple_christianity_church.png" /><br />temple_christianity_church</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_303_temple_islam.png" /><br />temple_islam</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_304_temple_hindu.png" /><br />temple_hindu</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_305_temple_buddhist.png" /><br />temple_buddhist</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_306_bicycle.png" /><br />bicycle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_307_life_preserver.png" /><br />life_preserver</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_308_share_alt.png" /><br />share_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_309_comments.png" /><br />comments</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_310_flower.png" /><br />flower</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_311_baseball.png" /><br />baseball</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_312_rugby.png" /><br />rugby</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_313_ax.png" /><br />ax</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_314_table_tennis.png" /><br />table_tennis</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_315_bowling.png" /><br />bowling</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_316_tree_conifer.png" /><br />tree_conifer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_317_tree_deciduous.png" /><br />tree_deciduous</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_318_more_items.png" /><br />more_items</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_319_sort.png" /><br />sort</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_320_filter.png" /><br />filter</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_321_gamepad.png" /><br />gamepad</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_322_playing_dices.png" /><br />playing_dices</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_323_calculator.png" /><br />calculator</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_324_tie.png" /><br />tie</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_325_wallet.png" /><br />wallet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_326_piano.png" /><br />piano</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_327_sampler.png" /><br />sampler</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_328_podium.png" /><br />podium</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_329_soccer_ball.png" /><br />soccer_ball</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_330_blog.png" /><br />blog</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_331_dashboard.png" /><br />dashboard</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_332_certificate.png" /><br />certificate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_333_bell.png" /><br />bell</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_334_candle.png" /><br />candle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_335_pushpin.png" /><br />pushpin</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_336_iphone_shake.png" /><br />iphone_shake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_337_pin_flag.png" /><br />pin_flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_338_turtle.png" /><br />turtle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_339_rabbit.png" /><br />rabbit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_340_globe.png" /><br />globe</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_341_briefcase.png" /><br />briefcase</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_342_hdd.png" /><br />hdd</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_343_thumbs_up.png" /><br />thumbs_up</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_344_thumbs_down.png" /><br />thumbs_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_345_hand_right.png" /><br />hand_right</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_346_hand_left.png" /><br />hand_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_347_hand_up.png" /><br />hand_up</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_348_hand_down.png" /><br />hand_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_349_fullscreen.png" /><br />fullscreen</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_350_shopping_bag.png" /><br />shopping_bag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_351_book_open.png" /><br />book_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_352_nameplate.png" /><br />nameplate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_353_nameplate_alt.png" /><br />nameplate_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_354_vases.png" /><br />vases</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_355_bullhorn.png" /><br />bullhorn</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_356_dumbbell.png" /><br />dumbbell</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_357_suitcase.png" /><br />suitcase</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_358_file_import.png" /><br />file_import</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_359_file_export.png" /><br />file_export</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_360_bug.png" /><br />bug</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_361_crown.png" /><br />crown</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_362_smoking.png" /><br />smoking</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_363_cloud_upload.png" /><br />cloud_upload</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_364_cloud_download.png" /><br />cloud_download</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_365_restart.png" /><br />restart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_366_security_camera.png" /><br />security_camera</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_367_expand.png" /><br />expand</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_368_collapse.png" /><br />collapse</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_369_collapse_top.png" /><br />collapse_top</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_370_globe_af.png" /><br />globe_af</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_371_global.png" /><br />global</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_372_spray.png" /><br />spray</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_373_nails.png" /><br />nails</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_374_claw_hammer.png" /><br />claw_hammer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_375_classic_hammer.png" /><br />classic_hammer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_376_hand_saw.png" /><br />hand_saw</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_377_riflescope.png" /><br />riflescope</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_378_electrical_socket_eu.png" /><br />electrical_socket_eu</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_379_electrical_socket_us.png" /><br />electrical_socket_us</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_380_message_forward.png" /><br />message_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_381_coat_hanger.png" /><br />coat_hanger</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_382_dress.png" /><br />dress</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_383_bathrobe.png" /><br />bathrobe</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_384_shirt.png" /><br />shirt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_385_underwear.png" /><br />underwear</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_386_log_in.png" /><br />log_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_387_log_out.png" /><br />log_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_388_exit.png" /><br />exit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_389_new_window_alt.png" /><br />new_window_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_390_video_sd.png" /><br />video_sd</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_391_video_hd.png" /><br />video_hd</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_392_subtitles.png" /><br />subtitles</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_393_sound_stereo.png" /><br />sound_stereo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_394_sound_dolby.png" /><br />sound_dolby</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_395_sound_5_1.png" /><br />sound_5_1</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_396_sound_6_1.png" /><br />sound_6_1</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_397_sound_7_1.png" /><br />sound_7_1</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_398_copyright_mark.png" /><br />copyright_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_399_registration_mark.png" /><br />registration_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_400_radar.png" /><br />radar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_401_skateboard.png" /><br />skateboard</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_402_golf_course.png" /><br />golf_course</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_403_sorting.png" /><br />sorting</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_404_sort-by-alphabet.png" /><br />sort-by-alphabet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_405_sort-by-alphabet-alt.png" /><br />sort-by-alphabet-alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_406_sort-by-order.png" /><br />sort-by-order</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_407_sort-by-order-alt.png" /><br />sort-by-order-alt</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_408_sort-by-attributes.png" /><br />sort-by-attributes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_409_sort-by-attributes-alt.png" /><br />sort-by-attributes-alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_410_compressed.png" /><br />compressed</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_411_package.png" /><br />package</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_412_cloud_plus.png" /><br />cloud_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_413_cloud_minus.png" /><br />cloud_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_414_disk_save.png" /><br />disk_save</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_415_disk_open.png" /><br />disk_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_416_disk_saved.png" /><br />disk_saved</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_417_disk_remove.png" /><br />disk_remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_418_disk_import.png" /><br />disk_import</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_419_disk_export.png" /><br />disk_export</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_420_tower.png" /><br />tower</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_421_send.png" /><br />send</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_422_git_branch.png" /><br />git_branch</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_423_git_create.png" /><br />git_create</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_424_git_private.png" /><br />git_private</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_425_git_delete.png" /><br />git_delete</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_426_git_merge.png" /><br />git_merge</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_427_git_pull_request.png" /><br />git_pull_request</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_428_git_compare.png" /><br />git_compare</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_429_git_commit.png" /><br />git_commit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_430_construction_cone.png" /><br />construction_cone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_431_shoe_steps.png" /><br />shoe_steps</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_432_plus.png" /><br />plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_433_minus.png" /><br />minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_434_redo.png" /><br />redo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_435_undo.png" /><br />undo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_436_golf.png" /><br />golf</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_437_hockey.png" /><br />hockey</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_438_pipe.png" /><br />pipe</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_439_wrench.png" /><br />wrench</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_440_folder_closed.png" /><br />folder_closed</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_441_phone_alt.png" /><br />phone_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_442_earphone.png" /><br />earphone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_443_floppy_disk.png" /><br />floppy_disk</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_444_floppy_saved.png" /><br />floppy_saved</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_445_floppy_remove.png" /><br />floppy_remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_446_floppy_save.png" /><br />floppy_save</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_447_floppy_open.png" /><br />floppy_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_448_translate.png" /><br />translate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_449_fax.png" /><br />fax</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_450_factory.png" /><br />factory</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_451_shop_window.png" /><br />shop_window</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_452_shop.png" /><br />shop</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_453_kiosk.png" /><br />kiosk</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_454_kiosk_wheels.png" /><br />kiosk_wheels</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_455_kiosk_light.png" /><br />kiosk_light</td>
    </tr>
    <tr>        
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_456_kiosk_food.png" /><br />kiosk_food</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_457_transfer.png" /><br />transfer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_458_money.png" /><br />money</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_459_header.png" /><br />header</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_460_blacksmith.png" /><br />blacksmith</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_461_saw_blade.png" /><br />saw_blade</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_462_basketball.png" /><br />basketball</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_463_server.png" /><br />server</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_464_server_plus.png" /><br />server_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_465_server_minus.png" /><br />server_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_466_server_ban.png" /><br />server_ban</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_467_server_flag.png" /><br />server_flag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_468_server_lock.png" /><br />server_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_469_server_new.png" /><br />server_new</td>
    </tr>
</table>
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

Designed and built by [@nuzzis](https://twitter.com/nuzzis) with the inspiration of [bootstrap](http://www.getbootstrap.com).<br />
Code licensed under [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0), documentation under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).