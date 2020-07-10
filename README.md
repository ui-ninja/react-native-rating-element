# react-native-rating-element

A simple rating library for react native supporting:

- **decimal points** like 3.7, 4.2 etc,
- **direction aware** icons (like you can pass direction as “column” or “row-reverse”),
- **custom icon set** from Ionicons,
- **custom images** (You can add any suitable image as per your wish),
- and **interact and record rating** given by users.

> Please note: This package depends on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation). Please install and configure it before using this package. It is simple to install - First, install the package via `npm` and then link it using `react-native link`.

[Output](https://github.com/ui-ninja/react-native-rating-element#output)
<br />
[API Documentation here](https://github.com/ui-ninja/react-native-rating-element#api)

## Installation

Use the package manager npm to install react-native-rating-element.

```bash
npm install react-native-rating-element
```

## Usage

```javascript
import { Rating } from "react-native-rating-element";

<Rating
  rated={3.7}
  totalCount={5}
  ratingColor="#b5121b"
  ratingBackgroundColor="#c8c7c8"
  size={24}
  readonly // by default is false
  icon="ios-star"
  direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
/>

**Custom Image, onIconTap and bottom to top direction**
<Rating
  rated={3.7}
  totalCount={5}
  size={42}
  onIconTap={position => console.log(`User pressed: ${position}`)}
  direction="column-reverse"
  type="custom" // default is always to "icon"
  selectedIconImage={require('./filled.png')}
  emptyIconImage={require('./empty.png')}
/>


```

## API

| prop                      | default    | type              | description                                                                                                                                                                                                                                  |
| ------------------------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rated`                   | 0          | number            | Represents Initial value for the rating.                                                                                                                                                                                                     |
| `totalCount`              | 5          | number            | Number of background stars to show. For ex. Rated 5 out of 10 stars. The 10 value is `totalCount`                                                                                                                                            |
| `type`                    | `icon`     | string            | If you want custom images, then pass `custom` as prop value. <br />In case of `custom`, Make sure to pass `selectedIconImage` and `emptyIconImage`.                                                                                          |
| `selectedIconImage`       | -          | image path (node) | Pass in custom path for selected icon. For ex. `selectedIconImage={require('../pathToImage/image.png}`.                                                                                                                                      |
| `emptyIconImage`          | -          | image path (node) | Pass in custom path for selected icon. For ex. `emptyIconImage={require('../pathToImage/image.png}`.                                                                                                                                         |
| `readonly`                | false      | bool              | If passed true, onPress event won't be fired.                                                                                                                                                                                                |
| `direction`               | 'row'      | string            | Pass any value from `[ "row", "row-reverse", "column", "column-reverse"]`.                                                                                                                                                                   |                                                                                                                                         |
| `onIconTap`               | -          | func              | On press of star icon by user, this function will be invoked with `position` paramter. For ex. when user taps on 4 rating, this function will be invoked and in `position` parameter you will get value 4.                                   |
| `ratingColor`             | #b5121b    | string (color)    | Pass in a custom color to fill-color the rating icon.                                                                                                                                                                                        |
| `ratingBackgroundColor`   | #c8c7c8    | string (color)    | Pass in a custom fill-color for the background of rating icon. It is sometimes referred as empty icon.                                                                                                                                       |
| `size`                    | 24         | number            | Pass in a custom font size for the icon                                                                                                                                                                                                      |
| `icon`                    | 'ios-star' | string            | Pass in a custom text for the icon. For ex. 'beer', 'bulb'. These icons are imported from package [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/). Please Note: For now this package only support Ionicons |
| `marginBetweenRatingIcon` | 1          | number            | Pass in custom number to manage space or margin between the rating icons.                                                                                                                                                                    |

## Output

![Output](https://s7.gifyu.com/images/Hnet-imageaef0d33f6afa1ffa.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
