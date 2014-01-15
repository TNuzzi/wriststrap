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
        <Window class="t-20">
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
    <tr>
        <td>TextField</td>
        <td>
        <pre>backgroundColor: 'ffffff',
color: '000000',
paddingLeft: '10%',
paddingRight: '10%',</pre>
        </td>
    </tr>
</table>

### Position helper classes
A set of position TSS helper classes have been created to help position and layout the UI elements.  The helper classes both consist of static numbers (specified with `dp`) and percentages.

The percentage values that can be used with the <letter>- class are 1 - 100 in increments of 5.  e.g. `w-100%` or `h-50%`

For the static number designation a number between 1 - 2095 in increments of 5 can be used, with the exception of 1 - 10.  e.g. `r-4` or `l-20` 

Both `h-` and `w-` have `size` and `fill` TSS class.  These apply either the `Ti.UI.FILL` or `Ti.UI.SIZE` accordingly.

A set of TSS classes can be used to easily position a UI element to the right `pull-right` or left `pull-left`.

 <table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>t-&lt;%&gt;<br />
            t-&lt;number&gt;</td>
        <td>Sets the <code>top</code> value to the specified value.</td>
    </tr>
    <tr>
        <td>b-&lt;%&gt;<br />
            b-&lt;number&gt;</td>
        <td>Sets the <code>bottom</code> value to the specified value.</td>
    </tr>
    <tr>
        <td>l-&lt;%&gt;<br />
            l-&lt;number&gt;</td>
        <td>Sets the <code>left</code> value to the specified value.</td>
    </tr>
    <tr>
        <td>r-&lt;%&gt;<br />
            r-&lt;number&gt;</td>
        <td>Sets the <code>right</code> value to the specified value.</td>
    </tr>
    <tr>
        <td>w-&lt;%&gt;<br />
            w-&lt;number&gt;<br />
            w-size<br />
            w-fill</td>
        <td>Sets the <code>width</code> value to the specified value.</td>
    </tr>
    <tr>
        <td>h-&lt;%&gt;<br />
            h-&lt;number&gt;<br />
            h-size<br />
            h-fill</td>
        <td>Sets the <code>height</code> value to the specified value.</td>
    </tr>
</table>

Example:

    <View class="w-100% h-50%">
        <Label class="w-25 h-size">Test</Label>
        <Label class="l-25 h-30 w-15">Test</Label>
    </View>

### `layout` TSS helper classes
A set of TSS classes can be used to set the `layout` behavior for the UI element.  The syntax is `lo-` layout behavior.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>lo-composite</td>
        <td>Sets the <code>layout</code> property to <code>composite</code></td>
    </tr>
    <tr>
        <td>lo-vertical</td>
        <td>Sets the <code>layout</code> property to <code>vertical</code></td>
    </tr>
    <tr>
        <td>lo-horizontal</td>
        <td>Sets the <code>layout</code> property to <code>horizontal</code></td>
    </tr>
</table>

Example:

    <View class="lo-horizontal">
        <Label class="w-25">Test</Label>
        <Label class="w-25">Test</Label>
        <View class="lo-vertical">
            <Label class="w-25">Test</Label>
            <Label class="w-25">Test</Label>     
        </View>
    </View>

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
        <td>col</td>
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
Paragraphs also borcol from HTML but with a but of twist.  There is formatting around the paragraph TSS classes.  In that if the device is resized (landscape -> portrait) the paragragh resized appropriately.

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
        <td>Generally used on <code>Label</code> element inside the <code>View</code> containing the <code>p</code> TSS class.  Can also be use in <code>wells</code></td>
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
The button themes in Wriststrap borcol from Bootstrap.  They provide a basic and simply way to create buttons with a nice color scheme.  For the rounded edges of the button it was choosen to use a `View` around the button to create the desired effect.

