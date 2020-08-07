import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Rating } from 'react-native-rating-element';

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <Text style={{fontSize: 16}}>
          RTL direction (4.5/5, direction="row-reverse")
        </Text>
        <View accessible accessibilityLabel={"rated 4.5 out of 5"}>
          <Rating
            rated={4.5}
            totalCount={5}
            ratingColor="#f1c644"
            ratingBackgroundColor="#d4d4d4"
            size={42}
            readonly
            icon="ios-star"
            direction="row-reverse"
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 16}}>
          Readonly Rating (3/5, direction="column")
        </Text>
        <Rating
          rated={rating}
          totalCount={5}
          ratingColor="#f1c644"
          ratingBackgroundColor="#d4d4d4"
          size={32}
          icon="add-circle"
          direction="column"
          onIconTap={pos => setRating(pos)}
        />
        <Text accessibilityLiveRegion="polite" accessibilityLabel={`Rating selected ${rating} out of 5`}>{rating}/5 (200)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
  },
});

export default App;
