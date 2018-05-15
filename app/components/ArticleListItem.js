import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, StyleSheet, Text, View
} from 'react-native'

class ArticleListItem extends React.Component {
  onHandlePress = () => {
    const { url, onHandlePress } = this.props
    onHandlePress('Article', { url })
  }

  render() {
    const { time, by, title, onHandlePress, url } = this.props
    return (
      <TouchableOpacity
        onPress={this.onHandlePress}
        style={styles.item}
        >
        <View style={styles.metaHeader}>
          <Text style={styles.metaText}>{time}</Text>
          <Text style={styles.metaText}>{by}</Text>
        </View>
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  }
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onHandlePress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#000',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15
  },
  metaHeader: {
    flexDirection: 'row', // 'column'
    // 'flex-start', 'flex-end', 'center', 'space-around':
    justifyContent: 'space-between',
    marginBottom: 10
  },
  metaText: {
    fontSize: 12
  }
})

export default ArticleListItem