### Button TSS Details
![Button example 1](http://tnuzzi.github.io/wriststrap/imgs/button-example-1.png "Button example 1")
![Button example 2](http://tnuzzi.github.io/wriststrap/imgs/button-example-2.png "Button example 2")

#### Button types
As with Bootstrap, several color schemes are available to the `Button` UI element.

**Square Buttons**

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>btn-default</td>
        <td>Colors the button with the default color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-primary</td>
        <td>Colors the button with the primary color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-warning</td>
        <td>Colors the button with the warning color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-success</td>
        <td>Colors the button with the success color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-info</td>
        <td>Colors the button with the info color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-danger</td>
        <td>Colors the button with the danger color scheme.  See above for a visual example.</td>
    </tr>
</table>

Example:

    <Button class="col-2 btn-default">Default</Button>
    <Button class="col-2 btn-primary">Primary</Button>
    <Button class="col-2 btn-warning">Warning</Button>
    <Button class="col-2 btn-success">Success</Button>
    <Button class="col-2 btn-info">Info</Button>
    <Button class="col-2 btn-danger">Danger</Button>

**Rounded-corner Buttons**

The rounded corner effect is achieved by surrounding the `Button` with a `View` and using the `View` to apply the colored border.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>btn-default</td>
        <td>Used on the outer `View` to set the border properties.</td>
    </tr>
    <tr>
        <td>btn-border-default</td>
        <td>Colors the border with the default color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-border-primary</td>
        <td>Colors the border with the primary color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-border-warning</td>
        <td>Colors the border with the warning color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-border-success</td>
        <td>Colors the border with the success color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-border-info</td>
        <td>Colors the border with the info color scheme.  See above for a visual example.</td>
    </tr>
    <tr>
        <td>btn-border-danger</td>
        <td>Colors the border with the danger color scheme.  See above for a visual example.</td>
    </tr>
</table>

Examples:

    <View class="col col-4">
        <Button>Regular Button</Button>
    </View>
    <View class="col col-4 btn-border btn-border-default">
        <Button class="btn-default">Default</Button>
    </View>
    <View class="col col-4 btn-border btn-border-primary">
        <Button class="btn-primary">Primary</Button>
    </View>
    <View class="col col-4 btn-border btn-border-warning">
        <Button class="btn-warning">Warning</Button>
    </View>
    <View class="col col-4 btn-border btn-border-success">
        <Button class="btn-success">Success</Button>
    </View>
    <View class="col col-4 btn-border btn-border-info">
        <Button class="btn-info">Info</Button>
    </View>
    <View class="col col-4 btn-border btn-border-danger">
        <Button class="btn-danger">Danger</Button>
    </View>

**Button Styling**

As a convenience, there are a few TSS classes that set different font sizes for the Button text.  Also available is a TSS class that make the button appear to be disabled.

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>btn-xs</td>
        <td>Sets the `fontSize` to 10dp.</td>
    </tr>
    <tr>
        <td>btn-sm</td>
        <td>Sets the `fontSize` to 12dp.</td>
    </tr>
    <tr>
        <td>btn-lg</td>
        <td>Sets the `fontSize` to 20dp.</td>
    </tr>
    <tr>
        <td>btn-diabled</td>
        <td>Lightens the color of the button to make it appear disabled.  **NOTE** this TSS class does not actually disable button click.  Use TSS class `disabled` to disable clicks</td>
    </tr>
</table>

Example:

    <View class="col col-1">
        <Button class="btn btn-primary btn-xs">Extra Small</Button>
    </View>
    <View class="col col-1 col-spacing">
        <Button class="btn btn-primary btn-sm">Small</Button>
    </View>
    <View class="col col-2 col-spacing">
        <Button class="btn btn-warning btn-lg">Large</Button>
    </View>
    <View class="col col-4">
        <Label class="w-100% text-left h4 bg-lightslategray">Button State</Label>
    </View>
    <View class="col col-4">
        <Button class="btn btn-success btn-disabled disabled">Can't Clicky, ha!</Button>
    </View>

### Images
This set of TSS classes is used to stylize an image using the `ImageView` UI element.  The rounded corner TSS does not have an image size restriction however the circle and thumbnail.  The restriction is the image has to be specified at a given height and width.  For larger images the requirement is `140dp` and the smaller size is `60dp` for height and width.

#### Image TSS Details
![Images example 1](http://tnuzzi.github.io/wriststrap/imgs/image-example-1.png "Images example 1")
![Images example 2](http://tnuzzi.github.io/wriststrap/imgs/image-example-2.png "Images example 2")

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>img-rounded</td>
        <td>Added rounded corners to image.  No restriction on image height or width.</td>
    </tr>
    <tr>
        <td>img-circle</td>
        <td>Transforms image into a circle image.  Image will be resized to 140dp. (height and width)</td>
    </tr>
    <tr>
        <td>img-circle-sm</td>
        <td>Transforms image into a circle image.  Image will be resized to 60dp. (height and width)</td>
    </tr>
    <tr>
        <td>thumbnail-container</td>
        <td>Used on the outer <code>View</code> to setup the thumbnail effect.</td>
    </tr>
    <tr>
        <td>img-thumbnail</td>
        <td>Resizes the image to a thumbnail. Image will be resized to 130dp. (height and width)</td>
    </tr>
    <tr>
        <td>thumbnail-circle-container</td>
        <td>Used on the outer <code>View</code> to setup the circle thumbnail effect.</td>
    </tr>
    <tr>
        <td>img-thumbnail-circle</td>
        <td>Resizes the image to a thumbnail. Image will be resized to 130dp. (height and width)</td>
    </tr>
    <tr>
        <td>thumbnail-container-sm</td>
        <td>Used on the outer <code>View</code> to setup the thumbnail effect.</td>
    </tr>
    <tr>
        <td>img-thumbnail-sm</td>
        <td>Resizes the image to a thumbnail. Image will be resized to 50dp. (height and width)</td>
    </tr>
    <tr>
        <td>thumbnail-circle-container-sm</td>
        <td>Used on the outer <code>View</code> to setup the circle thumbnail effect.</td>
    </tr>
    <tr>
        <td>img-thumbnail-circle-sm</td>
        <td>Resizes the image to a thumbnail. Image will be resized to 50dp. (height and width)</td>
    </tr>
</table>

Example:

    <ImageView class="img-rounded" image="sample-img.png" />
    <ImageView class="img-rounded w-50 h-50" image="sample-img.png" />
    <ImageView class="img-circle-sm" image="sample-img.png" />
    <ImageView class="img-circle-sm" image="sample-img.png" />
    <ImageView class="img-circle" image="sample-img.png" />
    <View class="thumbnail-container">
        <ImageView class="img-thumbnail" image="sample-img.png" />
    </View>
    <View class="thumbnail-circle-container">
        <ImageView class="img-thumbnail-circle" image="sample-img.png" />
    </View>
    <View class="thumbnail-container-sm">
        <ImageView class="img-thumbnail-sm" image="sample-img.png" />
    </View>
    <View class="thumbnail-circle-container-sm">
        <ImageView class="img-thumbnail-circle-sm" image="sample-img.png" />
    </View>

### Styles And Colors
A set of TSS colors class.  Also provided is a semi-transparent image to be set on `View`.  This allows for semi-transparent background without having the set the `opacity` (which affect the sub views).  The colors are provided both as `backgroundColor` and `color`.  The TSS suffix accordingly is `bg-<color name>` and `color-<color name>`.

#### Styles And Colors TSS Details
![Style and Color example 1](http://tnuzzi.github.io/wriststrap/imgs/style-color-example-1.png "Style and Color example 1")
![Style and Color example 2](http://tnuzzi.github.io/wriststrap/imgs/style-color-example-2.png "Style and Color example 2")

For transparent background use TSS classes `bg-0` (fully transparent), `bg-25` (75% transparent), `bg-50` (50% transparent) or `bg-75` (25% transparent).

**NOTE** MD is not allowing me to color the table cells to give a visual color with the hex number.  For now here is the TSS class name with the assigned hex numbers.

Background, Color, Table Seperator Color, and Scrollable Page Control Seperator TSS classes

<table>
    <tr>
        <td>
            bg-muted
            <br />color-muted
            <br />sep-color-muted
            <br />pg-cntl-color-muted
        </td>
        <td>'999999'</td>
        <td>bg-primary
            <br />color-primary
            <br />sep-color-primary
            <br />pg-cntl-color-primary
        </td>
        <td>'428bca'</td>
    </tr>
    <tr>
        <td>
            bg-warning
            <br />color-warning
            <br />sep-color-warning
            <br />pg-cntl-color-warning
        </td>
        <td>'c09853'</td>
        <td>bg-danger
            <br />color-danger
            <br />sep-color-danger
            <br />pg-cntl-color-danger
        </td>
        <td>'b94a48'</td>
    </tr>
    <tr>
        <td>
            bg-success
            <br />color-success
            <br />sep-color-success
            <br />pg-cntl-color-success
        </td>
        <td>'468847'</td>
        <td>bg-info
            <br />color-info
            <br />sep-color-info
            <br />pg-cntl-color-info
        </td>
        <td>'3a87ad'</td>
    </tr>
    <tr>
        <td>
            bg-transparent
            <br />color-transparent
            <br />sep-color-transparent
            <br />pg-cntl-color-transparent
        </td>
        <td>'transparent'</td>
        <td>bg-aliceblue
            <br />color-aliceblue
            <br />sep-color-aliceblue
            <br />pg-cntl-color-aliceblue
        </td>
        <td>'F0F8FF'</td>
    </tr>
    <tr>
        <td>
            bg-antiquewhite
            <br />color-antiquewhite
            <br />sep-color-antiquewhite
            <br />pg-cntl-color-antiquewhite
        </td>
        <td>'FAEBD7'</td>
        <td>bg-aqua
            <br />color-aqua
            <br />sep-color-aqua
            <br />pg-cntl-color-aqua
        </td>
        <td>'00FFFF'</td>
    </tr>
    <tr>
        <td>
            bg-aquamarine
            <br />color-aquamarine
            <br />sep-color-aquamarine
            <br />pg-cntl-color-aquamarine
        </td>
        <td>'7FFFD4'</td>
        <td>bg-azure
            <br />color-azure
            <br />sep-color-azure
            <br />pg-cntl-color-azure
        </td>
        <td>'F0FFFF'</td>
    </tr>
    <tr>
        <td>
            bg-beige
            <br />color-beige
            <br />sep-color-beige
            <br />pg-cntl-color-beige
        </td>
        <td>'F5F5DC'</td>
        <td>bg-bisque
            <br />color-bisque
            <br />sep-color-bisque
            <br />pg-cntl-color-bisque
        </td>
        <td>'FFE4C4'</td>
    </tr>
    <tr>
        <td>
            bg-black
            <br />color-black
            <br />sep-color-black
            <br />pg-cntl-color-black
        </td>
        <td>'000000'</td>
        <td>bg-blanchedalmond
            <br />color-blanchedalmond
            <br />sep-color-blanchedalmond
            <br />pg-cntl-color-blanchedalmond
        </td>
        <td>'FFEBCD'</td>
    </tr>
    <tr>
        <td>
            bg-blue
            <br />color-blue
            <br />sep-color-blue
            <br />pg-cntl-color-blue
        </td>
        <td>'0000FF'</td>
        <td>bg-blueviolet
            <br />color-blueviolet
            <br />sep-color-blueviolet
            <br />pg-cntl-color-blueviolet
        </td>
        <td>'8A2BE2'</td>
    </tr>
    <tr>
        <td>
            bg-brown
            <br />color-brown
            <br />sep-color-brown
            <br />pg-cntl-color-brown
        </td>
        <td>'A52A2A'</td>
        <td>bg-burlywood
            <br />color-burlywood
            <br />sep-color-burlywood
            <br />pg-cntl-color-burlywood
        </td>
        <td>'DEB887'</td>
    </tr>
    <tr>
        <td>
            bg-cadetblue
            <br />color-cadetblue
            <br />sep-color-cadetblue
            <br />pg-cntl-color-cadetblue
        </td>
        <td>'5F9EA0'</td>
        <td>bg-chartreuse
            <br />color-chartreuse
            <br />sep-color-chartreuse
            <br />pg-cntl-color-chartreuse
        </td>
        <td>'7FFF00'</td>
    </tr>
    <tr>
        <td>
            bg-chocolate
            <br />color-chocolate
            <br />sep-color-chocolate
            <br />pg-cntl-color-chocolate
        </td>
        <td>'D2691E'</td>
        <td>bg-coral
            <br />color-coral
            <br />sep-color-coral
            <br />pg-cntl-color-coral
        </td>
        <td>'FF7F50'</td>
    </tr>
    <tr>
        <td>
            bg-cornflowerblue
            <br />color-cornflowerblue
            <br />sep-color-cornflowerblue
            <br />pg-cntl-color-cornflowerblue
        </td>
        <td>'6495ED'</td>
        <td>bg-cornsilk
            <br />color-cornsilk
            <br />sep-color-cornsilk
            <br />pg-cntl-color-cornsilk
        </td>
        <td>'FFF8DC'</td>
    </tr>
    <tr>
        <td>
            bg-crimson
            <br />color-crimson
            <br />sep-color-crimson
            <br />pg-cntl-color-crimson
        </td>
        <td>'DC143C'</td>
        <td>bg-cyan
            <br />color-cyan
            <br />sep-color-cyan
            <br />pg-cntl-color-cyan
        </td>
        <td>'00FFFF'</td>
    </tr>
    <tr>
        <td>
            bg-darkblue
            <br />color-darkblue
            <br />sep-color-darkblue
            <br />pg-cntl-color-darkblue
        </td>
        <td>'00008B'</td>
        <td>bg-darkcyan
            <br />color-darkcyan
            <br />sep-color-darkcyan
            <br />pg-cntl-color-darkcyan
        </td>
        <td>'008B8B'</td>
    </tr>
    <tr>
        <td>
            bg-darkgoldenrod
            <br />color-darkgoldenrod
            <br />sep-color-darkgoldenrod
            <br />pg-cntl-color-darkgoldenrod
        </td>
        <td>'B8860B'</td>
        <td>bg-darkgray
            <br />color-darkgray
            <br />sep-color-darkgray
            <br />pg-cntl-color-darkgray
        </td>
        <td>'A9A9A9'</td>
    </tr>
    <tr>
        <td>
            bg-darkgreen
            <br />color-darkgreen
            <br />sep-color-darkgreen
            <br />pg-cntl-color-darkgreen
        </td>
        <td>'006400'</td>
        <td>bg-darkkhaki
            <br />color-darkkhaki
            <br />sep-color-darkkhaki
            <br />pg-cntl-color-darkkhaki
        </td>
        <td>'BDB76B'</td>
    </tr>
    <tr>
        <td>
            bg-darkmagenta
            <br />color-darkmagenta
            <br />sep-color-darkmagenta
            <br />pg-cntl-color-darkmagenta
        </td>
        <td>'8B008B'</td>
        <td>bg-darkolivegreen
            <br />color-darkolivegreen
            <br />sep-color-darkolivegreen
            <br />pg-cntl-color-darkolivegreen
        </td>
        <td>'556B2F'</td>
    </tr>
    <tr>
        <td>
            bg-darkorange
            <br />color-darkorange
            <br />sep-color-darkorange
            <br />pg-cntl-color-darkorange
        </td>
        <td>'FF8C00'</td>
        <td>bg-darkorchid
            <br />color-darkorchid
            <br />sep-color-darkorchid
            <br />pg-cntl-color-darkorchid
        </td>
        <td>'9932CC'</td>
    </tr>
    <tr>
        <td>
            bg-darkred
            <br />color-darkred
            <br />sep-color-darkred
            <br />pg-cntl-color-darkred
        </td>
        <td>'8B0000'</td>
        <td>bg-darksalmon
            <br />color-darksalmon
            <br />sep-color-darksalmon
            <br />pg-cntl-color-darksalmon
        </td>
        <td>'E9967A'</td>
    </tr>
    <tr>
        <td>
            bg-darkseagreen
            <br />color-darkseagreen
            <br />sep-color-darkseagreen
            <br />pg-cntl-color-darkseagreen
        </td>
        <td>'8FBC8F'</td>
        <td>bg-darkslateblue
            <br />color-darkslateblue
            <br />sep-color-darkslateblue
            <br />pg-cntl-color-darkslateblue
        </td>
        <td>'483D8B'</td>
    </tr>
    <tr>
        <td>
            bg-darkslategray
            <br />color-darkslategray
            <br />sep-color-darkslategray
            <br />pg-cntl-color-darkslategray
        </td>
        <td>'2F4F4F'</td>
        <td>bg-darkturquoise
            <br />color-darkturquoise
            <br />sep-color-darkturquoise
            <br />pg-cntl-color-darkturquoise
        </td>
        <td>'00CED1'</td>
    </tr>
    <tr>
        <td>
            bg-darkviolet
            <br />color-darkviolet
            <br />sep-color-darkviolet
            <br />pg-cntl-color-darkviolet
        </td>
        <td>'9400D3'</td>
        <td>bg-deeppink
            <br />color-deeppink
            <br />sep-color-deeppink
            <br />pg-cntl-color-deeppink
        </td>
        <td>'FF1493'</td>
    </tr>
    <tr>
        <td>
            bg-deepskyblue
            <br />color-deepskyblue
            <br />sep-color-deepskyblue
            <br />pg-cntl-color-deepskyblue
        </td>
        <td>'00BFFF'</td>
        <td>bg-dimgray
            <br />color-dimgray
            <br />sep-color-dimgray
            <br />pg-cntl-color-dimgray
        </td>
        <td>'696969'</td>
    </tr>
    <tr>
        <td>
            bg-dodgerblue
            <br />color-dodgerblue
            <br />sep-color-dodgerblue
            <br />pg-cntl-color-dodgerblue
        </td>
        <td>'1E90FF'</td>
        <td>bg-firebrick
            <br />color-firebrick
            <br />sep-color-firebrick
            <br />pg-cntl-color-firebrick
        </td>
        <td>'B22222'</td>
    </tr>
    <tr>
        <td>
            bg-floralwhite
            <br />color-floralwhite
            <br />sep-color-floralwhite
            <br />pg-cntl-color-floralwhite
        </td>
        <td>'FFFAF0'</td>
        <td>bg-forestgreen
            <br />color-forestgreen
            <br />sep-color-forestgreen
            <br />pg-cntl-color-forestgreen
        </td>
        <td>'228B22'</td>
    </tr>
    <tr>
        <td>
            bg-fuchsia
            <br />color-fuchsia
            <br />sep-color-fuchsia
            <br />pg-cntl-color-fuchsia
        </td>
        <td>'FF00FF'</td>
        <td>bg-gainsboro
            <br />color-gainsboro
            <br />sep-color-gainsboro
            <br />pg-cntl-color-gainsboro
        </td>
        <td>'DCDCDC'</td>
    </tr>
    <tr>
        <td>
            bg-ghostwhite
            <br />color-ghostwhite
            <br />sep-color-ghostwhite
            <br />pg-cntl-color-ghostwhite
        </td>
        <td>'F8F8FF'</td>
        <td>bg-gold
            <br />color-gold
            <br />sep-color-gold
            <br />pg-cntl-color-gold
        </td>
        <td>'FFD700'</td>
    </tr>
    <tr>
        <td>
            bg-goldenrod
            <br />color-goldenrod
            <br />sep-color-goldenrod
            <br />pg-cntl-color-goldenrod
        </td>
        <td>'DAA520'</td>
        <td>bg-gray
            <br />color-gray
            <br />sep-color-gray
            <br />pg-cntl-color-gray
        </td>
        <td>'808080'</td>
    </tr>
    <tr>
        <td>
            bg-green
            <br />color-green
            <br />sep-color-green
            <br />pg-cntl-color-green
        </td>
        <td>'008000'</td>
        <td>bg-greenyellow
            <br />color-greenyellow
            <br />sep-color-greenyellow
            <br />pg-cntl-color-greenyellow
        </td>
        <td>'ADFF2F'</td>
    </tr>
    <tr>
        <td>
            bg-honeydew
            <br />color-honeydew
            <br />sep-color-honeydew
            <br />pg-cntl-color-honeydew
        </td>
        <td>'F0FFF0'</td>
        <td>bg-hotpink
            <br />color-hotpink
            <br />sep-color-hotpink
            <br />pg-cntl-color-hotpink
        </td>
        <td>'FF69B4'</td>
    </tr>
    <tr>
        <td>
            bg-indianred
            <br />color-indianred
            <br />sep-color-indianred
            <br />pg-cntl-color-indianred
        </td>
        <td>'CD5C5C'</td>
        <td>bg-indigo
            <br />color-indigo
            <br />sep-color-indigo
            <br />pg-cntl-color-indigo
        </td>
        <td>'4B0082'</td>
    </tr>
    <tr>
        <td>
            bg-ivory
            <br />color-ivory
            <br />sep-color-ivory
            <br />pg-cntl-color-ivory
        </td>
        <td>'FFFFF0'</td>
        <td>bg-khaki
            <br />color-khaki
            <br />sep-color-khaki
            <br />pg-cntl-color-khaki
        </td>
        <td>'F0E68C'</td>
    </tr>
    <tr>
        <td>
            bg-lavender
            <br />color-lavender
            <br />sep-color-lavender
            <br />pg-cntl-color-lavender
        </td>
        <td>'E6E6FA'</td>
        <td>bg-lavenderblush
            <br />color-lavenderblush
            <br />sep-color-lavenderblush
            <br />pg-cntl-color-lavenderblush
        </td>
        <td>'FFF0F5'</td>
    </tr>
    <tr>
        <td>
            bg-lawngreen
            <br />color-lawngreen
            <br />sep-color-lawngreen
            <br />pg-cntl-color-lawngreen
        </td>
        <td>'7CFC00'</td>
        <td>bg-lemonchiffon
            <br />color-lemonchiffon
            <br />sep-color-lemonchiffon
            <br />pg-cntl-color-lemonchiffon
        </td>
        <td>'FFFACD'</td>
    </tr>
    <tr>
        <td>
            bg-lightblue
            <br />color-lightblue
            <br />sep-color-lightblue
            <br />pg-cntl-color-lightblue
        </td>
        <td>'ADD8E6'</td>
        <td>bg-lightcoral
            <br />color-lightcoral
            <br />sep-color-lightcoral
            <br />pg-cntl-color-lightcoral
        </td>
        <td>'F08080'</td>
    </tr>
    <tr>
        <td>
            bg-lightcyan
            <br />color-lightcyan
            <br />sep-color-lightcyan
            <br />pg-cntl-color-lightcyan
        </td>
        <td>'E0FFFF'</td>
        <td>bg-lightgoldenrodyellow
            <br />color-lightgoldenrodyellow
            <br />sep-color-lightgoldenrodyellow
            <br />pg-cntl-color-lightgoldenrodyellow
        </td>
        <td>'FAFAD2'</td>
    </tr>
    <tr>
        <td>
            bg-lightgray
            <br />color-lightgray
            <br />sep-color-lightgray
            <br />pg-cntl-color-lightgray
        </td>
        <td>'D3D3D3'</td>
        <td>bg-lightgreen
            <br />color-lightgreen
            <br />sep-color-lightgreen
            <br />pg-cntl-color-lightgreen
        </td>
        <td>'90EE90'</td>
    </tr>
    <tr>
        <td>
            bg-lightpink
            <br />color-lightpink
            <br />sep-color-lightpink
            <br />pg-cntl-color-lightpink
        </td>
        <td>'FFB6C1'</td>
        <td>bg-lightsalmon
            <br />color-lightsalmon
            <br />sep-color-lightsalmon
            <br />pg-cntl-color-lightsalmon
        </td>
        <td>'FFA07A'</td>
    </tr>
    <tr>
        <td>
            bg-lightseagreen
            <br />color-lightseagreen
            <br />sep-color-lightseagreen
            <br />pg-cntl-color-lightseagreen
        </td>
        <td>'20B2AA'</td>
        <td>bg-lightskyblue
            <br />color-lightskyblue
            <br />sep-color-lightskyblue
            <br />pg-cntl-color-lightskyblue
        </td>
        <td>'87CEFA'</td>
    </tr>
    <tr>
        <td>
            bg-lightslategray
            <br />color-lightslategray
            <br />sep-color-lightslategray
            <br />pg-cntl-color-lightslategray
        </td>
        <td>'778899'</td>
        <td>bg-lightsteelblue
            <br />color-lightsteelblue
            <br />sep-color-lightsteelblue
            <br />pg-cntl-color-lightsteelblue
        </td>
        <td>'B0C4DE'</td>
    </tr>
    <tr>
        <td>
            bg-lightyellow
            <br />color-lightyellow
            <br />sep-color-lightyellow
            <br />pg-cntl-color-lightyellow
        </td>
        <td>'FFFFE0'</td>
        <td>bg-lime
            <br />color-lime
            <br />sep-color-lime
            <br />pg-cntl-color-lime
        </td>
        <td>'00FF00'</td>
    </tr>
    <tr>
        <td>
            bg-limegreen
            <br />color-limegreen
            <br />sep-color-limegreen
            <br />pg-cntl-color-limegreen
        </td>
        <td>'32CD32'</td>
        <td>bg-linen
            <br />color-linen
            <br />sep-color-linen
            <br />pg-cntl-color-linen
        </td>
        <td>'FAF0E6'</td>
    </tr>
    <tr>
        <td>
            bg-magenta
            <br />color-magenta
            <br />sep-color-magenta
            <br />pg-cntl-color-magenta
        </td>
        <td>'FF00FF'</td>
        <td>bg-maroon
            <br />color-maroon
            <br />sep-color-maroon
            <br />pg-cntl-color-maroon
        </td>
        <td>'800000'</td>
    </tr>
    <tr>
        <td>
            bg-mediumaquamarine
            <br />color-mediumaquamarine
            <br />sep-color-mediumaquamarine
            <br />pg-cntl-color-mediumaquamarine
        </td>
        <td>'66CDAA'</td>
        <td>bg-mediumblue
            <br />color-mediumblue
            <br />sep-color-mediumblue
            <br />pg-cntl-color-mediumblue
        </td>
        <td>'0000CD'</td>
    </tr>
    <tr>
        <td>
            bg-mediumorchid
            <br />color-mediumorchid
            <br />sep-color-mediumorchid
            <br />pg-cntl-color-mediumorchid
        </td>
        <td>'BA55D3'</td>
        <td>bg-mediumpurple
            <br />color-mediumpurple
            <br />sep-color-mediumpurple
            <br />pg-cntl-color-mediumpurple
        </td>
        <td>'9370DB'</td>
    </tr>
    <tr>
        <td>
            bg-mediumseagreen
            <br />color-mediumseagreen
            <br />sep-color-mediumseagreen
            <br />pg-cntl-color-mediumseagreen
        </td>
        <td>'3CB371'</td>
        <td>bg-mediumslateblue
            <br />color-mediumslateblue
            <br />sep-color-mediumslateblue
            <br />pg-cntl-color-mediumslateblue
        </td>
        <td>'7B68EE'</td>
    </tr>
    <tr>
        <td>
            bg-mediumspringgreen
            <br />color-mediumspringgreen
            <br />sep-color-mediumspringgreen
            <br />pg-cntl-color-mediumspringgreen
        </td>
        <td>'00FA9A'</td>
        <td>bg-mediumturquoise
            <br />color-mediumturquoise
            <br />sep-color-mediumturquoise
            <br />pg-cntl-color-mediumturquoise
        </td>
        <td>'48D1CC'</td>
    </tr>
    <tr>
        <td>
            bg-mediumvioletred
            <br />color-mediumvioletred
            <br />sep-color-mediumvioletred
            <br />pg-cntl-color-mediumvioletred
        </td>
        <td>'C71585'</td>
        <td>bg-midnightblue
            <br />color-midnightblue
            <br />sep-color-midnightblue
            <br />pg-cntl-color-midnightblue
        </td>
        <td>'191970'</td>
    </tr>
    <tr>
        <td>
            bg-mintcream
            <br />color-mintcream
            <br />sep-color-mintcream
            <br />pg-cntl-color-mintcream
        </td>
        <td>'F5FFFA'</td>
        <td>bg-mistyrose
            <br />color-mistyrose
            <br />sep-color-mistyrose
            <br />pg-cntl-color-mistyrose
        </td>
        <td>'FFE4E1'</td>
    </tr>
    <tr>
        <td>
            bg-moccasin
            <br />color-moccasin
            <br />sep-color-moccasin
            <br />pg-cntl-color-moccasin
        </td>
        <td>'FFE4B5'</td>
        <td>bg-navajowhite
            <br />color-navajowhite
            <br />sep-color-navajowhite
            <br />pg-cntl-color-navajowhite
        </td>
        <td>'FFDEAD'</td>
    </tr>
    <tr>
        <td>
            bg-navy
            <br />color-navy
            <br />sep-color-navy
            <br />pg-cntl-color-navy
        </td>
        <td>'000080'</td>
        <td>bg-oldlace
            <br />color-oldlace
            <br />sep-color-oldlace
            <br />pg-cntl-color-oldlace
        </td>
        <td>'FDF5E6'</td>
    </tr>
    <tr>
        <td>
            bg-olive
            <br />color-olive
            <br />sep-color-olive
            <br />pg-cntl-color-olive
        </td>
        <td>'808000'</td>
        <td>bg-olivedrab
            <br />color-olivedrab
            <br />sep-color-olivedrab
            <br />pg-cntl-color-olivedrab
        </td>
        <td>'6B8E23'</td>
    </tr>
    <tr>
        <td>
            bg-orange
            <br />color-orange
            <br />sep-color-orange
            <br />pg-cntl-color-orange
        </td>
        <td>'FFA500'</td>
        <td>bg-orangered
            <br />color-orangered
            <br />sep-color-orangered
            <br />pg-cntl-color-orangered
        </td>
        <td>'FF4500'</td>
    </tr>
    <tr>
        <td>
            bg-orchid
            <br />color-orchid
            <br />sep-color-orchid
            <br />pg-cntl-color-orchid
        </td>
        <td>'DA70D6'</td>
        <td>bg-palegoldenrod
            <br />color-palegoldenrod
            <br />sep-color-palegoldenrod
            <br />pg-cntl-color-palegoldenrod
        </td>
        <td>'EEE8AA'</td>
    </tr>
    <tr>
        <td>
            bg-palegreen
            <br />color-palegreen
            <br />sep-color-palegreen
            <br />pg-cntl-color-palegreen
        </td>
        <td>'98FB98'</td>
        <td>bg-paleturquoise
            <br />color-paleturquoise
            <br />sep-color-paleturquoise
            <br />pg-cntl-color-paleturquoise
        </td>
        <td>'AFEEEE'</td>
    </tr>
    <tr>
        <td>
            bg-palevioletred
            <br />color-palevioletred
            <br />sep-color-palevioletred
            <br />pg-cntl-color-palevioletred
        </td>
        <td>'DB7093'</td>
        <td>bg-papayawhip
            <br />color-papayawhip
            <br />sep-color-papayawhip
            <br />pg-cntl-color-papayawhip
        </td>
        <td>'FFEFD5'</td>
    </tr>
    <tr>
        <td>
            bg-peachpuff
            <br />color-peachpuff
            <br />sep-color-peachpuff
            <br />pg-cntl-color-peachpuff
        </td>
        <td>'FFDAB9'</td>
        <td>bg-peru
            <br />color-peru
            <br />sep-color-peru
            <br />pg-cntl-color-peru
        </td>
        <td>'CD853F'</td>
    </tr>
    <tr>
        <td>
            bg-pink
            <br />color-pink
            <br />sep-color-pink
            <br />pg-cntl-color-pink
        </td>
        <td>'FFC0CB'</td>
        <td>bg-plum
            <br />color-plum
            <br />sep-color-plum
            <br />pg-cntl-color-plum
        </td>
        <td>'DDA0DD'</td>
    </tr>
    <tr>
        <td>
            bg-powderblue
            <br />color-powderblue
            <br />sep-color-powderblue
            <br />pg-cntl-color-powderblue
        </td>
        <td>'B0E0E6'</td>
        <td>bg-purple
            <br />color-purple
            <br />sep-color-purple
            <br />pg-cntl-color-purple
        </td>
        <td>'800080'</td>
    </tr>
    <tr>
        <td>
            bg-red
            <br />color-red
            <br />sep-color-red
            <br />pg-cntl-color-red
        </td>
        <td>'FF0000'</td>
        <td>bg-rosybrown
            <br />color-rosybrown
            <br />sep-color-rosybrown
            <br />pg-cntl-color-rosybrown
        </td>
        <td>'BC8F8F'</td>
    </tr>
    <tr>
        <td>
            bg-royalblue
            <br />color-royalblue
            <br />sep-color-royalblue
            <br />pg-cntl-color-royalblue
        </td>
        <td>'4169E1'</td>
        <td>bg-saddlebrown
            <br />color-saddlebrown
            <br />sep-color-saddlebrown
            <br />pg-cntl-color-saddlebrown
        </td>
        <td>'8B4513'</td>
    </tr>
    <tr>
        <td>
            bg-salmon
            <br />color-salmon
            <br />sep-color-salmon
            <br />pg-cntl-color-salmon
        </td>
        <td>'FA8072'</td>
        <td>bg-sandybrown
            <br />color-sandybrown
            <br />sep-color-sandybrown
            <br />pg-cntl-color-sandybrown
        </td>
        <td>'F4A460'</td>
    </tr>
    <tr>
        <td>
            bg-seagreen
            <br />color-seagreen
            <br />sep-color-seagreen
            <br />pg-cntl-color-seagreen
        </td>
        <td>'2E8B57'</td>
        <td>bg-seashell
            <br />color-seashell
            <br />sep-color-seashell
            <br />pg-cntl-color-seashell
        </td>
        <td>'FFF5EE'</td>
    </tr>
    <tr>
        <td>
            bg-sienna
            <br />color-sienna
            <br />sep-color-sienna
            <br />pg-cntl-color-sienna
        </td>
        <td>'A0522D'</td>
        <td>bg-silver
            <br />color-silver
            <br />sep-color-silver
            <br />pg-cntl-color-silver
        </td>
        <td>'C0C0C0'</td>
    </tr>
    <tr>
        <td>
            bg-skyblue
            <br />color-skyblue
            <br />sep-color-skyblue
            <br />pg-cntl-color-skyblue
        </td>
        <td>'87CEEB'</td>
        <td>bg-slateblue
            <br />color-slateblue
            <br />sep-color-slateblue
            <br />pg-cntl-color-slateblue
        </td>
        <td>'6A5ACD'</td>
    </tr>
    <tr>
        <td>
            bg-slategray
            <br />color-slategray
            <br />sep-color-slategray
            <br />pg-cntl-color-slategray
        </td>
        <td>'708090'</td>
        <td>bg-snow
            <br />color-snow
            <br />sep-color-snow
            <br />pg-cntl-color-snow
        </td>
        <td>'FFFAFA'</td>
    </tr>
    <tr>
        <td>
            bg-springgreen
            <br />color-springgreen
            <br />sep-color-springgreen
            <br />pg-cntl-color-springgreen
        </td>
        <td>'00FF7F'</td>
        <td>bg-steelblue
            <br />color-steelblue
            <br />sep-color-steelblue
            <br />pg-cntl-color-steelblue
        </td>
        <td>'4682B4'</td>
    </tr>
    <tr>
        <td>
            bg-tan
            <br />color-tan
            <br />sep-color-tan
            <br />pg-cntl-color-tan
        </td>
        <td>'D2B48C'</td>
        <td>bg-teal
            <br />color-teal
            <br />sep-color-teal
            <br />pg-cntl-color-teal
        </td>
        <td>'008080'</td>
    </tr>
    <tr>
        <td>
            bg-thistle
            <br />color-thistle
            <br />sep-color-thistle
            <br />pg-cntl-color-thistle
        </td>
        <td>'D8BFD8'</td>
        <td>bg-tomato
            <br />color-tomato
            <br />sep-color-tomato
            <br />pg-cntl-color-tomato
        </td>
        <td>'FF6347'</td>
    </tr>
    <tr>
        <td>
            bg-turquoise
            <br />color-turquoise
            <br />sep-color-turquoise
            <br />pg-cntl-color-turquoise
        </td>
        <td>'40E0D0'</td>
        <td>bg-violet
            <br />color-violet
            <br />sep-color-violet
            <br />pg-cntl-color-violet
        </td>
        <td>'EE82EE'</td>
    </tr>
    <tr>
        <td>
            bg-wheat
            <br />color-wheat
            <br />sep-color-wheat
            <br />pg-cntl-color-wheat
        </td>
        <td>'F5DEB3'</td>
        <td>bg-white
            <br />color-white
            <br />sep-color-white
            <br />pg-cntl-color-white
        </td>
        <td>'FFFFFF'</td>
    </tr>
    <tr>
        <td>
            bg-whitesmoke
            <br />color-whitesmoke
            <br />sep-color-whitesmoke
            <br />pg-cntl-color-whitesmoke
        </td>
        <td>'F5F5F5'</td>
        <td>bg-yellow
            <br />color-yellow
            <br />sep-color-yellow
            <br />pg-cntl-color-yellow
        </td>
        <td>'FFFF00'</td>
    </tr>
    <tr>
        <td>bg-yellowgreen
            <br />color-yellowgreen
            <br />sep-color-yellowgreen
            <br />pg-cntl-color-yellowgreen
        </td>
        <td>'9ACD32'</td>
    </tr>
</table>

### Alerts
Alerts are an easy way to stylize informative message and to notify the user.  Alerts are broken into 2 sections the `View` container and the `Label(s)` for the content. 

![Alert example](http://tnuzzi.github.io/wriststrap/imgs/alert-example.png "Alert example")
#### Alert TSS Details

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>alert-container-success <br />
            alert-success</td>
        <td>Set the <code>alert-container-success</code> on the <code>View</code> and the <code>alert-success</code> on the Label(s).</td>
    </tr>
    <tr>
        <td>alert-container-info <br />
            alert-info</td>
        <td>Set the <code>alert-container-info</code> on the <code>View</code> and the <code>alert-info</code> on the Label(s).</td>
    </tr>
    <tr>
        <td>alert-container-warning <br />
            alert-warning</td>
        <td>Set the <code>alert-container-warning</code> on the <code>View</code> and the <code>alert-warning</code> on the Label(s).</td>
    </tr>
    <tr>
        <td>alert-container-danger <br />
            alert-danger</td>
        <td>Set the <code>alert-container-danger</code> on the <code>View</code> and the <code>alert-danger</code> on the Label(s).</td>
    </tr>
</table>

Example

    <View class="col col-4 alert-container-success">
        <Label class="alert-success text-center">Success - Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
    </View>
    <View class="col col-4 alert-container-info">
        <Label class="alert-info text-center">Info - Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
    </View>
    <View class="col col-4 alert-container-danger">
        <Label class="alert-danger text-center">Danger - Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
    </View>
    <View class="col col-4 alert-container-warning">
        <Label class="alert-warning text-center">Warning - Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
    </View>

### Panels
Panels provide a simple container that give a heading/title to a group of content.  Panels use a `View` for the outer container and a container for the content body.  `Label(s)` are used for the title and content.

![Panel example](http://tnuzzi.github.io/wriststrap/imgs/panel-example.png "Panel example")
#### Panel TSS Details

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>panel-default<br/>
            panel-primary<br/>
            panel-success<br/>
            panel-warning<br/>
            panel-danger<br/>
        </td>
        <td>Used on the outer <code>View</code> to apply the container color scheme and layout.</td>
    </tr>
    <tr>
        <td>panel-default-header<br/>
            panel-primary-header<br/>
            panel-success-header<br/>
            panel-warning-header<br/>
            panel-danger-header<br/>
        </td>
        <td>Used on the header <code>Label</code>.</td>
    </tr>
    <tr>
        <td>panel-container-body</td>
        <td>Used to ensure formatting on the content of the Panel.  Typlically placed on a <code>View</code>.</td>
    </tr>
    <tr>
        <td>panel-body</td>
        <td>Used to format and stylize the content of the Panel.</td>
    </tr>
</table>

Example

    <View class="col col-4 panel-default">
        <Label class="panel-default-header">Default</Label>
        <View class="panel-container-body">
            <Label class="panel-body">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
        </View>
    </View>
    <View class="col col-4 panel-primary">
        <Label class="panel-primary-header">Primary</Label>
        <View class="panel-container-body">
            <Label class="panel-body">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
        </View>
    </View>
    <View class="col col-4 panel-success">
        <Label class="panel-success-header">Success - A really, really, really, really, really long header title</Label>
        <View class="panel-container-body">
            <Label class="panel-body">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
        </View>
    </View>
    <View class="col col-4 panel-warning">
        <Label class="panel-warning-header">Warning - A really, really, really, really, really long header title</Label>
        <View class="panel-container-body">
            <Label class="panel-body">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
        </View>
    </View>
    <View class="col col-4 panel-danger">
        <Label class="panel-danger-header">Danger - A really, really, really, really, really long header title</Label>
        <View class="panel-container-body">
            <Label class="panel-body">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis ridiculus</Label>
        </View>
    </View>

### Wells
Wells are simply a stylized `View`.  They provide an easy way to seperate content into different visual sections.

![Wells example 1](http://tnuzzi.github.io/wriststrap/imgs/wells-example-1.png "Wells example 1")
![Wells example 2](http://tnuzzi.github.io/wriststrap/imgs/wells-example-2.png "Wells example 2")

#### Wells TSS Details
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>well</td>
        <td>Used on the outer <code>View</code>.</td>
    </tr>
    <tr>
        <td>well-content</td>
        <td>Used on the UI elements within the well <code>View</code></td>
    </tr>
</table>

Example

    <View class="col col-4 well">
        <View class="well-content">
            <Label class="p-content">Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</Label>
        </View>
    </View>
    <View class="col col-4 well">
        <View class="well-content">
            <Label class="p-content">Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</Label>
            <Label class="p-content">Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.</Label>
            <Label class="p-content">But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.</Label>
        </View>
    </View>
    <View class="col col-4 well">
        <View class="well-content">
            <Label class="text-success h5">A meaningful success but not useful</Label>
            <View class="col col-4 input-container">
                <TextField class="input-tf text-right"/>
                <Label class="input-addon">.00</Label>
            </View>
            <View class="col col-4 alert-container-info">
                <Label class="alert-info text-center">What?!? Stuck in the middle.</Label>
            </View>
            <Button class="col col-4 btn btn-warning">Warning</Button>
            <Button class="col col-4 btn btn-success">Success</Button>
        </View>
    </View>

### Inputs
The Input TSS classes provide formatting to the `TextField` UI elements.  

#### Inputs TSS Details
![Input example](http://tnuzzi.github.io/wriststrap/imgs/input-example.png "Input example")

The input TSS classes come in two predefined heights.  The default is `44dp` and the classes with the `-sm` designation are set to `34dp`. 

<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>input-container</td>
        <td>A container class used on an outer <code>View</code>.  Used to format the <code>View</code>.</td>
    </tr>
    <tr>
        <td>input-tf<br />
            input-tf-sm</td>
        <td>Use on the <code>TextField</code> that will have a single addon <code>Label</code>.  The addon <code>Label</code> can be, before or after the <code>TextField</code>.  Before will put the addon text on the left of the <code>TextField</code> and below will be on the right of the <code>TextField</code>.</td>
    </tr>
    <tr>
        <td>input-tf-2-addon<br />
            input-tf-2-addon-sm</td>
        <td>Use on the <code>TextField</code> that will have two addon <code>Labels</code> (one on the right and left of the <code>TextField</code>).</td>
    </tr>
    <tr>
        <td>input-addon<br />
            input-addon-sm</td>
        <td>Used on a <code>Label</code> to contain the add on text.  The addon <code>Label</code> should have no more than 4 characters.</td>
    </tr>
</table>

#### Input TSS helper classes
<table>
     <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>input-border-rounded</td>
        <td>borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED</td>
    </tr>
    <tr>
        <td>input-border-bezel</td>
        <td>borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL</td>
    </tr>
    <tr>
        <td>input-border-line</td>
        <td>borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE</td>
    </tr>
    <tr>
        <td>input-border-none</td>
        <td>borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE</td>
    </tr>
    <tr>
        <td>input-password</td>
        <td>passwordMask: true</td>
    </tr>
    <tr>
        <td>input-kb-default</td>
        <td>appearance: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT</td>
    </tr>
    <tr>
        <td>input-kb-alert</td>
        <td>appearance: Ti.UI.KEYBOARD_APPEARANCE_ALERT</td>
    </tr>
    <tr>
        <td>input-text-ac-none</td>
        <td>autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE</td>
    </tr>
    <tr>
        <td>input-text-ac-words</td>
        <td>autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS</td>
    </tr>
    <tr>
        <td>input-text-ac-sentences</td>
        <td>autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES</td>
    </tr>
    <tr>
        <td>input-text-ac-all</td>
        <td>autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL</td>
    </tr>
    <tr>
        <td>input-autocorrect</td>
        <td>autocorrect: true</td>
    </tr>
    <tr>
        <td>input-bm-always</td>
        <td>clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS</td>
    </tr>
    <tr>
        <td>input-bm-never</td>
        <td>clearButtonMode: Ti.UI.INPUT_BUTTONMODE_NEVER</td>
    </tr>
    <tr>
        <td>input-bm-onblur</td>
        <td>clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONBLUR</td>
    </tr>
    <tr>
        <td>input-bm-onfocus</td>
        <td>clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS</td>
    </tr>
    <tr>
        <td>input-clear-on-edit</td>
        <td>clearOnEdit: true</td>
    </tr>
    <tr>
        <td>input-enable-return-key</td>
        <td>enableReturnKey: true</td>
    <tr>
        <td>input-kb-ascii</td>
        <td>keyboardType: Ti.UI.KEYBOARD_ASCII</td>
    </tr>
    <tr>
        <td>input-kb-decimal-pad</td>
        <td>keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD</td>
    </tr>
    <tr>
        <td>input-kb-default</td>
        <td>keyboardType: Ti.UI.KEYBOARD_DEFAULT</td>
    </tr>
    <tr>
        <td>input-kb-email</td>
        <td>keyboardType: Ti.UI.KEYBOARD_EMAIL</td>
    </tr>
    <tr>
        <td>input-kb-namephone-pad</td>
        <td>keyboardType: Ti.UI.KEYBOARD_NAMEPHONE_PAD</td>
    </tr>
    <tr>
        <td>input-kb-numbers-punctuation</td>
        <td>keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION</td>
    </tr>
    <tr>
        <td>input-kb-number-pad</td>
        <td>keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD</td>
    </tr>
    <tr>
        <td>input-kb-phone-pad</td>
        <td>keyboardType: Ti.UI.KEYBOARD_PHONE_PAD</td>
    </tr>
    <tr>
        <td>input-kb-url</td>
        <td>keyboardType: Ti.UI.KEYBOARD_URL</td>
    </tr>
    <tr>
        <td>input-rk-default</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_DEFAULT</td>
    </tr>
    <tr>
        <td>input-rk-done</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_DONE</td>
    </tr>
    <tr>
        <td>input-rk-emergency_call</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_EMERGENCY_CALL</td>
    </tr>
    <tr>
        <td>input-rk-go</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_GO</td>
    </tr>
    <tr>
        <td>input-rk-google</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_GOOGLE</td>
    </tr>
    <tr>
        <td>input-rk-join</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_JOIN</td>
    </tr>
    <tr>
        <td>input-rk-next</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_NEXT</td>
    </tr>
    <tr>
        <td>input-rk-route</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_ROUTE</td>
    </tr>
    <tr>
        <td>input-rk-search</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_SEARCH</td>
    </tr>
    <tr>
        <td>input-rk-send</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_SEND</td>
    </tr>
    <tr>
        <td>input-rk-yahoo</td>
        <td>returnKeyType: Ti.UI.RETURNKEY_YAHOO</td>
    </tr>
    <tr>
        <td>input-supress-return</td>
        <td>suppressReturn: true</td>
    </tr>
</table>

Example:

    <View class="container">
        <View class="col col-4">
            <TextField class="input-border-rounded 
                              input-tf 
                              input-bm-always 
                              input-clear-on-edit 
                              input-enable-return-key 
                              bg-transparent" width="100%" hintText="Username" />
        </View>
        <View class="col col-4 input-container">
            <Label class="input-addon">**</Label>
            <TextField class="input-tf input-password" hintText="Password" />
        </View>
        <View class="col col-4 input-container">
            <TextField class="input-tf text-right input-kb-number-pad" />
            <Label class="input-addon">.00</Label>
        </View>
        <View class="col col-4 input-container">
            <Label class="input-addon">$</Label>
            <TextField class="input-tf-2-addon text-right input-rk-join" />
            <Label class="input-addon">.00</Label>
        </View>
        <View class="col col-4 input-container">
            <Label class="input-addon-sm">@</Label>
            <TextField class="input-tf-sm input-supress-return" hintText="Username" />
        </View>
        <View class="col col-4 input-container">
            <TextField class="input-tf-sm text-right" />
            <Label class="input-addon-sm">.00</Label>
        </View>
        <View class="col col-4 input-container">
            <Label class="input-addon-sm text-primary">$</Label>
            <TextField class="input-tf-2-addon-sm text-right input-kb-default" />
            <Label class="input-addon-sm text-danger">.00</Label>
        </View>
    </View>

### Tables
Table support is still in development.  

![Table example 1](http://tnuzzi.github.io/wriststrap/imgs/table-example-1.png "Table example 1")
![Table example 2](http://tnuzzi.github.io/wriststrap/imgs/table-example-2.png "Table example 2")

See [Styles And Colors TSS Details] for table seperator colors.

#### Table TSS helper classes
<table>
    <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>table-style-plain</td>
        <td>style: Titanium.UI.iPhone.TableViewStyle.PLAIN</td>
    </tr>
    <tr>
        <td>table-style-group</td>
        <td>style: Titanium.UI.iPhone.TableViewStyle.GROUPED</td>
    </tr>
    <tr>
        <td>table-sep-style-none</td>
        <td>separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE</td>
    </tr>
    <tr>
        <td>table-sep-style-line</td>
        <td>separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE</td>
    </tr>
    <tr>
        <td>sep-color-none</td>
        <td>separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE</td>
    </tr>
    <tr>
        <td>table-sep-style-line</td>
        <td>separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE</td>
    </tr>
    <tr>
        <td>table-hide-vert-scroll</td>
        <td>showVerticalScrollIndicator: false</td>
    </tr>
    <tr>
        <td>table-show-search</td>
        <td>searchHidden: true</td>
    </tr>
    <tr>
        <td>table-disable-scrollToTop</td>
        <td>scrollsToTop: false</td>
    </tr>
    <tr>
        <td>table-disable-scrollable</td>
        <td>scrollable: false</td>
    </tr>
    <tr>
        <td>table-scroll-style-default</td>
        <td>scrollIndicatorStyle:Titanium.UI.iPhone.ScrollIndicatorStyle.DEFAULT</td>
    </tr>
    <tr>
        <td>table-scroll-style-white</td>
        <td>scrollIndicatorStyle:Titanium.UI.iPhone.ScrollIndicatorStyle.WHITE</td>
    </tr>
    <tr>
        <td>table-scroll-style-black</td>
        <td>scrollIndicatorStyle:Titanium.UI.iPhone.ScrollIndicatorStyle.BLACK</td>
    </tr>
    <tr>
        <td>table-disable-selection</td>
        <td>allowsSelection: false</td>
    </tr>
</table>

### Scrollable
The following are the TSS classes for the `ScrollableView` view.

See [Styles And Colors TSS Details] for page control seperator colors.

#### Scrollable TSS helper classes
<table>
    <thead>
        <tr>
          <th>TSS Class</th>
          <th>Styling</th>
        </tr>
    </thead>
    <tr>
        <td>show-page-control</td>
        <td>showPagingControl: true</td>
    </tr>
    <tr>
        <td>disable-bounce</td>
        <td>disableBounce: true</td>
    </tr>
    <tr>
        <td>overlay-enabled</td>
        <td>overlayEnabled: true</td>
    </tr>
    <tr>
        <td>paging-control-on-top</td>
        <td>pagingControlOnTop: true</td>
    </tr>
    <tr>
        <td>scrolling-enabled</td>
        <td>scrollingEnabled: true</td>
    </tr>
</table>

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

![Font size example 1](http://tnuzzi.github.io/wriststrap/imgs/font-size-example-1.png "Font size example 1")
![Font size example 2](http://tnuzzi.github.io/wriststrap/imgs/font-size-example-2.png "Font size example 2")
![Font size example 3](http://tnuzzi.github.io/wriststrap/imgs/font-size-example-3.png "Font size example 3")

Font shown here is `HelveticaNeue-UltraLight`

#### Additional fonts

In addition to the default font in the app.tss there is a provided tss file `wriststrap/themes/wristrap/style/fonts.tss` that contains all of the available fonts on the iOS platform (200 in all).  Originally they were included in the app.tss however it added 20k lines to file and where taken out.  If you need, you can copy font sets into the app.tss or all of them back into the app.tss however the file gets hard to edit.

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

Supported Glyph libraries
-------------------------
Wriststrap has support for the following Glyph libraries:
* [Glyphish](http://www.glyphish.com/) (Free version)
* [Glyphicons](http://glyphicons.com/) (Free version)

### Glyph libraries installation:
Simply unzip the Glyph libraries in the `wriststrap/themes/wriststrap/assets` and name the directories appropriately (the name of the library all lower case, no version numbers just the name).  The framework will reference these locations for the images.

**NOTE** for Glyphish remame subdirectory from `PNG Icons` to just `icons`.

Titianium studio should look like this:

![Glyphish Dir](http://tnuzzi.github.io/wriststrap/imgs/glyphish-dir.png "Glyphish dir")

**Glyphish**
<table>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/01-refresh.png" /></td>
        <td>glyphish-refresh</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/02-redo.png" /></td>
        <td>glyphish-redo</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/03-loopback.png" /></td>
        <td>glyphish-loopback</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/04-squiggle.png" /></td>
        <td>glyphish-squiggle</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/05-shuffle.png" /></td>
        <td>glyphish-shuffle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/06-magnify.png" /></td>
        <td>glyphish-magnify</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/07-map-marker.png" /></td>
        <td>glyphish-map-marker</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/08-chat.png" /></td>
        <td>glyphish-chat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/09-chat-2.png" /></td>
        <td>glyphish-chat-2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/10-medical.png" /></td>
        <td>glyphish-medical</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/11-clock.png" /></td>
        <td>glyphish-clock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/12-eye.png" /></td>
        <td>glyphish-eye</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/13-target.png" /></td>
        <td>glyphish-target</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/14-tag.png" /></td>
        <td>glyphish-tag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/15-tags.png" /></td>
        <td>glyphish-tags</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/16-line-chart.png" /></td>
        <td>glyphish-line-chart</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/17-bar-chart.png" /></td>
        <td>glyphish-bar-chart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/18-envelope.png" /></td>
        <td>glyphish-envelope</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/19-gear.png" /></td>
        <td>glyphish-gear</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/20-gear2.png" /></td>
        <td>glyphish-gear2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/21-skull.png" /></td>
        <td>glyphish-skull</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/22-skull-n-bones.png" /></td>
        <td>glyphish-skull-n-bones</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/23-bird.png" /></td>
        <td>glyphish-bird</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/24-gift.png" /></td>
        <td>glyphish-gift</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/25-weather.png" /></td>
        <td>glyphish-weather</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/26-bandaid.png" /></td>
        <td>glyphish-bandaid</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/27-planet.png" /></td>
        <td>glyphish-planet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/28-star.png" /></td>
        <td>glyphish-star</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/29-heart.png" /></td>
        <td>glyphish-heart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/30-key.png" /></td>
        <td>glyphish-key</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/31-ipod.png" /></td>
        <td>glyphish-ipod</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/32-iphone.png" /></td>
        <td>glyphish-iphone</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/33-cabinet.png" /></td>
        <td>glyphish-cabinet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/34-coffee.png" /></td>
        <td>glyphish-coffee</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/35-shopping.png" /></td>
        <td>glyphish-shopping</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/36-toolbox.png" /></td>
        <td>glyphish-toolbox</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/37-suitcase.png" /></td>
        <td>glyphish-suitcase</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/38-airplane.png" /></td>
        <td>glyphish-airplane</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/39-spraycan.png" /></td>
        <td>glyphish-spraycan</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/40-inbox.png" /></td>
        <td>glyphish-inbox</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/41-picture-frame.png" /></td>
        <td>glyphish-picture-frame</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/42-photos.png" /></td>
        <td>glyphish-photos</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/43-film-roll.png" /></td>
        <td>glyphish-film-roll</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/44-shoebox.png" /></td>
        <td>glyphish-shoebox</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/45-movie-1.png" /></td>
        <td>glyphish-movie-1</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/46-movie-2.png" /></td>
        <td>glyphish-movie-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/47-fuel.png" /></td>
        <td>glyphish-fuel</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/48-fork-and-knife.png" /></td>
        <td>glyphish-fork-and-knife</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/49-battery.png" /></td>
        <td>glyphish-battery</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/50-beaker.png" /></td>
        <td>glyphish-beaker</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/51-outlet.png" /></td>
        <td>glyphish-outlet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/52-pine-tree.png" /></td>
        <td>glyphish-pine-tree</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/53-house.png" /></td>
        <td>glyphish-house</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/54-lock.png" /></td>
        <td>glyphish-lock</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/55-network.png" /></td>
        <td>glyphish-network</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/56-cloud.png" /></td>
        <td>glyphish-cloud</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/57-download.png" /></td>
        <td>glyphish-download</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/58-bookmark.png" /></td>
        <td>glyphish-bookmark</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/59-flag.png" /></td>
        <td>glyphish-flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/60-signpost.png" /></td>
        <td>glyphish-signpost</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/61-brightness.png" /></td>
        <td>glyphish-brightness</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/62-contrast.png" /></td>
        <td>glyphish-contrast</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/63-runner.png" /></td>
        <td>glyphish-runner</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/64-zap.png" /></td>
        <td>glyphish-zap</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/65-note.png" /></td>
        <td>glyphish-note</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/66-microphone.png" /></td>
        <td>glyphish-microphone</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/67-tshirt.png" /></td>
        <td>glyphish-tshirt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/68-paperclip.png" /></td>
        <td>glyphish-paperclip</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/69-display.png" /></td>
        <td>glyphish-display</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/70-tv.png" /></td>
        <td>glyphish-tv</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/71-compass.png" /></td>
        <td>glyphish-compass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/72-pin.png" /></td>
        <td>glyphish-pin</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/73-radar.png" /></td>
        <td>glyphish-radar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/74-location.png" /></td>
        <td>glyphish-location</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/75-phone.png" /></td>
        <td>glyphish-phone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/76-baby.png" /></td>
        <td>glyphish-baby</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/77-ekg.png" /></td>
        <td>glyphish-ekg</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/78-stopwatch.png" /></td>
        <td>glyphish-stopwatch</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/79-medical-bag.png" /></td>
        <td>glyphish-medical-bag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/80-shopping-cart.png" /></td>
        <td>glyphish-shopping-cart</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/81-dashboard.png" /></td>
        <td>glyphish-dashboard</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/82-dog-paw.png" /></td>
        <td>glyphish-dog-paw</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/83-calendar.png" /></td>
        <td>glyphish-calendar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/84-lightbulb.png" /></td>
        <td>glyphish-lightbulb</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/85-trophy.png" /></td>
        <td>glyphish-trophy</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/86-camera.png" /></td>
        <td>glyphish-camera</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/87-wine-glass.png" /></td>
        <td>glyphish-wine-glass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/88-beer-mug.png" /></td>
        <td>glyphish-beer-mug</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/89-dumbell.png" /></td>
        <td>glyphish-dumbell</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/90-life-buoy.png" /></td>
        <td>glyphish-life-buoy</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/91-beaker-2.png" /></td>
        <td>glyphish-beaker-2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/92-test-tube.png" /></td>
        <td>glyphish-test-tube</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/93-thermometer.png" /></td>
        <td>glyphish-thermometer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/94-pill.png" /></td>
        <td>glyphish-pill</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/95-equalizer.png" /></td>
        <td>glyphish-equalizer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/96-book.png" /></td>
        <td>glyphish-book</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/97-puzzle.png" /></td>
        <td>glyphish-puzzle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/98-palette.png" /></td>
        <td>glyphish-palette</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/99-umbrella.png" /></td>
        <td>glyphish-umbrella</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/100-coffee.png" /></td>
        <td>glyphish-coffee</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/101-gameplan.png" /></td>
        <td>glyphish-gameplan</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/102-walk.png" /></td>
        <td>glyphish-walk</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/103-map.png" /></td>
        <td>glyphish-map</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/104-index-cards.png" /></td>
        <td>glyphish-index-cards</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/105-piano.png" /></td>
        <td>glyphish-piano</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/106-sliders.png" /></td>
        <td>glyphish-sliders</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/107-widescreen.png" /></td>
        <td>glyphish-widescreen</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/108-badge.png" /></td>
        <td>glyphish-badge</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/109-chicken.png" /></td>
        <td>glyphish-chicken</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/110-bug.png" /></td>
        <td>glyphish-bug</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/111-user.png" /></td>
        <td>glyphish-user</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/112-group.png" /></td>
        <td>glyphish-group</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/113-navigation.png" /></td>
        <td>glyphish-navigation</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/114-balloon.png" /></td>
        <td>glyphish-balloon</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/115-bow-and-arrow.png" /></td>
        <td>glyphish-bow-and-arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/116-controller.png" /></td>
        <td>glyphish-controller</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/117-todo.png" /></td>
        <td>glyphish-todo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/118-coat-hanger.png" /></td>
        <td>glyphish-coat-hanger</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/119-piggy-bank.png" /></td>
        <td>glyphish-piggy-bank</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/120-headphones.png" /></td>
        <td>glyphish-headphones</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/121-landscape.png" /></td>
        <td>glyphish-landscape</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/122-stats.png" /></td>
        <td>glyphish-stats</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/123-id-card.png" /></td>
        <td>glyphish-id-card</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/124-bullhorn.png" /></td>
        <td>glyphish-bullhorn</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/125-food.png" /></td>
        <td>glyphish-food</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/126-moon.png" /></td>
        <td>glyphish-moon</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/127-sock.png" /></td>
        <td>glyphish-sock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/128-bone.png" /></td>
        <td>glyphish-bone</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/129-golf.png" /></td>
        <td>glyphish-golf</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/130-dice.png" /></td>
        <td>glyphish-dice</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/131-tower.png" /></td>
        <td>glyphish-tower</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/132-ghost.png" /></td>
        <td>glyphish-ghost</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/133-ufo.png" /></td>
        <td>glyphish-ufo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/134-viking.png" /></td>
        <td>glyphish-viking</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/135-hockeymask.png" /></td>
        <td>glyphish-hockeymask</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/136-tractor.png" /></td>
        <td>glyphish-tractor</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/137-presentation.png" /></td>
        <td>glyphish-presentation</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/138-scales.png" /></td>
        <td>glyphish-scales</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/139-flags.png" /></td>
        <td>glyphish-flags</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/140-gradhat.png" /></td>
        <td>glyphish-gradhat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/141-lamp.png" /></td>
        <td>glyphish-lamp</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/142-wine-bottle.png" /></td>
        <td>glyphish-wine-bottle</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/143-liquor-bottle.png" /></td>
        <td>glyphish-liquor-bottle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/144-martini.png" /></td>
        <td>glyphish-martini</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/145-persondot.png" /></td>
        <td>glyphish-persondot</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/146-gavel.png" /></td>
        <td>glyphish-gavel</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/147-popsicle.png" /></td>
        <td>glyphish-popsicle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/148-doghouse.png" /></td>
        <td>glyphish-doghouse</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/149-windmill.png" /></td>
        <td>glyphish-windmill</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/150-sailboat.png" /></td>
        <td>glyphish-sailboat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/151-telescope.png" /></td>
        <td>glyphish-telescope</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/152-rolodex.png" /></td>
        <td>glyphish-rolodex</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/153-guitar.png" /></td>
        <td>glyphish-guitar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/154-necktie.png" /></td>
        <td>glyphish-necktie</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/155-bowtie.png" /></td>
        <td>glyphish-bowtie</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/156-controlpad.png" /></td>
        <td>glyphish-controlpad</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/157-wrench.png" /></td>
        <td>glyphish-wrench</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/158-wrench-2.png" /></td>
        <td>glyphish-wrench-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/159-voicemail.png" /></td>
        <td>glyphish-voicemail</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/160-voicemail-2.png" /></td>
        <td>glyphish-voicemail-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/161-calculator.png" /></td>
        <td>glyphish-calculator</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/162-receipt.png" /></td>
        <td>glyphish-receipt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/163-glasses-1.png" /></td>
        <td>glyphish-glasses-1</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/164-glasses-2.png" /></td>
        <td>glyphish-glasses-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/165-glasses-3.png" /></td>
        <td>glyphish-glasses-3</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/166-newspaper.png" /></td>
        <td>glyphish-newspaper</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/167-upload-photo.png" /></td>
        <td>glyphish-upload-photo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/168-upload-photo-2.png" /></td>
        <td>glyphish-upload-photo-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/169-8ball.png" /></td>
        <td>glyphish-8ball</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/170-butterfly.png" /></td>
        <td>glyphish-butterfly</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/171-sun.png" /></td>
        <td>glyphish-sun</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/172-pricetag.png" /></td>
        <td>glyphish-pricetag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/173-eyedropper.png" /></td>
        <td>glyphish-eyedropper</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/174-imac.png" /></td>
        <td>glyphish-imac</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/175-macbook.png" /></td>
        <td>glyphish-macbook</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/176-ipad.png" /></td>
        <td>glyphish-ipad</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/177-building.png" /></td>
        <td>glyphish-building</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/178-city.png" /></td>
        <td>glyphish-city</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/179-notepad.png" /></td>
        <td>glyphish-notepad</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/180-stickynote.png" /></td>
        <td>glyphish-stickynote</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/181-hammer.png" /></td>
        <td>glyphish-hammer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/182-messenger-bag.png" /></td>
        <td>glyphish-messenger-bag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/183-genie-lamp.png" /></td>
        <td>glyphish-genie-lamp</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/184-warning.png" /></td>
        <td>glyphish-warning</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/185-printer.png" /></td>
        <td>glyphish-printer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/186-ruler.png" /></td>
        <td>glyphish-ruler</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/187-pencil.png" /></td>
        <td>glyphish-pencil</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/188-paint-roller.png" /></td>
        <td>glyphish-paint-roller</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/189-plant.png" /></td>
        <td>glyphish-plant</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/190-bank.png" /></td>
        <td>glyphish-bank</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/191-collection.png" /></td>
        <td>glyphish-collection</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/192-credit-card.png" /></td>
        <td>glyphish-credit-card</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/193-location-arrow.png" /></td>
        <td>glyphish-location-arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/194-note-2.png" /></td>
        <td>glyphish-note-2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/195-barcode.png" /></td>
        <td>glyphish-barcode</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/196-radiation.png" /></td>
        <td>glyphish-radiation</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/197-card-diamonds.png" /></td>
        <td>glyphish-card-diamonds</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/198-card-spades.png" /></td>
        <td>glyphish-card-spades</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/199-card-hearts.png" /></td>
        <td>glyphish-card-hearts</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphish/icons/200-card-clubs.png" /></td>
        <td>glyphish-card-clubs</td>
    </tr>
</table>
**Glyphicons**
<table>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_000_glass.png" /></td>
        <td>glyphicons_glass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_001_leaf.png" /></td>
        <td>glyphicons_leaf</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_002_dog.png" /></td>
        <td>glyphicons_dog</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_003_user.png" /></td>
        <td>glyphicons_user</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_004_girl.png" /></td>
        <td>glyphicons_girl</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_005_car.png" /></td>
        <td>glyphicons_car</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_006_user_add.png" /></td>
        <td>glyphicons_user_add</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_007_user_remove.png" /></td>
        <td>glyphicons_user_remove</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_008_film.png" /></td>
        <td>glyphicons_film</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_009_magic.png" /></td>
        <td>glyphicons_magic</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_010_envelope.png" /></td>
        <td>glyphicons_envelope</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_011_camera.png" /></td>
        <td>glyphicons_camera</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_012_heart.png" /></td>
        <td>glyphicons_heart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_013_beach_umbrella.png" /></td>
        <td>glyphicons_beach_umbrella</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_014_train.png" /></td>
        <td>glyphicons_train</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_015_print.png" /></td>
        <td>glyphicons_print</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_016_bin.png" /></td>
        <td>glyphicons_bin</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_017_music.png" /></td>
        <td>glyphicons_music</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_018_note.png" /></td>
        <td>glyphicons_note</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_019_heart_empty.png" /></td>
        <td>glyphicons_heart_empty</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_020_home.png" /></td>
        <td>glyphicons_home</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_021_snowflake.png" /></td>
        <td>glyphicons_snowflake</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_022_fire.png" /></td>
        <td>glyphicons_fire</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_023_magnet.png" /></td>
        <td>glyphicons_magnet</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_024_parents.png" /></td>
        <td>glyphicons_parents</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_025_binoculars.png" /></td>
        <td>glyphicons_binoculars</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_026_road.png" /></td>
        <td>glyphicons_road</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_027_search.png" /></td>
        <td>glyphicons_search</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_028_cars.png" /></td>
        <td>glyphicons_cars</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_029_notes_2.png" /></td>
        <td>glyphicons_notes_2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_030_pencil.png" /></td>
        <td>glyphicons_pencil</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_031_bus.png" /></td>
        <td>glyphicons_bus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_032_wifi_alt.png" /></td>
        <td>glyphicons_wifi_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_033_luggage.png" /></td>
        <td>glyphicons_luggage</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_034_old_man.png" /></td>
        <td>glyphicons_old_man</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_035_woman.png" /></td>
        <td>glyphicons_woman</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_036_file.png" /></td>
        <td>glyphicons_file</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_037_coins.png" /></td>
        <td>glyphicons_coins</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_038_airplane.png" /></td>
        <td>glyphicons_airplane</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_039_notes.png" /></td>
        <td>glyphicons_notes</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_040_stats.png" /></td>
        <td>glyphicons_stats</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_041_charts.png" /></td>
        <td>glyphicons_charts</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_042_pie_chart.png" /></td>
        <td>glyphicons_pie_chart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_043_group.png" /></td>
        <td>glyphicons_group</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_044_keys.png" /></td>
        <td>glyphicons_keys</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_045_calendar.png" /></td>
        <td>glyphicons_calendar</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_046_router.png" /></td>
        <td>glyphicons_router</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_047_camera_small.png" /></td>
        <td>glyphicons_camera_small</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_048_dislikes.png" /></td>
        <td>glyphicons_dislikes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_049_star.png" /></td>
        <td>glyphicons_star</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_050_link.png" /></td>
        <td>glyphicons_link</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_051_eye_open.png" /></td>
        <td>glyphicons_eye_open</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_052_eye_close.png" /></td>
        <td>glyphicons_eye_close</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_053_alarm.png" /></td>
        <td>glyphicons_alarm</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_054_clock.png" /></td>
        <td>glyphicons_clock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_055_stopwatch.png" /></td>
        <td>glyphicons_stopwatch</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_056_projector.png" /></td>
        <td>glyphicons_projector</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_057_history.png" /></td>
        <td>glyphicons_history</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_058_truck.png" /></td>
        <td>glyphicons_truck</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_059_cargo.png" /></td>
        <td>glyphicons_cargo</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_060_compass.png" /></td>
        <td>glyphicons_compass</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_061_keynote.png" /></td>
        <td>glyphicons_keynote</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_062_paperclip.png" /></td>
        <td>glyphicons_paperclip</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_063_power.png" /></td>
        <td>glyphicons_power</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_064_lightbulb.png" /></td>
        <td>glyphicons_lightbulb</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_065_tag.png" /></td>
        <td>glyphicons_tag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_066_tags.png" /></td>
        <td>glyphicons_tags</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_067_cleaning.png" /></td>
        <td>glyphicons_cleaning</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_068_ruller.png" /></td>
        <td>glyphicons_ruller</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_069_gift.png" /></td>
        <td>glyphicons_gift</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_070_umbrella.png" /></td>
        <td>glyphicons_umbrella</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_071_book.png" /></td>
        <td>glyphicons_book</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_072_bookmark.png" /></td>
        <td>glyphicons_bookmark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_073_wifi.png" /></td>
        <td>glyphicons_wifi</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_074_cup.png" /></td>
        <td>glyphicons_cup</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_075_stroller.png" /></td>
        <td>glyphicons_stroller</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_076_headphones.png" /></td>
        <td>glyphicons_headphones</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_077_headset.png" /></td>
        <td>glyphicons_headset</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_078_warning_sign.png" /></td>
        <td>glyphicons_warning_sign</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_079_signal.png" /></td>
        <td>glyphicons_signal</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_080_retweet.png" /></td>
        <td>glyphicons_retweet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_081_refresh.png" /></td>
        <td>glyphicons_refresh</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_082_roundabout.png" /></td>
        <td>glyphicons_roundabout</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_083_random.png" /></td>
        <td>glyphicons_random</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_084_heat.png" /></td>
        <td>glyphicons_heat</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_085_repeat.png" /></td>
        <td>glyphicons_repeat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_086_display.png" /></td>
        <td>glyphicons_display</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_087_log_book.png" /></td>
        <td>glyphicons_log_book</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_088_address_book.png" /></td>
        <td>glyphicons_address_book</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_089_building.png" /></td>
        <td>glyphicons_building</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_090_eyedropper.png" /></td>
        <td>glyphicons_eyedropper</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_091_adjust.png" /></td>
        <td>glyphicons_adjust</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_092_tint.png" /></td>
        <td>glyphicons_tint</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_093_crop.png" /></td>
        <td>glyphicons_crop</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_094_vector_path_square.png" /></td>
        <td>glyphicons_vector_path_square</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_095_vector_path_circle.png" /></td>
        <td>glyphicons_vector_path_circle</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_096_vector_path_polygon.png" /></td>
        <td>glyphicons_vector_path_polygon</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_097_vector_path_line.png" /></td>
        <td>glyphicons_vector_path_line</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_098_vector_path_curve.png" /></td>
        <td>glyphicons_vector_path_curve</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_099_vector_path_all.png" /></td>
        <td>glyphicons_vector_path_all</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_100_font.png" /></td>
        <td>glyphicons_font</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_101_italic.png" /></td>
        <td>glyphicons_italic</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_102_bold.png" /></td>
        <td>glyphicons_bold</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_103_text_underline.png" /></td>
        <td>glyphicons_text_underline</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_104_text_strike.png" /></td>
        <td>glyphicons_text_strike</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_105_text_height.png" /></td>
        <td>glyphicons_text_height</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_106_text_width.png" /></td>
        <td>glyphicons_text_width</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_107_text_resize.png" /></td>
        <td>glyphicons_text_resize</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_108_left_indent.png" /></td>
        <td>glyphicons_left_indent</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_109_right_indent.png" /></td>
        <td>glyphicons_right_indent</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_110_align_left.png" /></td>
        <td>glyphicons_align_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_111_align_center.png" /></td>
        <td>glyphicons_align_center</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_112_align_right.png" /></td>
        <td>glyphicons_align_right</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_113_justify.png" /></td>
        <td>glyphicons_justify</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_114_list.png" /></td>
        <td>glyphicons_list</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_115_text_smaller.png" /></td>
        <td>glyphicons_text_smaller</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_116_text_bigger.png" /></td>
        <td>glyphicons_text_bigger</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_117_embed.png" /></td>
        <td>glyphicons_embed</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_118_embed_close.png" /></td>
        <td>glyphicons_embed_close</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_119_table.png" /></td>
        <td>glyphicons_table</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_120_message_full.png" /></td>
        <td>glyphicons_message_full</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_121_message_empty.png" /></td>
        <td>glyphicons_message_empty</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_122_message_in.png" /></td>
        <td>glyphicons_message_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_123_message_out.png" /></td>
        <td>glyphicons_message_out</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_124_message_plus.png" /></td>
        <td>glyphicons_message_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_125_message_minus.png" /></td>
        <td>glyphicons_message_minus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_126_message_ban.png" /></td>
        <td>glyphicons_message_ban</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_127_message_flag.png" /></td>
        <td>glyphicons_message_flag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_128_message_lock.png" /></td>
        <td>glyphicons_message_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_129_message_new.png" /></td>
        <td>glyphicons_message_new</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_130_inbox.png" /></td>
        <td>glyphicons_inbox</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_131_inbox_plus.png" /></td>
        <td>glyphicons_inbox_plus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_132_inbox_minus.png" /></td>
        <td>glyphicons_inbox_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_133_inbox_lock.png" /></td>
        <td>glyphicons_inbox_lock</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_134_inbox_in.png" /></td>
        <td>glyphicons_inbox_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_135_inbox_out.png" /></td>
        <td>glyphicons_inbox_out</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_136_cogwheel.png" /></td>
        <td>glyphicons_cogwheel</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_137_cogwheels.png" /></td>
        <td>glyphicons_cogwheels</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_138_picture.png" /></td>
        <td>glyphicons_picture</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_139_adjust_alt.png" /></td>
        <td>glyphicons_adjust_alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_140_database_lock.png" /></td>
        <td>glyphicons_database_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_141_database_plus.png" /></td>
        <td>glyphicons_database_plus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_142_database_minus.png" /></td>
        <td>glyphicons_database_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_143_database_ban.png" /></td>
        <td>glyphicons_database_ban</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_144_folder_open.png" /></td>
        <td>glyphicons_folder_open</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_145_folder_plus.png" /></td>
        <td>glyphicons_folder_plus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_146_folder_minus.png" /></td>
        <td>glyphicons_folder_minus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_147_folder_lock.png" /></td>
        <td>glyphicons_folder_lock</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_148_folder_flag.png" /></td>
        <td>glyphicons_folder_flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_149_folder_new.png" /></td>
        <td>glyphicons_folder_new</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_150_edit.png" /></td>
        <td>glyphicons_edit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_151_new_window.png" /></td>
        <td>glyphicons_new_window</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_152_check.png" /></td>
        <td>glyphicons_check</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_153_unchecked.png" /></td>
        <td>glyphicons_unchecked</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_154_more_windows.png" /></td>
        <td>glyphicons_more_windows</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_155_show_big_thumbnails.png" /></td>
        <td>glyphicons_show_big_thumbnails</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_156_show_thumbnails.png" /></td>
        <td>glyphicons_show_thumbnails</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_157_show_thumbnails_with_lines.png" /></td>
        <td>glyphicons_show_thumbnails_with_lines</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_158_show_lines.png" /></td>
        <td>glyphicons_show_lines</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_159_playlist.png" /></td>
        <td>glyphicons_playlist</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_160_imac.png" /></td>
        <td>glyphicons_imac</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_161_macbook.png" /></td>
        <td>glyphicons_macbook</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_162_ipad.png" /></td>
        <td>glyphicons_ipad</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_163_iphone.png" /></td>
        <td>glyphicons_iphone</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_164_iphone_transfer.png" /></td>
        <td>glyphicons_iphone_transfer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_165_iphone_exchange.png" /></td>
        <td>glyphicons_iphone_exchange</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_166_ipod.png" /></td>
        <td>glyphicons_ipod</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_167_ipod_shuffle.png" /></td>
        <td>glyphicons_ipod_shuffle</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_168_ear_plugs.png" /></td>
        <td>glyphicons_ear_plugs</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_169_record.png" /></td>
        <td>glyphicons_record</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_170_step_backward.png" /></td>
        <td>glyphicons_step_backward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_171_fast_backward.png" /></td>
        <td>glyphicons_fast_backward</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_172_rewind.png" /></td>
        <td>glyphicons_rewind</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_173_play.png" /></td>
        <td>glyphicons_play</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_174_pause.png" /></td>
        <td>glyphicons_pause</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_175_stop.png" /></td>
        <td>glyphicons_stop</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_176_forward.png" /></td>
        <td>glyphicons_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_177_fast_forward.png" /></td>
        <td>glyphicons_fast_forward</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_178_step_forward.png" /></td>
        <td>glyphicons_step_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_179_eject.png" /></td>
        <td>glyphicons_eject</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_180_facetime_video.png" /></td>
        <td>glyphicons_facetime_video</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_181_download_alt.png" /></td>
        <td>glyphicons_download_alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_182_mute.png" /></td>
        <td>glyphicons_mute</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_183_volume_down.png" /></td>
        <td>glyphicons_volume_down</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_184_volume_up.png" /></td>
        <td>glyphicons_volume_up</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_185_screenshot.png" /></td>
        <td>glyphicons_screenshot</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_186_move.png" /></td>
        <td>glyphicons_move</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_187_more.png" /></td>
        <td>glyphicons_more</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_188_brightness_reduce.png" /></td>
        <td>glyphicons_brightness_reduce</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_189_brightness_increase.png" /></td>
        <td>glyphicons_brightness_increase</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_190_circle_plus.png" /></td>
        <td>glyphicons_circle_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_191_circle_minus.png" /></td>
        <td>glyphicons_circle_minus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_192_circle_remove.png" /></td>
        <td>glyphicons_circle_remove</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_193_circle_ok.png" /></td>
        <td>glyphicons_circle_ok</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_194_circle_question_mark.png" /></td>
        <td>glyphicons_circle_question_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_195_circle_info.png" /></td>
        <td>glyphicons_circle_info</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_196_circle_exclamation_mark.png" /></td>
        <td>glyphicons_circle_exclamation_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_197_remove.png" /></td>
        <td>glyphicons_remove</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_198_ok.png" /></td>
        <td>glyphicons_ok</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_199_ban.png" /></td>
        <td>glyphicons_ban</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_200_download.png" /></td>
        <td>glyphicons_download</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_201_upload.png" /></td>
        <td>glyphicons_upload</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_202_shopping_cart.png" /></td>
        <td>glyphicons_shopping_cart</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_203_lock.png" /></td>
        <td>glyphicons_lock</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_204_unlock.png" /></td>
        <td>glyphicons_unlock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_205_electricity.png" /></td>
        <td>glyphicons_electricity</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_206_ok_2.png" /></td>
        <td>glyphicons_ok_2</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_207_remove_2.png" /></td>
        <td>glyphicons_remove_2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_208_cart_out.png" /></td>
        <td>glyphicons_cart_out</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_209_cart_in.png" /></td>
        <td>glyphicons_cart_in</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_210_left_arrow.png" /></td>
        <td>glyphicons_left_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_211_right_arrow.png" /></td>
        <td>glyphicons_right_arrow</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_212_down_arrow.png" /></td>
        <td>glyphicons_down_arrow</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_213_up_arrow.png" /></td>
        <td>glyphicons_up_arrow</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_214_resize_small.png" /></td>
        <td>glyphicons_resize_small</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_215_resize_full.png" /></td>
        <td>glyphicons_resize_full</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_216_circle_arrow_left.png" /></td>
        <td>glyphicons_circle_arrow_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_217_circle_arrow_right.png" /></td>
        <td>glyphicons_circle_arrow_right</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_218_circle_arrow_top.png" /></td>
        <td>glyphicons_circle_arrow_top</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_219_circle_arrow_down.png" /></td>
        <td>glyphicons_circle_arrow_down</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_220_play_button.png" /></td>
        <td>glyphicons_play_button</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_221_unshare.png" /></td>
        <td>glyphicons_unshare</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_222_share.png" /></td>
        <td>glyphicons_share</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_223_chevron-right.png" /></td>
        <td>glyphicons_chevron-right</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_224_chevron-left.png" /></td>
        <td>glyphicons_chevron-left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_225_bluetooth.png" /></td>
        <td>glyphicons_bluetooth</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_226_euro.png" /></td>
        <td>glyphicons_euro</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_227_usd.png" /></td>
        <td>glyphicons_usd</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_228_gbp.png" /></td>
        <td>glyphicons_gbp</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_229_retweet_2.png" /></td>
        <td>glyphicons_retweet_2</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_230_moon.png" /></td>
        <td>glyphicons_moon</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_231_sun.png" /></td>
        <td>glyphicons_sun</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_232_cloud.png" /></td>
        <td>glyphicons_cloud</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_233_direction.png" /></td>
        <td>glyphicons_direction</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_234_brush.png" /></td>
        <td>glyphicons_brush</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_235_pen.png" /></td>
        <td>glyphicons_pen</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_236_zoom_in.png" /></td>
        <td>glyphicons_zoom_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_237_zoom_out.png" /></td>
        <td>glyphicons_zoom_out</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_238_pin.png" /></td>
        <td>glyphicons_pin</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_239_albums.png" /></td>
        <td>glyphicons_albums</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_240_rotation_lock.png" /></td>
        <td>glyphicons_rotation_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_241_flash.png" /></td>
        <td>glyphicons_flash</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_242_google_maps.png" /></td>
        <td>glyphicons_google_maps</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_243_anchor.png" /></td>
        <td>glyphicons_anchor</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_244_conversation.png" /></td>
        <td>glyphicons_conversation</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_245_chat.png" /></td>
        <td>glyphicons_chat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_246_male.png" /></td>
        <td>glyphicons_male</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_247_female.png" /></td>
        <td>glyphicons_female</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_248_asterisk.png" /></td>
        <td>glyphicons_asterisk</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_249_divide.png" /></td>
        <td>glyphicons_divide</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_250_snorkel_diving.png" /></td>
        <td>glyphicons_snorkel_diving</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_251_scuba_diving.png" /></td>
        <td>glyphicons_scuba_diving</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_252_oxygen_bottle.png" /></td>
        <td>glyphicons_oxygen_bottle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_253_fins.png" /></td>
        <td>glyphicons_fins</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_254_fishes.png" /></td>
        <td>glyphicons_fishes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_255_boat.png" /></td>
        <td>glyphicons_boat</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_256_delete.png" /></td>
        <td>glyphicons_delete</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_257_sheriffs_star.png" /></td>
        <td>glyphicons_sheriffs_star</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_258_qrcode.png" /></td>
        <td>glyphicons_qrcode</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_259_barcode.png" /></td>
        <td>glyphicons_barcode</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_260_pool.png" /></td>
        <td>glyphicons_pool</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_261_buoy.png" /></td>
        <td>glyphicons_buoy</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_262_spade.png" /></td>
        <td>glyphicons_spade</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_263_bank.png" /></td>
        <td>glyphicons_bank</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_264_vcard.png" /></td>
        <td>glyphicons_vcard</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_265_electrical_plug.png" /></td>
        <td>glyphicons_electrical_plug</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_266_flag.png" /></td>
        <td>glyphicons_flag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_267_credit_card.png" /></td>
        <td>glyphicons_credit_card</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_268_keyboard_wireless.png" /></td>
        <td>glyphicons_keyboard_wireless</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_269_keyboard_wireless.png" /></td>
        <td>glyphicons_keyboard_wireless</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_270_shield.png" /></td>
        <td>glyphicons_shield</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_271_ring.png" /></td>
        <td>glyphicons_ring</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_272_cake.png" /></td>
        <td>glyphicons_cake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_273_drink.png" /></td>
        <td>glyphicons_drink</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_274_beer.png" /></td>
        <td>glyphicons_beer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_275_fast_food.png" /></td>
        <td>glyphicons_fast_food</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_276_cutlery.png" /></td>
        <td>glyphicons_cutlery</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_277_pizza.png" /></td>
        <td>glyphicons_pizza</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_278_birthday_cake.png" /></td>
        <td>glyphicons_birthday_cake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_279_tablet.png" /></td>
        <td>glyphicons_tablet</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_280_settings.png" /></td>
        <td>glyphicons_settings</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_281_bullets.png" /></td>
        <td>glyphicons_bullets</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_282_cardio.png" /></td>
        <td>glyphicons_cardio</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_283_t-shirt.png" /></td>
        <td>glyphicons_t-shirt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_284_pants.png" /></td>
        <td>glyphicons_pants</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_285_sweater.png" /></td>
        <td>glyphicons_sweater</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_286_fabric.png" /></td>
        <td>glyphicons_fabric</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_287_leather.png" /></td>
        <td>glyphicons_leather</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_288_scissors.png" /></td>
        <td>glyphicons_scissors</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_289_bomb.png" /></td>
        <td>glyphicons_bomb</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_290_skull.png" /></td>
        <td>glyphicons_skull</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_291_celebration.png" /></td>
        <td>glyphicons_celebration</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_292_tea_kettle.png" /></td>
        <td>glyphicons_tea_kettle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_293_french_press.png" /></td>
        <td>glyphicons_french_press</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_294_coffe_cup.png" /></td>
        <td>glyphicons_coffe_cup</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_295_pot.png" /></td>
        <td>glyphicons_pot</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_296_grater.png" /></td>
        <td>glyphicons_grater</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_297_kettle.png" /></td>
        <td>glyphicons_kettle</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_298_hospital.png" /></td>
        <td>glyphicons_hospital</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_299_hospital_h.png" /></td>
        <td>glyphicons_hospital_h</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_300_microphone.png" /></td>
        <td>glyphicons_microphone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_301_webcam.png" /></td>
        <td>glyphicons_webcam</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_302_temple_christianity_church.png" /></td>
        <td>glyphicons_temple_christianity_church</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_303_temple_islam.png" /></td>
        <td>glyphicons_temple_islam</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_304_temple_hindu.png" /></td>
        <td>glyphicons_temple_hindu</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_305_temple_buddhist.png" /></td>
        <td>glyphicons_temple_buddhist</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_306_bicycle.png" /></td>
        <td>glyphicons_bicycle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_307_life_preserver.png" /></td>
        <td>glyphicons_life_preserver</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_308_share_alt.png" /></td>
        <td>glyphicons_share_alt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_309_comments.png" /></td>
        <td>glyphicons_comments</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_310_flower.png" /></td>
        <td>glyphicons_flower</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_311_baseball.png" /></td>
        <td>glyphicons_baseball</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_312_rugby.png" /></td>
        <td>glyphicons_rugby</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_313_ax.png" /></td>
        <td>glyphicons_ax</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_314_table_tennis.png" /></td>
        <td>glyphicons_table_tennis</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_315_bowling.png" /></td>
        <td>glyphicons_bowling</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_316_tree_conifer.png" /></td>
        <td>glyphicons_tree_conifer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_317_tree_deciduous.png" /></td>
        <td>glyphicons_tree_deciduous</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_318_more_items.png" /></td>
        <td>glyphicons_more_items</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_319_sort.png" /></td>
        <td>glyphicons_sort</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_320_filter.png" /></td>
        <td>glyphicons_filter</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_321_gamepad.png" /></td>
        <td>glyphicons_gamepad</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_322_playing_dices.png" /></td>
        <td>glyphicons_playing_dices</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_323_calculator.png" /></td>
        <td>glyphicons_calculator</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_324_tie.png" /></td>
        <td>glyphicons_tie</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_325_wallet.png" /></td>
        <td>glyphicons_wallet</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_326_piano.png" /></td>
        <td>glyphicons_piano</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_327_sampler.png" /></td>
        <td>glyphicons_sampler</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_328_podium.png" /></td>
        <td>glyphicons_podium</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_329_soccer_ball.png" /></td>
        <td>glyphicons_soccer_ball</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_330_blog.png" /></td>
        <td>glyphicons_blog</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_331_dashboard.png" /></td>
        <td>glyphicons_dashboard</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_332_certificate.png" /></td>
        <td>glyphicons_certificate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_333_bell.png" /></td>
        <td>glyphicons_bell</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_334_candle.png" /></td>
        <td>glyphicons_candle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_335_pushpin.png" /></td>
        <td>glyphicons_pushpin</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_336_iphone_shake.png" /></td>
        <td>glyphicons_iphone_shake</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_337_pin_flag.png" /></td>
        <td>glyphicons_pin_flag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_338_turtle.png" /></td>
        <td>glyphicons_turtle</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_339_rabbit.png" /></td>
        <td>glyphicons_rabbit</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_340_globe.png" /></td>
        <td>glyphicons_globe</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_341_briefcase.png" /></td>
        <td>glyphicons_briefcase</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_342_hdd.png" /></td>
        <td>glyphicons_hdd</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_343_thumbs_up.png" /></td>
        <td>glyphicons_thumbs_up</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_344_thumbs_down.png" /></td>
        <td>glyphicons_thumbs_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_345_hand_right.png" /></td>
        <td>glyphicons_hand_right</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_346_hand_left.png" /></td>
        <td>glyphicons_hand_left</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_347_hand_up.png" /></td>
        <td>glyphicons_hand_up</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_348_hand_down.png" /></td>
        <td>glyphicons_hand_down</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_349_fullscreen.png" /></td>
        <td>glyphicons_fullscreen</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_350_shopping_bag.png" /></td>
        <td>glyphicons_shopping_bag</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_351_book_open.png" /></td>
        <td>glyphicons_book_open</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_352_nameplate.png" /></td>
        <td>glyphicons_nameplate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_353_nameplate_alt.png" /></td>
        <td>glyphicons_nameplate_alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_354_vases.png" /></td>
        <td>glyphicons_vases</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_355_bullhorn.png" /></td>
        <td>glyphicons_bullhorn</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_356_dumbbell.png" /></td>
        <td>glyphicons_dumbbell</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_357_suitcase.png" /></td>
        <td>glyphicons_suitcase</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_358_file_import.png" /></td>
        <td>glyphicons_file_import</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_359_file_export.png" /></td>
        <td>glyphicons_file_export</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_360_bug.png" /></td>
        <td>glyphicons_bug</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_361_crown.png" /></td>
        <td>glyphicons_crown</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_362_smoking.png" /></td>
        <td>glyphicons_smoking</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_363_cloud_upload.png" /></td>
        <td>glyphicons_cloud_upload</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_364_cloud_download.png" /></td>
        <td>glyphicons_cloud_download</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_365_restart.png" /></td>
        <td>glyphicons_restart</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_366_security_camera.png" /></td>
        <td>glyphicons_security_camera</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_367_expand.png" /></td>
        <td>glyphicons_expand</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_368_collapse.png" /></td>
        <td>glyphicons_collapse</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_369_collapse_top.png" /></td>
        <td>glyphicons_collapse_top</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_370_globe_af.png" /></td>
        <td>glyphicons_globe_af</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_371_global.png" /></td>
        <td>glyphicons_global</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_372_spray.png" /></td>
        <td>glyphicons_spray</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_373_nails.png" /></td>
        <td>glyphicons_nails</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_374_claw_hammer.png" /></td>
        <td>glyphicons_claw_hammer</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_375_classic_hammer.png" /></td>
        <td>glyphicons_classic_hammer</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_376_hand_saw.png" /></td>
        <td>glyphicons_hand_saw</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_377_riflescope.png" /></td>
        <td>glyphicons_riflescope</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_378_electrical_socket_eu.png" /></td>
        <td>glyphicons_electrical_socket_eu</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_379_electrical_socket_us.png" /></td>
        <td>glyphicons_electrical_socket_us</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_380_message_forward.png" /></td>
        <td>glyphicons_message_forward</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_381_coat_hanger.png" /></td>
        <td>glyphicons_coat_hanger</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_382_dress.png" /></td>
        <td>glyphicons_dress</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_383_bathrobe.png" /></td>
        <td>glyphicons_bathrobe</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_384_shirt.png" /></td>
        <td>glyphicons_shirt</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_385_underwear.png" /></td>
        <td>glyphicons_underwear</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_386_log_in.png" /></td>
        <td>glyphicons_log_in</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_387_log_out.png" /></td>
        <td>glyphicons_log_out</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_388_exit.png" /></td>
        <td>glyphicons_exit</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_389_new_window_alt.png" /></td>
        <td>glyphicons_new_window_alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_390_video_sd.png" /></td>
        <td>glyphicons_video_sd</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_391_video_hd.png" /></td>
        <td>glyphicons_video_hd</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_392_subtitles.png" /></td>
        <td>glyphicons_subtitles</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_393_sound_stereo.png" /></td>
        <td>glyphicons_sound_stereo</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_394_sound_dolby.png" /></td>
        <td>glyphicons_sound_dolby</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_395_sound_5_1.png" /></td>
        <td>glyphicons_sound_5_1</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_396_sound_6_1.png" /></td>
        <td>glyphicons_sound_6_1</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_397_sound_7_1.png" /></td>
        <td>glyphicons_sound_7_1</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_398_copyright_mark.png" /></td>
        <td>glyphicons_copyright_mark</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_399_registration_mark.png" /></td>
        <td>glyphicons_registration_mark</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_400_radar.png" /></td>
        <td>glyphicons_radar</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_401_skateboard.png" /></td>
        <td>glyphicons_skateboard</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_402_golf_course.png" /></td>
        <td>glyphicons_golf_course</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_403_sorting.png" /></td>
        <td>glyphicons_sorting</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_404_sort-by-alphabet.png" /></td>
        <td>glyphicons_sort-by-alphabet</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_405_sort-by-alphabet-alt.png" /></td>
        <td>glyphicons_sort-by-alphabet-alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_406_sort-by-order.png" /></td>
        <td>glyphicons_sort-by-order</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_407_sort-by-order-alt.png" /></td>
        <td>glyphicons_sort-by-order-alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_408_sort-by-attributes.png" /></td>
        <td>glyphicons_sort-by-attributes</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_409_sort-by-attributes-alt.png" /></td>
        <td>glyphicons_sort-by-attributes-alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_410_compressed.png" /></td>
        <td>glyphicons_compressed</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_411_package.png" /></td>
        <td>glyphicons_package</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_412_cloud_plus.png" /></td>
        <td>glyphicons_cloud_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_413_cloud_minus.png" /></td>
        <td>glyphicons_cloud_minus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_414_disk_save.png" /></td>
        <td>glyphicons_disk_save</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_415_disk_open.png" /></td>
        <td>glyphicons_disk_open</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_416_disk_saved.png" /></td>
        <td>glyphicons_disk_saved</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_417_disk_remove.png" /></td>
        <td>glyphicons_disk_remove</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_418_disk_import.png" /></td>
        <td>glyphicons_disk_import</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_419_disk_export.png" /></td>
        <td>glyphicons_disk_export</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_420_tower.png" /></td>
        <td>glyphicons_tower</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_421_send.png" /></td>
        <td>glyphicons_send</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_422_git_branch.png" /></td>
        <td>glyphicons_git_branch</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_423_git_create.png" /></td>
        <td>glyphicons_git_create</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_424_git_private.png" /></td>
        <td>glyphicons_git_private</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_425_git_delete.png" /></td>
        <td>glyphicons_git_delete</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_426_git_merge.png" /></td>
        <td>glyphicons_git_merge</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_427_git_pull_request.png" /></td>
        <td>glyphicons_git_pull_request</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_428_git_compare.png" /></td>
        <td>glyphicons_git_compare</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_429_git_commit.png" /></td>
        <td>glyphicons_git_commit</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_430_construction_cone.png" /></td>
        <td>glyphicons_construction_cone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_431_shoe_steps.png" /></td>
        <td>glyphicons_shoe_steps</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_432_plus.png" /></td>
        <td>glyphicons_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_433_minus.png" /></td>
        <td>glyphicons_minus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_434_redo.png" /></td>
        <td>glyphicons_redo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_435_undo.png" /></td>
        <td>glyphicons_undo</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_436_golf.png" /></td>
        <td>glyphicons_golf</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_437_hockey.png" /></td>
        <td>glyphicons_hockey</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_438_pipe.png" /></td>
        <td>glyphicons_pipe</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_439_wrench.png" /></td>
        <td>glyphicons_wrench</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_440_folder_closed.png" /></td>
        <td>glyphicons_folder_closed</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_441_phone_alt.png" /></td>
        <td>glyphicons_phone_alt</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_442_earphone.png" /></td>
        <td>glyphicons_earphone</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_443_floppy_disk.png" /></td>
        <td>glyphicons_floppy_disk</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_444_floppy_saved.png" /></td>
        <td>glyphicons_floppy_saved</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_445_floppy_remove.png" /></td>
        <td>glyphicons_floppy_remove</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_446_floppy_save.png" /></td>
        <td>glyphicons_floppy_save</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_447_floppy_open.png" /></td>
        <td>glyphicons_floppy_open</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_448_translate.png" /></td>
        <td>glyphicons_translate</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_449_fax.png" /></td>
        <td>glyphicons_fax</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_450_factory.png" /></td>
        <td>glyphicons_factory</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_451_shop_window.png" /></td>
        <td>glyphicons_shop_window</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_452_shop.png" /></td>
        <td>glyphicons_shop</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_453_kiosk.png" /></td>
        <td>glyphicons_kiosk</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_454_kiosk_wheels.png" /></td>
        <td>glyphicons_kiosk_wheels</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_455_kiosk_light.png" /></td>
        <td>glyphicons_kiosk_light</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_456_kiosk_food.png" /></td>
        <td>glyphicons_kiosk_food</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_457_transfer.png" /></td>
        <td>glyphicons_transfer</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_458_money.png" /></td>
        <td>glyphicons_money</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_459_header.png" /></td>
        <td>glyphicons_header</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_460_blacksmith.png" /></td>
        <td>glyphicons_blacksmith</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_461_saw_blade.png" /></td>
        <td>glyphicons_saw_blade</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_462_basketball.png" /></td>
        <td>glyphicons_basketball</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_463_server.png" /></td>
        <td>glyphicons_server</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_464_server_plus.png" /></td>
        <td>glyphicons_server_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_465_server_minus.png" /></td>
        <td>glyphicons_server_minus</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_466_server_ban.png" /></td>
        <td>glyphicons_server_ban</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_467_server_flag.png" /></td>
        <td>glyphicons_server_flag</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_468_server_lock.png" /></td>
        <td>glyphicons_server_lock</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons/png/glyphicons_469_server_new.png" /></td>
        <td>glyphicons_server_new</td>
    </tr>
</table>

**Glyphicons Social**
<table>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_00_pinterest.png" /></td>
        <td>glyphicons-pinterest</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_01_dropbox.png" /></td>
        <td>glyphicons-dropbox</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_02_google_plus.png" /></td>
        <td>glyphicons-google_plus</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_03_jolicloud.png" /></td>
        <td>glyphicons-jolicloud</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_04_yahoo.png" /></td>
        <td>glyphicons-yahoo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_05_blogger.png" /></td>
        <td>glyphicons-blogger</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_06_picasa.png" /></td>
        <td>glyphicons-picasa</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_07_amazon.png" /></td>
        <td>glyphicons-amazon</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_08_tumblr.png" /></td>
        <td>glyphicons-tumblr</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_09_wordpress.png" /></td>
        <td>glyphicons-wordpress</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_10_instapaper.png" /></td>
        <td>glyphicons-instapaper</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_11_evernote.png" /></td>
        <td>glyphicons-evernote</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_12_xing.png" /></td>
        <td>glyphicons-xing</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_13_zootool.png" /></td>
        <td>glyphicons-zootool</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_14_dribbble.png" /></td>
        <td>glyphicons-dribbble</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_15_deviantart.png" /></td>
        <td>glyphicons-deviantart</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_16_read_it_later.png" /></td>
        <td>glyphicons-read_it_later</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_17_linked_in.png" /></td>
        <td>glyphicons-linked_in</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_18_forrst.png" /></td>
        <td>glyphicons-forrst</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_19_pinboard.png" /></td>
        <td>glyphicons-pinboard</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_20_behance.png" /></td>
        <td>glyphicons-behance</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_21_github.png" /></td>
        <td>glyphicons-github</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_22_youtube.png" /></td>
        <td>glyphicons-youtube</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_23_skitch.png" /></td>
        <td>glyphicons-skitch</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_24_4square.png" /></td>
        <td>glyphicons-4square</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_25_quora.png" /></td>
        <td>glyphicons-quora</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_26_badoo.png" /></td>
        <td>glyphicons-badoo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_27_spotify.png" /></td>
        <td>glyphicons-spotify</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_28_stumbleupon.png" /></td>
        <td>glyphicons-stumbleupon</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_29_readability.png" /></td>
        <td>glyphicons-readability</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_30_facebook.png" /></td>
        <td>glyphicons-facebook</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_31_twitter.png" /></td>
        <td>glyphicons-twitter</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_32_instagram.png" /></td>
        <td>glyphicons-instagram</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_33_posterous_spaces.png" /></td>
        <td>glyphicons-posterous_spaces</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_34_vimeo.png" /></td>
        <td>glyphicons-vimeo</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_35_flickr.png" /></td>
        <td>glyphicons-flickr</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_36_last_fm.png" /></td>
        <td>glyphicons-last_fm</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_37_rss.png" /></td>
        <td>glyphicons-rss</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_38_skype.png" /></td>
        <td>glyphicons-skype</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_39_e-mail.png" /></td>
        <td>glyphicons-e-mail</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_40_vine.png" /></td>
        <td>glyphicons-vine</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_41_myspace.png" /></td>
        <td>glyphicons-myspace</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_42_goodreads.png" /></td>
        <td>glyphicons-goodreads</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_43_apple.png" /></td>
        <td>glyphicons-apple</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_44_windows.png" /></td>
        <td>glyphicons-windows</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_45_yelp.png" /></td>
        <td>glyphicons-yelp</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_46_playstation.png" /></td>
        <td>glyphicons-playstation</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_47_xbox.png" /></td>
        <td>glyphicons-xbox</td>
    </tr>
    <tr>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_48_android.png" /></td>
        <td>glyphicons-android</td>
        <td><img src="http://tnuzzi.github.io/wriststrap/imgs/glyphicons/glyphicons_social/png/glyphicons_social_49_ios.png" /></td>
        <td>glyphicons-ios</td>
    </tr>
</table>
Widgets
-------

### wriststrap.dialog
A simple dialog widget which allow for animating a dropdown dialog.  The widget does not contain the content rather takes a `View` that has content.

![Dialog](http://tnuzzi.github.io/wriststrap/imgs/dialog-widget.png "Dialog")

Example Content `View`

    <View class="well">
        <View class="well-content">
            <Label class="h2">About our app</Label>
            <Label class="col col-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Label>
            <View class="col col-4 lo-horizontal">
                <Button id="skip" class="col-2 btn-default">skip</Button>
                <Button id="personalize" class="col-2 col-spacing btn-default">personalize</Button>
            </View>
        </View>
    </View>

#### Usage:
<table>
     <thead>
        <tr>
<<<<<<< HEAD
          <th>argument</th>
          <th>required</th>
          <th>description</th>
        </tr>
    </thead>
    <tr>
        <td>content</td>
        <td>yes</td>
        <td>Takes a <code>View</code>.  Containing the content of the dialog.  The content view will be auto-centered.</td>
    </tr>
    <tr>
        <td>animated</td>
        <td>no</td>
        <td>Takes a <code>boolean</code>.  Will drop down the dialog</td>
=======
          <th>Font Sizes</th>
        </tr>
    </thead>
    <tr>
        <td>6</td>
    </tr>
    <tr>
        <td>8</td>
>>>>>>> 2cc91b85ade99524f22915702a84e4e47ed4f8d0
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

For animated dropdown

    var content = Alloy.createController("someContent");
    var aboutPopover = Alloy.createWidget("wriststrap.dialog", "widget", {
        content: content.getView(),
        animate: true,
        contentHeight: 400 // Used to hide the dialog off screen for animated dropdown

    });

    content.skip.addEventListener("click", function() {
        aboutPopover.getView().animateClose();
    });

For fade in/out

    var content = Alloy.createController("someContent");
    var aboutPopover = Alloy.createWidget("wriststrap.dialog", "widget", {
        content: content.getView(),
        fade: true,
    });

    content.skip.addEventListener("click", function() {
        aboutPopover.getView().fadeOutClose();
    });

Limitations
-----------

Appendix
--------

Designed and built by [@nuzzis](https://twitter.com/nuzzis) with the inspiration of [bootstrap](http://www.getbootstrap.com).<br />
Code licensed under [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0), documentation under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).