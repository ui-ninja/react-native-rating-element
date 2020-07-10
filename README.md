# react-native-rating-element

A simple rating library for react native supporting:
* **decimal points** like 3.7, 4.2 etc,
* **direction aware** icons (like you can pass direction as “column” or “row-reverse”),
* **custom icon set** from Ionicons,
* and **interact and record rating** given by users.

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
  readonly
  icon="ios-star"
  direction="row"
/>;

*If you want to record user tap on star icon*

<Rating
  rated={3.7}
  totalCount={5}
  ratingColor="#b5121b"
  ratingBackgroundColor="#c8c7c8"
  size={24}
  onStarTap={position => console.log(`User pressed: ${position}`)}
  icon="ios-star"
  direction="row"
/>;


```

## API

| prop                      | default    | type           | description                                                                                                                                                                                                                                  |
| ------------------------- | ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rated`                   | 0          | number         | Represents Initial value for the rating.                                                                                                                                                                                                     |
| `totalCount`              | 5          | number         | Number of background stars to show. For ex. Rated 5 out of 10 stars. The 10 value is `totalCount`                                                                                                                                            |
| `ratingColor`             | #b5121b    | string (color) | Pass in a custom color to fill-color the rating icon.                                                                                                                                                                                        |
| `ratingBackgroundColor`   | #c8c7c8    | string (color) | Pass in a custom fill-color for the background of rating icon. It is sometimes referred as empty icon.                                                                                                                                       |
| `size`                    | 24         | number         | Pass in a custom font size for the icon                                                                                                                                                                                                      |
| `icon`                    | 'ios-star' | string         | Pass in a custom text for the icon. For ex. 'beer', 'bulb'. These icons are imported from package [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/). Please Note: For now this package only support Ionicons |
| `marginBetweenRatingIcon` | 1          | number         | Pass in custom number to manage space or margin between the rating icons.                                                                                                                                                                    |
| `onStarTap`               | -          | func           | On press of star icon by user, this function will be invoked with `position` paramter. For ex. when user taps on 4 rating, this function will be invoked and in `position` parameter you will get value 4.                                   |
| `readonly`                | false      | bool           | If passed true, onPress event won't be fired.                                                                                                                                                                                                |
| `direction`               | 'row'      | string         | Pass any value from `[ "row", "row-reverse", "column", "column-reverse"]`.                                                                                                                                                                   |

## Output

![Output](https://s7.gifyu.com/images/rating-demo-gif.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
